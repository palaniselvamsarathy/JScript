import Navbar from './Navbar/Navbar'
import Message  from './Message/Message'
import Msg from './Message/Msg'
import Msgobject from './Message/Msgobject'

let App =()=>{
    return <>
        < Navbar/>
        <h1>Hey there</h1>
        <h2>How's your day?</h2>
        <Message/>
        <Msg/>
        <Msgobject/>
    </>
}

export default App