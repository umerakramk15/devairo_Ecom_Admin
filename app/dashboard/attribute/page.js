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
import { Edit, Trash2 } from "lucide-react";

const initialData = [
  { category: "Color", value: "Blue, Green, White" },
  { category: "Size", value: "S, M, L, XL" },
  { category: "Material", value: "Cotton, Polyester" },
  { category: "Style", value: "Classic, Modern, Ethnic, Western" },
  { category: "Meat Type", value: "Fresh, Frozen, Marinated" },
  { category: "Weight", value: "1kg, 2kg, 3kg, Over 5kg" },
  { category: "Packaging", value: "Plastic Box, Paper, Nylon, Tin Cans" },
];

export const columns = [
  { accessorKey: "category", header: "Attribute" },
  { accessorKey: "value", header: "Values" },
  {
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex space-x-2">
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

export default function AttributeTable() {
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
      <div className="text-2xl text-foreground font-semibold">Attributes</div>
      <div className="w-full p-6 bg-background rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <Input
            placeholder="Search by attribute..."
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
                    No attributes found.
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
