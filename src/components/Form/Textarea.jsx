import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";

const Textarea = ({ inputLabel, error, required, ...props }) => {

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
                <textarea
                    {...props}
                    className={`${styles.input} min-h-[120px]`}
                    id={randomId}
                >
                </textarea>
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

export default Textarea