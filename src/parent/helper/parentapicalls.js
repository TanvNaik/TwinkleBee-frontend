import { API } from "../../backend";

export const addBaby = (userId, baby) => {
  return fetch(`${API}/addBaby/${userId}`, {
    method: "POST",
    
    body: baby
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addBabyVaccination = (babyId, vaccinations) => {
  return fetch(`${API}/addVaccine/${babyId}`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vaccinations)
    }).then(response => response.json())
  .catch(err => console.log(err))
}

export const getUserBabies =(userId) => {
  return fetch(`${API}/${userId}/getBabies`,{
    method: "GET"
  }
 ).then(response => response.json())
 .catch(err => console.log(err))
}
export const addDoctorInfo = (babyId, doctor) => {
  return fetch(`${API}/addDoctor/${babyId}`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(doctor)
    }).then(response => response.json())
  .catch(err => console.log(err))
}