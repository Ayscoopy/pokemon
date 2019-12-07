import React from "react";

export default function Pagination({
  nextPage,
  prevPage,
  gotoNextPage,
  gotoPrevPage
}) {
  return (
    <div style={{ textAlign: "center", paddingTop: "10px" }}>
      {prevPage && <button onClick={gotoPrevPage}>Prev</button>}
      &nbsp;&nbsp;&nbsp;
      {nextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
}
