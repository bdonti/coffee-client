import { useLoaderData } from "react-router-dom";
import Headers from "./Headers";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: `Are you sure you want to delete this user?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });

        fetch(`https://coffee-store-server-seven-lac.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User Data has been deleted.",
                icon: "success",
              });
            }
            const remaining = loadedUsers.filter((user) => user._id !== id);
            setUsers(remaining);
          });
        console.log("Delete Confirmed");
      }
    });
  };

  return (
    <div>
      <Headers></Headers>
      <h1 className="text-2xl font-bold my-4 text-center">User Information</h1>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Creation Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.email}</td>
                  <td>{user?.creationTime}</td>
                  <td>
                    <button className="btn btn-success">Update</button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-warning ml-4"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
