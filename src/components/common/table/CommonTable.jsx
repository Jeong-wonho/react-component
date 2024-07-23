import React, { useReducer, useState } from "react";
import "../../styles/css/Table.css";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData = [
  {
    statusGoal: "배터리 설계",
    expectedResultAndGoal: "고효율 배터리 설계",
    responsibleDepartment: "배터리 설계 팀",
    primaryWorker: "김도일 팀장",
    secondaryWorker: "유도원 차장 외 2명",
    targetValue: 100,
    actualValue:80,
    achievementRate: 80,
  },
  {
    statusGoal: "플랫폼 설계",
    expectedResultAndGoal: "eGMPv2",
    responsibleDepartment: "플랫폼 연구팀",
    primaryWorker: "이도형 팀장",
    secondaryWorker: "하상수 과장",
    targetValue: 100,
    actualValue:30,
    achievementRate: 30,
  },
  {
    statusGoal: "구동계 제작",
    expectedResultAndGoal: "EV 자동 미션 및 베이스 설계 / 제작",
    responsibleDepartment: "생산 연구팀",
    primaryWorker: "손상기 책임",
    secondaryWorker: "오리온 책임",
    targetValue: 100,
    actualValue:30,
    achievementRate: 30,
  },
  {
    statusGoal: "모터 개발",
    expectedResultAndGoal: "양산형 모터 개발",
    responsibleDepartment: "모터 개발팀",
    primaryWorker: "양두원 팀장",
    secondaryWorker: " ",
    targetValue: 100,
    actualValue:5,
    achievementRate: 5,
  },    
];


//columnName : 적용할 columnName을 적용한다.
const CommonTable = ({columnName, size}) => {
    console.log('columnName', columnName);
    console.log('size', size);
    const [data, _setData] = useState(defaultData);
    const rerender = useReducer(() => ({}), {})[1];
    
    const columnHelper = createColumnHelper();
  //컬럼 정의
  const columns = columnName.map((e,i) => (columnHelper.accessor(Object.keys(defaultData[0])[i], {
    cell:(info) => info.getValue(),
    id: Object.keys(defaultData[0])[i],
    header: () => <span>{e}</span>,
    size: size[i]
  })));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
        <h1> Table Example</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
};

export default CommonTable;
