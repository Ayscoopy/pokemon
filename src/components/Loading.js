import React from "react";
import { Spinner } from "reactstrap";

export default function Loading() {
  return (
    <div style={{ padding: "10em 11em 10em 11em" }}>
      <Spinner style={{ width: "6rem", height: "6rem" }} color="dark" />
      <p>&nbsp;&nbsp;Keep Calm...</p>
    </div>
  );
}
