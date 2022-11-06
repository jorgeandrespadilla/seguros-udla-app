import './Button.css';

type ButtonProps = {
    text: string;
    type?: 'button' | 'submit';
    styleType?: 'primary' | 'secondary';
    onClick?: () => void;
}

function Button({
    text,
    type = 'button',
    styleType = 'primary',
    onClick = () => { }
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`Button Button--${styleType}`}
        >
            {text}
        </button>
    );
}

export default Button;