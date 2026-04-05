import React from 'react'
import { calcRowBtn,check, imagify,singleLinkStyle } from '../stylify'

function EmailRow2({styling,children,colRow}) {
  return (
<table align='center' width="100%" style={{width: "100%"}} border="0" cellpadding="0" cellspacing="0" role="presentation" >
  <tr>
  <td  valign={styling.verticalAlignment} align={styling.containerAlignment} style={{paddingBottom:`${styling.marginBottom}px`,
          paddingTop:`${styling.marginTop}px`,paddingLeft:`${styling.marginLeft}px`,paddingRight:`${styling.marginRight}px`,}} >
  <table valign={styling.verticalAlignment} align='center' className='w-full' width={colRow?"100%":imagify(styling.width)} style={{width:colRow?"100%":styling.width}} border="0" cellpadding="0" cellspacing="0" role="presentation">
<tr>
 {styling.backgroundImage?`\n <!--[if !gte mso 9]><!-- --> \n`:""}
<td background={styling.backgroundImage?styling.backgroundImage:""} bgcolor={styling.backgroundfallback} class="pc-w620-padding-0-8-0-8" style={{...check(styling,"col-container"),width:colRow?"100%":styling.width}} valign="top">
{styling.backgroundImage?`\n <!--<![endif]-->\n
<!--[if gte mso 9]>
<td valign="middle" align="center" style="background-image: url('${styling.backgroundImage}'); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: ${styling.backgroundfallback}; border-radius: 0px;" bgcolor=${styling.backgroundfallback} background=${styling.backgroundImage}>
<![endif]-->\n
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px">
<v:fill src=${styling.backgroundImage} color=${styling.backgroundfallback || '#eeeeee'} type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/>
<v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
<div style="font-size: 0; line-height: 0;">
<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td style="font-size: 14px; line-height: 1.5;" valign="middle">
<p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
<table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
<tr>
<td colspan="3" height="0" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
</tr>
<tr>
<td width="0" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
<td valign="top" align="left">
<![endif]-->
`:""}
    {"\n"}
{children}
{styling.backgroundImage?`<!--[if gte mso 9]>
</td>
<td width="0" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
</tr>
<tr>
<td colspan="3" height="0" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
</v:textbox>
</v:rect>
<![endif]-->`:""}
</td>
</tr>
</table>
    </td>
  </tr>
  
  
  
  
   </table>


  )
}

export default EmailRow2