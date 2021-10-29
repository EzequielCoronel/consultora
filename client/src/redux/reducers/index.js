const initialState = {
  materias: [],
  usuarios: [],
  provincias: [],
  abogados: [],
  abogado: {},
  consultas: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MATERIAS":
      return {
        ...state,
        materias: action.payload,
      };
    case "GET_ABOGADOS":
      return {
        ...state,
        abogados: action.payload,
      };
    case "GET_PROVINCIAS":
      return {
        ...state,
        provincias: action.payload,
      };
    case "GET_USUARIO":
      return {
        ...state,
        usuarios: action.payload,
      };
    case "GET_USUARIOS":
      return {
        ...state,
        usuarios: action.payload
      }
    case "GET_CASOS":
      return {
        ...state,
        casos: action.payload,
      };
    case "POST_USUARIOS":
      return {
        ...state,
      };
    case "POST_ABOGADO":
      return {
        ...state,
      };
    case "POST_CONSULTA":
      return {
        ...state,
      };
    case "GET_ABOGADO":
      return {
        ...state,
        abogado: action.payload,
      };
    case "GET_CONSULTAS":
      return {
        ...state,
        consultas: action.payload,
      };
    case "DELETE_CONSULTA":
      return {
        ...state,
        consultas: [],
      };
    case "FILTRAR_MATERIAS":
      const abogados = state.abogados;
      const materiasFiltradas =
        action.payload === "todas"
          ? abogados
          : abogados.filter((e) => e.abogados === action.payload);
      return {
        ...state,
        abogados: materiasFiltradas,
      };
    case "FILTRAR_PROVINCIAS":
      const abogados = state.abogados;
      const provinciasFiltradas =
      action.payload === "todas"
      ? abogados
      : abogados.filter((e) => e.abogados === action.payload);
      return {
        ...state,
        abogados: provinciasFiltradas
      }
    default:
      return state;
  }
};

export default rootReducer;
