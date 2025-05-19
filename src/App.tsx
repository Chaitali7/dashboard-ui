import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider } from './components/ui/sidebar'
import './App.css'
import { ArticlesTable } from './components/articles-table.tsx'

function App() {
  return (
    <div className="app-container">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar className='!w-1/5'/>
        <main className="flex-1 overflow-auto">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold mb-6">Articles</h1>
            <ArticlesTable />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default App
