import React from "react";
import { useSelector } from "react-redux";

export const ListCurses = () => {
  const list = useSelector((state) => state.reducerAddCurse.data);
  
  return (
    <ul>
      {list &&
        list.map((curse, index) => {
          return <li key={index}>{ curse.nome }</li>;
        })}
    </ul>
  );
};
