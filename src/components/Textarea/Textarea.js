import "./Textarea.css";

export default function Textarea({ rows, cols, name, id, required }) {
  return (
    <textarea
      className="textarea"
      rows={rows}
      cols={cols}
      name={name}
      id={id}
      required={required}
    />
  );
}
