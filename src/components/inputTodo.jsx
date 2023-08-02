import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const inputTodo = (props) => {
  const { todoText, onChenge, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="todoを入力" value={todoText} onChange={onChenge} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
