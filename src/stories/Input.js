function Input({ value, onChange }) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Email"
    />
  );
}

export default Input;
