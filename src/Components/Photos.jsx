// import React from 'react'
// import { useState,useEffect } from 'react'
// import {FaHeart,FaDownload,FaShare} from "react-icons/fa";
// import Lightbox from 'react-image-lightbox';

// const Photos = () => {
//   const [loading,setLoading] = useState(false);
//   const [photos,setPhotos] = useState([]);
//   const [favouritePhotos,setFavouritePhotos] = useState([]);
//   const [lightboxIndex,setlightboxIndex] = useState(0);
//   const [isLightboxOpen,setIsLightboxOpen] = useState(false);
//   const [searchQuery,setSearchQuery] = useState("")


//   useEffect(() => {
//     const fetchImages = async () => {
//       setLoading(true);
//       const cliendId = '?client_id=nR00JE0nrK0I5y5AFeaZCtlvxm6DMr1myrC4V9mZj_o';
//       const mainUrl = 'https://api.unsplash.com/photos/'
//       let url = mainUrl+cliendId;

//       if(searchQuery){
//         url = `url: https://api.unsplash.com/search/photos/${cliendId}&query=${searchQuery}`
//       }

//       try{
//         const reponse =  await fetch (url); 
//         const data = await reponse.json();
//         setPhotos(data.results || data);
//         setLoading(false);
//       }
//       catch(error){
//         setLoading(false)
//         console.log(error)
//       }
//     }
//     fetchImages();
//   },[searchQuery])

//   const handleFavouriteClick = (photoId) => {
//     const existingIndex = favouritePhotos.find((favPhoto) => favPhoto.id == photoId)
//     if(existingIndex !== -1){
//       setFavouritePhotos((prevFavourites) => {
//         prevFavourites.filter((favPhoto) => favPhoto.id !== favPhoto.id);
//       })
//     }
//     else{
//       const photoToAdd = photos.find((photo) => photo.id === photoId)
//       setFavouritePhotos((prevFavourites) => [...prevFavourites,photoToAdd])
//     }
//   }

//   const handleShare = (photoUrl) =>{
//     const shareUrl = `https://api.whatsapp.com/send?text=
//     ${encodeURIComponent(`Checkout this awesome photo: ${photoUrl}`)}`;
//     window.open(shareUrl,'_blank');
//   }

//   const handleDownload = (photoUrl,photoId) => {
//     const link = document.createElement('a');
//     link.href = photoUrl;
//     link.download = `photo_${photoId}.jpg`
//     // document.appendChild(link)
//     link.click()
//     // document.body.removeChild(link)
//   }

//   const openLightbox = (index) => {
//     setlightboxIndex(index);
//     setIsLightboxOpen(true);
//   }

//   const closeLightBox = () => {
//     setIsLightboxOpen(false)
//   }

//   return (
//     <main>
//       <section className="photos">
//         <div className="photos-center">
//         {loading ? 

//         (<p>Loading</p> ):

//         (photos.map((photo,index) => (
//           <article key={photo.id} className={`photo 
//           ${favouritePhotos.some((favPhoto) => favPhoto.id === photo.id) ? 
//             'favorite-photo' : ""}`}>
//             <img src={photo.urls.regular} alt={photo.alt_description}
//             onClick={() => openLightbox(index)}/>
//             <div className="photo info">
//               <div className="photo-header">
//                 <h4>{photo.user.name}</h4>
//                 <button className={`favourite-btn 
//                   ${favouritePhotos.some((favPhoto) => favPhoto.i === photo.id)
//                      ? 'active' : ""}`} onClick={() => handleFavouriteClick(photo.id)}><FaHeart/></button>
//               </div>
//               <div className="photo-actions">
//                 <p>
//                   <FaHeart className='heart-icon'/>{photo.likes}
//                 </p>
//                 <button onClick = {() => handleShare(photo.urls.regular)}  
//                 className="share-btn">
//                      <FaShare/>
//                 </button>
//                 <button onClick={() => handleDownload(photo.urls.full,photo.id)}
//                 className="download-btn">
//                   <FaDownload/>
//                 </button>
//               </div>
//               <a href={photo.user.portfolio_url}>
//                 <img src={photo.user.profile_image.medium} 
//                 className='user-img' alt={photo.user.name}/>
//               </a>
//             </div>
//           </article>
//         ))
//       )}
//       </div>
//       </section>
//       {isLightboxOpen && (
//         <Lightbox mainSrc={photos[lightboxIndex].urls.full} onCloseRequest={closeLightBox}></Lightbox>
//       )}
//     </main>
//   )
// }

// over


// return (
//   <main>
//     <section className="photos">
//       {loading ? (
//         <p>Loading</p>
//       ) : (
//         photos.map((photo) => (
//           <article key={photo.id} className="photo">
//             <img src={photo.urls.regular} alt={photo.alt_description} />
//             <div className="photo-info">
//               <div className="photo-header">
//                 <h4>{photo.user.name}</h4>
//                 <button className="favourite-btn"><FaHeart /></button>
//               </div>
//               <div className="photo-actions">
//                 <p>
//                   <FaHeart className="heart-icon" />{photo.likes}
//                 </p>
//                 <button className="share-btn">
//                   <FaShare />
//                 </button>
//                 <button className="download-btn">
//                   <FaDownload />
//                 </button>
//               </div>
//               <a href={photo.user.portfolio_url}>
//                 <img src={photo.user.profile_image.medium} className="user-img" alt={photo.user.name} />
//               </a>
//             </div>
//           </article>
//         ))
//       )}
//     </section>
//   </main>
// );
// };

// over

import React, { useState } from 'react';
import { FaHeart, FaShare, FaDownload } from 'react-icons/fa';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Photos = ({
  id,
  urls: { regular, full }, // Add the full-size image URL
  alt_description,
  likes,
  user: { name, portfolio_url, profile_image: { medium } },
  onFavoriteClick,
  isFavorite,
}) => {
  const [isPhotoFavorite, setIsPhotoFavorite] = useState(isFavorite);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleFavoriteClick = () => {
    setIsPhotoFavorite(!isPhotoFavorite);
    onFavoriteClick({
      id,
      urls: { regular, full }, // Pass the full-size image URL when updating favorite status
      alt_description,
      likes,
      user: { name, portfolio_url, profile_image: { medium } },
    });
  };

  const handleShare = () => {
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `Check out this awesome photo: ${regular}`
    )}`;
    window.open(shareUrl, '_blank');
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = full;
    link.download = `photo_${id}.jpg`; // You can customize the downloaded file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article className="photo">
      <img src={regular} alt={alt_description} onClick={openLightbox} />
      <div className="photo-info">
        <div className="photo-header">
          <h4>{name}</h4>
          <button className={`favorite-btn ${isPhotoFavorite ? 'active' : ''}`} onClick={handleFavoriteClick}>
            <span role="img" aria-label="Favorite">
              {isPhotoFavorite ? '❤️' : '♡'}
            </span>
          </button>
        </div>
        <div className="photo-actions">
          <p>
            <FaHeart className="heart-icon" /> {likes}
          </p>
          <button className="share-btn" onClick={handleShare}>
            <FaShare className="share-icon" />
          </button>
          <button className="download-btn" onClick={handleDownload}>
            <FaDownload className="download-icon" />
          </button>
        </div>
        <a href={portfolio_url}>
          <img src={medium} className="user-img" alt="" />
        </a>
      </div>

      {isLightboxOpen && (
        <Lightbox
          mainSrc={regular}
          onCloseRequest={closeLightbox}
          imageCaption={
            <div className="photo-info">
              <div className="photo-header">
                <h4>{name}</h4>
                <button className={`favorite-btn ${isPhotoFavorite ? 'active' : ''}`} onClick={handleFavoriteClick}>
                  <span role="img" aria-label="Favorite">
                    {isPhotoFavorite ? '❤️' : '♡'}
                  </span>
                </button>
              </div>
              <div className="photo-actions">
                <p>
                  <FaHeart className="heart-icon" /> {likes}
                </p>
                <button className="share-btn" onClick={handleShare}>
                  <FaShare className="share-icon" />
                </button>
                <button className="download-btn" onClick={handleDownload}>
                  <FaDownload className="download-icon" />
                </button>
              </div>
              <a href={portfolio_url}>
                <img src={medium} className="user-img" alt="" />
              </a>
            </div>
          }
        />
      )}
    </article>
  );
};

export default Photos;
