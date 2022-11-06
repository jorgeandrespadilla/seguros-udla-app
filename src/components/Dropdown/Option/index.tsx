import './Option.css';

type OptionProps = {
    label: string;
    value: string;
};

function Option({ label, value }: OptionProps) {
  return (
    <option value={label}>{value}</option>
  )
}

export default Option