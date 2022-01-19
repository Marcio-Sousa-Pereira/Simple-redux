import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { actionAddCurse } from "../../store/actions/addCurse";

export const AddCurse = () => {
  const dispatch = useDispatch();
  const [newCurse, setNewCurse] = useState({});

  function addCurseInState(param) {
    setNewCurse({ nome: param });
  }

  return (
    <form>
      <input
        onChange={(e) => addCurseInState(e.target.value)}
        placeholder="nome do curso"
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          dispatch(actionAddCurse(newCurse));
        }}
      >
        Salvar
      </button>
    </form>
  );
};
