import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userDetailsReducer, userLoginReducer } from "./reducers/userReducer";
import { AbonnementCreateReducer, AbonnementListReducer } from "./reducers/AbonnementReducers";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  abonnementList : AbonnementListReducer,
  abonnementCreate : AbonnementCreateReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
 
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
