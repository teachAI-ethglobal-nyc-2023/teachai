
'use client';

import type { NextPage } from 'next';
import Head from 'next/head';

import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import { cn } from '@/lib/utils'

import {
    SimpleTable, 
    sampleResponses,
} from "@/components/simple-table";
import { Button } from '@/components/ui/button';

const History: NextPage = () => {

  const [isClient, setIsClient] = useState(false);
  const [tableInput, setTableInput] = useState(
    sampleResponses
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const addInvoice = () => {
    // Create a new invoice and add it to the invoices state
    const newRow = {
      model: `0x${tableInput.length + 1}`,
      prompt: 'how do we move forward',
      betterResponse: 'by looking backward',
      worseResponse: 'by building more robots',
    };

    setTableInput((prevInvoices) => [...prevInvoices, newRow]);
  };

  return (
    <div>
      <Head>
        <title>History</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <div className={cn('pb-[200px] pt-4 md:pt-10 m-8')}>
        <Button onClick={addInvoice}>Add Row</Button>
          <SimpleTable tableInput={tableInput} />
        </div>
      </main>

    </div>
  );
};

export default History;
