import React, { createRef } from 'react'
import { useState } from "react";
import { FileUploader } from 'react-drag-drop-files';
import FileUploaderWrapper from './Styled/FileUploaderWrapper';

const ImageViewer = ({handleViewer, handleFilter, showImageBox, applyFilter}) => {
  const [imageLoaded, setImageLoaded] = useState<string | undefined>(undefined);
  const [orientation, setOrientation] = useState<string>('landscape');
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
  };
  const getOrientation = () => {
    const imgHeight = imgRef.current.clientHeight;
    const imgWidth = imgRef.current.clientWidth;
    setOrientation(imgWidth > imgHeight ? 'landscape' : 'portrait');
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
        <div className="main-image flex max-h-full">
          <img ref={imgRef as any} id='main-image' onLoad={getOrientation} className={`${applyFilter ? 'sepia' : '' } transition-all duration-500 max-w-full max-h-full`} src={imageLoaded} alt="" />
        </div>
      </div>
  </div>
  )
}

export default ImageViewer