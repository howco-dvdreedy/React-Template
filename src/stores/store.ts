import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './slices/titleSlice'

export const store = configureStore({
  reducer: {
    title:titleReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch