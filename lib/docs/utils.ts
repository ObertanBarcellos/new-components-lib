import { ComponentMetadata } from "./components"

export function formatComponentName(name: string): string {
  return name
}

export function getComponentSlug(component: ComponentMetadata): string {
  return component.id
}

export function getComponentPath(component: ComponentMetadata): string {
  return `/docs/${getComponentSlug(component)}`
}

export function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-")
}

