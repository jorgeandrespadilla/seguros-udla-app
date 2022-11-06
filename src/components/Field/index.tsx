import { useId } from 'react';
import './Field.css';

type FieldProps = {
    type?: 'text' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    value?: string;
    minLength?: number;
    disabled?: boolean;
    required?: boolean;
    onChange?: (value: string) => void;
};

function Field({
    type = "text",
    label = "",
    placeholder = "",
    value = "",
    minLength = undefined,
    disabled = false,
    required = false,
    onChange = () => { },
}: FieldProps) {

    const field = useId();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        onChange(newValue);
    }

    return (
        <div className='Field__container'>
            {
                label && (
                    <label htmlFor={field} className="Field__label">
                        {label}
                    </label>
                )
            }
            <input 
                id={field}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                className="Field__input"
                required={required}
                minLength={minLength}
            />
        </div>

    );
}

export default Field;