function Button({color , colorText, setColor}) {

    return (
        <>
            <button 
            onClick={ () => setColor(color)}
            className="p-1 rounded-xl m-1" style={{backgroundColor : color}}> {colorText}</button>
        </>
    )

}

export default Button