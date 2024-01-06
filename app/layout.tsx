import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from "@/components/layout/layoutMaster/sidebar";
import TopBar from "@/components/layout/layoutMaster/topbar";
import LayoutMain from "@/components/layout/layoutMaster/layoutMain";


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
            <LayoutMain>{children}</LayoutMain>
        </body>
    </html>
)
}
