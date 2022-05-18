// import {v2 as cloudinary} from 'cloudinary';

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });

// export const uploadImg = async (data) => {
//     try{
//       const response =  await cloudinary.uploader.upload(data);
//       return response
//     }catch(error) {
//         console.error("error",error);
//       }
// }