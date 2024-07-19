import React from 'react'
import "../styles/css/Table.css"
import {TableCaption} from '@/components/table';
const DemoTable = () => {
  return (
    <div className="full-screen">
      <div className="container">
        <TableCaption className="table-caption">
          Tanstack Table
        </TableCaption>
        <TableComponents/>
      </div>
    </div>
  )
}

export default DemoTable
