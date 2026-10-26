import React, { useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import Navbar from "./components/navbar";

const App = () => {
  const [Toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
 const [updatedData, setUpdatedData] = useState(null);
  // delete karne ke liye 
  
  const deleteUser = (id) => {
    let filterUsers = users.filter((val) => {
      return val.id !== id;
    });

    console.log(filterUsers);


    setUsers(filterUsers);
    localStorage.setItem("users",JSON.stringify(filterUsers));
  };

  return (
    <div className="p-2">
      <Navbar setToggle={setToggle} />

      {Toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem, index) => {
            return (
              <UserCard
               setUpdatedData ={ setUpdatedData}
                key={elem.id ?? index}
                user={elem}
                deleteUser={deleteUser}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Form updatedData={updatedData} setToggle={setToggle} setUsers={setUsers} users={users} />
        </div>
      )}
    </div>
  );
};

export default App;
