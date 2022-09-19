import React from 'react'

const ToolBox = ({showImageBox, applyFilter, handleFilter, handleLogo, showLogo, logoPosition, handleLogoPosition }) => {
  return (
    <div className="flex flex-none h-full p-3" >
        <div className={`${showImageBox ? 'pointer-events-auto' : 'pointer-events-none grayscale'} transition duration-300 flex flex-col justify-center items-center bg-white w-80 rounded-lg p-3`} >
          <button
            onClick={() => handleLogo(showLogo ? false : true)}
            className="px-4 mb-5 py-2 w-full text-md bg-pink-800 text-white rounded-full shadow-sm transition-all hover:bg-pink-700"><i className={`icon-eye${showLogo ? '-blocked' : ''}`}></i> {showLogo ? 'Quitar' : 'Agregar'} Logo</button>
          { showLogo &&
            <div className="w-full mb-5">
            <h4 className="mb-2 font-medium text-center">Posicion del Logo:</h4>
            <div className="flex w-full justify-between mb-5">
              <button 
                onClick={() => handleLogoPosition('top-3 left-3')}
                className={`${logoPosition === 'top-3 left-3' ? 'drop-shadow-lg shadow-pink-800/50 bg-pink-600 hover:bg-pink-600' : 'bg-pink-900 hover:bg-pink-700'} text-white flex justify-center items-center w-10 h-10 rounded-full transition-all`} >
                  <i className="icon-arrow-up-left2"></i>
              </button>
              <button 
                onClick={() => handleLogoPosition('top-3 right-3')}
                className={`${logoPosition === 'top-3 right-3' ? 'drop-shadow-lg shadow-pink-800/50 bg-pink-600 hover:bg-pink-600' : 'bg-pink-900 hover:bg-pink-700'} text-white flex justify-center items-center w-10 h-10 rounded-full transition-all`} >
                  <i className="icon-arrow-up-right2"></i>
              </button>
              <button 
                onClick={() => handleLogoPosition('bottom-3 left-3')}
                className={`${logoPosition === 'bottom-3 left-3' ? 'drop-shadow-lg shadow-pink-800/50 bg-pink-600 hover:bg-pink-600' : 'bg-pink-900 hover:bg-pink-700'} text-white flex justify-center items-center w-10 h-10 rounded-full transition-all`} >
                  <i className="icon-arrow-down-left2"></i>
              </button>
              <button 
                onClick={() => handleLogoPosition('bottom-3 right-3')}
                className={`${logoPosition === 'bottom-3 right-3' ? 'drop-shadow-lg shadow-pink-800/50 bg-pink-600 hover:bg-pink-600' : 'bg-pink-900 hover:bg-pink-700'} text-white flex justify-center items-center w-10 h-10 rounded-full transition-all`} >
                  <i className="icon-arrow-down-right2"></i>
              </button>
            </div>
          </div>
          }
          <button
            onClick={() => handleFilter(true)}
            className="px-4 mb-5 py-2 w-full text-md bg-yellow-600 text-white rounded-full shadow-sm transition-all hover:bg-yellow-500"><i className='icon-magic-wand'></i> Aplicar Sepia</button>
          <button className="px-4 py-2 w-full text-md bg-cyan-600 text-white rounded-full shadow-sm transition-all hover:bg-cyan-500"><i className='icon-printer'></i> Imprimir</button>
        </div>
    </div>
  )
}

export default ToolBox