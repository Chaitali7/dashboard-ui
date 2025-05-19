import * as React from "react"
import {
  IconArticle,
  IconBrandAmazon,
  IconChevronDown,
  IconSettings,
  IconNotebook,
  IconLink,
  IconExternalLink,
  IconPuzzle,
  IconUsers,
  IconHelpCircle,
  IconBell,
  IconUserCircle,
  IconMenu2
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Avatar } from "./ui/avatar"
import { useIsMobile } from "@/hooks/use-mobile"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const isMobile = useIsMobile();
  
  return (
    <Sidebar 
      collapsible={isMobile ? "offcanvas" : "none"} 
      variant="sidebar" 
      {...props}
    >
      <SidebarHeader className="py-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-2"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold">abun</span>
                {isMobile && <IconMenu2 className="ml-auto h-5 w-5" />}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!py-1.5 !px-2 text-sm"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6 bg-purple-100">
                    <IconBrandAmazon className="h-4 w-4 text-purple-600" />
                  </Avatar>
                  <span>amazon.com</span>
                </div>
                <IconChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="pb-8">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={true}>
                <a href="#" className="flex items-center gap-2">
                  <IconArticle className="h-4 w-4" />
                  <span>Articles</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          
          <SidebarMenuSub>
            <SidebarMenuSubItem className="truncate">
              <SidebarMenuSubButton asChild>
                <a href="#">Create Article</a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton asChild>
                <a href="#">Generated Articles</a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem>
              <SidebarMenuSubButton asChild>
                <a href="#">Keyword Projects</a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem className="truncate">
              <SidebarMenuSubButton asChild>
                <a href="#">AI Keyword to Article</a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
            {!isMobile && (
              <>
                <SidebarMenuSubItem className="truncate">
                  <SidebarMenuSubButton asChild>
                    <a href="#">Steal Competitor Keyword</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem className="truncate">
                  <SidebarMenuSubButton asChild>
                    <a href="#">Import Keyword from GSC</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem className="truncate">
                  <SidebarMenuSubButton asChild>
                    <a href="#">Manual Keyword to Article</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem className="truncate">
                  <SidebarMenuSubButton asChild>
                    <a href="#">Bulk Keyword to Article</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem className="truncate">
                  <SidebarMenuSubButton asChild>
                    <a href="#">Longtail Keyword to Article</a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </>
            )}
            <SidebarMenuSubItem className="truncate">
              <SidebarMenuSubButton asChild>
                <a href="#">Article Settings</a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
            {isMobile && (
              <SidebarMenuSubItem className="truncate"  >
                <SidebarMenuSubButton asChild>
                  <a href="#" className="text-blue-600">See all options</a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            )}
          </SidebarMenuSub>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-2">
                  <IconNotebook className="h-4 w-4" />
                  <span>Auto Blog</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-2">
                  <IconLink className="h-4 w-4" />
                  <span>Internal Links</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-2">
                  <IconExternalLink className="h-4 w-4" />
                  <span>Free Backlinks</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {!isMobile && (
          <>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2">
                      <IconPuzzle className="h-4 w-4" />
                      <span>Integrations</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2">
                      <IconSettings className="h-4 w-4" />
                      <span>Subscription</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2">
                      <IconUsers className="h-4 w-4" />
                      <span>Affiliate Program</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2">
                      <IconHelpCircle className="h-4 w-4" />
                      <span>Help Center</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2">
                      <IconBell className="h-4 w-4" />
                      <span>Updates</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </>
        )}

        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-2">
                  <IconHelpCircle className="h-4 w-4" />
                  <span>Live Chat Support</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <IconUserCircle className="h-6 w-6" />
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Jane Smith</span>
            <span className="text-xs text-muted-foreground">smith@amazon.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
