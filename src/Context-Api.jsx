// import { createContext } from "react";

// const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
// const url = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

// const fetchData = async () => {
//         try {
//             let resp = await fetch(url,{
//                 method:"GET",
//                 headers: {
//                     Authorization:`Client-Id ${ACCESS_KEY}`
//                 }
//             })

//             if (!resp.ok) {
//                 throw new Error(`HTTP error! Status: ${resp.status}`);
//             }

//             resp = await resp.json();
//             return resp;
//         } 
//         catch (err) {
//             console.error('Error fetching from Unsplash:', err);
//         }
// }

// export const ContextApi = createContext(fetchData());