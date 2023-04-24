import React from 'react'
import styles from "./index.module.css"

const Form = ({ children }) => {
    return (
        <div className={styles.Auth_Wrapper}>
            <div className={styles.Auth_Form_Wrapper}>
                {children}
            </div>
        </div>
    )
}

export default Form
