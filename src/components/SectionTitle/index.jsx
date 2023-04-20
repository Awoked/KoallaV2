import React from 'react'

import styles from "./index.module.css"

const SectionTitle = ({ title, position, ...props }) => {
    return (
        <div {...props} className={`${styles.section_title} flex justify-${position} ${props.className}`}>
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default SectionTitle