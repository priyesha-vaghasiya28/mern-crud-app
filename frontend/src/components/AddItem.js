import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const [form, setForm] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/items", form);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="form-control mb-2" required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="form-control mb-2" required />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
}
