export const CustomControls = () => {
  return (
    <>
      <h3>Custom Controls</h3>
      <Input label="FirstName" value="Value" />
      <Input label="LastName" value="Value" />
      <Input label="Address" value="Value" />
      <Input label="City" value="Value" />
      <RadioButton label="Label" checked={true} />
      <CheckBox label="CheckBox" checked={true} />
      <CheckBox label="CheckBox" checked={false} />
      <DateTime label="Start Date" value="2023/08/30" />
    </>
  );
};
interface InputProps {
  label: string;
  value: string;
}
interface InputOptionProps {
  label: string;
  checked: boolean;
}
export const Input = ({ label, value }: InputProps) => (
  <label>
    {label}:<input type="text" value={value} />
  </label>
);
export const DateTime = ({ label, value }: InputProps) => (
  <label>
    {label}
    <input type="date" value={value} />
  </label>
);
export const RadioButton = ({ label, checked }: InputOptionProps) => (
  <label>
    {label}: <input type="radio" checked={checked} />
  </label>
);
export const CheckBox = ({ label, checked }: InputOptionProps) => (
  <label>
    {label}: <input type="checkbox" checked={checked} />
  </label>
);
