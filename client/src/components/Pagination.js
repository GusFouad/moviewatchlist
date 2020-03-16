import React from "react";
const Pagination = props => {
  const pageLinks = [];
  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "active" : "";
    pageLinks.push(
      <li
        className={`waves-effect ${active}`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <a>{i}</a>
      </li>
    );
  }
  return (
    <div>
      <div>
        <ul>{pageLinks}</ul>
      </div>
    </div>
  );
};

export default Pagination;
