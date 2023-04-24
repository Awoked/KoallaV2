import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
const Input = ({ inputLabel, ...props }) => {

    const [randomId, setRandomId] = useState(0);

    useEffect(() => {
        setRandomId(Math.floor(Math.random(0) * 51276512651725))
    }, [])

    return (
        <label htmlFor={randomId} className={`${styles.input_wrapper}`}>
            <span className='text-xs font-medium'>
                {inputLabel}
            </span>
            <input
                {...props}
                className={styles.input}
                id={randomId}
            />
        </label>
    )
}

export default Input
