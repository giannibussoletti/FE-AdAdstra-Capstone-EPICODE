import { configureStore, combineReducers } from "@reduxjs/toolkit"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

import storage from "redux-persist/es/storage"

import menuSlice from "../reducers/NavBarSlice"
import bookingSlice from "../reducers/TicketSlice"
import movieSlice from "../reducers/MovieSlice"
import userSlice from "../reducers/UserSlice"

const CinemaPersistConfig = {
  key: "menuState",
  storage,
  whitelist: ["cinemaId"],
}

const rootReducer = combineReducers({
  menuState: persistReducer(CinemaPersistConfig, menuSlice),
  bookingState: bookingSlice,
  movieState: movieSlice,
  userState: userSlice,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userState"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
