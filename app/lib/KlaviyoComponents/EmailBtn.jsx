import React from 'react'
import { calcRowBtn } from '../stylify'
// import { calcRowBtn } from '../../functions/stylify'

function EmailBtn({style,text,classes,minify}) {
  if(minify){
    return (
          <tr>
                 <td align={style.containerAlignment} style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign="top">
                 <table  border="0" cellpadding="0" cellspacing="0" role="presentation" className={style.textAlign2=="m-left"?"t-left-2":style.textAlign2=="m-right"?"t-right-2":"center-float"} >
                   <tr>
                   <td valign='center' data-klaviyo-region="true" className={classes} width={style.width.includes("%")?calcRowBtn(style.width,style.width):style.width}  style={{fontFamily:style.fontFamily,color:style.color,fontSize:`${style.fontSize}px`,lineHeight:`${style.fontSize}px`,maxWidth:"650px"}} >
                     {"\n"}
       {`<!--BUTTON -->`}
       {"\n"}
      {`<!--[if mso]>
         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-align-center" align="center" style="width:100%,border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
         <tr>
         <td valign="middle" align="center" style="border-radius: ${style.borderRadius}px; background-color: ${style.backgroundColor}; text-align:center; color: ${style.color}; padding:${style.paddingVert}px ${style.paddingHorz}px ${style.paddingVert}px ${style.paddingHorz}px  " class="pc-w620-radius-100-100-100-100" bgcolor=${style.backgroundColor}>
         <table align="center width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
         <tr>
         <td valign="middle" align="center" style=background:"red">
         <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: ${style.fontFamily}; font-weight: ${style.fontWeight}; font-size: ${style.fontSize}px ; line-height: ${style.fontSize}px; text-align: ${style.textAlign}; color: ${style.color};" href='${style.href}' target="_blank"><span style="display: block;"><span style="font-family: ${style.fontFamily};font-weight: ${style.fontWeight};font-style: normal;color: ${style.color};line-height: 22px;letter-spacing: 0px;" data-letter-spacing-original="0px">${text}</span></span></a>
         </td>
         <td style="font-size: 0; padding-left: 6px;" valign="middle"><img src="https://cloudfilesdm.com/postcards/image-17349471681321.png" style="border: 0; width: 14px; height: 14px; line-height: 100%; -ms-interpolation-mode: bicubic;" alt="" width="14" height="14"/></td> </tr>
         </table>
         </td>
         </tr>
         </table>
         <![endif]-->
         <!--[if !mso]><!-- -->
        `}
        <a
         href={style.href}
         style={{
           display: "inline-block",
           boxSizing: "border-box",
           border:style.borderWidth>0?`${style.borderStyle} ${style.borderWidth}px ${style.borderColor}`:"none",
           borderTopLeftRadius:`${style.borderTopLeftRadius}px`,borderTopRightRadius:`${style.borderTopRightRadius}px`,
      borderBottomLeftRadius:`${style.borderBottomLeftRadius}px`,borderBottomRightRadius:`${style.borderBottomRightRadius}px`,
           backgroundColor: style.backgroundColor,
           padding: `${style.paddingVert}px ${style.paddingHorz}px`,
           fontFamily: style.fontFamily,
           fontWeight: style.fontWeight,
           fontSize: `${style.fontSize}px`,
           lineHeight: `${style.fontSize}px`,
           color:style.color,
           verticalAlign: "middle",
           textTransform:style.textTransform,
           textAlign: style.textAlign,
           textDecoration: style.textDecoration,
           WebkitTextSizeAdjust: "none",
           width:"100%"
         }}
         target="_blank"
       >
         <span style={{ display: "inline-block", verticalAlign: "middle" }}>
           <span style={{ display: "block" }}>
             <span
               data-letter-spacing-original="0px"
               style={{
                 fontFamily: style.fontFamily,
                 fontWeight: style.fontWeight,
                 fontStyle: "normal",
                 color:style.color,
                 lineHeight: `${Number(style.fontSize*(1+(57.14/100))).toPrecision(2)}px`,
                 letterSpacing: `${style.letterSpacing}px`, }}>
               {text}
        </span>
        </span>
        </span>
        </a>

       {`<!--<![endif]-->`}
       {"\n"}
       {`<!-- END BUTTON -->`}
       {"\n"}
            </td>
            </tr>
            </table>
            </td>
             </tr>
                 )
  }else{

    return (
   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
              <tr>
              <td align={style.containerAlignment} style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign="top">
              <table  border="0" cellpadding="0" cellspacing="0" role="presentation" className={style.textAlign2=="m-left"?"t-left-2":style.textAlign2=="m-right"?"t-right-2":"center-float"} >
                <tr>
                <td valign='center' data-klaviyo-region="true" className={classes} width={style.width.includes("%")?calcRowBtn(style.width,style.width):style.width}  style={{fontFamily:style.fontFamily,color:style.color,fontSize:`${style.fontSize}px`,lineHeight:`${style.fontSize}px`,maxWidth:"650px"}} >
                  {"\n"}
    {`<!--BUTTON -->`}
    {"\n"}
    <table className="klaviyo-block klaviyo-button-block"  border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
      <tr>
      <th align="center" class="pc-w620-align-center pc-w620-spacing-0-0-0-0" style={{textAlign: 'center',fontWeight: "normal", "lineHeight": 1}} valign="top">
     {`<!--[if mso]>
      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-align-center" align="center" style="width:100%,border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
      <tr>
      <td valign="middle" align="center" style="border-radius: ${style.borderRadius}px; background-color: ${style.backgroundColor}; text-align:center; color: ${style.color}; padding:${style.paddingVert}px ${style.paddingHorz}px ${style.paddingVert}px ${style.paddingHorz}px  " class="pc-w620-radius-100-100-100-100" bgcolor=${style.backgroundColor}>
      <table align="center width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
      <td valign="middle" align="center" style=background:"red">
      <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: ${style.fontFamily}; font-weight: ${style.fontWeight}; font-size: ${style.fontSize}px ; line-height: ${style.fontSize}px; text-align: ${style.textAlign}; color: ${style.color};" href='${style.href}' target="_blank"><span style="display: block;"><span style="font-family: ${style.fontFamily};font-weight: ${style.fontWeight};font-style: normal;color: ${style.color};line-height: 22px;letter-spacing: 0px;" data-letter-spacing-original="0px">${text}</span></span></a>
      </td>
      <td style="font-size: 0; padding-left: 6px;" valign="middle"><img src="https://cloudfilesdm.com/postcards/image-17349471681321.png" style="border: 0; width: 14px; height: 14px; line-height: 100%; -ms-interpolation-mode: bicubic;" alt="" width="14" height="14"/></td> </tr>
      </table>
      </td>
      </tr>
      </table>
      <![endif]-->
      <!--[if !mso]><!-- -->
     `}
     <a
      href={style.href}
      style={{
        display: "inline-block",
        boxSizing: "border-box",
        border:style.borderWidth>0?`${style.borderStyle} ${style.borderWidth}px ${style.borderColor}`:"none",
        borderTopLeftRadius:`${style.borderTopLeftRadius}px`,borderTopRightRadius:`${style.borderTopRightRadius}px`,
   borderBottomLeftRadius:`${style.borderBottomLeftRadius}px`,borderBottomRightRadius:`${style.borderBottomRightRadius}px`,
        backgroundColor: style.backgroundColor,
        padding: `${style.paddingVert}px ${style.paddingHorz}px`,
        fontFamily: style.fontFamily,
        fontWeight: style.fontWeight,
        fontSize: `${style.fontSize}px`,
        lineHeight: `${style.fontSize}px`,
        color:style.color,
        verticalAlign: "middle",
        textTransform:style.textTransform,
        textAlign: style.textAlign,
        textDecoration: style.textDecoration,
        WebkitTextSizeAdjust: "none",
        width:"100%"
      }}
      target="_blank"
    >
      <span style={{ display: "inline-block", verticalAlign: "middle" }}>
        <span style={{ display: "block" }}>
          <span
            data-letter-spacing-original="0px"
            style={{
              fontFamily: style.fontFamily,
              fontWeight: style.fontWeight,
              fontStyle: "normal",
              color:style.color,
              lineHeight: `${Number(style.fontSize*(1+(57.14/100))).toPrecision(2)}px`,
              letterSpacing: `${style.letterSpacing}px`, }}>
            {text}
          </span></span></span></a>
    {` <!--<![endif]-->`}
    
     </th>
     </tr>
     </table>
    
    
            {"\n"}
    {`<!-- END BUTTON -->`}
    {"\n"}
                  </td>
                </tr>
              </table>
              </td>
              </tr>
              </table>
              )
  }
}






export default EmailBtn