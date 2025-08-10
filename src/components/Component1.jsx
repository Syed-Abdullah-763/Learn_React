const Comp1 = (props) => {
    console.log("Comp1");
    console.log(props);
    
    const {name , email} = props
    console.log(name);
    console.log(email);
    
    return (
        <h1>Component 1</h1>
    )
}

export default Comp1