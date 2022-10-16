import { legacy_createStore as createStore } from "redux";
import { ICartState } from "./modules/card/types";
import rootReducer from "./rootReducer";

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer);

export default store;
