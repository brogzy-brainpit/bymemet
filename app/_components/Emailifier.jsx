export const klaviyo=(newContent)=>{
    const ht= newContent?.content?.map(({title,classes,text,style:styling,content,src,alt,href,id},index)=>{
      if(title=="text"){
        return <EmailText classes={classes} text={text} style={styling}/>
      } 
      if(title=="link"){
        return <EmailLink classes={classes} text={text} style={styling} alt={alt}/>
      }
      if(title=="html"){   
  return <table border="0" cellpadding="0" cellspacing="0" role="presentation" style={{width: "100%"}} width="100%">           
        <tr width="100%">
                <td width={"100%"} mc:edit={`mc${id}`} align='center' style={{paddingBottom:`${styling.marginBottom}px`,
                       paddingTop:`${styling.marginTop}px`,paddingLeft:`${styling.marginLeft}px`,paddingRight:`${styling.marginRight}px`,}}>
                    {/* <JsxParser  renderUnrecognized={true} renderInWrapper={false} allowUnknownElements={true} disableFragments autoCloseVoidElements componentsOnly={false }  components={{Button, Column, Img, Section, Container, Text, Row, Hr, Heading,Font,Link,Spacer}} jsx={`${text}`}/> */}
                  <Interweave classes={classes} content={text} noWrap={true} />
                </td>
              </tr>
              </table>
        
      }
    if(title=="button"){
      return <EmailBtn classes={classes} text={text} style={styling} />
  }else if(title=="image"){
  return <EmailImage classes={classes} alt={alt} src={src} style={styling}/>    
    }
    else if(title=="link-image"){
  return <EmailLinkImage classes={classes} alt={alt} src={src} style={styling}/>
        }
    else if(title=="hr"){
      return  <EmailHr classes={classes} style={styling} />
    }
    else if(title=="col-container"){
      return <>
      {"\n"}
      {`<!--${styling.href?styling.href:"COLUMN CONTAINER"} -->`}
      {"\n"}
      <EmailRowContainer classes={classes} styling={styling} >
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
                                  <EmailText classes={classes} style={style} text={text}/>
                                </td>
                                <td className='m-hide' width={"4px"} style={{fontSize:"4px",lineHeight:"4px",width:"4px"}}>&nbsp;</td>
                              </tr>
                            </table>
                        </Column>  
                        )
                      }else if(title=="html"){
                          return (
                            <Column align='center' class="mobile-td">
                    <Interweave classes={classes} content={text} noWrap={true} />
  
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
                              <EmailLink classes={classes} style={style} text={text} alt={alt}/>
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
                              <EmailImage classes={classes} alt={alt} style={style} src={src}/>
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
                                    <EmailLinkImage classes={classes} alt={alt} style={style} src={src}/>
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
                                <EmailBtn classes={classes} style={style} text={text}/>
  
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
     <Column  width={imagify(style.width)}  className={styling.responsive?"td":""} align='center' style={{...check(style,"col2-container"),padding:"0px"}}>
    {"\n"}
    {`<!--SUB COLUMN -->`}
    {"\n"}
    <EmailRowContainer colRow={true}  styling={style}>
        {content.map(({text,classes,style:styles,src,title,alt,id})=>{
          if(title=="text" || title=="paragraph"){
              return <EmailText classes={classes} text={text} style={styles}/>
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
              return <EmailLink classes={classes} style={styles} text={text} alt={alt}/>
              }else if(title=="html"){
                return <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">  
                <tr width="100%">
               <td width={"100%"} align={styles.containerAlignment} >
                {/* <table width={"100%"}  align={styles.containerAlignment} className={styles.textAlign2=="m-center"?"center m-center":styles.textAlign2=="m-right"?"right":"m-left"} style={{paddingTop:`${styles.marginTop}px`,paddingBottom:`${styles.marginBottom}px`,paddingLeft:`${styles.marginLeft}px`,paddingRight:`${styles.marginRight}px`}} border="0" cellspacing="0" cellpadding="0">
                  <tr width="100%">
                  <td align="center" mc:edit={`mc${index}${id}`} style={check(styles,"ind-text")}>    */}
                    <Interweave classes={classes} content={text} noWrap={true} />
                     {/* </td>
                   </tr>
                 </table> */}
                </td>
                            </tr>
                            </table>
                }else if(title=="image"){
               return <EmailImage classes={classes} alt={alt} src={src} style={styles}/>         
             }
             else if(title=="link-image"){
              return <EmailLinkImage classes={classes} alt={alt} src={src} style={styles}/>        
         }else if(title=="hr"){
          return <EmailHr classes={classes} style={styles}/>
          }else if(title=="button"){
            return <EmailBtn classes={classes} style={styles} text={text}/> 
          }
        })}
      </EmailRowContainer> 
    {"\n"}
    {`<!-- SUB COLUMN -->`}
    {"\n"}
    </Column>
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
      <EmailRowContainer classes={classes} styling={styling}>
  {content.map(({title,text,classes,style,src,content,alt,id})=>{
    if(title=="text"){
      return <EmailText classes={classes} style={style} text={text}/>
      }
      if(title=="link"){
        return <EmailLink classes={classes} style={style} text={text} alt={alt}/>
        }else if (title=="image"){
         return <EmailImage classes={classes} alt={alt} src={src} style={style}/>
        }else if (title=="link-image"){
          return <EmailLinkImage classes={classes} alt={alt} src={src} style={style}/>
        }else if(title=="paragraph"){
          return <EmailText classes={classes} style={style} text={text}/>
         }
         else if(title=="html"){
          return  (
        
                // <JsxParser  renderUnrecognized={true} renderInWrapper={false} allowUnknownElements={true} disableFragments autoCloseVoidElements componentsOnly={false }  components={{Button, Column, Img, Section, Container, Text, Row, Hr, Heading,Font,Link,Spacer}} jsx={`${text}`} />
                <Interweave classes={classes} content={text} noWrap={true} />
          ) 
   
           }else if(title=="hr"){
       return <EmailHr classes={classes} style={style}/>
        }
        else if(title=="button"){
        return <EmailBtn classes={classes} style={style} text={text}/> 
        }else if(title== "col-container"){
    return (
      <EmailColContainer classes={classes} styling={style} >
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
                            <EmailText classes={classes} style={style} text={tex}/>
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
                            <EmailText classes={classes} style={style} text={text}/>
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
                            <EmailLink classes={classes} alt={alt} style={style} text={text}/>
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
                         <tr><td mc:edit={`mc${index}${newerId}`} align='center'  className={style.textAlign2?style.textAlign2:""} style={check(style,"ind-text")} valign={style.verticalAlignment} >
                    {/* <JsxParser  renderUnrecognized={true} renderInWrapper={false} allowUnknownElements={true} disableFragments autoCloseVoidElements componentsOnly={false }  components={{Button, Column, Img, Section, Container, Text, Row, Hr, Heading,Font,Link,Spacer}} jsx={`${text}`} /> */}
                    <Interweave classes={classes} content={text} noWrap={true} />
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
                              <EmailImage classes={classes} alt={alt} style={style} src={src}/>
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
                                  <EmailLinkImage classes={classes} alt={alt} style={style} src={src}/>
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
                <EmailBtn classes={classes} style={style} text={text}/>
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
                        return <EmailText classes={classes} style={style} text={text} />
                           }
                           if(title=="link"){
                            return <EmailLink classes={classes} alt={alt} style={style} text={text} />
                               
                               } else if(title=="html"){
                      // return   <JsxParser  renderUnrecognized={true} renderInWrapper={false} allowUnknownElements={true} disableFragments autoCloseVoidElements componentsOnly={false }  components={{Button, Column, Img, Section, Container, Text, Row, Hr, Heading,Font,Link,Spacer}} jsx={`${text}`} />
                      <Interweave classes={classes} content={text} noWrap={true} />   
                    }
                        else if(title =="image"){
                          return <EmailImage classes={classes} alt={alt} style={style} src={src}/>
                              }
                              else if(title =="link-image"){
                                return  <tr >
                                <td align={style.imageAlignment} style={{margin:"0 auto"}}  >
                                <EmailLinkImage  classes={classes} alt={alt} style={style} src={src}/>
                               </td></tr>
                                    }
                            
                            else if(title=="hr"){
                              return<EmailHr classes={classes} style={style}/>
                             
                            } 
                            else if(title=="button"){
                              return  <EmailBtn classes={classes} style={style} text={text} />  
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
    else if(title="spacer"){
      return <table border="0" cellpadding="0" cellspacing="0" role="presentation" style={{width: "100%"}} width="100%">           
        <tr>
          <td height={styling?.height} style={{lineHeight:`${styling.height}px`,fontSize:`${styling.height}px`}}>{'&nbsp;'}</td>
        </tr>
        </table>
  
    }
    })
    return ht
   }