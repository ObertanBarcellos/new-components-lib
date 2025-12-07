"use client"

import * as React from "react"
import { Popover, PopoverTrigger, PopoverContent } from "./popover"
import { Input } from "./input"
import { cn } from "@/lib/utils"
import {
  hexToRgb,
  rgbToHex,
  rgbaToString,
  parseRgba,
  rgbToHsl,
  hslToRgb,
} from "@/lib/utils"

export interface ColorPickerProps {
  value?: string
  onChange?: (color: string) => void
  format?: "hex" | "rgb" | "rgba"
  showAlpha?: boolean
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  className?: string
}

const sizeClasses = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
}

const ColorPicker = React.forwardRef<HTMLButtonElement, ColorPickerProps>(
  (
    {
      value = "#000000",
      onChange,
      format = "hex",
      showAlpha = false,
      size = "md",
      disabled = false,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const [internalColor, setInternalColor] = React.useState(() => {
      const parsed = parseRgba(value)
      return parsed || { r: 0, g: 0, b: 0, a: 1 }
    })

    // Atualiza cor interna quando value externo muda
    React.useEffect(() => {
      const parsed = parseRgba(value)
      if (parsed) {
        setInternalColor(parsed)
      }
    }, [value])

    const hsl = React.useMemo(
      () => rgbToHsl(internalColor.r, internalColor.g, internalColor.b),
      [internalColor.r, internalColor.g, internalColor.b]
    )

    const updateColor = React.useCallback(
      (updates: Partial<typeof internalColor>) => {
        const newColor = { ...internalColor, ...updates }
        setInternalColor(newColor)

        let colorString = ""
        if (format === "hex") {
          if (showAlpha && newColor.a < 1) {
            const hex = rgbToHex(newColor.r, newColor.g, newColor.b)
            const alphaHex = Math.round(newColor.a * 255)
              .toString(16)
              .padStart(2, "0")
            colorString = `${hex}${alphaHex}`
          } else {
            colorString = rgbToHex(newColor.r, newColor.g, newColor.b)
          }
        } else if (format === "rgba" || (format === "rgb" && showAlpha)) {
          colorString = rgbaToString(
            newColor.r,
            newColor.g,
            newColor.b,
            newColor.a
          )
        } else {
          colorString = `rgb(${Math.round(newColor.r)}, ${Math.round(newColor.g)}, ${Math.round(newColor.b)})`
        }

        onChange?.(colorString)
      },
      [internalColor, format, showAlpha, onChange]
    )

    const handleHueChange = (hue: number) => {
      const rgb = hslToRgb(hue, hsl.s, hsl.l)
      updateColor({ r: rgb.r, g: rgb.g, b: rgb.b })
    }

    const handleSaturationBrightnessChange = (
      saturation: number,
      brightness: number
    ) => {
      const rgb = hslToRgb(hsl.h, saturation, brightness)
      updateColor({ r: rgb.r, g: rgb.g, b: rgb.b })
    }

    const handleAlphaChange = (alpha: number) => {
      updateColor({ a: alpha })
    }

    const handleHexChange = (hex: string) => {
      const parsed = parseRgba(hex)
      if (parsed) {
        updateColor(parsed)
      }
    }

    const handleRgbChange = (
      channel: "r" | "g" | "b",
      val: number
    ) => {
      updateColor({ [channel]: Math.max(0, Math.min(255, val)) })
    }

    const displayColor = React.useMemo(() => {
      return rgbaToString(
        internalColor.r,
        internalColor.g,
        internalColor.b,
        internalColor.a
      )
    }, [internalColor])

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              "inline-flex items-center justify-center rounded-md border-2 border-input/60 transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "hover:border-ring/50 hover:shadow-md",
              "disabled:cursor-not-allowed disabled:opacity-50",
              sizeClasses[size],
              className
            )}
            style={{
              backgroundColor: displayColor,
            }}
            aria-label="Selecionar cor"
          >
            <span className="sr-only">Selecionar cor</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4" align="start">
          <div className="space-y-4">
            {/* Saturation/Brightness Picker */}
            <div className="relative">
              <SaturationBrightnessPicker
                hue={hsl.h}
                saturation={hsl.s}
                brightness={hsl.l}
                onChange={handleSaturationBrightnessChange}
              />
            </div>

            {/* Hue Slider */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Matiz</label>
              <HueSlider value={hsl.h} onChange={handleHueChange} />
            </div>

            {/* Alpha Slider */}
            {showAlpha && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Opacidade</label>
                <AlphaSlider
                  color={rgbToHex(internalColor.r, internalColor.g, internalColor.b)}
                  value={internalColor.a}
                  onChange={handleAlphaChange}
                />
              </div>
            )}

            {/* Color Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Hexadecimal</label>
                <Input
                  value={rgbToHex(internalColor.r, internalColor.g, internalColor.b)}
                  onChange={(e) => handleHexChange(e.target.value)}
                  placeholder="#000000"
                  className="font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">RGB</label>
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    type="number"
                    min="0"
                    max="255"
                    value={Math.round(internalColor.r)}
                    onChange={(e) =>
                      handleRgbChange("r", parseInt(e.target.value) || 0)
                    }
                    className="text-sm"
                    placeholder="R"
                  />
                  <Input
                    type="number"
                    min="0"
                    max="255"
                    value={Math.round(internalColor.g)}
                    onChange={(e) =>
                      handleRgbChange("g", parseInt(e.target.value) || 0)
                    }
                    className="text-sm"
                    placeholder="G"
                  />
                  <Input
                    type="number"
                    min="0"
                    max="255"
                    value={Math.round(internalColor.b)}
                    onChange={(e) =>
                      handleRgbChange("b", parseInt(e.target.value) || 0)
                    }
                    className="text-sm"
                    placeholder="B"
                  />
                </div>
              </div>
            </div>

            {/* Alpha Input */}
            {showAlpha && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Opacidade (%)</label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={Math.round(internalColor.a * 100)}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0
                    handleAlphaChange(Math.max(0, Math.min(100, val)) / 100)
                  }}
                  className="text-sm"
                />
              </div>
            )}

            {/* Preview */}
            <div className="flex items-center gap-4 pt-2 border-t">
              <div
                className="size-12 rounded-md border-2 border-input shadow-sm"
                style={{ backgroundColor: displayColor }}
              />
              <div className="flex-1 space-y-1">
                <div className="text-xs text-muted-foreground">Cor selecionada</div>
                <div className="font-mono text-sm">
                  {format === "hex"
                    ? rgbToHex(internalColor.r, internalColor.g, internalColor.b)
                    : rgbaToString(
                        internalColor.r,
                        internalColor.g,
                        internalColor.b,
                        internalColor.a
                      )}
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  }
)
ColorPicker.displayName = "ColorPicker"

// Saturation/Brightness Picker Component
interface SaturationBrightnessPickerProps {
  hue: number
  saturation: number
  brightness: number
  onChange: (saturation: number, brightness: number) => void
}

const SaturationBrightnessPicker: React.FC<SaturationBrightnessPickerProps> = ({
  hue,
  saturation,
  brightness,
  onChange,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    handleMove(e)
  }

  const handleMove = (e: React.MouseEvent | MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left))
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top))

    const s = (x / rect.width) * 100
    const l = 100 - (y / rect.height) * 100

    onChange(s, l)
  }

  React.useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => handleMove(e)
    const handleMouseUp = () => setIsDragging(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, onChange])

  const hueColor = React.useMemo(() => {
    const rgb = hslToRgb(hue, 100, 50)
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }, [hue])

  const pointerX = (saturation / 100) * 100
  const pointerY = 100 - (brightness / 100) * 100

  return (
    <div
      ref={containerRef}
      className="relative h-48 w-full rounded-md cursor-crosshair overflow-hidden border border-input"
      style={{
        background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueColor})`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg pointer-events-none"
        style={{
          left: `${pointerX}%`,
          top: `${pointerY}%`,
        }}
      />
    </div>
  )
}

// Hue Slider Component
interface HueSliderProps {
  value: number
  onChange: (value: number) => void
}

const HueSlider: React.FC<HueSliderProps> = ({ value, onChange }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    handleMove(e)
  }

  const handleMove = (e: React.MouseEvent | MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left))
    const hue = (x / rect.width) * 360

    onChange(hue)
  }

  React.useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => handleMove(e)
    const handleMouseUp = () => setIsDragging(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, onChange])

  const pointerX = (value / 360) * 100

  return (
    <div
      ref={containerRef}
      className="relative h-4 w-full rounded-md cursor-pointer overflow-hidden border border-input"
      style={{
        background:
          "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)",
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute top-0 h-full w-1 -translate-x-1/2 bg-white border border-gray-300 shadow-md pointer-events-none"
        style={{
          left: `${pointerX}%`,
        }}
      />
    </div>
  )
}

// Alpha Slider Component
interface AlphaSliderProps {
  color: string
  value: number
  onChange: (value: number) => void
}

const AlphaSlider: React.FC<AlphaSliderProps> = ({
  color,
  value,
  onChange,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    handleMove(e)
  }

  const handleMove = (e: React.MouseEvent | MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left))
    const alpha = x / rect.width

    onChange(alpha)
  }

  React.useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => handleMove(e)
    const handleMouseUp = () => setIsDragging(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, onChange])

  const pointerX = value * 100

  return (
    <div
      ref={containerRef}
      className="relative h-4 w-full rounded-md cursor-pointer overflow-hidden border border-input"
      style={{
        background: `linear-gradient(to right, transparent, ${color})`,
        backgroundImage: `linear-gradient(to right, transparent, ${color}), repeating-conic-gradient(#808080 0% 25%, #fff 0% 50%) 50% / 8px 8px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute top-0 h-full w-1 -translate-x-1/2 bg-white border border-gray-300 shadow-md pointer-events-none"
        style={{
          left: `${pointerX}%`,
        }}
      />
    </div>
  )
}

export { ColorPicker }

