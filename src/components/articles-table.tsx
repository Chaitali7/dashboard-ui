import { 
  IconChevronDown,
  IconSearch,
  IconFilter,
  IconDotsVertical
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
import { useIsMobile } from "@/hooks/use-mobile"
import { useLoading, TableRowSkeleton, SkeletonText } from "@/components/loading"
import { useEffect } from "react"

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

// Simulate a data fetching function
const fetchArticles = () => {
  return new Promise<typeof articlesData>((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(articlesData);
    }, 1500);
  });
};

export function ArticlesTable() {
  const isMobile = useIsMobile();
  const { isLoading, showLoading, hideLoading } = useLoading();
  
  // Fetch data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        showLoading();
        await fetchArticles();
      } finally {
        hideLoading();
      }
    };
    
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="space-y-4">
      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="truncate flex flex-row w-full text-xs sm:text-base">
          <TabsTrigger value="generated">Generated</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-4">
          <div className="relative w-full sm:max-w-sm">
            <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 w-full"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="w-full sm:w-auto" disabled={isLoading}>
              <IconFilter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="w-full sm:w-auto" disabled={isLoading}>
                  Show {isMobile ? "" : "10"}
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
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                  </TableHead>
                  <TableHead>Article Title</TableHead>
                  {!isMobile && <TableHead>Keyword [Traffic]</TableHead>}
                  {!isMobile && <TableHead className="text-right">Words</TableHead>}
                  {!isMobile && <TableHead>Created On</TableHead>}
                  <TableHead>Action</TableHead>
                  {!isMobile && <TableHead>Publish</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRowSkeleton isMobile={isMobile} rows={5} />
                ) : (
                  articlesData.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        <input 
                          type="checkbox" 
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium truncate max-w-[200px] sm:max-w-[300px] md:max-w-none">
                            {article.title}
                          </div>
                          {isMobile && (
                            <div className="text-sm text-muted-foreground mt-1">
                              {article.words} words · {article.created}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      {!isMobile && <TableCell>{article.keyword}</TableCell>}
                      {!isMobile && <TableCell className="text-right">{article.words}</TableCell>}
                      {!isMobile && <TableCell>{article.created}</TableCell>}
                      <TableCell>
                        {isMobile ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <IconDotsVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Publish</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            View
                          </Button>
                        )}
                      </TableCell>
                      {!isMobile && (
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
                      )}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-4 border-t pt-4">
            <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              {isLoading ? (
                <SkeletonText width="w-40" />
              ) : (
                <>
                  <span>Total 9 Article Titles</span>
                  <span className="mx-1 hidden sm:inline">|</span>
                  <span className="hidden sm:inline">Show</span>
                  <div className="relative inline-block mx-1 hidden sm:inline-block">
                    <select className="appearance-none bg-background border rounded px-3 py-1 text-sm pr-7" disabled={isLoading}>
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                    <IconChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
                  </div>
                  <span className="hidden sm:inline">entries per page</span>
                </>
              )}
            </div>
            
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
              {isLoading ? (
                <div className="flex items-center gap-4">
                  <SkeletonText width="w-16" />
                  <div className="flex gap-1">
                    <SkeletonText width="w-20" height="h-8" />
                    <SkeletonText width="w-16" height="h-8" />
                  </div>
                </div>
              ) : (
                <>
                  <span className="text-sm text-muted-foreground">
                    <span className="px-1.5 py-0.5 border rounded bg-blue-50 text-blue-600 border-blue-200">1</span>
                    <span className="mx-1">/</span>
                    <span>1</span>
                  </span>
                  <div className="flex items-center gap-1 ml-2">
                    <Button variant="outline" size="sm" disabled className="h-8 px-2 text-xs sm:text-sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" disabled className="h-8 px-2 text-xs sm:text-sm">
                      Next
                    </Button>
                  </div>
                </>
              )}
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