import "./App.css";
import React, { useState, useEffect } from "react";
import ListItem from "./components/list_item";
import Pagenation from "./components/pagination";

function App() {
  let [UserData, setUserData] = useState([]);

  let [currentPage, setCurrentPage] = useState(1);
  let [currentPosts,setCurrentPost] = useState([]);
  const postsPerPage = 3;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    var response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    var result = await response.json();
    setUserData(result);
  }
  useEffect(() => {
    var elems = document.querySelectorAll(".selected");

    [].forEach.call(elems, function (el) {
      el.classList.remove("selected");
    });
    document.getElementById(currentPage)?.classList.add("selected");
  });
  
  useEffect(()=>{
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    setCurrentPost(UserData.slice(indexOfFirstPost, indexOfLastPost));
  },[currentPage,UserData])


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      <ListItem user={currentPosts}></ListItem>
      <Pagenation
        postsPerPage={postsPerPage}
        totalPosts={UserData.length}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}

      ></Pagenation>
    </React.Fragment>
  );
}

export default App;
