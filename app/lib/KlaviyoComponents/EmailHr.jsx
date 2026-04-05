import React from 'react'
import { calcRowBtn,check, imagify  } from '../stylify'

import { Hr } from '@react-email/components'

function EmailHr({style}) {
  return (
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
    <td align={style.containerAlignment} class="pc-w620-spacing-30-0-172-0" style={{padding:`${style.marginTop}px ${style.marginRight}px ${style.marginBottom}px ${style.marginLeft}px`}} valign="top">
    <table width={imagify(style.width)}  border="0" cellpadding="0" cellspacing="0" role="presentation" className={style.textAlign2=="m-left"?"t-left-2":style.textAlign2=="m-right"?"t-right-2":"center-float"} >
      <tr>
        <td align='center'>
        <Hr style={check(style,"new-hr")} color={style.color}/>
          </td>
      </tr>
    </table>
    </td>
    </tr>
    </table>
  )
}

export default EmailHr