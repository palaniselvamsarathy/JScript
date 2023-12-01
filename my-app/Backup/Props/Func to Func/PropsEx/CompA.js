import CompB from "./CompB"

let CompA =()=>{
    let eid=101
    let ename="Sarathy"
    return <>
        <h1>This is Functional Component A</h1>
        <hr/>
        <CompB one={"one"} id={eid} eName={ename} />
    </>
}

export default CompA