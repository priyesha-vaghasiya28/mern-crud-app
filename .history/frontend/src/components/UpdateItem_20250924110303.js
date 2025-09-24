import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateItem() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/items/${id}`).then(res => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/items/${id}`, form);
    navigate("/");
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="form-control mb-2" required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="form-control mb-2" required />
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
}
