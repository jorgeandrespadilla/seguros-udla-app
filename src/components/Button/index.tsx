import './Button.css';

type ButtonProps = {
    text: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
}

function Button({text, type = "button", onClick = () => {}}: ButtonProps) {
    return (
        <button type={type} onClick={onClick}>{text}</button>
    );
}

export default Button;