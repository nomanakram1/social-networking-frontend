import axios from "axios";
// get data from api
export const GetFeeds = (paremsObj) =>
  new Promise((resolve, reject) => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:3000/feed",
      headers: {},
      params: paremsObj ? paremsObj : null, // Add params object to config if it exists
    };
    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
 
export const GetAppartments = (paremsObj) =>
  new Promise((resolve, reject) => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:3000/appartment",
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
export const GetResidents = (paremsObj) =>
  new Promise((resolve, reject) => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:3000/resident",
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
