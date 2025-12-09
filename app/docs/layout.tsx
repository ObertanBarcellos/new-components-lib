import { Header } from "@/components/docs/header"
import { Sidebar } from "@/components/docs/sidebar"
import { ContentTransition } from "@/components/docs/content-transition"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 pt-16">
          <div 
            className="container mx-auto px-8 py-8 max-w-5xl"
            style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
          >
            <ContentTransition>
              {children}
            </ContentTransition>
          </div>
        </main>
      </div>
    </div>
  )
}

