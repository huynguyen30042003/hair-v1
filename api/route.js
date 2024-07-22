import axios from "axios";
import FormData from "form-data";
const BASE_URL = "http://127.0.0.1:5000/api";

//Auth
export const login = async (email, password) => {
  const response = await axios.post(BASE_URL + "/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const refreshToken = async (refreshToken) => {
  const response = await axios.post(BASE_URL + "/auth/refresh-token", {
    refreshToken,
  });
  return response.data;
};

export const logout = async (refreshToken) => {
  const response = await axios.post(BASE_URL + "/auth/logout", {
    refreshToken,
  });
  return response.data;
};

export const register = async (name, email, password, phone, role) => {
  const response = await axios.post(BASE_URL + "/auth/register", {
    name,
    email,
    password,
    phone,
    role,
  });
  return response.data;
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(BASE_URL + "/auth/forgot-password", {
      email,
    });
    console.log(response.data); // Thêm dòng này để kiểm tra dữ liệu trả về
    return response.data;
  } catch (error) {
    console.error(error); // Thêm dòng này để log lỗi
    throw error;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/auth/reset-password/${token}`,
      {
        password,
      }
    );
    console.log(response.data); // Thêm dòng này để kiểm tra dữ liệu trả về
    return response.data;
  } catch (error) {
    console.error(error); // Thêm dòng này để log lỗi
    throw error;
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Appointment
export const getAppointments = async (token) => {
  const response = await axios.get(`${BASE_URL}/appointments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const GetAppointmentByAccountId = async (userId, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `http://localhost:5000/api/appointments/getByAccountId/${userId}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching appointment:", error);
    throw error;
  }
};
export const getAppointmentById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/appointments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createAppointment = async (appointmentData, token) => {
  const response = await axios.post(
    `${BASE_URL}/appointments`,
    appointmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const updateAppointment = async (id, appointmentData, token) => {
  const response = await axios.put(
    `${BASE_URL}/appointments/${id}`,
    appointmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const deleteAppointment = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/appointments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
///////////////////////////////////////////////////////////////////////////////////////////////////

//Account
export const getUserProfile = async (token) => {
  const response = await axios.get(`${BASE_URL}/accounts/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateUserProfile = async (userData, token) => {
  const response = await axios.put(`${BASE_URL}/accounts/profile`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getUsers = async (token) => {
  const response = await axios.get(`${BASE_URL}/accounts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createUser = async (user, token) => {
  const response = await axios.post(`${BASE_URL}/accounts`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getUserById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/accounts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const updateUser = async (id, userData, token) => {
  const response = await axios.put(`${BASE_URL}/accounts/${id}`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};
export const changePassword = async (data, token) => {
  const response = await axios.put(`${BASE_URL}/accounts/change-password`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};
export const deleteUser = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/accounts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
//////////////////////////////////////////////////////////////////////////////////////

//Category
export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

export const getCategoryById = async (id) => {
  const response = await axios.get(`${BASE_URL}/categories/${id}`);
  return response.data.data;
};

export const createCategory = async (categoryData, token) => {
  const response = await axios.post(`${BASE_URL}/categories`, categoryData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const updateCategory = async (id, categoryData, token) => {
  const response = await axios.put(
    `${BASE_URL}/categories/${id}`,
    categoryData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data;
};

export const deleteCategory = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
/////////////////////////////////////////////////////////////////////////////////////

//Combo
export const getCombos = async () => {
  const response = await axios.get(`${BASE_URL}/combos`);
  return response.data;
};

export const getComboById = async (id) => {
  const response = await axios.get(`${BASE_URL}/combos/${id}`);
  return response.data.data;
};

export const createCombo = async (comboData, token) => {
  const response = await axios.post(`${BASE_URL}/combos`, comboData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateCombo = async (id, comboData, token) => {
  const response = await axios.put(`${BASE_URL}/combos/${id}`, comboData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const deleteCombo = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/combos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
///////////////////////////////////////////////////////////////////////////////////////////////////

//Contact
export const getContacts = async (token) => {
  const response = await axios.get(`${BASE_URL}/contacts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getContactById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createContact = async (contactData, token) => {
  const response = await axios.post(`${BASE_URL}/contacts`, contactData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateContact = async (id, contactData, token) => {
  const response = await axios.put(`${BASE_URL}/contacts/${id}`, contactData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const deleteContact = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
//////////////////////////////////////////////////////////////////////////////////////////////////

//Location
export const getLocations = async () => {
  const response = await axios.get(`${BASE_URL}/locations`);
  return response.data.data;
};

export const getLocationById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/locations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const createLocation = async (locationData, token) => {
  const response = await axios.post(`${BASE_URL}/locations`, locationData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const updateLocation = async (id, locationData, token) => {
  const response = await axios.put(
    `${BASE_URL}/locations/${id}`,
    locationData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data;
};

export const deleteLocation = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/locations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

//Payment
export const getPayments = async (token) => {
  const response = await axios.get(`${BASE_URL}/payments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const getPaymentById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/payments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const createPayment = async (paymentData, token) => {
  const response = await axios.post(`${BASE_URL}/payments`, paymentData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const updatePayment = async (id, paymentData, token) => {
  const response = await axios.put(`${BASE_URL}/payments/${id}`, paymentData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const deletePayment = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/payments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
///////////////////////////////////////////////////////////////////////////////////////////////////

//Review
export const getReviews = async (token) => {
  const response = await axios.get(`${BASE_URL}/reviews`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getReviewById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/reviews/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createReview = async (reviewData, token) => {
  const response = await axios.post(`${BASE_URL}/reviews`, reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateReview = async (id, reviewData, token) => {
  const response = await axios.put(`${BASE_URL}/reviews/${id}`, reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const deleteReview = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/reviews/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Salon
export const getSalons = async () => {
  const response = await axios.get(`${BASE_URL}/salons`);
  return response.data.data;
};

export const getSalonById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/salons/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const createSalon = async (salonData, token) => {
  const response = await axios.post(`${BASE_URL}/salons`, salonData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const updateSalon = async (id, salonData, token) => {
  const response = await axios.put(`${BASE_URL}/salons/${id}`, salonData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const deleteSalon = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/salons/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
/////////////////////////////////////////////////////////////////////////////////////////

//Search
export const searchInAllSalons = async (query) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      query: query,
    },
  });
  return response.data;
};

export const searchInSalon = async (salonId, query) => {
  const response = await axios.get(`${BASE_URL}/search/${salonId}`, {
    params: {
      query: query,
    },
  });
  return response.data;
};
//////////////////////////////////////////////////////////////////////////////////////////////

//Service
export const getAllServices = async () => {
  const response = await axios.get(`${BASE_URL}/services`);
  return response.data;
};

export const getServiceById = async (serviceId) => {
  const response = await axios.get(`${BASE_URL}/services/${serviceId}`);
  return response.data;
};

export const createService = async (serviceData, token) => {
  const response = await axios.post(`${BASE_URL}/services`, serviceData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateService = async (serviceId, serviceData, token) => {
  const response = await axios.put(
    `${BASE_URL}/services/${serviceId}`,
    serviceData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteService = async (serviceId, token) => {
  await axios.delete(`${BASE_URL}/services/${serviceId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
///////////////////////////////////////////////////////////////////////////////////

//ShowTime
export const getAllShowTimes = async (date) => {
  const response = await axios.get(`${BASE_URL}/show-times?date=${date}`);
  return response.data;
};

export const getShowTimeById = async (showTimeId) => {
  const response = await axios.get(`${BASE_URL}/show-times/${showTimeId}`);
  return response.data;
};

export const createShowTime = async (showTimeData, token) => {
  const response = await axios.post(`${BASE_URL}/show-times`, showTimeData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateShowTime = async (showTimeId, showTimeData, token) => {
  const response = await axios.put(
    `${BASE_URL}/show-times/${showTimeId}`,
    showTimeData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteShowTime = async (showTimeId, token) => {
  await axios.delete(`${BASE_URL}/show-times/${showTimeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
//////////////////////////////////////////////////////////////////////////////////////////

//Statistic
const fetchDataWithDates = async (endpoint, startDate, endDate, token) => {
  let url = `${BASE_URL}/statistics/${endpoint}`;
  if (startDate) {
    url += `?startDate=${startDate}`;
  }
  if (endDate) {
    url += `${startDate ? "&" : "?"}endDate=${endDate}`;
  }
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const GetFinancialStats = async (startDate, endDate, token) => {
  return fetchDataWithDates("financial-stats", startDate, endDate, token);
};

export const GetRegistrationStats = async (startDate, endDate, token) => {
  return fetchDataWithDates("registration-stats", startDate, endDate, token);
};

export const GetMostSelectedService = async (startDate, endDate, token) => {
  return fetchDataWithDates("most-service", startDate, endDate, token);
};

export const GetAverageRevenuePerAppointment = async (
  startDate,
  endDate,
  token
) => {
  return fetchDataWithDates(
    "average-revenue-per-appointment",
    startDate,
    endDate,
    token
  );
};

//////////////////////////////////////////////////////////////////////////////////////

//Upload
export const displayImage = (imageName) => {
  const url = imageName
    ? `${BASE_URL}/images/${imageName}`
    : "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg";
  // const response = await axios.get(url);
  // return response.data;

  return url;
};

export const uploadImage = async (file) => {
  const url = `${BASE_URL}/images`;
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateImage = async (imageName, file) => {
  const url = `${BASE_URL}/images/${imageName}`;
  const formData = new FormData();
  formData.append("image", file);

  const response = await axios.put(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteImage = async (imageName) => {
  const url = `${BASE_URL}/images/${imageName}`;
  const response = await axios.delete(url);
  return response.data;
};
