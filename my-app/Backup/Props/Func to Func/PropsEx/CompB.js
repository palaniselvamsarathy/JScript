let CompB=(props)=>{
    return <>
    <h1>This is Functional Component B</h1>
    <pre>{JSON.stringify(props)}</pre>
    <p>One: {props.one}</p>

    <p>ID: {props.id}</p>
    <p>Name: {props.eName}</p>
    <p>One: {props.one}</p>
    </>
}

export default CompB