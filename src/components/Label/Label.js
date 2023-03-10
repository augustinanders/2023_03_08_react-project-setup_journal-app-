import "./Label.css";

export default function Label({ htmlFor, children }) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
