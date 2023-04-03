import { API } from "../../backend";


// get all bookings
export const getAllBookings = () => {
  return fetch(`${API}/bookings`, {
    method: "GET"
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//approve a booking
export const approveBooking = (bookingId, userId) => {
  return fetch(`${API}/approve/${userId}/${bookingId}`, {
    method: "PUT",
    headers:{
      'Content-Type': "application/json"
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
//reject a booking
export const rejectBooking = (bookingId, userId) => {
  return fetch(`${API}/reject/${userId}/${bookingId}`, {
    method: "PUT",
    headers:{
      'Content-Type': "application/json"
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// get all babysitters
export const getAllBabysitters = () => {
  return fetch(`${API}/babysitters`, {
    method: "GET"
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//verify a babysitter
export const verifyBabysitter = (userId, babysitterId) => {
  return fetch(`${API}/verify/${userId}/${babysitterId}`, {
    method: "PUT",
    headers:{
      'Content-Type': "application/json"
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

//assign a babysitter 
export const assignBabysitter = (babysitterId, bookingId) => {
  return fetch(`${API}/assign/${babysitterId}/${bookingId}`, {
    method: "POST"
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

//delete babysitter
export const deleteBabysitter = (userId, babysitterId) => {
  return fetch(`${API}/delete/${userId}/${babysitterId}`, {
    method: "DELETE",
    headers:{
      'Content-Type': "application/json"
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//get all invoices
export const getAllInvoices = () => {
  return fetch(`${API}/invoices`, {
    method: "GET"
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};