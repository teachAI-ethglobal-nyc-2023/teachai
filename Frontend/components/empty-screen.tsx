
import { Button } from '@/components/ui/button'
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { NextComponentType } from "next";

const exampleMessages = [
  {
    heading: 'Link title 01',
    message: 'Link title 01'
  },
  {
    heading: 'Link title 02',
    message: 'Link title 02'
  },
]


const EmptyScreen: NextComponentType = () => {

  const [input, setInput] = useState('')

  return (
    <div className="mx-auto max-w-2xl px-4 mt-8">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Teach AI
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis varius mi, nec ultrices orci. Ut lacus massa, placerat non tempus a, ornare sed justo. Vivamus volutpat dignissim lectus et laoree.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <ArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmptyScreen;