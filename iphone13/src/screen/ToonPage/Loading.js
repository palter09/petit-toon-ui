import React from "react";

const Loading = () =>{
  return (
    <div style = {{display:'flex', flexDirection:'column',alignItem :'center', justifyContent:'center', height: '100%', width:'100%'}}>
      <div style={{margin:'3rem'}}>
        <img style={{margin:'1rem' , position:'relative', width:'55%'}} src={process.env.PUBLIC_URL + '/images/loading.gif'} alt="loading"/>
        <h3 style={{color: '#DA5E9D', margin: '1rem', position:'absolute', top: '45%', left: '38%'}}>Loading</h3>

      </div>
    </div>
  )
}

export default Loading;