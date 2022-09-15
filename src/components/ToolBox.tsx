import React from 'react'

const ToolBox = ({showImageBox, applyFilter, handleFilter}) => {
  return (
    <div className="flex flex-none h-full p-3" >
        <div className={`${showImageBox ? 'pointer-events-auto' : 'pointer-events-none grayscale'} transition duration-300 flex flex-col justify-center items-center bg-white w-80 rounded-lg p-3`} >
          <button
            onClick={() => handleFilter(true)}
            className="px-4 mb-5 py-2 w-full text-md bg-pink-800 text-white rounded-full shadow-sm transition-all hover:bg-pink-700"><i className='icon-eye'></i> Agregar Logo</button>
          <button
            onClick={() => handleFilter(true)}
            className="px-4 mb-5 py-2 w-full text-md bg-yellow-600 text-white rounded-full shadow-sm transition-all hover:bg-yellow-500"><i className='icon-magic-wand'></i> Aplicar Sepia</button>
          <button className="px-4 py-2 w-full text-md bg-cyan-600 text-white rounded-full shadow-sm transition-all hover:bg-cyan-500"><i className='icon-printer'></i> Imprimir</button>
        </div>
    </div>
  )
}

export default ToolBox