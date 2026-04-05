import React from 'react'
import { calcRowBtn,check, imagify,singleLinkStyle } from '../stylify'

function EmailLinkImage({style,alt,src}) {
  return (<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
    <td data-klaviyo-region="true" align={style.imageAlignment} class="pc-w620-spacing-30-0-172-0" style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign="top">
    <table align={style.imageAlignment}  border="0" cellpadding="0" cellspacing="0" role="presentation" className={style.textAlign2?`${style.textAlign2} klaviyo-block klaviyo-image-block`:"klaviyo-block klaviyo-image-block"} >
      <tr>
        <td >
        <a href={style.href}>
    <img alt={alt} class="pc-w620-width-190 pc-w620-height-auto" src={src} style={{display: 'block', outline: 0, lineHeight: '100%', '-ms-interpolation-mode':' bicubic', width: style.width,height: 'auto' ,maxWidth: '100%', border: 0}} width={imagify(style.width)}/>
        </a>
          </td>
      </tr>
    </table>
    </td>
    </tr>
    </table>
    )
}

export default EmailLinkImage