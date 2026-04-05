const check= function(style,title){
 if(title=="text" || title=="paragraph" || title=="html" || title=="link"){
   return {
      color: style.color || 'initial',
      display: "block",
      width: style.width || 'auto',
      fontFamily: style.fontFamily || 'inherit',
      background: style.backgroundColor || 'transparent',
      textDecoration: style.textDecoration || 'none',
      fontWeight: style.fontWeight || 'normal',
      letterSpacing: `${style.letterSpacing || 0}px`,
      "mso-line-height-rule": "exactly",
      lineHeight: `${style.lineHeight || 16}px`,
      borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
      borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
      borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
      borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
      fontSize: `${style.fontSize || 14}px`,
      textTransform: style.textTransform || 'none',
      backgroundColor: style.backgroundColor || 'transparent',
      textAlign: style.textAlign || 'left',
      padding: `${style.paddingTop || 0}px ${style.paddingRight || 0}px ${style.paddingBottom || 0}px ${style.paddingLeft || 0}px`
    }}
if(title=="ind-text"){
return {
  boxSizing: "border-box",
  color: style.color || "initial",
  fontFamily: style.fontFamily || "inherit",
  fontWeight: style.fontWeight || "normal",
  letterSpacing: `${style.letterSpacing || 0}px`,
  "mso-line-height-rule": "exactly",
  borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
  borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
  borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
  borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
  fontSize: `${style.fontSize || 14}px`,
  textDecoration: "none",
  fontStyle: "normal",
  textTransform: style.textTransform || "none",
  backgroundColor: style.backgroundColor || "transparent",
  textAlign: style.textAlign || "left",
  padding: `${style.paddingTop || 0}px ${style.paddingRight || 0}px ${style.paddingBottom || 0}px ${style.paddingLeft || 0}px`,

};}
if(title=="normal-text"){
  return {
  color: style.color || "initial",
  display: "block",
  fontFamily: style.fontFamily || "inherit",
  background: style.backgroundColor || "transparent",
  fontWeight: style.fontWeight || "normal",
  letterSpacing: `${style.letterSpacing || 0}px`,
  "mso-line-height-rule": "exactly",
  lineHeight: `${style.lineHeight || 16}px`,
  borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
  borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
  paddingTop: `${style.paddingTop || 0}px`,
  paddingBottom: `${style.paddingBottom || 0}px`,
  paddingLeft: `${style.paddingLeft || 0}px`,
  paddingRight: `${style.paddingRight || 0}px`,
  borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
  borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
  fontSize: `${style.fontSize || 14}px`,
  textTransform: style.textTransform || "none",
  backgroundColor: style.backgroundColor || "transparent",
  textAlign: style.textAlign || "left",
};

}
if(title=="text-td"){
return {
  color: style.color || "initial",
  border:
    style.borderWidth > 0
      ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
      : "none",
  minHeight: "8px",
  width: style.width || "auto",
  fontFamily: style.fontFamily || "inherit",
  background: style.backgroundColor || "transparent",
  "mso-para-margin": `${style.marginTop || 0}px ${style.marginRight || 0}px ${style.marginBottom || 0}px ${style.marginLeft || 0}px`,
  fontWeight: style.fontWeight || "normal",
  letterSpacing: `${style.letterSpacing || 0}px`,
  "mso-line-height-rule": "exactly",
  lineHeight: `${style.lineHeight || 16}px`,
  borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
  borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
  borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
  borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
  fontSize: `${style.fontSize || 14}px`,
  textTransform: style.textTransform || "none",
  backgroundColor: style.backgroundColor || "transparent",
  textAlign: style.textAlign || "left",
  padding: `${style.paddingTop || 0}px ${style.paddingRight || 0}px ${style.paddingBottom || 0}px ${style.paddingLeft || 0}px`,
  "mso-padding-top-alt": `${style.paddingTop || 0}px`,
  "mso-padding-bottom-alt": `${style.paddingBottom || 0}px`,
  "mso-padding-left-alt": `${style.paddingLeft || 0}px`,
  "mso-padding-right-alt": `${style.paddingRight || 0}px`,
};
}  
if(title=="col-container"){
  return {
  width: style.width || "auto",
  borderLeft:
    style.borderWidth > 0
      ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
      : "none",
  borderRight:
    style.borderWidth > 0
      ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
      : "none",
  paddingTop: `${style.paddingTop || 0}px`,
  paddingBottom: `${style.paddingBottom || 0}px`,
  paddingLeft: `${style.paddingLeft || 0}px`,
  paddingRight: `${style.paddingRight || 0}px`,
  backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : "",
  backgroundRepeat: style.backgroundImage ? "no-repeat" : "",
  backgroundPosition: style.backgroundImage ? "center center" : "",
  backgroundSize: style.backgroundImage ? "cover" : "",
  backgroundColor: style.backgroundColor || "transparent",
  borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
  borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
  borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
  borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
};
}
         if(title=="EmailRowContainer"){
          return {
  width: style.width || "auto",
  border:
    style.borderWidth > 0
      ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
      : "none",
  paddingTop: `${style.paddingTop || 0}px`,
  paddingBottom: `${style.paddingBottom || 0}px`,
  paddingLeft: `${style.paddingLeft || 0}px`,
  paddingRight: `${style.paddingRight || 0}px`,
  backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : "",
  backgroundRepeat: style.backgroundImage ? "no-repeat" : "",
  backgroundPosition: style.backgroundImage ? "center center" : "",
  backgroundSize: style.backgroundImage ? "cover" : "",
  background: style.backgroundColor || "transparent",
  borderTopLe

          }
        }
         if(title=="latest-col-container"){
        return {
  height: "unset",
  border:
    style.borderWidth > 0
      ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
      : "none",
  paddingTop: `${style.paddingTop || 0}px`,
  paddingBottom: `${style.paddingBottom || 0}px`,
  paddingLeft: `${style.paddingLeft || 0}px`,
  paddingRight: `${style.paddingRight || 0}px`,
  backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : "",
  backgroundRepeat: style.backgroundImage ? "no-repeat" : "",
  backgroundPosition: style.backgroundImage ? "center center" : "",
  backgroundSize: style.backgroundImage ? "cover" : "",
  background: style.backgroundColor || "transparent",
  borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
  borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
  borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
  borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
};
}
                 if(title=="col2-container"){
                 return {
  verticalAlign: style.verticalAlignment || "baseline",
  width: style.width || "auto",
  border:
    style.borderWidth > 0
      ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
      : "none",
  paddingTop: `${style.paddingTop || 0}px`,
  paddingBottom: `${style.paddingBottom || 0}px`,
  paddingLeft: `${style.paddingLeft || 0}px`,
  paddingRight: `${style.paddingRight || 0}px`,
  backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : "",
  backgroundRepeat: style.backgroundImage ? "no-repeat" : "",
  backgroundPosition: style.backgroundImage ? "top center" : "",
  backgroundSize: style.backgroundImage ? "cover" : "",
  background: style.backgroundColor || "transparent",
  borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
  borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
  borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
  borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
};
}
                       if (title === "col2-row") {
  return {
    verticalAlign: style.verticalAlignment || "baseline",
    width: style.width || "auto",
    border:
      style.borderWidth > 0
        ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
        : "none",
    backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : "",
    backgroundRepeat: style.backgroundImage ? "no-repeat" : "",
    backgroundPosition: style.backgroundImage ? "top center" : "",
    backgroundSize: style.backgroundImage ? "cover" : "",
    borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
    borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
    borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
    borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
    padding: "0px",
  };
}

if (title === "col2-row-minify") {
  return {
    boxSizing: "border-box",
    verticalAlign: style.verticalAlignment || "baseline",
    width: style.width || "auto",
    border:
      style.borderWidth > 0
        ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
        : "none",
    backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : "",
    backgroundRepeat: style.backgroundImage ? "no-repeat" : "",
    backgroundPosition: style.backgroundImage ? "top center" : "",
    backgroundSize: style.backgroundImage ? "cover" : "",
    backgroundColor: style.backgroundColor || "transparent",
    borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
    borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
    borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
    borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
    paddingBottom: `${style.paddingBottom || 0}px`,
    paddingTop: `${style.paddingTop || 0}px`,
    paddingLeft: `${style.paddingLeft || 0}px`,
    paddingRight: `${style.paddingRight || 0}px`,
  };
}

if (title === "col3-container") {
  return {
    verticalAlign: style.verticalAlignment || "baseline",
    width: style.width || "auto",
    border:
      style.borderWidth > 0
        ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
        : "none",
    paddingTop: `${style.paddingTop || 0}px`,
    paddingBottom: `${style.paddingBottom || 0}px`,
    paddingLeft: `${style.paddingLeft || 0}px`,
    paddingRight: `${style.paddingRight || 0}px`,
    backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : "",
    backgroundRepeat: style.backgroundImage ? "no-repeat" : "",
    backgroundPosition: style.backgroundImage ? "top center" : "",
    backgroundSize: style.backgroundImage ? "cover" : "",
    background: style.backgroundColor || "transparent",
    borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
    borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
    borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
    borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
  };
}

if (title === "row-container") {
  const marginCenter = `${style.marginTop || 0}px auto ${style.marginBottom || 0}px auto`;
  const marginRightAligned = `${style.marginTop || 0}px ${style.marginLeft || 0}px ${style.marginBottom || 0}px auto`;
  const marginLeftAligned = `${style.marginTop || 0}px auto ${style.marginBottom || 0}px ${style.marginRight || 0}px`;

  let margin = marginCenter;
  if (style.containerAlignment === "right") margin = marginRightAligned;
  else if (style.containerAlignment !== "center") margin = marginLeftAligned;

  return {
    width: style.width || "auto",
    margin,
    borderRadius: `${style.borderRadius || 0}px`,
    minHeight: "50px",
    height: `${style.height || "auto"}`,
    maxHeight: `${style.height || "auto"}`,
    paddingTop: `${style.paddingTop || 0}px`,
    paddingBottom: `${style.paddingBottom || 0}px`,
    paddingLeft: `${style.paddingLeft || 0}px`,
    paddingRight: `${style.paddingRight || 0}px`,
    marginTop: `${style.marginTop || 0}px`,
    marginBottom: `${style.marginBottom || 0}px`,
    marginLeft: `${style.marginLeft || 0}px`,
    marginRight: `${style.marginRight || 0}px`,
    backgroundColor: style.backgroundColor || "transparent",
    backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : "",
    backgroundRepeat: style.backgroundImage ? "no-repeat" : "",
    backgroundSize: style.backgroundImage ? "cover" : "",
    backgroundPosition: style.backgroundImage ? "center center" : "",
    borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
    borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
    borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
    borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
    "mso-para-margin": "10px",
    background: style.backgroundColor || "transparent",
  };
}

if (["image", "col-image"].includes(title)) {
  return {
    width: "100%",
    maxWidth: "100%",
    borderRadius: `${style.borderRadius || 0}${style.val || ""}`,
    margin: `${style.marginTop || 0}px`,
    height: "auto",
  };
}

if (title === "col-col-image") {
  return {
    display: "block",
    width: style.width || "auto",
    height: "20px",
    "-ms-interpolation-mode": "bicubic",
    outline: "0",
    lineHeight: "100%",
    maxWidth: "100%",
    borderRadius: `${style.borderRadius || 0}${style.val || ""}`,
    margin: `${style.marginTop || 0}px`,
  };
}

if (title === "row-image") {
  return {
    width: style.width || "auto",
    maxWidth: "100%",
    borderRadius: `${style.borderRadius || 0}${style.val || ""}`,
    margin: `${style.marginTop || 0}px`,
    height: "auto",
  };
}

if (title === "hr" || title === "new-hr") {
  return {
    borderWidth: "0px",
    textAlign: "center",
    borderColor: "transparent",
    height: `${style.height || 0}px`,
    borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
    borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
    borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
    borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
    margin:
      title === "hr"
        ? style.imageAlignment === "center"
          ? "auto"
          : style.imageAlignment === "right"
          ? `0px ${style.marginRight || 0}px 0px auto`
          : `0px auto 0px ${style.marginRight || 0}px`
        : undefined,
    marginTop: `${style.marginTop || 0}px`,
    marginBottom: `${style.marginBottom || 0}px`,
  };
}

if (title === "hr-row" || title === "hr-col") {
  return {
    height: "0px",
    borderWidth: "0px",
    textAlign: "center",
    borderColor: "transparent",
    borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
    borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
    borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
    borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
  };
}

if (title === "button") {
  return {
    boxSizing: "border-box",
    border:
      style.borderWidth > 0
        ? `${style.borderStyle || "solid"} ${style.borderWidth}px ${style.borderColor || "black"}`
        : "none",
    textAlign: "center",
    fontSize: `${style.fontSize || 14}px`,
    borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
    borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
    borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
    borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
    background: style.backgroundColor || "transparent",
    color: style.color || "initial",
    fontFamily: style.fontFamily || "inherit",
    "mso-line-height-rule": "exactly",
    lineHeight: "16px",
    textTransform: style.textTransform || "none",
    width: "100%",
    display: "block",
    padding: `${style.paddingVert || 0}px`,
    fontWeight: style.fontWeight || "normal",
    letterSpacing: `${style.letterSpacing || 0}px`,
    marginTop: `${style.marginTop || 0}px`,
    marginBottom: `${style.marginBottom || 0}px`,
    marginRight: `${style.marginRight || 0}px`,
    marginLeft: `${style.marginLeft || 0}px`,
  };
}

}
const containerChildStyle = function (style, title) {
  if (title === "text" || title === "paragraph" || title === "html" || title === "link") {
    return {
      boxSizing: "border-box",
      color: style.color || "initial",
      fontFamily: style.fontFamily || "inherit",
      background: style.backgroundColor || "transparent",
      textDecoration: style.textDecoration || "none",
      fontWeight: style.fontWeight || "normal",
      letterSpacing: `${style.letterSpacing || 0}px`,
      "mso-line-height-rule": "exactly",
      lineHeight: `${style.lineHeight || 16}px`,
      borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
      borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
      borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
      borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
      fontSize: `${style.fontSize || 14}px`,
      textTransform: style.textTransform || "none",
      backgroundColor: style.backgroundColor || "transparent",
      textAlign: style.textAlign || "left",
      padding: `${style.paddingTop || 0}px ${style.paddingRight || 0}px ${style.paddingBottom || 0}px ${style.paddingLeft || 0}px`,
    };
  }

  if (title === "image") {
    return {
      margin:
        style.imageAlignment === "center"
          ? "auto"
          : style.imageAlignment === "right"
          ? `0px ${style.marginRight || 0}px 0px auto`
          : `0px auto 0px ${style.marginRight || 0}px`,
      marginTop: `${style.marginTop || 0}px`,
      marginBottom: `${style.marginBottom || 0}px`,
      width: "100%",
      maxWidth: "100%",
      borderRadius: `${style.borderRadius || 0}${style.val || ""}`,
    };
  }

  if (title === "button") {
    return {
      boxSizing: "border-box",
      borderStyle: style.borderStyle || "solid",
      borderWidth: `${style.borderWidth || 0}px`,
      borderColor: style.borderColor || "black",
      textAlign: "center",
      fontSize: `${style.fontSize || 14}px`,
      borderTopLeftRadius: `${style.borderTopLeftRadius || 0}px`,
      borderTopRightRadius: `${style.borderTopRightRadius || 0}px`,
      borderBottomLeftRadius: `${style.borderBottomLeftRadius || 0}px`,
      borderBottomRightRadius: `${style.borderBottomRightRadius || 0}px`,
      backgroundColor: style.backgroundColor || "transparent",
      color: style.color || "initial",
      fontFamily: style.fontFamily || "inherit",
      textTransform: style.textTransform || "none",
      width: "100%",
      fontWeight: style.fontWeight || "normal",
      letterSpacing: `${style.letterSpacing || 0}px`,
      margin:
        style.imageAlignment === "center"
          ? "auto"
          : style.imageAlignment === "right"
          ? `0px ${style.marginRight || 0}px 0px auto`
          : `0px auto 0px ${style.marginRight || 0}px`,
      marginTop: `${style.marginTop || 0}px`,
      marginBottom: `${style.marginBottom || 0}px`,
    };
  }
};

const singleLinkStyle = function (style, title) {
  const baseStyles = {
    color: style.color || "inherit",
    fontFamily: style.fontFamily || "inherit",
    background: style.backgroundColor || "transparent",
    backgroundColor: style.backgroundColor || "transparent",
    textDecoration: style.textDecoration || "none",
    fontWeight: style.fontWeight || "normal",
    letterSpacing: `${style.letterSpacing || 0}px`,
    "mso-line-height-rule": "exactly",
    lineHeight: `${style.lineHeight || 16}px`,
    fontSize: `${style.fontSize || 14}px`,
    textTransform: style.textTransform || "none",
    textAlign: style.textAlign || "left",
    padding: `${style.paddingTop || 0}px ${style.paddingRight || 0}px ${style.paddingBottom || 0}px ${style.paddingLeft || 0}px`,
  };

  if (title === "text" || title === "paragraph" || title === "html" || title === "link") {
    return {
      ...baseStyles,
      textAlign: style.textAlign || "center",
    };
  }

  if (title === "link-text") {
    return {
      ...baseStyles,
      fontStyle: "normal",
      display: "inline-block",
      fontVariantLigatures: "normal",
      textAlign: style.textAlign || "center",
      "text-align-last": "center",
    };
  }
};

export function btnToPerc(width){
  return`${width.split("px")[0]}`

}
export function calcBtn(width){
  const value= width.split("%")[0] 
  return`${(value/100)*650}px`

}
export function calcRowBtn(width,parentWidth){
  if(parentWidth.includes("%")){
  let parent;
    const parentValue= parentWidth.split("%")[0] 
    parent= `${(parentValue/100)*650}`

    const value= width.split("%")[0] 
    return`${(value/100)*parent}px`

  }
  // else{
    // const parentValue= parentWidth.split("%")[0] 

    // const value= width.split("%")[0] 
    // return`${(value/100)*parentValue}px`
  // }
 

}
export function calcBtnPerc(width){
  const value= width.split("px")[0] 
   return`${(value/650)*100}%`
 
 }

 export function imagify(width){
  if(width.includes("px")){
  
    const parentValue= width.split("px")[0] 
    return parentValue

  }else{
    return width
  }

}

  export {check,containerChildStyle,singleLinkStyle}