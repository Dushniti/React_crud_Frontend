import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserForm from "../components/UserForm";
import "./CreateUser.css";

export default function CreateUser() {
  const navigate = useNavigate();

  const handleCreate = (data) => {
    axios.post("http://localhost:5000/api/users/create", data).then(() => navigate("/"));
  };

  return (
    <div className="createcenter">
      <h1>Create User</h1>
      <UserForm onSubmit={handleCreate} defaultValues={{ name: "", email: "", phone: "" }} />
    </div>
  );
}
