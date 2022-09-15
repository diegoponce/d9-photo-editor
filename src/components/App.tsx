import React, { useEffect, useState } from 'react';
import ImageViewer from './ImageViewer';
import ToolBox from './ToolBox';

function App() {
  console.log(window.ipcRenderer);
  const [showImageBox, setShowImageBox] = useState<boolean>(false);
  const [applyFilter, setApplyFilter] = useState<boolean>(false);
  const handleViewer = (showed:boolean) => {
    setShowImageBox(showed);
  };
  const handleFilter = (apply:boolean) => {
    setApplyFilter(apply);
  };
  return (
    <div className="flex h-screen bg-gray-300">
        <ImageViewer 
          applyFilter = {applyFilter}
          handleFilter = {handleFilter} 
          showImageBox = {showImageBox} 
          handleViewer = {handleViewer}
        />
        <ToolBox 
          applyFilter = {applyFilter}
          handleFilter = {handleFilter}
          showImageBox = {showImageBox} />
    </div>
  );
}

export default App;
