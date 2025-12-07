"use client"

import * as React from "react"
import { Upload, X, File, Loader2, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface FileUploadFile {
  file: File
  id: string
  preview?: string
  progress?: number
  status?: "pending" | "uploading" | "success" | "error"
}

export interface FileUploadProps {
  value?: FileUploadFile[]
  onValueChange?: (files: FileUploadFile[]) => void
  accept?: string
  maxSize?: number // in bytes
  maxFiles?: number
  multiple?: boolean
  disabled?: boolean
  className?: string
  onUpload?: (files: File[]) => Promise<void> | void
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      value: controlledValue,
      onValueChange,
      accept,
      maxSize,
      maxFiles,
      multiple = false,
      disabled = false,
      className,
      onUpload,
      ...props
    },
    ref
  ) => {
    const [internalFiles, setInternalFiles] = React.useState<FileUploadFile[]>([])
    const [isDragging, setIsDragging] = React.useState(false)
    const [isUploading, setIsUploading] = React.useState(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)
    const isControlled = controlledValue !== undefined
    const files = isControlled ? controlledValue : internalFiles

    const updateFiles = React.useCallback(
      (newFiles: FileUploadFile[]) => {
        if (!isControlled) {
          setInternalFiles(newFiles)
        }
        onValueChange?.(newFiles)
      },
      [isControlled, onValueChange]
    )

    const validateFile = (file: File): string | null => {
      if (maxSize && file.size > maxSize) {
        return `Arquivo muito grande. Tamanho máximo: ${formatFileSize(maxSize)}`
      }
      if (accept) {
        const acceptedTypes = accept.split(",").map((type) => type.trim())
        const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()
        const fileType = file.type

        const isAccepted = acceptedTypes.some((type) => {
          if (type.startsWith(".")) {
            return fileExtension === type.toLowerCase()
          }
          return fileType.match(type.replace("*", ".*"))
        })

        if (!isAccepted) {
          return `Tipo de arquivo não permitido. Tipos aceitos: ${accept}`
        }
      }
      return null
    }

    const createFileObject = (file: File): FileUploadFile => {
      const id = Math.random().toString(36).substring(7)
      const preview = file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined

      return {
        file,
        id,
        preview,
        status: "pending",
      }
    }

    const handleFiles = React.useCallback(
      async (newFiles: FileList | File[]) => {
        const fileArray = Array.from(newFiles)
        const validFiles: FileUploadFile[] = []

        for (const file of fileArray) {
          const error = validateFile(file)
          if (error) {
            console.warn(error)
            continue
          }

          if (maxFiles && files.length + validFiles.length >= maxFiles) {
            break
          }

          validFiles.push(createFileObject(file))
        }

        if (validFiles.length === 0) return

        const updatedFiles = multiple ? [...files, ...validFiles] : validFiles
        updateFiles(updatedFiles)

        if (onUpload) {
          setIsUploading(true)
          try {
            await onUpload(validFiles.map((f) => f.file))
            const successFiles = updatedFiles.map((f) =>
              validFiles.some((vf) => vf.id === f.id) ? { ...f, status: "success" as const } : f
            )
            updateFiles(successFiles)
          } catch (error) {
            const errorFiles = updatedFiles.map((f) =>
              validFiles.some((vf) => vf.id === f.id) ? { ...f, status: "error" as const } : f
            )
            updateFiles(errorFiles)
          } finally {
            setIsUploading(false)
          }
        }
      },
      [files, multiple, maxFiles, updateFiles, onUpload]
    )

    const handleDrop = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)

        if (disabled) return

        const droppedFiles = e.dataTransfer.files
        if (droppedFiles.length > 0) {
          handleFiles(droppedFiles)
        }
      },
      [disabled, handleFiles]
    )

    const handleDragOver = React.useCallback((e: React.DragEvent) => {
      e.preventDefault()
      if (!disabled) {
        setIsDragging(true)
      }
    }, [disabled])

    const handleDragLeave = React.useCallback(() => {
      setIsDragging(false)
    }, [])

    const handleFileInput = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files
        if (selectedFiles && selectedFiles.length > 0) {
          handleFiles(selectedFiles)
        }
        // Reset input to allow selecting the same file again
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      },
      [handleFiles]
    )

    const removeFile = React.useCallback(
      (id: string) => {
        const updatedFiles = files.filter((f) => f.id !== id)
        // Clean up preview URLs
        const removedFile = files.find((f) => f.id === id)
        if (removedFile?.preview) {
          URL.revokeObjectURL(removedFile.preview)
        }
        updateFiles(updatedFiles)
      },
      [files, updateFiles]
    )

    React.useEffect(() => {
      return () => {
        // Clean up preview URLs on unmount
        files.forEach((f) => {
          if (f.preview) {
            URL.revokeObjectURL(f.preview)
          }
        })
      }
    }, [files])

    const formatFileSize = (bytes: number): string => {
      if (bytes === 0) return "0 Bytes"
      const k = 1024
      const sizes = ["Bytes", "KB", "MB", "GB"]
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i]
    }

    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            "relative border-2 border-dashed rounded-lg p-8 transition-colors duration-200",
            "flex flex-col items-center justify-center gap-4",
            isDragging && "border-primary bg-primary/5",
            !isDragging && "border-input/60 hover:border-input",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleFileInput}
            className="hidden"
          />
          <Upload className={cn("h-10 w-10 text-muted-foreground", isDragging && "text-primary")} />
          <div className="text-center space-y-2">
            <p className="text-sm font-medium">
              {isDragging ? "Solte os arquivos aqui" : "Arraste arquivos aqui ou clique para selecionar"}
            </p>
            <p className="text-xs text-muted-foreground">
              {accept && `Tipos aceitos: ${accept}`}
              {maxSize && ` • Tamanho máximo: ${formatFileSize(maxSize)}`}
              {maxFiles && ` • Máximo de ${maxFiles} arquivo(s)`}
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={disabled}
            onClick={() => fileInputRef.current?.click()}
          >
            Selecionar arquivos
          </Button>
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((fileItem) => (
              <div
                key={fileItem.id}
                className="flex items-center gap-3 p-3 border rounded-lg bg-background"
              >
                {fileItem.preview ? (
                  <img
                    src={fileItem.preview}
                    alt={fileItem.file.name}
                    className="h-10 w-10 object-cover rounded"
                  />
                ) : (
                  <div className="h-10 w-10 flex items-center justify-center bg-muted rounded">
                    <File className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{fileItem.file.name}</p>
                  <p className="text-xs text-muted-foreground">{formatFileSize(fileItem.file.size)}</p>
                </div>
                <div className="flex items-center gap-2">
                  {fileItem.status === "uploading" && (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  )}
                  {fileItem.status === "success" && (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  )}
                  {fileItem.status === "error" && (
                    <span className="text-xs text-destructive">Erro</span>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => removeFile(fileItem.id)}
                    disabled={disabled || fileItem.status === "uploading"}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)
FileUpload.displayName = "FileUpload"

export { FileUpload }

