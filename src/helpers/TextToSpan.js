const TextToSpan = (text) => {
    return (
        [...text].map((text, index) => (
            <span key={index}>{text}</span>
        ))
    )
}

export default TextToSpan;