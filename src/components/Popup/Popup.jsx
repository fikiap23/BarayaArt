/* eslint-disable react/prop-types */

import './Popup.css'
import { saveAs } from 'file-saver'

const Popup = ({ handlePopup }) => {
  const downloadImage = (image_url, image_name) => {
    saveAs(image_url, image_name) // Put your image URL here.
  }

  return (
    <div>
      {handlePopup?.id && (
        <div className="popupWrapper popup">
          <div>
            <img
              className="popupImage"
              src={handlePopup?.urls?.regular}
              alt={handlePopup?.description}
            />
          </div>
          <div className="downloadImage">
            <button
              className="downloadButton cursor-pointer"
              title="Download photo"
              onClick={() =>
                downloadImage(
                  handlePopup?.urls?.regular,
                  handlePopup?.description
                )
              }
            >
              Download
            </button>
          </div>
          <div className="userInfo">
            <img src={handlePopup?.user?.profile_image?.medium} alt="user" />
            <div>
              <b>{handlePopup?.user?.name}</b>
              <p>{handlePopup?.user?.username}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Popup
