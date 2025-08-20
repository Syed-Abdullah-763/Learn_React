// import Header from "./components/Header"
// import Main from "./components/Main"
// import Comp1 from "./components/Component1";
// import Comp2 from "./components/Component2";
// import Comp3 from "./components/Componet3";
// import Child1 from "./components/Child"
import { useState, useEffect } from "react";
// import "./App.css"
// import styles from "./App.module.css";
function App() {
  // console.log("App Componet");

  // const[userName, setUserName] = useState("Abdullah");

  // const nameHandler = () => {
  //   setUserName("Syed Abdullah");
  //   console.log(userName);
  // };

  // let userType = "admin"
  // let userType = "user";

  // let loginStatus = true;

  // const [userType, setUserType] = useState("user");
  // const handleUserRole = () => {
  //   userType == "user" ? setUserType("admin") : setUserType("user");
  // };

  // const [data , setData] = useState([{name: "Abdullah", email: "abdullah@gmail.com"}])
  // console.log(data);

  // const [childState, setChildState] = useState("")
  // const getChildData = (childData) => {
  //   console.log("Get Child Data", childData);
  //   setChildState(childData)
  // }

  // const userArr = ["Abdullah", "Jaffar", "Husnain"]

  // const [name, setName] = useState("");
  // const inpuHandler = () => {
  //   console.log(name);
  // };

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const formHandler = (event) => {
  //   console.log("name", name);
  //   console.log("email" ,email);
  //   console.log("password" ,password);
    
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.target.firstElementChild.value);
  //   event.preventDefault()
  // }

  let [counter, setCounter] = useState(0)
  const [value, setValue] = useState(0)

  const foo = () => {
    console.log("Foo");
  }

  // useEffect(() => {
  //   foo()
  // }, [])

  // useEffect(() => {
  //   console.log("with counter");
  // }, [counter])

  useEffect(() => {
    console.log(value);
    
  }, [value])

  
  return (
    <>

    <h1>Use Effect</h1>
    <input type="text" placeholder="Counter..." onChange={(e) => setValue(e.target.value)} value={value} />
    <button onClick={() => setCounter(++counter)}>Counter: {counter}</button>



      {/* <form onSubmit={formHandler}>
        <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button>Get Value</button>
      </form> */}

      {/* <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={inpuHandler}>Get Value</button> */}

      {/* {userArr} */}

      {/* {userArr.map((value, index) => (
        <h1 key={index}>Hello {value}</h1>
      ))}

      {userArr.map((value, index) => {
        return (
          <div key={index}>
            <h1>Hello {value}</h1>
          </div>
        );
      })} */}

      {/* <h1>Recieved Data: {childState}</h1> */}
      {/* <Child1 /> */}
      {/* <h1 className={styles.h1}>Parent Hello</h1>
    <Child1 /> */}

      {/* <Comp2 data = {data} />

    { loginStatus && (
        <div>
          <h1>Hello {userType == "user" ? "User" : "Admin"}</h1>
          <button onClick={handleUserRole}>
            Switch To {userType == "user" ? "Admin" : "User"}
          </button>
        </div>
      )} */}

      {/* <Comp1 name = "Abdullah" email = "abdullah@gmail.com" /> */}
      {/* <Header />
      <Main /> */}

      {/* <Comp1 />
      <Comp2 />
      <Comp3 />
      <button onClick={nameHandler}>Click Here</button> */}

      {/* {userType == "user" ? <h1>Hello User</h1> : <h1>Hello Admin </h1>}
      <button onClick={handleUserRole}>
        Switch To {userType == "user" ? "Admin" : "User"}
      </button> */}

      {/* {loginStatus ? (
        <div>
          {userType == "user" ? <h1>Hello User</h1> : <h1>Hello Admin </h1>}
          <button onClick={handleUserRole}>
            Switch To {userType == "user" ? "Admin" : "User"}
          </button>
        </div>
      ) : (
        <h1>Not Found</h1>
      )} */}

      {/* { loginStatus && (
        <div>
          <h1>Hello {userType == "user" ? "User" : "Admin"}</h1>
          <button onClick={handleUserRole}>
            Switch To {userType == "user" ? "Admin" : "User"}
          </button>
        </div>
      )} */}
    </>
  );
}

export default App;
