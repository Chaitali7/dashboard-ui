import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import './App.css'
import { ArticlesTable } from './components/articles-table.tsx'
import { useIsMobile } from './hooks/use-mobile'
import { LoadingProvider } from './components/loading'

function App() {
  const isMobile = useIsMobile()
  
  return (
    <LoadingProvider>
      <div className="app-container">
        <SidebarProvider defaultOpen={!isMobile}>
          {isMobile && <SidebarTrigger className="fixed bottom-4 right-4 z-50" />}
          <AppSidebar />
          <main className="flex-1 overflow-auto">
            <div className="p-4 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Articles</h1>
              <ArticlesTable />
            </div>
          </main>
        </SidebarProvider>
      </div>
    </LoadingProvider>
  )
}

export default App
