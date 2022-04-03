import React from "react";

const ButtonSelect = ({ isSelect, select, name, color = "primary", data }) => {
  return isSelect ? (
    <button
      onClick={() => {
        select(data);
      }}
      type="button"
      className={`btn btn-${color} mt-3 `}
    >
      {name}
    </button>
  ) : (
    <button
      onClick={() => {
        select(data);
      }}
      type="button"
      className={`btn btn-${color} mt-3 `}
      data-bs-toggle="modal"
      data-bs-target="#modalselect"
    >
      {name}
    </button>
  );
};

export default ButtonSelect;
