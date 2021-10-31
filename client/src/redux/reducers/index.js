const initialState = {
  materias: [],
  usuarios: [],
  provincias: [],
  abogados: [],
  abogado: {},
  error: "",
  personas: [],
  usuario: {},
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
      console.log("action.payload", action.payload);
      return {
        ...state,
        usuario: action.payload,
      };
    case "GET_USUARIOS":
      return {
        ...state,
        usuarios: action.payload,
      };
    case "GET_CASOS":
      return {
        ...state,
        casos: action.payload,
      };
    case "POST_USUARIO":   //for login
      let user = action.payload
      if (user.adminId) {
        return {
          ...state,
          admin: action.payload
        };
      } else if (user.abogadoId) {
        return {
          ...state,
          abogado: action.payload
        };
      } else {
        return {
          ...state,
          usuario: action.payload
        };
      }
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
    case "SET_ABOGADO":
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default rootReducer;
