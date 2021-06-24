import { createReducer } from "@reduxjs/toolkit";
import { addNewToList, deletedItem, filterChange } from "./actions";

const initialState = {
  items: [],
  filter: "",
};

const mainReducer = createReducer(initialState, {
  [addNewToList]: (state, action) => ({
    ...state,
    items: [action.payload, ...state.items],
  }),
  [deletedItem]: (state, action) => ({
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  }),
  [filterChange]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

export default mainReducer;
// ============= Old

// const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_LIST:
//       return {
//         ...state,
//         items: [action.payload, ...state.items],
//       };
//     case DELETED_ITEM:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     case FILTER_CHANGE:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// import { combineReducers } from "redux";

// const contactsReducer = (state = {contacts: []}, action) => {
//   return state;
// };

// const errorReducer = (state = "", action) => {
//   return state;
// };

// const productsReducer = combineReducers({
//   items: contactsReducer,
//   error: errorReducer,
// });

// export default productsReducer;
