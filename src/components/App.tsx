import React, { useEffect, useState } from 'react';
import ImageViewer from './ImageViewer';
import ToolBox from './ToolBox';

function App() {
  console.log(window.ipcRenderer);
  const [showImageBox, setShowImageBox] = useState<boolean>(false);
  const [applyFilter, setApplyFilter] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [logoPosition, setLogoPosition] = useState<string>('bottom-5 right-5');
  const handleViewer = (showed:boolean) => {
    setShowImageBox(showed);
  };
  const handleFilter = (apply:boolean) => {
    setApplyFilter(apply);
  };
  const handleLogo = (showed:boolean) => {
    setShowLogo(showed);
  };
  const handleLogoPosition = (position:string) => {
    setLogoPosition(position);
  };
  return (
    <div className="flex h-screen bg-gray-300">
        <ImageViewer 
          applyFilter = {applyFilter}
          handleFilter = {handleFilter} 
          showImageBox = {showImageBox} 
          handleViewer = {handleViewer}
          handleLogo = {handleLogo}
          handleLogoPosition = {handleLogoPosition}
          showLogo = {showLogo}
          logoPosition = {logoPosition}
        />
        <ToolBox 
          applyFilter = {applyFilter}
          handleFilter = {handleFilter}
          showImageBox = {showImageBox} 
          handleLogo = {handleLogo}
          handleLogoPosition = {handleLogoPosition}
          showLogo = {showLogo}
          logoPosition = {logoPosition}
        />
    </div>
  );
}

export default App;
