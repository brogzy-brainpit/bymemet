import EmailText from "./KlaviyoComponents/EmailText"
import EmailBtn from './KlaviyoComponents/EmailBtn.jsx';
// import AMPImage from './AMPComponents/AMPImage.jsx';
// import EmailText from './KlaviyoComponents/EmailText.jsx';
import EmailLink from './KlaviyoComponents/EmailLink.jsx';
import EmailImage from './KlaviyoComponents/EmailImage.jsx';
import EmailLinkImage from './KlaviyoComponents/EmailLlinkImage.jsx';
import EmailRowContainer from './KlaviyoComponents/EmailRowContainer.jsx';
import EmailHr from './KlaviyoComponents/EmailHr.jsx';
import EmailColContainer from './KlaviyoComponents/EmailColContainer.jsx';
import {calcBtn,calcBtnPerc,calcRowBtn, check,containerChildStyle, imagify, singleLinkStyle}  from "./stylify";
import { Interweave } from "interweave";
import { Column,Hr,Row,Button,Container,Section, } from "@react-email/components";
// import EmailRow2 from './KlaviyoComponents/EmailRow2.jsx';

export const Klaviyo=(state)=>{
    const ht= state?.newContent?.content?.map(({title,classes,text,style:styling,content,src,alt,href,id},index)=>{
      if(title=="text"){
        return <EmailText className={classes ? classes : undefined} text={text} style={styling}/>
      } 
      if(title=="link"){
        return <EmailLink className={classes ? classes : undefined} text={text} style={styling} alt={alt}/>
      }
      if(title=="html"){   
  return <table border="0" cellpadding="0" cellspacing="0" role="presentation" style={{width: "100%"}} width="100%">           
        <tr width="100%">
                <td width={"100%"} align='center' style={{paddingBottom:`${styling.marginBottom}px`,
                       paddingTop:`${styling.marginTop}px`,paddingLeft:`${styling.marginLeft}px`,paddingRight:`${styling.marginRight}px`,}}>
                    {/* <JsxParser  renderUnrecognized={true} renderInWrapper={false} allowUnknownElements={true} disableFragments autoCloseVoidElements componentsOnly={false }  components={{Button, Column, Img, Section, Container, Text, Row, Hr, Heading,Font,Link,Spacer}} jsx={`${text}`}/> */}
                  <Interweave className={classes ? classes : undefined} content={text} noWrap={true} />
                </td>
              </tr>
              </table>
        
      }
    if(title=="button"){
      return <EmailBtn className={classes ? classes : undefined} text={text} style={styling} />
  }else if(title=="image"){
  return <EmailImage className={classes ? classes : undefined} alt={alt} src={src} style={styling}/>    
    }
    else if(title=="link-image"){
  return <EmailLinkImage className={classes ? classes : undefined} alt={alt} src={src} style={styling}/>
        }
    else if(title=="hr"){
      return  <EmailHr className={classes ? classes : undefined} style={styling} />
    }
    else if(title=="col-container"){
      return <>
      {"\n"}
      {`<!--${styling.href?styling.href:"COLUMN CONTAINER"} -->`}
      {"\n"}
      <EmailRowContainer className={classes ? classes : undefined} styling={styling} >
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       <tr className='m-center'>
  {content.map(({title,text,style,src,classes,content,alt,id},number)=>{
  if(title== "col-container"){
    return <>
    {"\n"}
    {`<!-- SUB COLUMN -->`}
    {"\n"}
    {/* <Column width={imagify(style.width)} bgcolor={style.backgroundfallback} background={style.backgroundImage?style.backgroundImage:""} valign={style.verticalAlignment} align={style.containerAlignment}  style={{...check(style,"col2-container"),background:style.backgroundColor,border:hover==`${newId}${id}`?"3px dotted blue":"1px dashed #8AB7EC",width:style.width,position:"relative",backgroundColor:"aqa",height:`${style.height}px`}}> */}
    <Column valign="middle" width={imagify(style.width)}  bgcolor={style.backgroundfallback} background={style.backgroundImage?style.backgroundImage:""}  className={styling.responsive?"td":""} align='center' style={{...check(style,"col2-container"),padding:"0px"}}>
    {/* <Column className='td' valign={style.verticalAlignment} align={style.containerAlignment} style={{background:style.backgroundColor,width:style.width,backgroundColor:style.backgroundfallback,fontSize:"0pt","mso-line-height-rule":"exactly",lineHeight:"0pt",padding:"0", margin:"0", fontWeight:"normal",}}> */}
                    {/* <div  style={{...style,minWidth:"50px",minHeight:"10px",paddingTop:`${style.paddingTop}px`,paddingBottom:`${style.paddingBottom}px`,paddingLeft:`${style.paddingLeft}px`,paddingRight:`${style.paddingRight}px`}}> */}
  <table align={style.containerAlignment} className={style.childrenAlignment=="right"?"t-right-2":style.childrenAlignment=="left"?"t-left-2":"center-float"} style={{paddingTop:`${style.paddingTop}px`,paddingBottom:`${style.paddingBottom}px`,paddingLeft:`${style.paddingLeft}px`,paddingRight:`${style.paddingRight}px`}} role="presentation" border="0" cellspacing="0" cellpadding="0" >
  <tr width="100%" className='m-center'>
  {/* style={{...style,minWidth:"100%",minHeight:"10px",paddingTop:`${style.paddingTop}px`,paddingBottom:`${style.paddingBottom}px`,paddingLeft:`${style.paddingLeft}px`,paddingRight:`${style.paddingRight}px`}} */}
      {content.map(({title,text,classes,src,style,id:newerId,alt})=>{
                       if(title=="text" || title=="paragraph"){
                        return(
                          <Column align='center' class="mobile-td" >
                            <table>
                              <tr>
                              <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                                <td valign='middle'>
                                  <EmailText className={classes ? classes : undefined} style={style} text={text}/>
                                </td>
                                <td className='m-hide' width={"4px"} style={{fontSize:"4px",lineHeight:"4px",width:"4px"}}>&nbsp;</td>
                              </tr>
                            </table>
                        </Column>  
                        )
                      }else if(title=="html"){
                          return (
                            <Column align='center' class="mobile-td">
                    <Interweave className={classes ? classes : undefined} content={text} noWrap={true} />
  
                            </Column>
                          )
                      }
                      if(title=="link"){
                        return(
                          <Column align='center' class="mobile-td" >
                          <table>
                            <tr>
                            <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                              <td >
                              <EmailLink className={classes ? classes : undefined} style={style} text={text} alt={alt}/>
                              </td>
                              <td className='m-hide' width={"4px"} style={{fontSize:"4px",lineHeight:"4px",width:"4px"}}>&nbsp;</td>
                            </tr>
                          </table>
                      </Column> 
                        )
                      }
                      else if(title =="image"){
                        return(
                          <Column   align={style.imageAlignment} className='mobile-td'>
                          <table width={"100%"} border="0" cellspacing="0" cellpadding="0">
                            <tr>
            <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                             <td>
                              <EmailImage className={classes ? classes : undefined} alt={alt} style={style} src={src}/>
                          </td>
            <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
  
                            </tr>
                            </table>
                      </Column> 
                            )
                            }
                            else if(title =="link-image"){
                              return(
                                <Column   align={style.imageAlignment} className='mobile-td'>
                                <table border="0" cellspacing="0" cellpadding="0">
                                  <tr>
              <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                                    <td>
                                    <EmailLinkImage className={classes ? classes : undefined} alt={alt} style={style} src={src}/>
    </td>
    
    <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
    
                                  </tr>
                                  </table>
                            </Column>
                                  )
                                  }else if(title=="button"){
                              return (
                          <Column align='center' class="mobile-td" >
                            <table>
                              <tr>
                              <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                                <td>
                                <EmailBtn className={classes ? classes : undefined} style={style} text={text}/>
  
                                </td>
                                <td className='m-hide' width={"4px"} style={{fontSize:"4px",lineHeight:"4px",width:"4px"}}>&nbsp;</td>
                              </tr>
                            </table>
                        </Column> 
                              )
                            }
                            else if (title=="spacer"){
                              return <Column width={style.width} height={style.height}>{`&nbsp;`}</Column>
                            }
                    })}
                    </tr>
                   </table>
  </Column>
    {"\n"}
    {`<!-- END SUB COLUMN -->`}
    {"\n"}
    </>
  } else if(title=="row-container"){
    return <>
    {"\n"}
    {`<!--SUB COLUMN -->`}
    {"\n"}
        {style.backgroundImage?`\n <!--[if !gte mso 9]><!-- --> \n`:""}
     <td valign={style.verticalAlign} background={style.backgroundImage} bgcolor={style.backgroundfallback}  width={imagify(style.width)}  className={styling.responsive?`${classes} td`:`${classes}`} align='center' style={{...check(style,"col2-row")}}>
    {style.backgroundImage?`\n <!--<![endif]-->\n
  <!--[if gte mso 9]>
  <td valign="middle" align="center" style="background-image: url('${style.backgroundImage}'); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: ${style.backgroundfallback?style.backgroundfallback:style.backgroundColor}; border-radius: 0px;" bgcolor="${style.backgroundfallback || 'green'}" background="${style.backgroundImage}">
  <![endif]-->\n
  <!--[if gte mso 9]>
  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px">
  <v:fill src="${style.backgroundImage}" color="${style.backgroundfallback}" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/>
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
      <table align='center' width="100%" style={{width: "100%"}} border="0" cellpadding="0" cellspacing="0" role="presentation" >
    <tr>
    <td height={"100%"} valign={style.verticalAlignment} align={style.containerAlignment} style={{background:style.backgroundColor,paddingBottom:`${style.paddingBottom}px`,
            paddingTop:`${style.paddingTop}px`,paddingLeft:`${style.paddingLeft}px`,paddingRight:`${style.paddingRight}px`}} >
    {/* <EmailRowContainer colRow={true}  styling={style}> */}
        {content.map(({text,classes,style:styles,src,title,alt,id})=>{
          if(title=="text" || title=="paragraph"){
              return <EmailText className={classes ? classes : undefined} text={text} style={styles}/>
              }else if(title=="spacer"){
                return(
                <table style={{width:"100%"}} border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr>
                <td width={"100%"} height={styles.height}>
                {'&nbsp;'}
                </td>
                   </tr>
                </table>
                )
                }
            else if(title=="link"){
              return <EmailLink className={classes ? classes : undefined} style={styles} text={text} alt={alt}/>
              }else if(title=="html"){
                return <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">  
                <tr width="100%">
               <td width={"100%"} align={styles.containerAlignment} >
                {/* <table width={"100%"}  align={styles.containerAlignment} className={styles.textAlign2=="m-center"?"center m-center":styles.textAlign2=="m-right"?"right":"m-left"} style={{paddingTop:`${styles.marginTop}px`,paddingBottom:`${styles.marginBottom}px`,paddingLeft:`${styles.marginLeft}px`,paddingRight:`${styles.marginRight}px`}} border="0" cellspacing="0" cellpadding="0">
                  <tr width="100%">
                  <td align="center" mc:edit={`mc${index}${id}`} style={check(styles,"ind-text")}>    */}
                    <Interweave className={classes ? classes : undefined} content={text} noWrap={true} />
                     {/* </td>
                   </tr>
                 </table> */}
                </td>
                            </tr>
                            </table>
                }else if(title=="image"){
               return <EmailImage className={classes ? classes : undefined} alt={alt} src={src} style={styles}/>         
             }
             else if(title=="link-image"){
              return <EmailLinkImage className={classes ? classes : undefined} alt={alt} src={src} style={styles}/>        
         }else if(title=="hr"){
          return <EmailHr className={classes ? classes : undefined} style={styles}/>
          }else if(title=="button"){
            return <EmailBtn className={classes ? classes : undefined} style={styles} text={text}/> 
          }
        })}
        </td>
        </tr>
        </table>
      {/* </EmailRowContainer>  */}
      {style.backgroundImage?`\n <!--[if gte mso 9]>
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
    {"\n"}
    {`<!-- SUB COLUMN -->`}
    {"\n"}
    </>
  }
  else if(title=="spacer"){
    return <>
    {"\n"}
    {`<!-- COLUMN SPACER -->`}
    {"\n"}
     <Column className='td' style={{width:style.width,maxWidth:style.width,height:`${style.height}px`,fontSize:`${style.height}px`,lineHeight:`${style.height}px`}} height={imagify(style.height)} width={style.width}>
    {'&nbsp;'}
  </Column>
    {"\n"}
    {`<!--END COLUMN SPACER -->`}
    {"\n"}
    </>
  }
  })}
  </tr>
  </table>
  </EmailRowContainer>   
            {"\n"}
            {`<!--END ${styling.href?styling.href:"COLUMN CONTAINER"} -->`}
            {"\n"}
            </>
        
    }
    // end of col-container
    // end of col-container
    // end of col-container
    // end of col-container
    // end of col-container
    else if(title=="row-container"){  
      return  <>
      {"\n"} 
      {`<!-- START ${styling.href?styling.href:"ROW Container"} -->`}
      {"\n"}
      <EmailRowContainer className={classes ? classes : undefined} styling={styling}>
  {content.map(({title,text,classes,style,src,content,alt,id})=>{
    if(title=="text"){
      return <EmailText className={classes ? classes : undefined} style={style} text={text}/>
      }
      if(title=="link"){
        return <EmailLink className={classes ? classes : undefined} style={style} text={text} alt={alt}/>
        }else if (title=="image"){
         return <EmailImage className={classes ? classes : undefined} alt={alt} src={src} style={style}/>
        }else if (title=="link-image"){
          return <EmailLinkImage className={classes ? classes : undefined} alt={alt} src={src} style={style}/>
        }else if(title=="paragraph"){
          return <EmailText className={classes ? classes : undefined} style={style} text={text}/>
         }
         else if(title=="html"){
          return  (
        
                // <JsxParser  renderUnrecognized={true} renderInWrapper={false} allowUnknownElements={true} disableFragments autoCloseVoidElements componentsOnly={false }  components={{Button, Column, Img, Section, Container, Text, Row, Hr, Heading,Font,Link,Spacer}} jsx={`${text}`} />
                <Interweave className={classes ? classes : undefined} content={text} noWrap={true} />
          ) 
   
           }else if(title=="hr"){
       return <EmailHr className={classes ? classes : undefined} style={style}/>
        }
        else if(title=="button"){
        return <EmailBtn className={classes ? classes : undefined} style={style} text={text}/> 
        }else if(title== "col-container"){
    return (
      <EmailColContainer className={classes ? classes : undefined} styling={style} >
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       <tr className='m-center'>
  {content.map(({title,text,classes,src,style,id:newerId,alt})=>{
                       if(title=="text"){
                        return(
                        <td className='mobile-td' width={"50%"}>
                          <table  align="center" border="0" cellspacing="0" cellpadding="0">
                           <tr>
                          {text.split("_").map((tex,i)=>{
                            return (
                              <>
                          <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                          <td style={check(style,"ind-text")} valign={style.verticalAlignment} align={style.containerAlignment}>
                            <EmailText className={classes ? classes : undefined} style={style} text={tex}/>
                            </td>
                          <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                              </>
                          )
                          })}
                        
                          </tr>
                          </table>
  
                          </td>
                        )
                      }
                     
                      if(title=="paragraph"){
                        return(
                        <td className='mobile-td'>
                          <table  align="center" border="0" cellspacing="0" cellpadding="0">
                           <tr>
                          <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                            <td style={check(style,"ind-text")} valign={style.verticalAlignment} align={style.containerAlignment}>
                            <EmailText className={classes ? classes : undefined} style={style} text={text}/>
                            </td>
                          <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                          </tr>
                          </table>
                          </td>
                        )
                      }
                      if(title=="link"){
                        return(
                          <td className='mobile-td'>
                          <table  align="center" border="0" cellspacing="0" cellpadding="0">
                           <tr>
            <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                            <td style={check(style,"ind-text")} valign={style.verticalAlignment} align={style.containerAlignment}>
                            <EmailLink className={classes ? classes : undefined} alt={alt} style={style} text={text}/>
            </td>
            <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
            </tr>
            </table>
                        </td>
                       
                          
                          
                       
                        )
                      }else if(title=="html"){
                      return(
                        <td className='td'  width={style.width} align='center' style={{width:style.width,maxWidth:style.width}} >
                        <table  cellpadding="0" cellspacing="0" role="presentation" class="center" align={style.containerAlignment} width={"100%"}>
                         <tr><td align='center'  className={style.textAlign2?style.textAlign2:""} style={check(style,"ind-text")} valign={style.verticalAlignment} >
                    {/* <JsxParser  renderUnrecognized={true} renderInWrapper={false} allowUnknownElements={true} disableFragments autoCloseVoidElements componentsOnly={false }  components={{Button, Column, Img, Section, Container, Text, Row, Hr, Heading,Font,Link,Spacer}} jsx={`${text}`} /> */}
                    <Interweave className={classes ? classes : undefined} content={text} noWrap={true} />
                       </td>
                       </tr>
                      </table>
                      </td>
                        
                     
                      )
                    }
                    else if(title =="image"){
                      return(
                        <Column   align={style.imageAlignment} className='mobile-td'>
                          <table width={"100%"} border="0" cellspacing="0" cellpadding="0">
                            <tr>
            <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                             <td>
                              <EmailImage className={classes ? classes : undefined} alt={alt} style={style} src={src}/>
                          </td>
            <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
  
                            </tr>
                            </table>
                      </Column> 
                          )
                          }
                          else if(title =="link-image"){
                            return(
                              <Column   align={style.imageAlignment} className='mobile-td'>
                              <table border="0" cellspacing="0" cellpadding="0">
                                <tr>
            <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
                                  <td>
                                  <EmailLinkImage className={classes ? classes : undefined} alt={alt} style={style} src={src}/>
  </td>
  
  <td className='m-hide' width={"10px"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
  
                                </tr>
                                </table>
                          </Column>
                                )
                                }else if(title=="button"){
        return (
          <td align={style.containerAlignment} class="mobile-td" >
          <table align='center' border="0" cellspacing="0" cellpadding="0" >
          <tr width="100%">
                {/* <td className='m-hide' width={"10"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td> */}
                <td width={style.width.includes("%")?calcRowBtn(style.width,style.width):style.width}  style={{fontFamily:style.fontFamily,color:style.color,fontSize:`${style.fontSize}px`,lineHeight:`${style.fontSize}px`,maxWidth:"650px",paddingLeft:`${style.marginLeft}px`,paddingRight:`${style.marginRight}px`,paddingBottom:`${style.marginBottom}px`,paddingTop:`${style.marginTop}px`}} >
                <EmailBtn className={classes ? classes : undefined} style={style} text={text}/>
                </td>
                <td className='m-hide' width={"10"} style={{fontSize:"10px",lineHeight:"10px",width:"10px"}}>&nbsp;</td>
  
              </tr>
            </table>
          </td>
           )
  }else if(title=="spacer"){
  return <td align='center' class="mobile-td" height={imagify(style.height)} width={style.width} style={{width:`${style.width}`,maxWidth:`${style.width}`,height:`${style.height}px`}}>
  {'&nbsp;'}
  </td>
                            }
                    })}
  </tr>
  </table>
  </EmailColContainer>
    )
  }
  else if(title== "row-container"){
    return <EmailRowContainer styling={style}>
      {content.map(({title,text,src,classes,style,id:newerId,alt})=>{
                      if(title=="text" || title=="paragraph"){
                        return <EmailText className={classes ? classes : undefined} style={style} text={text} />
                           }
                           if(title=="link"){
                            return <EmailLink className={classes ? classes : undefined} alt={alt} style={style} text={text} />
                               
                               } else if(title=="html"){
                      // return   <JsxParser  renderUnrecognized={true} renderInWrapper={false} allowUnknownElements={true} disableFragments autoCloseVoidElements componentsOnly={false }  components={{Button, Column, Img, Section, Container, Text, Row, Hr, Heading,Font,Link,Spacer}} jsx={`${text}`} />
                      <Interweave className={classes ? classes : undefined} content={text} noWrap={true} />   
                    }
                        else if(title =="image"){
                          return <EmailImage className={classes ? classes : undefined} alt={alt} style={style} src={src}/>
                              }
                              else if(title =="link-image"){
                                return  <tr >
                                <td align={style.imageAlignment} style={{margin:"0 auto"}}  >
                                <EmailLinkImage  className={classes ? classes : undefined} alt={alt} style={style} src={src}/>
                               </td></tr>
                                    }
                            
                            else if(title=="hr"){
                              return<EmailHr className={classes ? classes : undefined} style={style}/>
                             
                            } 
                            else if(title=="button"){
                              return  <EmailBtn className={classes ? classes : undefined} style={style} text={text} />  
                                            }
                                            else if(title=="spacer"){
                                              return (
                                                <table>
  
                                                <tr>
                                                  <td width={"100%"}  height={style.height} style={{width:"100%",height:`${style.heightpx}`,lineHeight:`${style.heightpx}`,fontSize:`${style.heightpx}`}}>
                                                  {'&nbsp;'}
                                                  </td>
                                                </tr>
                                                </table>
                                              )
                                            }
                    })}
      </EmailRowContainer>
  }
  else if(title== "spacer"){
    return (
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
        <td  style={{fontSize:`${style.height}px`,lineHeight:`${style.height}px`}} height={imagify(style.height)}>
      {'&nbsp;'}
       </td>
       </tr>
       </table>
  
    )
  }
   })}
  </EmailRowContainer>
            {"\n"}
            {`<!--END ${styling.href?styling.href:"ROW Container"} -->`}
            {"\n"}
            </>
    
    }
    else if(title==="spacer"){
      return <table border="0" cellpadding="0" cellspacing="0" role="presentation" style={{width: "100%"}} width="100%">           
        <tr>
          <td height={styling?.height} style={{lineHeight:`${styling.height}px`,fontSize:`${styling.height}px`}}>{'&nbsp;'}</td>
        </tr>
        </table>
  
    }
    })
    return ht
   }