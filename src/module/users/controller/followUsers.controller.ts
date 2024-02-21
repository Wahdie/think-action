// import { ObjectId } from "mongoose";
// import UserModel from "../entities/users.schema";

// // Fungsi untuk mengikuti pengguna lain
// async function followUser(userId: string, userToFollow)
//     try {
//         // Temukan pengguna yang ingin diikuti
//         const userToFollow = await UserModel.findById(userToFollowId);
//         // Temukan pengguna yang ingin melakukan following
//         const user = await UserModel.findById(userId);

//         if (userToFollow && user) {
//             // Pastikan pengguna belum mengikuti pengguna lain
//             if (!user.supporting.includes(userToFollowId)) {
//                 // Lakukan operasi atomik untuk mengikuti pengguna lain
//                 await Promise.all([
//                     UserModel.findByIdAndUpdate(userId, {
//                         $push: { following: userToFollowId },
//                     }),
//                     UserModel.findByIdAndUpdate(userToFollowId, {
//                         $push: { followers: userId },
//                     }),
//                 ]);
//                 console.log(
//                     `UserModel with ID ${userId} is now following user with ID ${userToFollowId}`
//                 );
//             } else {
//                 console.log(
//                     `UserModel with ID ${userId} is already following user with ID ${userToFollowId}`
//                 );
//             }
//         } else {
//             console.log('UserModel not found');
//         }
//     } catch (error) {
//         console.error('Error following user:', error);
//     }
// }

// // Contoh penggunaan fungsi untuk mengikuti pengguna lain
// const userId = 'userId'; // ID pengguna yang ingin melakukan following
// const userToFollowId = 'userToFollowId'; // ID pengguna yang ingin diikuti

// followUser(userId, userToFollowId);
