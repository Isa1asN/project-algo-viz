/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { useState  } from 'react'
import { getGrid } from '../../utils/Grid'
import './grid.css'
import { useParams } from '../../context/context'

export default function Grid() {

  const {grid,setgrid,editing,seteditFlag,mode,start,end,run,res,algo}  = useParams()

  const [refarray,mm]=useState(getrefarray(grid))
  
  function getrefarray(grid){
    let array=[]
   grid.forEach((elem)=>{
    elem.forEach((child)=>{
      array.push(useRef())
    })
   })
   return array
 }


  return (
    <div className='board'>
      {refarray.map((elem,index)=> {
        let classList=['cell']

        let yindex=Math.floor(index/50)
        let xindex=index % 50
        let cell=grid[yindex][xindex]

        if (cell.iswall) {
          classList.push('wall')
        }
        
        return <div key={`${index}`} ref={elem}  className={classList.join(' ')} 
        onMouseDown={()=>{seteditFlag(true)}} onMouseUp={()=>{seteditFlag(false)}}
        onMouseMove={()=>{
          if (!editing) return
          const current= grid[yindex][xindex]
           if (current.isstart || current.istarget ) return
           switch(mode){
            case 'setstart':
              var newgrid=grid.map((elem)=>{
              return elem.map((elem)=>{
                if (!elem.isstart) return elem
                return {...elem,isstart:false}
              }) 
             })
             newgrid[yindex][xindex]={...newgrid[yindex][xindex],isstart:true,istarget:false,weight:1,iswall:false}
             start.current={x:xindex,y:yindex}
             setgrid(newgrid)
             break;

           case 'settarget':
                newgrid=grid.map((elem)=>{
                return elem.map((elem)=>{
                  if (!elem.istarget) return elem
                  return {...elem,istarget:false}
                }) 
               })
               newgrid[yindex][xindex]={...newgrid[yindex][xindex],isstart:false,istarget:true,weight:1,iswall:false}
               end.current={x:xindex,y:yindex}
               setgrid(newgrid)
               break;

             case 'addbricks':
                newgrid=grid.slice()
               newgrid[yindex][xindex]={...newgrid[yindex][xindex],weight:1,iswall:true}
               setgrid(newgrid)
               break;

            case 'addweight':
                newgrid=grid.slice()
               newgrid[yindex][xindex]={...newgrid[yindex][xindex],weight:5,iswall:false}
               setgrid(newgrid)
               break;
           default:
             return 
            }}}>
         

          {cell.weight > 1 ? <i className="bi bi-virus"></i> : null}
          {cell.isstart ? <i className="bi bi-geo-alt"></i> : null }
          {cell.istarget ? <i className="bi bi-geo"></i> : null }
          
         </div>
      })}
    </div>
  )
}