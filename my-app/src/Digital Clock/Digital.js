import React, { useEffect, useState } from 'react'

const Digital = () => {
   let [current,setCurrent]= useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    setInterval(() => {
        setCurrent(new Date().toLocaleTimeString())
    }, 1000);
    
  })
   return (
    <div>
      {/* <h2>{current}</h2> */}
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h2>Digital Clock</h2>
                    </div>
                    <div className="card-body">
                        <h3>{current}</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Digital
