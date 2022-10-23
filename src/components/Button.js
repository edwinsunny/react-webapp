import "./Button.css";

const Button = ({symbol , color , onPress}) =>{
    return (
        <div
        onClick={() => onPress(symbol)}
        className="button-container"
        style={{ backgroundColor: color }}
      >
        {symbol}
      </div>
    )
}

export default Button;