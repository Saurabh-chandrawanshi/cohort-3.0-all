
import React, { useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import Navbar from "./components/navbar";

const App = () => {
  const [Toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="p-2">
      <Navbar setToggle={setToggle} />

      {Toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem, index) => {
            return (
              <UserCard
                key={elem.id ?? index}
                user={elem}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Form
            setToggle={setToggle}
            setUsers={setUsers}
          />
        </div>
      )}
    </div>
  );
};

export default App;
