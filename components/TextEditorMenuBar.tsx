import {
  RiBold,
  RiItalic,
  RiCodeSSlashLine,
  RiListOrdered2,
} from "react-icons/ri";
import { Editor } from "@tiptap/react";
import { AiOutlineRedo, AiOutlineUndo } from "react-icons/ai";
import { BsTypeUnderline } from "react-icons/bs";
import { IoListOutline } from "react-icons/io5";
import { FiAlignLeft } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Button = ({
  onClick,
  isActive,
  disabled,
  children,
}: {
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`p-2 ${isActive ? "rounded-md bg-violet-500 text-white" : ""}`}
  >
    {children}
  </button>
);

export default function TextEditorMenuBar({
  editor,
  addImage,
}: {
  editor: Editor | null;
  addImage: () => void;
}) {
  const [fontSize, setFontSize] = useState("16px");
  const sizes = [
    "8px",
    "10px",
    "12px",
    "13px",
    "14px",
    "15px",
    "16px",
    "18px",
    "20px",
    "24px",
    "28px",
    "32px",
    "36px",
    "40px",
    "48px",
    "56px",
    "64px",
  ];
  if (!editor) return null;
  const buttons = [
    {
      icon: <RiBold className="size-5" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      icon: <BsTypeUnderline className="size-5" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive("underline"),
    },
    {
      icon: <RiItalic className="size-5" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
    },
    {
      icon: (
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            {fontSize}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {sizes.map((size) => (
              <DropdownMenuItem
                key={size}
                onClick={() => {
                  setFontSize(size);
                  editor.chain().focus().setFontSize(size).run();
                }}
              >
                {size}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
    {
      icon: <RiCodeSSlashLine className="size-5" />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive("code"),
      disabled: !editor.can().chain().focus().toggleCode().run(),
    },
    {
      icon: <IoListOutline className="size-5" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: <RiListOrdered2 className="size-5" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
      disabled: !editor.can().chain().focus().toggleOrderedList().run(),
    },
    {
      icon: <AiOutlineUndo className="size-5" />,
      onClick: () => editor.chain().focus().undo().run(),
      isActive: editor.isActive("undo"),
      disabled: !editor.can().chain().focus().undo().run(),
    },
    {
      icon: <AiOutlineRedo className="size-5" />,
      onClick: () => editor.chain().focus().redo().run(),
      isActive: editor.isActive("redo"),
      disabled: !editor.can().chain().focus().redo().run(),
    },
    {
      icon: <FiAlignLeft className="size-5" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <FiAlignCenter className="size-5" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <FiAlignRight className="size-5" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <FiAlignJustify className="size-5" />,
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
      isActive: editor.isActive({ textAlign: "justify" }),
    },
    {
      icon: <FiImage className="size-5" />,
      onClick: addImage,
      isActive: false,
    },
  ];

  return (
    <div className="mb-2 flex flex-wrap space-x-2">
      {buttons.map(({ icon, onClick, isActive, disabled }, index) => (
        <Button
          key={index}
          onClick={() => onClick?.() ?? undefined}
          isActive={!!isActive}
          disabled={disabled}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
}
