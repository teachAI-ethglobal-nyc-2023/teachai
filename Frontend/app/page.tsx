'use client';

import type { NextPage } from 'next';
import Head from 'next/head';

import { useAccount } from "wagmi";
import { useState, useEffect } from "react";

import { PromptForm } from '@/components/prompt-form'
import { cn } from '@/lib/utils'
import EmptyScreen  from '@/components/empty-screen';
import React from 'react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor';

interface promptQuestions {
  message: string;
  id?: number;
  option1?: string;
  option2?: string;
  optionResponse?: number;
  status?: string;
}

export default function Home() {

  const [existPreviousMessage, setExistPreviousMessage] = React.useState(false);
  const  [promptQuestions, setPromptQuestions] = useState<promptQuestions[]>([]);

  const updateValueInParent = (prompt: string) => {

    // set the message
    const newPrompt : promptQuestions= {
      message: prompt,
    };
    setPromptQuestions([...promptQuestions, newPrompt]);
    const index = promptQuestions.length - 1;

    // system add otions to response
    newPrompt.option1 = prompt + " - Option 1";
    newPrompt.option2 = prompt + " - Option 2";

  };
  
  return (
    <div>
      <Head>
        <title>Teach AI</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />*
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        {(!(promptQuestions.length>0)) && (
          <EmptyScreen />
        )}

        {promptQuestions.map((promptQuestion, index) => (
          <div key={index}>
              <Label>You said: {promptQuestion.message}</Label>
              <Label>System response: {promptQuestion.option1}</Label>
              <Label>System response: {promptQuestion.option2}</Label>
          </div>
        ))}
        <ChatScrollAnchor trackVisibility={true} />

        <div className={cn('pb-[200px] pt-4 md:pt-10')}>
          <div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%">
            <div className="mx-auto sm:max-w-2xl sm:px-4">
              <div className="space-y-4 border-t bg-background mx-8 mb-8 px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
                <PromptForm propVariable={existPreviousMessage} updateValue={updateValueInParent}/>
              </div>          
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}