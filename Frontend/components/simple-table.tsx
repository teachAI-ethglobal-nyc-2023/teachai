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

  export function SimpleTable({ tableInput }) {
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
                {tableInput.map((row) => (
                <TableRow key={row.model}>
                    <TableCell className="font-medium">{row.model}</TableCell>
                    <TableCell>{row.prompt}</TableCell>
                    <TableCell>{row.betterResponse}</TableCell>
                    <TableCell>{row.worseResponse}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

  /**
  export const sampleInvoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
   */
  
  /**
  // TODO: once we have settled on the data interface, we can utilize the graph-client types here
  export function SimpleTable({ invoices }) {
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  */
  

  /**

   * 

   * 
   * 
   */