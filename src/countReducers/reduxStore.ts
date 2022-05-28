import {countReducer} from "./countReducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {loadState, saveState} from "./utils/localStorage.utils";

export type StateAppCountType = ReturnType<typeof reducersBox>
const reducersBox = combineReducers({
  count:countReducer
})
let store = legacy_createStore(reducersBox,loadState(),applyMiddleware())
export type StoreType = typeof store;

store.subscribe(()=>{
  saveState({
    count:store.getState().count
  })
})
export default store