import './styles.css'
function Button({ children, ...rest }) {
    return (
        <button className="container--button" {...rest}>
            {children}
        </button>
    )
}

export default Button