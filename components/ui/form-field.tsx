import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormFieldProps {
  label?: string
  error?: string | boolean
  description?: string
  required?: boolean
  children: React.ReactNode
  className?: string
  htmlFor?: string
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, description, required, children, className, htmlFor, ...props }, ref) => {
    const errorMessage = typeof error === "string" ? error : error ? "Este campo é obrigatório" : undefined
    const hasError = !!error

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <label
            htmlFor={htmlFor}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              hasError && "text-destructive"
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        {description && !hasError && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<any>, {
              error: hasError,
              id: htmlFor,
              "aria-describedby": description || errorMessage ? `${htmlFor || "field"}-description` : undefined,
              "aria-invalid": hasError,
            })
          : children}
        {errorMessage && (
          <p
            id={htmlFor ? `${htmlFor}-error` : "field-error"}
            className="text-sm font-medium text-destructive"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }

