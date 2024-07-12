import React, { useState } from 'react'
import {imagesData} from '../sliderImages'
function Slider() {

  const [currentInd, setCurrentInd] =  useState(1)
let arrLen = imagesData.length;
    const nextImage = () => {
        if(currentInd === arrLen-1) {
            setCurrentInd(0);
        }
        else {
            setCurrentInd(currentInd + 1) ;
        }
    }

    const prevImage = () => {
        if(currentInd === 0) {
            setCurrentInd(arrLen-1)
        }
        else {
           setCurrentInd(currentInd - 1) ;
        }
    }
  return (
    <div className='slider'>
        <div className="prevImg slideController" onClick={prevImage}>&lt;</div>
       {
        imagesData.map((imageData, index) => {
        return (
            
        currentInd === index && <div className="sliderSlides" key={imageData.id}>
                    <img src={imageData.url} alt="" className={currentInd === index ? "slideImage active" : "slideImage"} />
                </div> 

        
            )
        })
    } 
    <div className="nextImg slideController"  onClick={nextImage}>&gt;</div>
    </div>
  )
}

export default Slider