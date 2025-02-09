"use client";

import * as React from "react";
import {
 
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Edit, Trash2, Package } from "lucide-react";
import Image from "next/image";

const initialOrders = [
  {
    product: "Dog Food, Chicken & Chicken Liver Recipe",
    image: "",
    orderId: "#ORD12345",
    price: 1452.5,
    quantity: 2,
    payment: "Paid",
    status: "Shipped",
    tracking: "#TRK56789",
  },
  {
    product: "Organic Cat Food, Salmon & Tuna",
    image: "",
    orderId: "#ORD12346",
    price: 1250.0,
    quantity: 1,
    payment: "Pending",
    status: "Processing",
    tracking: "#TRK56790",
  },
  {
    product: "Large Breed Dog Food, Beef & Rice",
    image: "",
    orderId: "#ORD12347",
    price: 1650.0,
    quantity: 3,
    payment: "Paid",
    status: "Delivered",
    tracking: "#TRK56791",
  },
];

export const columns = [
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.image ? (
          <Image
            src={row.original.image}
            alt={row.original.product}
            width={40}
            height={40}
            className="rounded-md"
          />
        ) : (
          <Package className="w-10 h-10 text-gray-400" />
        )}
        <span>{row.original.product}</span>
      </div>
    ),
  },
  { accessorKey: "orderId", header: "Order ID" },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${row.getValue("price").toFixed(2)}`,
  },
  { accessorKey: "quantity", header: "Quantity" },
  { accessorKey: "payment", header: "Payment" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "tracking", header: "Tracking" },
  {
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Button variant="ghost" size="icon">
          <Eye className="w-5 h-5 text-gray-600 hover:text-blue-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <Edit className="w-5 h-5 text-gray-600 hover:text-green-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-600" />
        </Button>
      </div>
    ),
  },
];

export default function OrderTable() {
  const [search, setSearch] = React.useState("");
  const filteredOrders = React.useMemo(() => {
    return initialOrders.filter(
      (order) =>
        order.product.toLowerCase().includes(search.toLowerCase()) ||
        order.orderId.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const table = useReactTable({
    data: filteredOrders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="flex flex-col gap-6 p-3 mb-32">
      <div className="text-2xl text-foreground font-semibold">Orders</div>
      <div className="w-full p-6 bg-background rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <Input
            placeholder="Search by product name or Order ID..."
            className="w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[900px]">
            <Table className="w-full">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="bg-background/10">
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="px-4 py-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="px-4 py-2">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="text-center py-4"
                    >
                      No orders found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
