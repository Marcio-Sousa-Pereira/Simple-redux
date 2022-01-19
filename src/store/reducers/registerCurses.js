const INITIAL_STATE = {
  data: [
    { nome: "Adiministração", status: "fechado" },
    { nome: "Enfermagem", status: "aberto" },
    { nome: "Sisitemas de informação", status: "aberto" },
  ],
};

export default function addCurses(state = INITIAL_STATE, action) {
  console.log(state);
  switch (action.type) {
    case "ADD_CURSE": {
      const copyCurse = [...state.data];

      copyCurse.push(action.curse);

      return { data: copyCurse };
    }
    default: {
      return state;
    }
  }
}
