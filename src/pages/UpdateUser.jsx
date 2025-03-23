import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import UserForm from "../components/UserForm";
import "./UpdateUser.css";

export default function UpdateUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${id}`).then((res) => setUser(res.data));
  }, [id]);

  const handleUpdate = (data) => {
    axios.put(`http://localhost:5000/api/users/${id}`, data).then(() => navigate("/"));
  };

  return (
    <div className="updatecenter">
      <h1>Update User</h1>
      {user && <UserForm onSubmit={handleUpdate} defaultValues={user} />}
    </div>
  );
}
