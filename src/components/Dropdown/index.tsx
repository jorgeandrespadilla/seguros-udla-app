import { useId } from 'react';
import './Dropdown.css';

type DropdownProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    children?: React.ReactNode;
};

function Dropdown({
    label = "",
    placeholder = "",
    value = "",
    disabled = false,
    onChange = () => { },
    children
}: DropdownProps) {

    const dropdown = useId();

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const newValue = event.target.value;
        onChange(newValue);
    }

    return (
        <div className="Dropdown__container">
            {
                label && (
                    <label htmlFor={dropdown} className="Dropdown__label">
                        {label}
                    </label>
                )
            }
            <select
                id={dropdown}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                className="Dropdown__input"
            >
                {children}
            </select>
        </div>
    );
}

export default Dropdown;