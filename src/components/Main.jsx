import "./Main.css"
import { use, useState } from "react"

const Main = () => {
    
    // const userName = "Syed Abdullah"
    // const changeUserName = (userName, event) => {
    //     console.log("Hello " + userName, event.target);
    // }


    // const [userName, setUserName] = useState("Abdullah")

    // const updateUserName = (userName) => {
    //     setUserName(userName)
    // }

    // const [cities, setCities] = useState(["Karachi", "Lahore"])

    // const updateHandler = () => {
    //     cities.push("Islamabad")

    //     setCities([...cities])
    // }


    const [userObj, setUserObj] = useState({
        name: "Abdullah",
        age: 17,
        email: "abdullah@gmail.com",
    })

    const updateHandler = () => {
        userObj.name = "Syed Abdullah"
        userObj.age = 18
        userObj.email = "syedabdullah@gmail.com"

        setUserObj({...userObj})
    }

    return (
        <>
        <main>
            <h1>Main Content</h1>
            <div>
            {/* <h2>User Name: {userName}</h2> */}
            {/* <button onClick={() => changeUserName(prompt("User Name"), event)}>Click To Change User Name</button> */}
            {/* <button onClick={updateUserName}>Click To Change User Name</button> */}
            {/* <button onClick={() => updateUserName(prompt("Enter User Name"))}>Click To Change User Name</button> */}

            {/* <h2>{cities[0]}</h2>
            <h2>{cities[1]}</h2>
            <h2>{cities[2]}</h2>
            <button onClick={updateHandler}>Click To Add City</button> */}

            <h2>{userObj.name}</h2>
            <h2>{userObj.age}</h2>
            <h2>{userObj.email}</h2>
            <button onClick={updateHandler}>Click To Add City</button>
            </div>
        </main>
        </>
    )
}

export default Main