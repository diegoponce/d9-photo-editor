import React, { createRef } from 'react'
import { useState } from "react";
import { FileUploader } from 'react-drag-drop-files';
import FileUploaderWrapper from './Styled/FileUploaderWrapper';
import ReactCrop from 'react-image-crop'
import logo from '../assets/img/mision-logo.png'
import 'react-image-crop/dist/ReactCrop.css'

const ImageViewer = ({handleViewer, handleFilter, showImageBox, applyFilter, showLogo, logoPosition, handleLogo}) => {
  const [imageLoaded, setImageLoaded] = useState<string | undefined>(undefined);
  const [orientation, setOrientation] = useState<string>('landscape');
  const [crop, setCrop] = useState<Crop>()
  const imgRef:any = createRef();
  const handleChange = async (file:any) => {
    const base64 = await convertBase64(file);
    setImageLoaded(base64 as string);
    handleViewer(true);
  };
  const hideImageBox =  () => {
    setImageLoaded(undefined);
    handleViewer(false);
    handleFilter(false);
    handleLogo(false);
  };
  const getOrientation = () => {
    const imgHeight = imgRef.current.clientHeight;
    const imgWidth = imgRef.current.clientWidth;
    setOrientation(imgWidth > imgHeight ? 'landscape' : 'portrait');
  }
  const handleCrop = (crop) => {
    setCrop(crop);
    console.log(crop);
  }
  const convertBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };
  return (
  <div className="relative flex flex-auto flex-col justify-center items-center h-full p-3">
      <FileUploaderWrapper>
        <FileUploader
        multiple={false}
        label="Selecciona una imagen o arrastrala a esta area. "
        handleChange={handleChange}
        name="file"
        disabled={showImageBox}
        types={["JPG","JPEG", "PNG"]}
        />
      </FileUploaderWrapper>
      <div  className={`${showImageBox ? 'opacity-100 visible' : 'opacity-0 invisible' } absolute flex flex-auto flex-col justify-center items-center w-full h-full p-10 bg-gray-300 transition-all duration-300`}>
        <button onClick={hideImageBox} className='z-10 absolute top-5 right-5 bg-gray-900 text-white flex justify-center items-center w-10 h-10 rounded-full transition-all hover:bg-gray-700' >X</button>
        <div className="main-image flex max-h-full relative">
        <ReactCrop crop={crop} aspect={0.65} onChange={(crop) => handleCrop(crop)}>
          <img ref={imgRef as any} id='main-image' onLoad={getOrientation} className={`${applyFilter ? 'mid-sepia' : '' } rounded-lg transition-all duration-500 max-w-full max-h-full`} src={imageLoaded} alt="" />
        </ReactCrop>
          { showLogo &&
            <img className={`${logoPosition} absolute w-44`} src={logo} alt="" />
          }
        </div>
      </div>
      <svg className='hidden'>
        <filter id="mid-sepia" color-interpolation-filters="sRGB">
            <feColorMatrix type="luminanceToAlpha"/>
            <feComponentTransfer >
              <feFuncA type="table" tableValues="0 .2 0.5 .8 1 .8 0.5 .20 0"/>
            </feComponentTransfer>
              
          <feComposite operator="in" in="SourceGraphic"/>

            <feColorMatrix type="matrix" result="sepia-clip"
            values="0.39 0.769 0.189 0  0 
                    0.349 0.686 0.168 0  0  
                    0.272 0.534 0.131 0  0 
                      0  0 0 1  0" />
            <feColorMatrix in="SourceGraphic" type="matrix" result="gscale"
                          values="0.2126 0.7152 0.0722 0 0 
                                  0.2126 0.7152 0.0722 0 0 
                                  0.2126 0.7152 0.0722 0 0 
                                  0 0 0 1 0" />
            <feComposite operator="over" in="sepia-clip" in2="gscale"/>     
        </filter>
      </svg>
  </div>
  )
}

export default ImageViewer