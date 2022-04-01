import React from "react";

const Button = ({
  select,
  name,
  color = "primary",
  data,
  allData,
  allSelect,
  isSelect,
  dataUpdates,
}) => {
  if (isSelect) {
    return (
      <button
        onClick={() => {
          var id = 2;
          let newData = allData.map((v) => {
            if (v.id === data.id) {
              v.select = false;
            }
            return v;
          });

          let indexSelect = allSelect
            .map((v) => {
              if (v.id === data.id) {
                return v.id;
              }
            })
            .indexOf(id);
          allSelect.splice(indexSelect, 1);
          dataUpdates([...newData]);
          select([...allSelect]);
        }}
        type="button"
        className={`btn btn-${color} mt-3`}
      >
        {name}
      </button>
    );
  } else {
    if (allSelect.length > 0) {
      return (
        <button
          onClick={() => select([...allSelect, data])}
          type="button"
          className={`btn btn-${color} mt-3`}
        >
          {name}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => select([data])}
          type="button"
          className={`btn btn-${color} mt-3`}
        >
          {name}
        </button>
      );
    }
  }
};

export default Button;
