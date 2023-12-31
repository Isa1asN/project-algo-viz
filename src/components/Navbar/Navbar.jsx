/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './navbar.css'
import { useParams } from '../../context/context'


export default function Navbar() {

  // const [algo,setalgo] = useState('')
  const {mode,setmode,algo,setalgo,setres,setrun}=useParams()

  

  return (
    <div className='navbar'>
        <h3 style={{margin:'0px 5px', alignSelf:'center', color:'white'}}>VisuAlgo</h3>
      <div className='container'>
       <button type="button" className={['btn' ,'btn-primary', mode=='setstart'? 'selected' : ''].join(' ')} onClick={()=>{
        if(mode == 'setstart') setmode(null)
        else {setmode('setstart')}
       }}>
        <i className="bi bi-house-door-fill" style={{ color: 'white' }} ></i>
       </button>
       <button type="button" className={['btn' ,'btn-primary', mode=='settarget'? 'selected' : ''].join(' ')} onClick={()=>{
        if(mode == 'settarget') setmode(null)
        else {setmode('settarget')}
       }}>
       <i className="bi bi-flag-fill" style={{ color: 'white' }} ></i>
       </button>
       <button type="button" className={['btn' ,'btn-primary', mode=='addbricks'? 'selected' : ''].join(' ')} onClick={()=>{
        if(mode == 'addbricks') setmode(null)
        else {setmode('addbricks')}
       }}>
       <i className="bi bi-bricks"></i>
       </button>
       {/* <button type="button" className={['btn' ,'btn-primary', mode=='addweight'? 'selected' : ''].join(' ')} onClick={()=>{
        if(mode == 'addweight') setmode(null)
        else {setmode('addweight')}
       }}>
       <i className="bi bi-bucket-fill" style={{ fontSize: '0.8rem',color: 'white' }} ></i>
       </button> */}
       <button type="button" className="btn btn-primary" onClick={()=>{setres((old)=>{ return !old})}}>
       <i className="bi bi-arrow-counterclockwise"></i> 
       </button>
       <button type="button" className="btn btn-primary" onClick={()=>{setrun((old)=>{return !old})}}>
       <i className="bi bi-caret-right"></i> 
       </button>
       <div>
       <select className="form-select" aria-label="Default select example"  value={algo} onChange={(e)=>{
        setalgo(e.target.value)
       }}>
          <option value=''>Choose your algorithm</option>
          <option value="dijkstra">dijkstra</option>
          <option value="DFS">DFS</option>
          <option value="BFS">BFS</option>
      </select>
    </div>
      </div>
    </div>
  )
}