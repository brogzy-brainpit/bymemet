import React from 'react'
import { calcRowBtn,check, imagify,singleLinkStyle } from '../stylify'

function EmailText({style,text,classes,minify}) {
  if(minify){
    return(
    <div className={style.textAlign2?`${style.textAlign2} ${classes}` :classes}   style={check(style,"ind-text")}>
      {text}
    </div>)
  }else{
    return (
     <table  border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" >
       <tr>
       <td data-klaviyo-region="true" align={style.containerAlignment}
          style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign='middle'>
       <table    width={imagify(style.width)}
         style={{width:style.width,backgroundColor:'purple'}}  border="0" cellpadding="0" cellspacing="0" 
         role="presentation" 
         className={style.textAlign2} >
         <tr>
           <td valign='middle' 
           className={'text-right'}  
            style={check(style,"ind-text")}>
             <div className={classes}  style={{fontWeight:style.fontWeight,textTransform:style.textTransform,color:style.color,fontFamily:style.fontFamily,fontSize:`${style.fontSize}px`,lineHeight:`${style.lineHeight}px`}}>
               {text}
               {style.textAlign2}
             </div>
             </td>
         </tr>
       </table>
       </td>
       </tr>
       </table>
      )
  }
}

export default EmailText
