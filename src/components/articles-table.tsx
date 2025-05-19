
import { 
  IconChevronDown,
  IconSearch,
  IconFilter
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample data based on the image
const articlesData = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    created: "20 hours ago",
    status: "published"
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    created: "21 hours ago",
    status: "published"
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    created: "a day ago",
    status: "published"
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    created: "1 Oct, 24",
    status: "published"
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1783,
    created: "---",
    status: "draft"
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    created: "---",
    status: "draft"
  },
  {
    id: 7,
    title: "Backlinks 101: What are backlinks and why they're important (Free template)",
    keyword: "backlinks [1800]",
    words: 2261,
    created: "---",
    status: "draft"
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [850]",
    words: 1543,
    created: "---",
    status: "draft"
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
    status: "draft"
  }
]

export function ArticlesTable() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="grid grid-cols-4 md:w-auto md:inline-flex">
          <TabsTrigger value="generated">Generated Articles</TabsTrigger>
          <TabsTrigger value="published">Published Articles</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
          <TabsTrigger value="archived">Archived Articles</TabsTrigger>
        </TabsList>
        
        <div className="flex items-center justify-between my-4">
          <div className="relative w-full max-w-sm">
            <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for Title & Keywords..."
              className="pl-8 w-full"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <IconFilter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm">
                  Show 10
                  <IconChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Show 10</DropdownMenuItem>
                <DropdownMenuItem>Show 25</DropdownMenuItem>
                <DropdownMenuItem>Show 50</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <TabsContent value="generated" className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  </TableHead>
                  <TableHead>Article Title</TableHead>
                  <TableHead>Keyword [Traffic]</TableHead>
                  <TableHead className="text-right">Words</TableHead>
                  <TableHead>Created On</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Publish</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articlesData.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    </TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{article.keyword}</TableCell>
                    <TableCell className="text-right">{article.words}</TableCell>
                    <TableCell>{article.created}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        View
                      </Button>
                    </TableCell>
                    <TableCell>
                      {article.status === "published" ? (
                        <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                          Published
                        </Badge>
                      ) : (
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                          •
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-between mt-4 border-t pt-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Total 9 Article Titles</span>
              <span className="mx-1">|</span>
              <span>Show</span>
              <div className="relative inline-block mx-1">
                <select className="appearance-none bg-background border rounded px-3 py-1 text-sm pr-7">
                  <option>10</option>
                </select>
                <IconChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>
              <span>entries per page</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">
                <span className="px-1.5 py-0.5 border rounded">1</span>
                <span className="mx-1">/</span>
                <span>1</span>
              </span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="published">
          <div className="h-48 flex items-center justify-center border rounded-md">
            <p className="text-muted-foreground">Published articles will appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="scheduled">
          <div className="h-48 flex items-center justify-center border rounded-md">
            <p className="text-muted-foreground">Scheduled articles will appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="archived">
          <div className="h-48 flex items-center justify-center border rounded-md">
            <p className="text-muted-foreground">Archived articles will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 