import { createAction } from "@reduxjs/toolkit";

// const ADD_TO_LIST = "list/addToList";
// const DELETED_ITEM = "list/deletedItem";
// const FILTER_CHANGE = "filter/filterChange";

// export { ADD_TO_LIST, DELETED_ITEM, FILTER_CHANGE };

const addNewToList = createAction("list/addToList");
const deletedItem = createAction("list/deletedItem");
const filterChange = createAction("filter/filterChange");
//  ============== Old
// const addNewToList = (payload) => {
//   return {
//     type: ADD_TO_LIST,
//     payload,
//   };
// };

// const deletedItem = (payload) => {
//   return {
//     type: DELETED_ITEM,
//     payload,
//   };
// };

// const filterChange = (payload) => {
//   return {
//     type: FILTER_CHANGE,
//     payload,
//   };
// };

export { addNewToList, deletedItem, filterChange };
