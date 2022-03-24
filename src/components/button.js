import React from "react";

const Button = ({select}) => {
    return  <button onClick={select} type='button' className="btn btn-primary mt-3">Go somewhere</button>
}

export default Button;