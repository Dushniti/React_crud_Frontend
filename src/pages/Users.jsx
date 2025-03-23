import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showFlag, setShowFlag] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`).then(() => {
      setUsers(users.filter((user) => user._id !== id));
    });
  };

  const handleOnClickViewEvent = () => {
    setShowFlag(!showFlag);
  }

  return (
    <div className="userCenter">
      <div class="container text-center">
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">
            <h1>USERS</h1>
          </div>
          <div class="col"><button type="button" class="btn btn-warning" onClick={handleOnClickViewEvent}>
                View User
              </button></div>
          <div class="col">
            <Link to="/create">
              <button type="button" class="btn btn-success">
                Add User
              </button>
            </Link>
          </div>
        </div>
      </div>
      {
        showFlag&&<table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th scope="row">{user._id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/update/${user._id}`}>
                  <button type="button" class="btn btn-primary">
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                  <button type="button" class="btn btn-danger" onClick={()=>{deleteUser(user._id)}}>
                    Delete
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      }
      
    </div>
  );
}
