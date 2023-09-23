import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ThemeButton } from "@/components/theme-button"

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className='my-4'>
          <ThemeButton />
        </div>
        <div className='my-4'>
          <Button>Click me</Button>
        </div>
        <div className='my-4'>
          <ConnectButton />      
        </div>
      </div>      
    </main>
  )
}
