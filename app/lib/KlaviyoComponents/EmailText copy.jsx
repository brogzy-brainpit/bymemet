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
       <td data-klaviyo-region="true"  align={style.containerAlignment} style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign='middle'>
       <table class="klaviyo-block klaviyo-text-block"   width={imagify(style.width)}  style={{width:style.width}}  border="0" cellpadding="0" cellspacing="0" role="presentation" className={style.textAlign2=="w-full m-left"?"t-left-2 w-full":style.textAlign2=="m-right"?"t-right-2 w-full":"w-full center-float"} >
         <tr>
           <td valign='middle'className={style.textAlign2?style.textAlign2:""}   style={check(style,"ind-text")}>
             <div className={classes}  style={{fontWeight:style.fontWeight,textTransform:style.textTransform,color:style.color,fontFamily:style.fontFamily,fontSize:`${style.fontSize}px`,lineHeight:`${style.lineHeight}px`}}>
               {text}
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
{/* <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
<tr>
<td align={style.containerAlignment} class="pc-w620-spacing-30-0-172-0" style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign='middle'>
<table width={imagify(style.width)}  style={{width:style.width}}  border="0" cellpadding="0" cellspacing="0" role="presentation" className={style.textAlign2=="w-full m-left"?"t-left-2 w-full":style.textAlign2=="m-right w-full"?"t-right-2 w-full":"w-full center-float"} >
  <tr>
    <td data-klaviyo-region="true" valign='middle' className={style.textAlign2?style.textAlign2:""}  style={check(style,"ind-text")}>
      <div  className="klaviyo-block klaviyo-text-block" style={{color:style.color,fontFamily:style.fontFamily,fontSize:style.fontSize,lineHeight:`${style.lineHeight}px`}}>
        {text}
      </div>
      </td>
  </tr>
</table>
</td>
</tr>
</table> */}