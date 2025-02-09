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
    category: "Dog Food",
    icon: "🐶",
    sales: 15000,
    products: 25,
    startDate: "2025-02-01",
  },
  {
    category: "Cat Food",
    icon: "🐱",
    sales: 12000,
    products: 18,
    startDate: "2025-02-02",
  },
  {
    category: "Bird Supplies",
    icon: "🐦",
    sales: 8000,
    products: 10,
    startDate: "2025-02-03",
  },
  {
    category: "Reptile Care",
    icon: "🦎",
    sales: 5000,
    products: 7,
    startDate: "2025-02-04",
  },
];

export const columns = [
  { accessorKey: "category", header: "Category" },
  {
    accessorKey: "icon",
    header: "Icon",
    cell: ({ row }) => <span className="text-xl">{row.getValue("icon")}</span>,
  },
  { accessorKey: "sales", header: "Sales ($)" },
  { accessorKey: "products", header: "Products" },
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

export default function CategoryTable() {
  const [sorting, setSorting] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [search, setSearch] = React.useState("");

  const filteredData = React.useMemo(() => {
    return initialData.filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
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
      <div className="text-2xl text-foreground font-semibold">Categories</div>
      <div className="w-full p-6 bg-background rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <Input
            placeholder="Search by category name..."
            className="w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="w-full overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-background/10">
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="px-4 py-2 text-left">
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
                    No categories found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
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
