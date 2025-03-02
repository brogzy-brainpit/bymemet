'use client'
import React, { useState } from 'react'
import ReactMarkdown from "react-markdown"
import './BlogContent.css'
// import SyntaxHighlighter, {Prism as syntaxHighlighter} from "react-syntax-highlighter"
import  {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {a11yDark,oneDark,coldarkCold,atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism"
import remarkGfm from 'remark-gfm';
import moment from 'moment'
import { Interweave,Markup } from 'interweave'
function BlogContent({body,img,createdAt}) {
    const Code=({node,inline,className,children,...props}) =>{
        const match= /language-(\w+)/.exec(className || '');
        const [copied, setCopied] =useState( )
        const handleCopy=()=>{ 
          navigator.clipboard.writeText(children);
          setCopied(true);
          setTimeout(()=>{  
     setCopied(false);
          },3000)
        }
        if(inline){
          return <code>{children}</code>
        }
        // else if(node && !node?.properties.className){
        //   return (
        //    <Markup noWrap={true} content={node.children[0]?.value}/>
        //   )
        // }
        else if(match){ 
          return (
            <div style={{position:"relative"}}>
              <SyntaxHighlighter style={atomDark} language={match[1]}
              PreTag={"pre"} {...props} codeTagProps={ {className:"dm-mono-regular text-[11px]",style:{padding:'0',borderRadius:"5px",overflowX:"auto",whiteSpace:"pre-wrap"}}}>
                 {String(children).replace(/\n$/,'')}
              </SyntaxHighlighter>
              <button className='dm-mono-regular text-[13px] p-[10px] rounded-lg hover:bg-[#135d63] ' onClick={handleCopy} style={{position:"absolute",top:"5px",right:"5px",zIndex:"1",background:"#0F172A",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.3);"}}>
                {copied?'Copied':'Copy Code'}
              </button>
      
            </div>
          )
        }else {
          return (
                  <Markup noWrap={true} content={children}/>
              
          )
        }
      }
       
  return (
    <div className=' py-[60px] md:px-[10px] px-2 relative dm-mono-regular mt-[-40px] blogContent z-1 rounded-[20px] bg-[#0F172A] border-[2px] border-zinc-500'>
       <div class="entry-meta">
	<a class="entry-author dm-mono-regular text-[13px]" href="https://mailbakery.com/blog/author/iveta/">memet O.</a>
	<a class="entry-author-image" href="https://mailbakery.com/blog/author/iveta/">
		<img alt="blogs published by memet" src={img} class="avatar avatar-84 photo lazyloaded" height="84" width="84" data-src={img} decoding="async" data-eio-rwidth="84" data-eio-rheight="84"/>	</a>
	<span class="entry-date dm-mono-regular text-[13px]">{moment().from(createdAt,true)} ago</span>
  
</div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
        code: Code,
        p: ({ node, children }) => {
          // If <p> only contains a single <code> block, unwrap it
           console.log(node)
        console.log(children)
        // console.log(node.properties)
          if (node && !node?.properties.className) {
            return children;
          }
         
          return <p style={{color:'pink'}}>{children}</p>;
        },
      }} allowElement={false}>
              {body}
        </ReactMarkdown>
     
    </div>
    
  )
}

export default BlogContent