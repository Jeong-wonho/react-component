import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown';


const DemoDropdown = () => {
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(()=> {
        const fetchData = async () => {
            const data = [
                { id: 1, value: 'tiger', label: 'Tiger' },
                { id: 2, value: 'lion', label: 'Lion' },
                { id: 3, value: 'dog', label: 'Dog' },
                { id: 4, value: 'cat', label: 'Cat' },
              ];
            setOptions(data);
        }
        fetchData();
    }, []);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }
  return (
    <div>
      <Dropdown options = {options} onChange ={handleChange}/>
      <p>Selected Value : {selectedValue}</p>
    </div>
  )
}

export default DemoDropdown
