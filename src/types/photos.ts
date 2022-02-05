export interface PhotoState {
  photos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum PhotoActionTypes {
  FETCH_PHOTOS = "FETCH_PHOTOS",
  FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS",
  FETCH_PHOTOS_ERROR = "FETCH_PHOTOS_ERROR",
  SET_PHOTOS_PAGE = "SET_PHOTOS_PAGE",
}

interface FetchPhotoAction {
  type: PhotoActionTypes.FETCH_PHOTOS
}

interface FetchPhotoSuccessAction {
  type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS
  payload: any[]
}

interface FetchPhotoErrorAction {
  type: PhotoActionTypes.FETCH_PHOTOS_ERROR
  payload: string
}

interface SetPhotoPage {
  type: PhotoActionTypes.SET_PHOTOS_PAGE
  payload: number
}

export type PhotoAction =
  | FetchPhotoAction
  | FetchPhotoSuccessAction
  | FetchPhotoErrorAction
  | SetPhotoPage
