import React from "react";
import Items from "../items";


function ListItem({ user }) {

  return (
    <div className="flex gap-10 flex-col justify-center items-center w-screen mt-5">
      {user.map((user) => (
       <Items key={user.id} user={user}></Items>
      ))}
    </div>
  );
}

export default ListItem;
