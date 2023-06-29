import React from 'react'

import styles from "./index.module.css"
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ title, position, ...props }) => {
    return (
        <div {...props} className={twMerge(`${styles.section_title} flex justify-${position} `, props.className)}>
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default SectionTitle