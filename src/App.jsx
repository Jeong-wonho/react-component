import React from 'react';
import DemoModal from './components/common/DemoModal';
import DemoForm from './components/common/DemoForm';
import DemoDropdown from './components/common/DemoDropdown';
import DemoTable from './components/common/DemoTable';

const App = () => (
  <div className="App">
    <DemoModal/>
    <DemoForm/>
    <DemoDropdown/>
    <DemoTable/>
  </div>
);

export default App;