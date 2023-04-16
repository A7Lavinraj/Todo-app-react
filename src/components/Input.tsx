interface inputProps {
  value: string;
  onChange: (event: any) => any;
  onKeyDown: (event: any) => any;
}

const Input: React.FC<inputProps> = ({ onChange, value, onKeyDown }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Type your todo..."
      className="max-w-[60%] rounded outline-none text-highlight p-2 bg-main"
    />
  );
};

export default Input;
