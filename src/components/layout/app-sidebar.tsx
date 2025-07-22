'use client';
import {
    Sidebar,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
} from '@/components/ui/sidebar';
import { Dumbbell, LayoutDashboard, History, User, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Dumbbell className="size-8 text-primary" />
                    <h1 className="text-2xl font-headline font-bold">VigorStride</h1>
                </div>
            </SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                        <LayoutDashboard />
                        <span>Dashboard</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <History />
                        <span>Workout History</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <User />
                        <span>Profile</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Settings />
                        <span>Settings</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            <SidebarFooter>
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="avatar person" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm">John Doe</span>
                        <span className="text-xs text-muted-foreground">john.doe@example.com</span>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
