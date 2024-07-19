import { getCoreRowModel } from '@tanstack/react-table';
import React from 'react'

const Table = ({columns, data}) => {

    const  columns = [
        {
            accessorKey: 'task',
            header: 'Task',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'due',
            header: 'Due',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'notes',
            header: 'Notes',
            cell: (props) => <p>{props.getValue()}</p>
        },
    ]
    const [data, setData] = useState(DATA);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
    });
    console.log(table.getHeaderGroups());
  return (
    <Box className="table"></Box>
  )
}

export default Table
