import React from 'react'
import styles from "./index.module.css"

/**
 * Button varyantları.
 * 
 * @param {string} variant - "outline" | "fill".
 */


const Button = ({ variant, children, ...props }) => {
    return (
        <button
            className={`${styles.button} ${variant === "outline" && styles.outline} ${props.className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
