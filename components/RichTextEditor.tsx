import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextEditorMenuBar from "./TextEditorMenuBar";
import TextAlign from "@tiptap/extension-text-align";
import ImageResize from 'tiptap-extension-resize-image';
import Image from "@tiptap/extension-image";
import FileHandler from "@tiptap-pro/extension-file-handler";
import { CustomImageExtension } from "./CustomImageExtension";
import { useEffect } from "react";
import { FontSize } from "./FontSize";
import TextStyle from "@tiptap/extension-text-style";

type TextEditorProps = {
  onChange: (content: string) => void;
  initialContent?: string; // Add this line
};

export default function RichTextEditor({
  onChange,
  initialContent,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({ inline: true, allowBase64: true }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      FontSize,
      CustomImageExtension,

      ImageResize.configure({
        allowBase64: true,
      }),
      FileHandler.configure({
        allowedMimeTypes: [
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/webp",
        ],
        onDrop: (currentEditor, files, pos) => {
          files.forEach((file) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(pos, {
                  type: "image",
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run();
            };
          });
        },
        onPaste: (currentEditor, files, htmlContent) => {
          files.forEach((file) => {
            if (htmlContent) {
              // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
              // you could extract the pasted file from this url string and upload it to a server for example
              console.log(htmlContent); // eslint-disable-line no-console
              return false;
            }

            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(currentEditor.state.selection.anchor, {
                  type: "image",
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run();
            };
          });
        },
      }),
    ],
    content: initialContent,

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[150px] cursor-text rounded-md border p-5 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ",
      },
    },
    immediatelyRender: false,
  });
  useEffect(() => {
    if (editor && initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent]);
  const addImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e: ProgressEvent<FileReader>) => {
          const result = e.target?.result;
          if (typeof result === "string") {
            editor?.commands.setImage({
              src: result,
              alt: file.name,
              title: file.name,
            });
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  if (!editor) {
    return null;
  }

  return (
    <div>
      <TextEditorMenuBar editor={editor} addImage={addImage} />
      <EditorContent editor={editor} />
    </div>
  );
}
