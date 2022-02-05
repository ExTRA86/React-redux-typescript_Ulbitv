import { userReducer } from './userReducer'
import { combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { postReducer } from './postReducer'
import { photoReducer } from './photoReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  post: postReducer,
  photo: photoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
