// import React from 'react'
// import Photos from './Photos'

// const Favourites = ({favouritePhotos,handleRemoveFavourite}) => {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar_logo">Fotoflix</div>
//         <div className="navbar_links">
//           <a href="/">Home</a>
//         </div>
//       </nav>
//       <main>
//         <section className="photos">
//           {favouritePhotos.map((image,index) => {
//             return (
//               <Photos
//               key={index}
//               {...image}
//               isFavourite = {true}
//               onFavouriteClick = 
//               {() => handleRemoveFavourite(image)}
//               >
//                 <span>Added to favourites</span>
//               </Photos>
//             )
//           })}
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Favourites
import React from 'react';
import Photos from './Photos'; // Import the Photos component

const Favourite = ({ favoritePhotos, handleRemoveFavorite }) => {
  return (
    <div>
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">Pixahive</div>
        <div className="navbar__links">
          <a href="/">Home</a>
        </div>
      </nav>

      <main>
        <section className="photos">
          <div className="photos-center">
            {favoritePhotos.map((image, index) => {
              return (
                <Photos
                  key={index}
                  {...image}
                  isFavorite={true} // All images in the Favourite component are favorites
                  onFavoriteClick={() => handleRemoveFavorite(image)} // Pass the handleRemoveFavorite function here
                >
                  {/* Pass isFavorite to Photos to show the favorite status */}
                  <span>Added to Favorites</span>
                </Photos>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Favourite;
