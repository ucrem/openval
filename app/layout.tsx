import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from "@/components/layout/layoutMaster/sidebar";
import TopBar from "@/components/layout/layoutMaster/topbar";


export const metadata: Metadata = {
  title: 'OpenVal',
  description: 'Valorant custom tournaments platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'h-full bg-white'}>
        <body className={'h-full'}>
            <Sidebar/>
            <div className="lg:pl-72">
                <TopBar/>
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </body>
    </html>
)
}
