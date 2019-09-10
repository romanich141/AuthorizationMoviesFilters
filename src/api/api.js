export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "5b7cc4ad1dc2d81719a112016ed740f4";

export const API_KEY_4 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjdjYzRhZDFkYzJkODE3MTlhMTEyMDE2ZWQ3NDBmNCIsInN1YiI6IjVkM2VmM2FiMjE2MjFiMDAxMmY0Njk4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iK-ov3r9ld88ZuO03e3bJwSHFBi_SmgUYvHunB8NdG8";

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(data => resolve(data))
      .catch(response => response.json().then(error => reject(error)));
  });
};
