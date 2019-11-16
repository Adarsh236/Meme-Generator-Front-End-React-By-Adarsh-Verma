import React from 'react';
import './Upload.css';


export default ({ preview }) => (
  <img className="preview"  src={preview} alt="Meme Preview"  
  style={{ textAlign: 'center', marginRight:'-20px' }}/>
); 
//So far the layout for the app has been created and served. 
//Now need to be able to upload images before transformation. 
//Cloudinary provides an awesome interface and API to do this. 
//A preview component should be created to house our image. 
//In the src/components directory, 
//a component Preview.js is created and configured like this:

//export default Preview;