import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./user.redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
  })
);
const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistedStore = persistStore(store);
export default store;
export { persistedStore };
