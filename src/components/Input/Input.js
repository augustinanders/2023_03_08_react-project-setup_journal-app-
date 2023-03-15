import "./Input.css";

export default function Input({ type, name, id, required, value, className }) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      required={required}
      value={value}
    />
  );
}
