import React from "react";
import "../styles/QueryItem.css";

const QueryItem = ({ item, itemindex }) => {
  return (
    <div id="itemlist">
      <div
        style={{
          display: "flex",
          fontFamily: "Lato",
          fontSize: "17px",
          marginLeft: "25px",
        }}
      >
        <div key={itemindex}>
          {item.title}

          {item.url != null && item.url != "" && (
            <a
              href={item.url}
              style={{
                fontSize: "15px",
                color: "#878380",
                textDecoration: "none",
                marginLeft: "5px",
              }}
            >
              ({item.url})
            </a>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "12px",
          color: "#878380",
          marginLeft: "15px",
          marginTop: "5px",
        }}
      >
        <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
          {item.points} points
        </span>
        |
        <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
          {item.author}
        </span>
        |
        <span style={{ padding: "0px 3px", margin: "0px 3px" }}>
          {item.num_comments} comments
        </span>
      </div>
    </div>
  );
};

export default QueryItem;
