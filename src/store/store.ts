
import { persistReducer } from 'redux-persist';
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

const persitConfig = {
    key: 'd-productivity',
    storage,
}

const persistedReducer = persistReducer(persitConfig, rootReducer)

const store = createStore(persistedReducer);

const persistedStore = persistStore(store as any);

export { store as default, persistedStore };