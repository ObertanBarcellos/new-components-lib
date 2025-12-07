import Fuse from "fuse.js"
import { ComponentMetadata, getAllComponents } from "./components"

const components = getAllComponents()

const fuseOptions = {
  keys: [
    { name: "name", weight: 0.7 },
    { name: "description", weight: 0.3 },
    { name: "category", weight: 0.2 },
  ],
  threshold: 0.3,
  includeScore: true,
}

const fuse = new Fuse(components, fuseOptions)

export function searchComponents(query: string): ComponentMetadata[] {
  if (!query.trim()) {
    return components
  }

  const results = fuse.search(query)
  return results.map((result) => result.item)
}

export function getSearchSuggestions(query: string, limit: number = 5): ComponentMetadata[] {
  if (!query.trim()) {
    return components.slice(0, limit)
  }

  const results = fuse.search(query, { limit })
  return results.map((result) => result.item)
}

