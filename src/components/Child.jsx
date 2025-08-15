// import "./Child.css"

import styles from "./Child1.module.css"

const Child1 = () => {
    return (
        <>
        <h1 className={styles.h1}>HEllo</h1>
        {/* <button onClick={() => getChildData("Child Data")}>Get Data</button> */}
        </>
    )
}

export default Child1