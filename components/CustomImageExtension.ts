import { Image } from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { ImageNode } from "./ImageNode";

export const CustomImageExtension = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      uploadImageHandler: {
        default: undefined,
        renderHTML: () => ({}),
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: "img[src]",
      },
    ];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ImageNode);
  },
});
