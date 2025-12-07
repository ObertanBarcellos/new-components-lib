import { getAllComponents, categories } from "@/lib/docs/components"
import { DocsHomeContent } from "@/components/docs/docs-home-content"

export default function DocsHomePage() {
  const components = getAllComponents()

  return <DocsHomeContent components={components} categories={categories} />
}

