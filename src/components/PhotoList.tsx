import React, { FC, useEffect } from "react"
import { useActions } from "../hooks/useAction"
import { useTypeSelector } from "../hooks/useTypeSelector"

const PhotoList: FC = () => {
  const { error, limit, loading, page, photos } = useTypeSelector(
    state => state.photo
  )

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const { fetchPhotos, setPhotosPage } = useActions()

  useEffect(() => {
    fetchPhotos(page, limit)
  }, [page])

  return (
    <div>
      {loading && <h1>Идет загрузка...</h1>}
      {error && { error }}
      {photos.map(photo => (
        <div key={photo.id}>
          {photo.id}. {photo.title}
          <div>
            <img src={photo.thumbnailUrl} alt={photo.thumbnailUrl} />
          </div>
          <hr />
        </div>
      ))}
      <div style={{ display: "flex", cursor: "pointer" }}>
        {pages.map(p => (
          <div
            onClick={() => setPhotosPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoList
