import { cn } from "@/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  customColor?: string
}

function Skeleton({
  className,
  customColor,
  ...props
}: SkeletonProps) {
  const colorStyles = React.useMemo(() => {
    if (!customColor) return {}
    return {
      backgroundColor: `${customColor}20`,
    } as React.CSSProperties
  }, [customColor])

  return (
    <div
      style={colorStyles}
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
