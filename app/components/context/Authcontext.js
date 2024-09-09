// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(null);
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const authData = JSON.parse(localStorage.getItem("AuthPages"));
//     const userData = JSON.parse(localStorage.getItem("UserData"));

//     if (token && authData) {
//       setAuth({ token, auth_page: authData, user: userData });
//     }
//   }, []);
//   const login = async (email, password) => {
//     try {
//       const response = await axios.post(
//         "https://hammerhead-app-lqsdj.ondigitalocean.app/api/user/login",
//         {
//           email,
//           password,
//         }
//       );

//       if (response.status === 200) {
//         const data = response.data;
//         setAuth(data); // Set the authenticated user data
//         localStorage.setItem("token", data.token); // Store token in localStorage for persistent login
//         localStorage.setItem("AuthPages", JSON.stringify(data.auth_page)); // Store token in localStorage for persistent login
//         localStorage.setItem("UserData", JSON.stringify(data)); // Store token in localStorage for persistent login
//       } else {
//         throw new Error(response.data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error.message);
//       throw error;
//     }
//   };

//   const verifyUser = async (auth_page) => {
//     try {

//       const token = localStorage.getItem("token");
//       console.log(auth)
//       const response = await axios.post(
//         "https://hammerhead-app-lqsdj.ondigitalocean.app/api/user/verify-page",
//         { id: auth?.user?._id || auth?._id, auth_page },
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );
//       return response?.data?.success;
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       return false;
//     }
//   };

//   const logout = () => {
//     setAuth(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("AuthPages");
//     localStorage.removeItem("UserData");
//   };

//   const isAuthenticated = () => !!auth;

//   return (
//     <AuthContext.Provider
//       value={{ login, logout, isAuthenticated, auth, verifyUser }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext({ videos: [], categories: [] });

export const DataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://dev.saniiro.net/api/v1/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data?.Data?.VideoResources);
        setCategories(data?.Data?.Classifications);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <DataContext.Provider value={{ videos, categories }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
