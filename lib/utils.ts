import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converte uma cor em formato string para valores RGB
 * Suporta: hex (#fff, #ffffff), rgb/rgba, hsl/hsla, e nomes de cores CSS
 */
function parseColor(color: string): { r: number; g: number; b: number } | null {
  if (!color) return null

  // Remove espaços
  color = color.trim()

  // Hex colors (#fff, #ffffff)
  if (color.startsWith("#")) {
    const hex = color.slice(1)
    if (hex.length === 3) {
      return {
        r: parseInt(hex[0] + hex[0], 16),
        g: parseInt(hex[1] + hex[1], 16),
        b: parseInt(hex[2] + hex[2], 16),
      }
    }
    if (hex.length === 6) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
      }
    }
  }

  // RGB/RGBA colors
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10),
    }
  }

  // HSL/HSLA colors
  const hslMatch = color.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/)
  if (hslMatch) {
    const h = parseInt(hslMatch[1], 10) / 360
    const s = parseInt(hslMatch[2], 10) / 100
    const l = parseInt(hslMatch[3], 10) / 100

    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs(((h * 6) % 2) - 1))
    const m = l - c / 2

    let r = 0, g = 0, b = 0

    if (h < 1 / 6) {
      r = c
      g = x
      b = 0
    } else if (h < 2 / 6) {
      r = x
      g = c
      b = 0
    } else if (h < 3 / 6) {
      r = 0
      g = c
      b = x
    } else if (h < 4 / 6) {
      r = 0
      g = x
      b = c
    } else if (h < 5 / 6) {
      r = x
      g = 0
      b = c
    } else {
      r = c
      g = 0
      b = x
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    }
  }

  // CSS named colors (mapping básico)
  const namedColors: Record<string, { r: number; g: number; b: number }> = {
    black: { r: 0, g: 0, b: 0 },
    white: { r: 255, g: 255, b: 255 },
    red: { r: 255, g: 0, b: 0 },
    green: { r: 0, g: 128, b: 0 },
    blue: { r: 0, g: 0, b: 255 },
    yellow: { r: 255, g: 255, b: 0 },
    cyan: { r: 0, g: 255, b: 255 },
    magenta: { r: 255, g: 0, b: 255 },
    gray: { r: 128, g: 128, b: 128 },
    grey: { r: 128, g: 128, b: 128 },
  }

  if (namedColors[color.toLowerCase()]) {
    return namedColors[color.toLowerCase()]
  }

  return null
}

/**
 * Calcula a luminância relativa de uma cor usando a fórmula WCAG
 * Retorna um valor entre 0 (preto) e 1 (branco)
 */
function getLuminance(color: string): number {
  const rgb = parseColor(color)
  if (!rgb) return 0.5 // Default para cores não reconhecidas

  // Normaliza os valores RGB para 0-1
  const [r, g, b] = [rgb.r / 255, rgb.g / 255, rgb.b / 255].map((val) => {
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  })

  // Fórmula WCAG para luminância relativa
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * Determina se uma cor é clara ou escura baseado na luminância
 * @param color - Cor em qualquer formato (hex, rgb, hsl, nome CSS)
 * @param threshold - Limiar para determinar claro/escuro (padrão: 0.5)
 * @returns true se a cor for clara, false se for escura
 */
export function isLightColor(color: string, threshold: number = 0.5): boolean {
  if (!color) return true
  return getLuminance(color) > threshold
}

/**
 * Retorna a cor de texto apropriada (preto ou branco) baseado na cor de fundo
 * @param backgroundColor - Cor de fundo em qualquer formato
 * @param lightText - Cor para usar quando o fundo é escuro (padrão: "#ffffff")
 * @param darkText - Cor para usar quando o fundo é claro (padrão: "#000000")
 * @returns Cor de texto apropriada
 */
export function getContrastTextColor(
  backgroundColor: string,
  lightText: string = "#ffffff",
  darkText: string = "#000000"
): string {
  if (!backgroundColor) return darkText
  return isLightColor(backgroundColor) ? darkText : lightText
}

/**
 * Converte uma cor hexadecimal para valores RGB
 * @param hex - Cor em formato hexadecimal (#fff, #ffffff, ou fff, ffffff)
 * @returns Objeto com valores r, g, b ou null se inválido
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  return parseColor(hex)
}

/**
 * Converte valores RGB para hexadecimal
 * @param r - Valor de vermelho (0-255)
 * @param g - Valor de verde (0-255)
 * @param b - Valor de azul (0-255)
 * @returns String hexadecimal no formato #RRGGBB
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Formata valores RGBA como string
 * @param r - Valor de vermelho (0-255)
 * @param g - Valor de verde (0-255)
 * @param b - Valor de azul (0-255)
 * @param a - Valor de opacidade (0-1)
 * @returns String no formato rgba(r, g, b, a)
 */
export function rgbaToString(r: number, g: number, b: number, a: number = 1): string {
  const clampedA = Math.max(0, Math.min(1, a))
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${clampedA})`
}

/**
 * Extrai valores RGBA de uma string de cor
 * @param color - Cor em formato hex, rgb ou rgba
 * @returns Objeto com valores r, g, b, a ou null se inválido
 */
export function parseRgba(color: string): { r: number; g: number; b: number; a: number } | null {
  if (!color) return null

  const trimmed = color.trim()

  // Hex colors (#fff, #ffffff, #ffffffff)
  if (trimmed.startsWith("#")) {
    const hex = trimmed.slice(1)
    let r = 0, g = 0, b = 0, a = 1

    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16)
      g = parseInt(hex[1] + hex[1], 16)
      b = parseInt(hex[2] + hex[2], 16)
    } else if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16)
      g = parseInt(hex.slice(2, 4), 16)
      b = parseInt(hex.slice(4, 6), 16)
    } else if (hex.length === 8) {
      r = parseInt(hex.slice(0, 2), 16)
      g = parseInt(hex.slice(2, 4), 16)
      b = parseInt(hex.slice(4, 6), 16)
      a = parseInt(hex.slice(6, 8), 16) / 255
    } else {
      return null
    }

    return { r, g, b, a }
  }

  // RGB/RGBA colors
  const rgbaMatch = trimmed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
  if (rgbaMatch) {
    return {
      r: parseInt(rgbaMatch[1], 10),
      g: parseInt(rgbaMatch[2], 10),
      b: parseInt(rgbaMatch[3], 10),
      a: rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1,
    }
  }

  // Fallback para parseColor
  const rgb = parseColor(trimmed)
  if (rgb) {
    return { ...rgb, a: 1 }
  }

  return null
}

/**
 * Converte RGB para HSL
 * @param r - Valor de vermelho (0-255)
 * @param g - Valor de verde (0-255)
 * @param b - Valor de azul (0-255)
 * @returns Objeto com valores h, s, l (0-360, 0-100, 0-100)
 */
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

/**
 * Converte HSL para RGB
 * @param h - Matiz (0-360)
 * @param s - Saturação (0-100)
 * @param l - Luminosidade (0-100)
 * @returns Objeto com valores r, g, b (0-255)
 */
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360
  s /= 100
  l /= 100

  let r = 0, g = 0, b = 0

  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

