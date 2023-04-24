import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
const Input = ({ inputLabel, error, required, ...props }) => {

    const [randomId, setRandomId] = useState(0);

    useEffect(() => {
        setRandomId(Math.floor(Math.random(0) * 51276512651725))
    }, [])

    return (
        <>
            <label htmlFor={randomId} className={`${styles.input_wrapper}`}>
                <span className={`text-xs font-medium ${error && "text-red-300"}`}>
                    {inputLabel} {required && "*"}
                </span>
                <input
                    {...props}
                    className={styles.input}
                    id={randomId}
                />

            </label>
            {
                error &&
                <span className={`${styles.input_error}`}>
                    {error}
                </span>
            }
        </>
    )
}

export default Input
