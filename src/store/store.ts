
import { persistReducer } from 'redux-persist';
import { createStore } from "redux";
import reducer from "./reducer";
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

const persitConfig = {
    key: 'd-productivity',
    storage,
}

const persistedReducer = persistReducer(persitConfig, reducer)

const store = createStore(persistedReducer);

const persistedStore = persistStore(store as any);

export { store as default, persistedStore };