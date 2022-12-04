import { pokemonReducer } from "./reducers/pokemonReducer";
import { appReducer } from "./reducers/appReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    app: appReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
