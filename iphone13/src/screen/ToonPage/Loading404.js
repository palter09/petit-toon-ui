import React from "react";
import { TbError404 } from "react-icons/tb";

export const Loading = () =>{
  return (
    <div style = {{display:'flex', flexDirection:'column',alignItem :'center', justifyContent:'center', height: '100%', width:'100%'}}>
      <div style={{margin:'3rem'}}>
        <img style={{margin:'1rem' , position:'relative', width:'55%'}} src={process.env.PUBLIC_URL + '/images/loading.gif'} alt="loading"/>
        <h3 style={{color: '#DA5E9D', margin: '1rem', position:'absolute', top: '45%', left: '38%'}}>Loading</h3>
      </div>
    </div>
  )
}

export const Error404 = ({what}) =>{
  return (
    <div style = {{display:'flex', flexDirection:'column',alignItem :'center', justifyContent:'center', height: '100%', width:'100%'}}>
      <div style={{margin:'2rem'}}>
        <div style = {{textAlign : 'center'}}>
          <TbError404 size="100" color="#DA5E9D" />
        </div>
        <p style ={{margin: '0.5rem', color: '#DA5E9D', fontWeight:'bold', fontSize:'30px', textAlign:'center'}}>원하시는 {what}<br/>찾을 수 없습니다</p>
      </div>
    </div>
  )
}
