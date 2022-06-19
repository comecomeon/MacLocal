import React from "react";

const List = (props) => {

  return (
    <>
      {props.ContentList.map((content, index) => {
        return(
          <div
            key={index}
            style={{
              width: "100%",
              marginLeft: "1rem "
            }}
          >
            내용:{content}
            <hr/>
          </div>
        )
      }) }
    </>
  )
}

export default List;