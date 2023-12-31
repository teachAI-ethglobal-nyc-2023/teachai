import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from '@/components/ui/tooltip'

import { Providers } from './providers';
import Header from "../components/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teach AI',
  description: 'Tech AI is a platform for teaching AI models.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <TooltipProvider>
              <Header />
                {children}
            </TooltipProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  </>
  )
}
