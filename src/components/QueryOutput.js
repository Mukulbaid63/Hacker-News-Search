import React from "react";
import QueryItem from "./QueryItem";
import "../styles/QueryOutput.css";
const QueryOutput = ({ result, query }) => {
  const emptyHandler = () => {
    if (result.length === 0 && query !== "") {
      return (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontFamily: "Lato",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          We found no stories matching {query}
        </p>
      );
    }
  };
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      {emptyHandler()}
      {result.map((item, itemindex) => (
        <QueryItem item={item} itemindex={itemindex} />
      ))}
    </div>
  );
};

export default QueryOutput;
