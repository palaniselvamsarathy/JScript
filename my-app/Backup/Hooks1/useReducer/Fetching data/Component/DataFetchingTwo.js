import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading:true,
    errror:'',
    post:{}
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'SUCCESS':
            return{
                loading: false,
                post: action.payload,
                error:''
            }
        case 'ERROR':
            return{
                loading:false,
                post:{},
                error:'Something went wrong'
            }

        default:
            return state
    }
}

function DataFetchingTwo() {
    const [state,dispatch]= useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            dispatch({type:'SUCCESS',payload: response.data})
        })
        .catch(error =>{
            dispatch({type:'ERROR'})
        } )
    },[])
  return (
    <div>
        <h1>Data Fetching using useReducer</h1>
      <p className='text-center'>{state.loading ? 'Loading': state.post.title}</p>
      {state.error ? 'Error': null}
    </div>
  )
}

export default DataFetchingTwo
