import { notFound } from "next/navigation"
import { getComponentById, getAllComponents } from "@/lib/docs/components"
import { ComponentPageContent } from "@/components/docs/component-page-content"

export async function generateStaticParams() {
  const components = getAllComponents()
  return components.map((component) => ({
    component: component.id,
  }))
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ component: string }>
}) {
  const { component: componentId } = await params
  const component = getComponentById(componentId)

  if (!component) {
    notFound()
  }

  return <ComponentPageContent component={component} />
}

