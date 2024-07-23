import React, { useState } from "react";
import "../../styles/css/Table.css";
import {
  createColumnHelper,
} from "@tanstack/react-table";

// 데이터를 추가하기 위한 임시데이터입니다. userData 생성
import { USERS } from "../../makeData";
import MyTable from "./MyTable";

console.log(USERS);
//columnName : 적용할 columnName을 적용한다.
const CommonTable = ({columnName, size}) => {
    const [data, _setData] = useState(USERS);
    // const rerender = useReducer(() => ({}), {})[1];
    
    const columnHelper = createColumnHelper();

  //테이블 컬럼 정의 
  const columns = columnName.map((e,i) => (columnHelper.accessor(Object.keys(USERS[0])[i], {
    cell:(info) => info.getValue(),
    id: Object.keys(USERS[0])[i],
    header: () => <span>{e}</span>,
    size: size[i]
  })));

  return (
    <MyTable {...{data, columns}}/>
  );
};

export default CommonTable;
