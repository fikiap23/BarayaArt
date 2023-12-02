/* eslint-disable react/prop-types */
// Gallery.js

const PhotoGallery = ({ photos, handlePopup }) => {
  return (
    <div className="mx-auto">
      <div className="w-full m-auto grid grid-cols-1 md:grid-cols-3 items-center gap-3 justify-center">
        {photos?.map((photo) => (
          <div key={photo?.id} className="photos">
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
      </div>
    </div>
  )
}

export default PhotoGallery
