import CompB from "./CompB"

let CompA = ()=>{
    let eid=101
    let ename="Sarathy"
    let esal=45000
    let ecity="RJPM"
    return <>
    <h1>This is Component A - Functional</h1>
    <hr/>
    <CompB id={eid} Name={ename} Salary={esal} City={ecity} />
    </>
}

export default CompA