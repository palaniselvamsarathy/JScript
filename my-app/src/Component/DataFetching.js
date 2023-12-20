import React, { useState,useEffect } from 'react'
import axios from 'axios'
function DataFetching() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [btnclick, setBtnClick] = useState(1)
    const handleClick = ()=>{
        setBtnClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnclick}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[btnclick])
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <input type="text" value={id} onChange={e=>setId(e.target.value)} />
                    <button type='button' onClick={handleClick}>Fetch data</button>
                    <div>{post.title}</div>
                    {/* <ul>
                        {
                            posts.map(post=>
                                <li key={post.id}>{post.title}</li>
                            )
                        }
                    </ul> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default DataFetching
