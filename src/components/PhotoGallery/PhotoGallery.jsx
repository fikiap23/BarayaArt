/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// Gallery.js
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const PhotoGallery = ({ photos, handlePopup }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 576: 2, 768: 3 }}>
      <Masonry gutter="10px">
        {photos?.map((photo) => (
          <div key={photo?.id}>
            <img
              id={photo?.id}
              onClick={handlePopup}
              className="rounded-lg"
              src={photo?.urls?.regular}
              alt={photo?.description}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default PhotoGallery
