"use client"

import * as React from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Undo,
  Redo,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface RichTextEditorProps {
  value?: string
  defaultValue?: string
  onChange?: (html: string) => void
  placeholder?: string
  editable?: boolean
  className?: string
  showToolbar?: boolean
  toolbarClassName?: string
  contentClassName?: string
  minHeight?: string
  maxHeight?: string
  minWidth?: string
}

const RichTextEditor = React.forwardRef<HTMLDivElement, RichTextEditorProps>(
  (
    {
      value: controlledValue,
      defaultValue = "",
      onChange,
      placeholder = "Comece a escrever...",
      editable = true,
      className,
      showToolbar = true,
      toolbarClassName,
      contentClassName,
      minHeight = "200px",
      maxHeight,
      minWidth = "200px",
      ...props
    },
    ref
  ) => {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
      setIsMounted(true)
    }, [])

    const editor = useEditor(
      {
        extensions: [
          StarterKit.configure({
            heading: {
              levels: [1, 2, 3],
            },
          }),
          Link.configure({
            openOnClick: false,
            HTMLAttributes: {
              class: "text-primary underline",
            },
          }),
          Placeholder.configure({
            placeholder,
          }),
        ],
        content: controlledValue !== undefined ? controlledValue : defaultValue || "",
        editable,
        immediatelyRender: false,
        autofocus: false,
        onUpdate: ({ editor }) => {
          onChange?.(editor.getHTML())
        },
      },
      [isMounted]
    )

    const setLink = React.useCallback(() => {
      if (!editor) return
      const previousUrl = editor.getAttributes("link").href
      const url = window.prompt("URL", previousUrl)

      if (url === null) {
        return
      }

      if (url === "") {
        editor.chain().focus().extendMarkRange("link").unsetLink().run()
        return
      }

      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
    }, [editor])

    React.useEffect(() => {
      if (editor && controlledValue !== undefined && editor.getHTML() !== controlledValue) {
        const isFocused = editor.isFocused
        editor.commands.setContent(controlledValue, false)
        if (isFocused) {
          editor.commands.focus()
        }
      }
    }, [controlledValue, editor])

    if (!isMounted || !editor) {
      return (
        <div
          ref={ref}
          className={cn("border rounded-lg overflow-hidden", className)}
          style={{
            minHeight,
            maxHeight,
            minWidth,
            padding: "1rem",
          }}
          {...props}
        >
          <div className="text-muted-foreground text-sm">{placeholder}</div>
        </div>
      )
    }

    return (
      <div 
        ref={ref} 
        className={cn("border rounded-lg overflow-hidden", className)} 
        style={{ minWidth }}
        {...props}
      >
        {showToolbar && editable && (
          <div
            className={cn(
              "flex flex-wrap items-center gap-1 border-b bg-muted/50 p-2",
              toolbarClassName
            )}
          >
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={cn(editor.isActive("bold") && "bg-accent")}
              aria-label="Bold"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className={cn(editor.isActive("italic") && "bg-accent")}
              aria-label="Italic"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editor.can().chain().focus().toggleStrike().run()}
              className={cn(editor.isActive("strike") && "bg-accent")}
              aria-label="Strikethrough"
            >
              <Underline className="h-4 w-4" />
            </Button>
            <div className="h-6 w-px bg-border mx-1" />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={cn(editor.isActive("heading", { level: 1 }) && "bg-accent")}
              aria-label="Heading 1"
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={cn(editor.isActive("heading", { level: 2 }) && "bg-accent")}
              aria-label="Heading 2"
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={cn(editor.isActive("heading", { level: 3 }) && "bg-accent")}
              aria-label="Heading 3"
            >
              <Heading3 className="h-4 w-4" />
            </Button>
            <div className="h-6 w-px bg-border mx-1" />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={cn(editor.isActive("bulletList") && "bg-accent")}
              aria-label="Bullet List"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={cn(editor.isActive("orderedList") && "bg-accent")}
              aria-label="Ordered List"
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <div className="h-6 w-px bg-border mx-1" />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={setLink}
              className={cn(editor.isActive("link") && "bg-accent")}
              aria-label="Link"
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
            <div className="h-6 w-px bg-border mx-1" />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().chain().focus().undo().run()}
              aria-label="Undo"
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().chain().focus().redo().run()}
              aria-label="Redo"
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div style={{ minWidth }}>
          <EditorContent
            editor={editor}
            className={cn(
              "prose prose-sm dark:prose-invert max-w-none focus:outline-none [&_p]:my-2 [&_ul]:my-2 [&_ol]:my-2 [&_h1]:my-4 [&_h2]:my-3 [&_h3]:my-2 [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[inherit]",
              contentClassName
            )}
            style={{
              minHeight,
              maxHeight,
              overflowY: maxHeight ? "auto" : "visible",
              padding: "1rem",
            }}
          />
        </div>
      </div>
    )
  }
)
RichTextEditor.displayName = "RichTextEditor"

export { RichTextEditor }

