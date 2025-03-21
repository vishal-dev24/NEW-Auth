//  * <div className='flex justify-center min-h-screen bg-gray-700 p-4' >
//        <div className='bg-white p-4 rounded-3xl shadow-lg w-full max-w-lg h-full  text-center mt-10'>
//          <img className="w-28 h-28 rounded-full mx-auto border-4 border-blue-700" src={`http:localhost:5000uploads${user.image}`} alt="Profile" >
//          <h2 className="text-xl font-semibold mt-4">{user.username}<h2>
//          <p className="text-gray-600 text-2xl">Full Stack Developer<p>
//          <div className="flex flex-col items-center text-gray-800 text-lg p-3 rounded-xl">
//            <p className="font-bold text-gray-900 flex items-center gap-2">
//              <span className="text-blue-600 text-2xl">📧<span>
//              <span>Email:<span> {user.email}
//            <p>
//            <p className=" text-gray-900 mb-3 flex items-center gap-2">
//              <span className="text-green-600 text-2xl">📍<span>
//              <span>Location:<span> New York, USA
//            <p>
//          <div>
//          <div className="flex justify-center gap-4">
//            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-all duration-200" onClick={handleLogout} > Logout <button>
//            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-all duration-200"> Follow Me  <button>
//          <div>
//        <div>
//      <div> *

//        <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-6">
//         <div className="p-6 rounded-3xl shadow-xl w-full max-w-3xl flex items-center border border-gray-700 mt-10">
//           {* Left Side - User Details *}
//           <div className="flex-1 text-left px-6">
//             <h2 className="text-3xl font-bold text-white">{user.username}<h2>
//             <p className="text-gray-300 text-xl mt-1">🚀 Full Stack Developer<p>

//             <div className="mt-4 space-y-3 text-lg text-gray-200">
//               <p className="flex items-center gap-3">
//                 <span className="text-blue-400 text-2xl">📧<span>
//                 <span className="font-semibold">Email:<span> {user.email}
//               <p>
//               <p className="flex items-center gap-3">
//                 <span className="text-green-400 text-2xl">📍<span>
//                 <span className="font-semibold">Location:<span> New York, USA
//               <p>
//             <div>

//             <div className="flex gap-4 mt-6">
//               <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full shadow-md hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-95 transition-all duration-200" onClick={handleLogout}>
//                 Logout
//               <button>
//               <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-all duration-200">
//                 Follow Me
//               <button>
//             <div>
//           <div>

//           {* Right Side - Profile Image *}
//           <div className="w-48 h-48">
//             <img className="w-full h-full object-cover rounded-2xl border-4 border-blue-500 shadow-lg" src={`http:localhost:5000uploads${user.image}`} alt="Profile" >
//           <div>

//         <div>
//        <div>

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([null]);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/profile", { withCredentials: true });
      setUser(res.data);
    } catch (error) {
      console.log(error);
      setUser(null);
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [])

  const handleLogout = async () => {
    await axios.get("http:localhost:5000/logout", { withCredentials: true });
    navigate('/login');
  }

  return (
    // <div className='flex justify-center min-h-screen bg-gray-700 p-4' >
    //   <div className='bg-white p-4 rounded-3xl shadow-lg w-full max-w-lg h-full  text-center mt-10'>
    //     <img className="w-28 h-28 rounded-full mx-auto border-4 border-blue-700" src={`http://localhost:5000/uploads/${user.image}`} alt="Profile" />
    //     <h2 className="text-xl font-semibold mt-4">{user.username}</h2>
    //     <p className="text-gray-600 text-2xl">Full Stack Developer</p>
    //     <div className="flex flex-col items-center text-gray-800 text-lg p-3 rounded-xl">
    //       <p className="font-bold text-gray-900 flex items-center gap-2">
    //         <span className="text-blue-600 text-2xl">📧</span>
    //         <span>Email:</span> {user.email}
    //       </p>
    //       <p className="text-gray-900 mb-3 flex items-center gap-2">
    //         <span className="text-green-600 text-2xl">📍</span>
    //         <span>Location:</span> New York, USA
    //       </p>
    //     </div>
    //     <div className="flex justify-center gap-4">
    //       <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-all duration-200" onClick={handleLogout}> Logout </button>
    //       <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-all duration-200"> Follow Me </button>
    //     </div>
    //   </div>
    // </div>

    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-6">
      <div className="p-6 rounded-3xl shadow-xl w-full max-w-3xl flex flex-col md:flex-row items-center border border-gray-700 overflow-hidden mt-4 md:mt-16 gap-6">

        {/* Right Side - Profile Image (Mobile me upar, Desktop me right side) */}
        <div className="w-64 h-64 md:w-64md:h-64">
          <img className="w-full h-full object-cover rounded-2xl border-4 border-blue-500 shadow-lg" src={`http://localhost:5000/uploads/${user.image}`} alt="Profile" />
        </div>

        {/* Left Side - User Details */}
        <div className="flex-1 text-center md:text-left px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Name: {user.username}</h2>
          <p className="text-gray-300 text-lg md:text-xl mt-1">🚀 Full Stack Developer</p>

          <div className="mt-4 space-y-3 text-base md:text-lg text-gray-200">
            <p className="flex flex-col md:flex-row md:items-center gap-2">
            📧 Email: {user.email}
            </p>
            <p className="flex flex-col md:flex-row md:items-center gap-2">
             📍 Location: New York, USA
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full shadow-md hover:from-red-600 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-95 transition-all duration-200" onClick={handleLogout}>
              Logout
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-all duration-200">
              Follow Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home