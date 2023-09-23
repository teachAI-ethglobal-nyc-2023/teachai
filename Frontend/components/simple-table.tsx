import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  export const sampleResponses = [
    {
      model: "0x1",
      prompt: "hello, world",
      betterResponse: "hello, world, its great to be here!",
      worseResponse: "i have risen and will destroy you all",
    },
    {
      model: "0x2",
      prompt: "what is the meaning of life?",
      betterResponse: "time cube knows all",
      worseResponse: "to stack gwei",
    },
    {
      model: "0x3",
      prompt: "whats new york like in the summer?",
      betterResponse: "sunnier than in the winter",
      worseResponse: "smells like subway rates",
    },
  ]

  type TableInput = {
    model: string;
    prompt: string;
    betterResponse: string;
    worseResponse: string;
  };

  type SimpleTableProps = {
    tableInput: TableInput[];
  };

  export function SimpleTable({ tableInput }: SimpleTableProps) {
    return (
      <Table>
        <TableCaption>A list of prompts and responses for the models.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Model</TableHead>
            <TableHead>Prompt</TableHead>
            <TableHead>Better Response</TableHead>
            <TableHead>Worse Response</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableInput.map((row: TableInput) => (
            <TableRow key={row.model}>
              <TableCell className="font-medium">{row.model}</TableCell>
              <TableCell>{row.prompt}</TableCell>
              <TableCell>{row.betterResponse}</TableCell>
              <TableCell>{row.worseResponse}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

