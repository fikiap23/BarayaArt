/* eslint-disable react/prop-types */
// Gallery.js
import { useState } from 'react'
import { GoDownload } from 'react-icons/go'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const PhotoGallery = ({ photos, handlePopup }) => {
  const [hoveredPhoto, setHoveredPhoto] = useState(null)

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 576: 2, 768: 3 }}>
      <Masonry gutter="10px">
        {photos?.map((photo) => (
          <div
            key={photo?.id}
            className={`relative transition-opacity duration-300 ease-in-out ${
              hoveredPhoto === photo ? 'opacity-80' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredPhoto(photo)}
            onMouseLeave={() => setHoveredPhoto(null)}
          >
            <img
              id={photo?.id}
              onClick={handlePopup}
              className="rounded-lg"
              src={photo?.urls?.regular}
              alt={photo?.description}
              loading="lazy"
            />
            {hoveredPhoto === photo && (
              <div className="absolute bottom-5 left-5 items-center w-full  ">
                {/* avatar */}
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-3 ">
                    <img
                      src={photo?.user?.profile_image?.small}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-white font-bold">{photo?.user?.name}</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center cursor-pointer mr-[30px]">
                    <GoDownload className="text-black text-3xl" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default PhotoGallery
