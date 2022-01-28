import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {

  const tabArray = [
    { label: "Tab 1", content: "This is Tab 1 content"},
    { label: "Tab 2", content: "This is Tab 2 content"},
    { label: "Tab 3", content: "This is Tab 3 content"},
  ];

  const [currentTabIndex, setCurrentTabIndex] = useState(0);


  return (
    <div className="App">
      <h1>Click on a Tab to view its content</h1>
      { tabArray.map((element, index) => {
        return <Tabs label={ element.label } content={ element.content } key={index} currentTabIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex} index={index}/>
      }
      )}
    </div>
  );
}

export default App;
