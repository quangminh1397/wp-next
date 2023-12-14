import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ShopApp from "../reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, ShopApp);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
// const store = createStore(ShopApp, applyMiddleware(thunkMiddleware));
// export default store;
