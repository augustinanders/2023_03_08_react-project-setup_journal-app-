import Input from "../Input/Input";
import Label from "../Label/Label";
import Textarea from "../Textarea/Textarea";
import "./Form.css";

export default function Form() {
  /*   function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  } */

  return (
    <form className="form" /* onSubmit={handleSubmit} */>
      <h2>NEW ENTRY</h2>
      <Label htmlFor="motto">Motto</Label>
      <Input type="text" name="motto" id="motto" required />
      <Label htmlFor="notes">Notes</Label>
      <Textarea rows="5" cols="33" name="notes" id="notes" required />
      <button className="create" type="submit">
        Create!
      </button>
    </form>
  );
}
