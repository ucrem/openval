'use client'
import Sidebar from "@/components/layout/layoutMaster/sidebar";
import TopBar from "@/components/layout/layoutMaster/topbar";
import {useState} from "react";

export interface LayoutMainProps {
    children: React.ReactNode
}

export default function LayoutMain(props: LayoutMainProps){

    const [sidebarOpen,setSidebarOpen] = useState(false);

    return(
        <>
            <Sidebar sidebarOpen={sidebarOpen} sidebarOpenAction={setSidebarOpen}/>
            <div className="lg:pl-72">
                <TopBar setOpenSidebar={setSidebarOpen}/>
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">{props.children}</div>
                </main>
            </div>
        </>
    )
}