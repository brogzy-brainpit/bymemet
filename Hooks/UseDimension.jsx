import React, { useEffect, useState } from 'react'

function UseDimension() {
    const [dimensions,setDimensions]=useState({width:0,height:0})
    const getDimension=()=>{
        const {innerWidth,innerHeight}=window;
        setDimensions({width:innerWidth,height:innerHeight})
    }
    useEffect(()=>{
        getDimension()
        window.addEventListener("resize",getDimension)
        return ()=>{window.removeEventListener("resize",getDimension)} 
    },[])
  return dimensions
}

export default UseDimension