import React from 'react';
import DemoModal from './components/common/modal/DemoModal';
import DemoForm from './components/common/DemoForm';
import DemoDropdown from './components/common/dropdown/DemoDropdown';
import DemoTable from './components/common/table/DemoTable';
import DemoRadio from './components/common/radio/DemoRadio';

const App = () => (
  <div className="App">
    <DemoModal/>
    <DemoForm/>
    <DemoDropdown/>
    <DemoTable/>
    <DemoRadio/>
  </div>
);

export default App;