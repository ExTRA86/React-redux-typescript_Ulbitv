import axios from "axios"
import { Dispatch } from "redux"
import { PhotoAction, PhotoActionTypes } from "../../types/photos"

export const fetchPhotos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<PhotoAction>) => {
    try {
      dispatch({ type: PhotoActionTypes.FETCH_PHOTOS })
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        { params: { _page: page, _limit: limit } }
      )
      setTimeout(() => {
        dispatch({
          type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
        payload: "Произошла ошибка при загрузке картинок",
      })
    }
  }
}

export function setPhotosPage(page: number): PhotoAction {
  return { type: PhotoActionTypes.SET_PHOTOS_PAGE, payload: page }
}
