import './styles.css'
function Input({ children, ...rest }) {
    return (
        <input className="container--input" {...rest}>
            {children}
        </input>
    )
}

export default Input