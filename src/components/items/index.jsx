import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css"


function Items({user}){
  const [isOpen, setIsOpen]=useState(false)

  function getDetails(){
    setIsOpen(!isOpen)
  }

    return(
      <CSSTransition
      in={isOpen}
        classNames="open"
        timeout={400}>
      <div className="p-10 rounded-lg bg-white">
        <div
          className="flex items-center justify-between gap-10 flex-wrap p-5 rounded-lg bg-white"
          key={user.id}
        >
          <div className="w-48">
            <div className="font-semibold">Name</div>
            <div className="truncate text"> {user.name} </div>
          </div>
          <div className="w-48">
            <div className="font-semibold">User Name</div>
            <div className="truncate"> {user.username} </div>
          </div>
          <div className="w-48">
            <div className="font-semibold">City</div>
            <div className="truncate"> {user.address.city} </div>
          </div>
          <div className="w-48">
            <div className="font-semibold">Email</div>
            <div className="truncate" title={user.email}>
              {user.email}
            </div>
          </div>
          <div>
            <div
            onClick={getDetails}
              className={`w-32 text-center cursor-pointer text-white font-semibold ${isOpen ? "bg-gradient-to-r from-red-400 to-red-500" : "bg-gradient-to-r from-green-400 to-blue-400" } p-3 rounded-full`}
            >
              {isOpen? "Close" : "View details"}
            </div>
          </div>
        </div>
        <CSSTransition 
        in={isOpen}
        classNames="open-detail"
        unmountOnExit
        timeout={400}
        >
        <div className="mx-5 flex justify-between gap-10 flex-wrap p-5 rounded-xl shadow-md bg-white border">
          <div >
          <div className="font-semibold">Address</div>
          <div>{user.address.street}</div>
          <div>{user.address.suite}</div>
          <div>{user.address.city}</div>
          <div>{user.address.zipcode}</div>
          </div>
          <div >
            <div className="font-semibold">Phone Number</div>
            <div>{user.phone}</div>
          </div>
          <div >
            <div className="font-semibold">Website</div>
            <div>{user.website}</div>
          </div>
          <div >
            <div className="font-semibold">Company Details</div>
            <div>
              <div className="font-semibold">Name</div>
              <div>{user.company.name}</div>
            </div>
            <div>
              <div className="font-semibold">Catch Phrase</div>
              <div>{user.company.catchPhrase}</div>
            </div>
            <div>
              <div className="font-semibold">Product</div>
              <div>{user.company.bs}</div>
            </div>
          </div>
        </div>
        </CSSTransition>
        </div>
        </CSSTransition>
    )
}


export default Items;