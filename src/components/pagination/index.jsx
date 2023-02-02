import React from "react";
import "./style.css"

function Pagenation({ postsPerPage, totalPosts, paginate ,currentPage ,setCurrentPage }) {

    const pageNumbers = [];

    const totalPage =Math.ceil(totalPosts / postsPerPage)

    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
      }

    function perviousPage(){
        if(currentPage!=1)setCurrentPage(currentPage-1)
    }

    function nextPage(){
        if(currentPage < totalPage)setCurrentPage(currentPage+1)
    }

  return ( 
    <div className="flex justify-center items-center gap-10 mt-5 select-none	">
      <div onClick={perviousPage} className="cursor-pointer">&lt;</div>
       {pageNumbers.map((value) => {
        return <div key={value} onClick={()=>paginate(value) } id={value} className="cursor-pointer p-1 px-3">{value}</div>;
      })}
      <div onClick={nextPage} className="cursor-pointer">&gt;</div>
    </div>
  );
}

export default Pagenation;
