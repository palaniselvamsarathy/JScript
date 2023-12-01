let CompB = (props)=>{
    return <>
    <h1>This is Component B - Functional</h1>
    <pre>{JSON.stringify(props)}</pre>
    <p>ID: {props.id}</p>
    <p>Name: {props.name}</p>
    </>
}

export default CompB