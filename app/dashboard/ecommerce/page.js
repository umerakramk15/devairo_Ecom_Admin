"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
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
import { Eye, Edit, Trash2 } from "lucide-react";

const initialData = [
  {
    product: "Dog Food, Chicken & Chicken Liver Recipe",
    id: "#7712309",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "Out of stock",
    startDate: "2025-02-01",
  },
  {
    product: "Grain Free Dry Dog Food | Rachael Ray® Nutrish®",
    id: "#7712310",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "Out of stock",
    startDate: "2025-02-02",
  },
  {
    product: "Organic Cat Food, Salmon & Tuna",
    id: "#7712311",
    price: 1250.0,
    quantity: 1200,
    sale: 15,
    stock: "In stock",
    startDate: "2025-02-03",
  },
  {
    product: "Puppy Training Treats, Peanut Butter Flavor",
    id: "#7712312",
    price: 850.75,
    quantity: 980,
    sale: 10,
    stock: "In stock",
    startDate: "2025-02-04",
  },
  {
    product: "Large Breed Dog Food, Beef & Rice",
    id: "#7712313",
    price: 1650.0,
    quantity: 800,
    sale: 25,
    stock: "Low stock",
    startDate: "2025-02-05",
  },
];

export const columns = [
  { accessorKey: "product", header: "Product" },
  { accessorKey: "id", header: "Product ID" },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${row.getValue("price").toFixed(2)}`,
  },
  { accessorKey: "quantity", header: "Quantity" },
  { accessorKey: "sale", header: "Sale %" },
  { accessorKey: "stock", header: "Stock" },
  { accessorKey: "startDate", header: "Start Date" },
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

export default function ProductTable() {
  const [sorting, setSorting] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [search, setSearch] = React.useState("");

  const filteredData = React.useMemo(() => {
    return initialData.filter(
      (item) =>
        item.product.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: { sorting, columnVisibility },
  });

  return (
    <div className="flex flex-col gap-6 p-3 mb-32">
      <div className="text-2xl text-foreground font-semibold">Products</div>
      <div className="w-full p-6 bg-background rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <Input
            placeholder="Search by product name or ID..."
            className="w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Scrollable Wrapper */}
        <div
          className="w-full overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="min-w-[900px]">
            <Table className="w-full">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="bg-background/10">
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className="px-4 py-2 text-left whitespace-nowrap"
                      >
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
                    <TableRow key={row.id} className="border-b">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="px-4 py-2 whitespace-nowrap"
                        >
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
                      No products found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-foreground/10">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <div className="flex space-x-2">
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
