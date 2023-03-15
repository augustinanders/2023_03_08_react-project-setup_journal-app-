import Input from "../Input/Input";
import Label from "../Label/Label";
import Textarea from "../Textarea/Textarea";
import "./Form.css";

export default function Form() {
  return (
    <form className="form">
      <h2>NEW ENTRY</h2>
      <Label htmlFor="motto">Motto</Label>
      <Input type="text" name="motto" id="motto" required />
      <Label htmlFor="notes">Notes</Label>
      <Textarea rows="5" cols="33" name="notes" id="notes" required />
      <Input className="create" type="submit" value="Create!" />
    </form>
  );
}
