import React from 'react'
import { calcRowBtn,check, singleLinkStyle } from '../stylify'
function EmailLink({style,text,alt,classes}) {
  return (<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
         <tr>
         <td data-klaviyo-region="true"  align={style.containerAlignment} style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign="top">
       <table class="klaviyo-block klaviyo-button-block" style={{width:style.width}}  border="0" cellpadding="0" cellspacing="0" role="presentation" className={style.textAlign2=="w-full m-left"?"t-left-2 w-full":style.textAlign2=="m-right w-full"?"t-right-2 w-full":"w-full center-float"} >
           
           <tr>
             <td className={style.textAlign2?style.textAlign2:""}  style={check(style,"ind-text")}>
             <a  href={style.href} alt={alt || "click link-text"}>
                                 <span style={singleLinkStyle(style,"link-text")} >
                                   <span style={{textAlign:"center"}}>
                                     <span className={classes}  style={{fontFamily:style.fontFamily,textDecoration:style.textDecoration,fontSize:`${style.fontSize}px`,lineHeight:`${style.lineHeight}px`}}>
                                   {text}
                                     </span>
                                   </span>
                                   </span>
                                 </a>
               </td>
           </tr>
         </table>
         </td>
         </tr>
         </table>
         )
}

export default EmailLink

{/* <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
         <tr>
         <td align={style.containerAlignment} class="pc-w620-spacing-30-0-172-0" style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign="top">
       <table width={"70%"} style={{width:style.width}}  border="0" cellpadding="0" cellspacing="0" role="presentation" className={style.textAlign2=="w-full m-left"?"t-left-2 w-full":style.textAlign2=="m-right w-full"?"t-right-2 w-full":"w-full center-float"} >
           
           <tr>
             <td className={style.textAlign2?style.textAlign2:""}  style={check(style,"ind-text")}>
             <a  href={style.href} alt={alt || "click link-text"}>
                                 <span style={singleLinkStyle(style,"link-text")} >
                                   <span style={{textAlign:"center"}}>
                                     <span style={{fontFamily:style.fontFamily,textDecoration:style.textDecoration,fontSize:style.fontSize,lineHeight:`${style.lineHeight}px`}}>
                                   {text}
                                     </span>
                                   </span>
                                   </span>
                                 </a>
               </td>
           </tr>
         </table>
         </td>
         </tr>
         </table> */}