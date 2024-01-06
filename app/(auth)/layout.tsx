import '../globals.css'
import type { Metadata } from 'next'
import LayoutAuth from "@/components/layout/layoutAuth/LayoutAuth";


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
    <html lang="en" className={'h-full bg-gray-50'}>
        <body className={'h-full'}>
            <LayoutAuth>{children}</LayoutAuth>
        </body>
    </html>
)
}
