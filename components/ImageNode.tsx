import React, { useEffect, useState } from "react";
import { NodeViewProps } from "@tiptap/core";
import { NodeViewWrapper } from "@tiptap/react";

interface ImageAttributes {
  src: string;
  alt?: string;
  title?: string;
  uploadImageHandler?: () => Promise<string>;
}

export const ImageNode: React.FC<NodeViewProps> = (props) => {
  const { node, updateAttributes } = props;
  const { src, alt, title, uploadImageHandler } = node.attrs as ImageAttributes;
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    if (uploadImageHandler && src?.startsWith("data") && !isUploading) {
      setIsUploading(true);
      uploadImageHandler().then((imgUrl) => {
        updateAttributes({ src: imgUrl });
        setIsUploading(false);
      });
    }
  }, [uploadImageHandler, src, isUploading, updateAttributes]);

  return (
    <NodeViewWrapper>
      <figure>
        <img
          src={src}
          alt={alt}
          title={title}
          style={{ opacity: isUploading ? 0.5 : 1 }}
        />
        {isUploading && <div>Uploading...</div>}
        {title && <figcaption>{title}</figcaption>}
      </figure>
    </NodeViewWrapper>
  );
};
