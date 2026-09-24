import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {}
})

export const state = store.getState()
export const dispatch = store.dispatch
