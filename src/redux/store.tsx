import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./RootReducer";
import storage from "redux-persist/lib/storage";

interface globalPersist{
    key: string;
    storage: typeof storage;
    whitelist?: string[];
};

const globalPersistConfig: globalPersist = {
    key: 'global',
    storage: storage,
    whitelist: ['global']
};

export const store = configureStore({
    reducer: persistReducer(globalPersistConfig, rootReducer),
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export const persistor = persistStore(store);