import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DATA from "../../data";
import EditableCell from "./EditableCell";
import StatusCell from "./StatusCell";
import DateCell from "./DateCell";
import Filter from "./Filter";

const columns = [
  {
    accessorKey: "task",
    header: "Task",
    cell: EditableCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusCell,
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: DateCell,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const [columnFilters, setColumnFilters] = useState([
    {
      id: "task",
      value: "",
    },
  ]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });
  return (
    <Box>
      <Filter columnFilters={columnFilters} setColumnFilters={setColumnFilters}/>
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <>
            <Box className="tr" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Box className="th" w={header.getSize()} key={header.id}>
                  {header.column.columnDef.header}
                  <Box
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`resizer ${
                      header.column.getIsResizing() ? "isResizing" : ""
                    }`}
                  />
                </Box>
              ))}
            </Box>
          </>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="td" w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TaskTable;
