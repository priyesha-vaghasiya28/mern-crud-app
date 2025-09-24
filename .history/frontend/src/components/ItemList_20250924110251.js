import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ItemList() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/api/items");
    setItems(res.data);
  };

  useEffect(() => { fetchItems(); }, []);

  const deleteItem = async (id) => { await axios.delete(`http://localhost:5000/api/items/${id}`); fetchItems(); };

  return (
    <div>
      <h2>Items List</h2>
      <Link className="btn btn-primary mb-2" to="/add">Add Item</Link>
      <table className="table">
        <thead><tr><th>Name</th><th>Description</th><th>Actions</th></tr></thead>
        <tbody>
          {items.map(i => (
            <tr key={i._id}>
              <td>{i.name}</td>
              <td>{i.description}</td>
              <td>
                <Link className="btn btn-warning me-1" to={`/update/${i._id}`}>Edit</Link>
                <button className="btn btn-danger" onClick={() => deleteItem(i._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
