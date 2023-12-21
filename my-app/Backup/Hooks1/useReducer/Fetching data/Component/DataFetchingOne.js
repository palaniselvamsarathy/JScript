import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [loading,setLoading] = useState(true)
    const [error,setError]= useState('')
    const [post,setPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        } )
    },[])
    // The empty dependecies array make sure th api called only once 
  return (
    <div>
        <h1>Data Fetching using useState</h1>
      <p className='text-center'>{loading ? 'Loading': post.title}</p>
      {error ? 'Error': null}
    </div>
  )
}

export default DataFetchingOne
