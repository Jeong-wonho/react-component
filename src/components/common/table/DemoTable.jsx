import React from 'react'
import CommonTable from './CommonTable'


const DemoTable = () => {
  // const [columns, setColumns] = useState([""]);
  // setColumns(["상태적 목표", "기대결과 및 목표" , "담당부서", "1차 실무자", "2차 실무자", "목표치", "결과치", "달성률"]);
  let columnName = ["상태적 목표", "기대결과 및 목표" , "담당부서", "1차 실무자", "2차 실무자", "목표치", "결과치", "달성률"];
  let size = [100, 200, 150, 100, 100, 100, 100, 50];
  
  return (
    <CommonTable columnName={columnName} size={size}/>
  )
}

export default DemoTable
