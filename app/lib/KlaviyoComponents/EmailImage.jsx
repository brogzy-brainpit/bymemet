import React from 'react'
import { calcRowBtn,check, imagify  } from '../stylify'
function EmailImage({style,alt,classes,src}) {
  // console.log(style)
  return (<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
         <tr>
         <td  data-klaviyo-region="true" align={style.imageAlignment} style={{
  ...(style.marginTop ? { paddingTop: `${style.marginTop}px` } : {}),
  ...(style.marginRight ? { paddingRight: `${style.marginRight}px` } : {}),
  ...(style.marginBottom ? { paddingBottom: `${style.marginBottom}px` } : {}),
  ...(style.marginLeft ? { paddingLeft: `${style.marginLeft}px` } : {}),
}} valign="top">
         <table  width={imagify(style.width)}  style={{width:style.width}} border="0" cellpadding="0" cellspacing="0" role="presentation" 
         className={style.textAlign2?`${style.textAlign2} klaviyo-block klaviyo-image-block`:"klaviyo-block klaviyo-image-block"}>
           <tr width={"100%"}>
             <td width={"100%"}>
       <img
  alt={alt}
  className={classes}
  src={src}
  width="100%"
  style={{
    display: 'block',
    outline: 0,
    lineHeight: '100%',
    WebkitInterpolationMode: 'bicubic', // Note: `-ms-` not needed unless specifically for old Outlook
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    border: 0,
    ...(style.borderTopLeftRadius ? { borderTopLeftRadius: `${style.borderTopLeftRadius}px` } : {}),
    ...(style.borderTopRightRadius ? { borderTopRightRadius: `${style.borderTopRightRadius}px` } : {}),
    ...(style.borderBottomLeftRadius ? { borderBottomLeftRadius: `${style.borderBottomLeftRadius}px` } : {}),
    ...(style.borderBottomRightRadius ? { borderBottomRightRadius: `${style.borderBottomRightRadius}px` } : {}),
  }}
/>

              {/* {style} */}
               </td>
           </tr>
         </table>
         </td>
         </tr>
         </table>
         )
}

export default EmailImage