"use client"
import { klaviyo } from "./Emailifier"
import {Html,Body,Head,render,Container,Preview} from "@react-email/components"
export const KlaviyoCode=(newContent,links,preview)=>{
    let initial=render(<Html  xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
     <Head>
   {`
   <!--[if gte mso 9]>
   <xml>
     <o:OfficeDocumentSettings>
     <o:AllowPNG/>
     <o:PixelsPerInch>96</o:PixelsPerInch>
     </o:OfficeDocumentSettings>
   </xml>
   <![endif]-->
   <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="format-detection" content="date=no" />
   <meta name="format-detection" content="address=no" />
   <meta name="format-detection" content="telephone=no" />
   <meta name="x-apple-disable-message-reformatting" />
     <!--[if !mso]><!-->
        ${links}
     <!--<![endif]-->
   <title>Email Template</title>
   <!--[if gte mso 9]>
   <style type="text/css" media="all">
     sup { font-size: 100% !important; }
   </style>
   <![endif]-->
   
   
   
   <style type="text/css" media="screen">
   /* Linked Styles */
   a { color:#000001; text-decoration:none }
   p { padding:0 !important; margin:0 !important }
   img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
   

   ${newContent?.body.links2?newContent.body.links2:""}
@media (max-width:620px){
.pc-project-body {
min-width: 0 !important
}
.pc-project-container {
width: 100% !important
}
.pc-w620-padding-0-8-0-8{
padding: 10px 8px 10px 8px !important
}
.container-top-radius{
border-top-left-radius: 20px !important;
border-top-right-radius: 20px !important;
}
.container-bottom-radius{
border-bottom-left-radius: 14px !important;
border-bottom-right-radius: 14px !important;
}

.pc-w620-padding-0-0-0-0 {
padding: 0 0 0 0 !important

}
.w-full{
width:100% !important;
}
} 
   
   /* Mobile styles */

   @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
     
     .mobile-shell { width: 100% !important; min-width: 100% !important; }
     
   .m-center { text-align: center !important; float:none!important; margin: auto!important;}
     .mobile-td {display:inline-block !important;padding:5px !important;}
     .m-left {float: left !important;  text-align: left !important; margin-right: auto !important; }
     .m-justify { text-align: justify !important; margin-right: auto !important; }
     .m-right { float: right !important; text-align: right !important; margin-right: auto !important; }
     .center { margin: 0 auto !important; }
     .center-float {float:none!important; margin: auto!important; }
     .t-left { float: left !important; margin-right: 30px !important; }
     .t-left-2  { float: left !important; }
     .t-right-2  { float: right !important; }
    
     .td { width: 100% !important; min-width: 100% !important;display:block !important }
     .tr { width: 100% !important; min-width: 100% !important;display:inline !important }

     .m-td,
     .hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
     .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }

     .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
   }
 </style>`}
       </Head>
         {preview?<Preview>{preview}</Preview>:""}
       <Body bgcolor={newContent?.body.emailBackground} className="body" style={{padding:"0 !important", margin:"0 !important", display:"block !important", minWidth:"100% !important", width:"100% !important",minHeight:"100%",lineHeight:"1.5","mso-line-height-rule":"exactly","-webkit-font-smoothing":"antialiased","-webkit-text-size-adjust":"100%","-ms-text-size-adjust":"100%","font-variant-ligatures":"normal","text-rendering":"optimizeLegibility",backgroundColor:newContent?.body.emailBackground,"-moz-osx-font-smoothing":"grayscale",background:newContent?.body.emailBackground}} >
        <Container bgcolor={newContent?.body.emailBackground}  align="center" width="100%" data-id="__react-email-container" role="presentation" cellSpacing="0" cellPadding="0" border="0" style={{tableLayout:"fixed",margin:"0px auto",backgroundColor:newContent?.body.background}}>
        {/* <table width={"100%"} align="center" border="0" cellpadding="0" cellspacing="0" class="pc-project-container" role="presentation" style={{ width:"100%",maxWidth: "600px",}}>
          <tr>
          <td align="" class="pc-w620-padding-0-0-0-0" style={{padding: "20px 0px 20px 0px"}} valign="top">
           <table>
           <tr>

<td align="center" data-klaviyo-region="true" data-klaviyo-region-width-pixels="600">

<div class="klaviyo-block klaviyo-text-block">

    <p>Text/drag drop block here</p> 

</div>

</td>

</tr> 

            </table> */}
           {klaviyo(newContent)}
           {/* </td>
           </tr>
           </table> */}
        </Container> 
         </Body>
         </Html>,{pretty:true}
       )
      return initial.replace(/&lt;/g,"<",).replace(/&gt;/g,`>`).replace(/&#x27;/g,`'`).replace(/&quot;/g,`"`).replace(/&amp;/g,`&`).replace(/bgcolor=""/g,``)
       .replace(/background=""/g,``).replace(/height=""/g,``).replace(/height:px;/g,``).replace(/height="0"/g,``).replace(/height:0px;/g,``).replace(/border-top-left-radius:0px;/g,``).replace(/border-top-right-radius:0px;/g,``).replace(/border-bottom-left-radius:0px;/g,``).replace(/border-bottom-right-radius:0px/g,``).replace(/border-bottom-right-radius:0px;/g,``).replace(/background:transparent;/g,``).
       replace(/background-color:transparent;/g,``)
   
    } 