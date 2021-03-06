// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllProfiles = async () => {
  const response = await axios.get(`/blog`);
// console.log(response);
  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllProfiles };


// file that does the fetching for me!!
// keep for referencing says Michael!
// this queries the end point in the server side
