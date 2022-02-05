export interface PostState {
  posts: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum PostActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  SET_POSTS_PAGE = "SET_POSTS_PAGE",
}

interface FetchPostAction {
  type: PostActionTypes.FETCH_POSTS
}

interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS
  payload: any[]
}

interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR
  payload: string
}

interface SetPostPage {
  type: PostActionTypes.SET_POSTS_PAGE
  payload: number
}

export type PostAction =
  | FetchPostAction
  | FetchPostSuccessAction
  | FetchPostErrorAction
  | SetPostPage
