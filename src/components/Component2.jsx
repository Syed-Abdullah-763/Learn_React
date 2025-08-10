
const Comp2 = ({ data }) => {
    console.log("Com2");
    console.log(data);

    const {name, email} = data[0]
    console.log(name);
    console.log(email);
    
    
    return (
        <h1>Component 2</h1>
    )
}

export default Comp2