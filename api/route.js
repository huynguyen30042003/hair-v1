import axios from "axios";
import FormData from "form-data";
const BASE_URL = "https://haircut-nodejs-reactjs-mongo-be.onrender.com/api";

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
    const response = await axios.put(`${BASE_URL}/auth/reset-password/${token}`, {
      password,
    });
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
  return response.data.data;
};

export const updateUserProfile = async (userData, token) => {
  const response = await axios.put(`${BASE_URL}/accounts/profile`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const getUsers = async (token) => {
  const response = await axios.get(`${BASE_URL}/accounts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
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
  return response.data.data;
};

export const updateCombo = async (id, comboData, token) => {
  const response = await axios.put(`${BASE_URL}/combos/${id}`, comboData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const deleteCombo = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/combos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
///////////////////////////////////////////////////////////////////////////////////////////////////

//Contact
export const getContacts = async (token) => {
  const response = await axios.get(`${BASE_URL}/contacts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const getContactById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const createContact = async (contactData, token) => {
  const response = await axios.post(`${BASE_URL}/contacts`, contactData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const updateContact = async (id, contactData, token) => {
  const response = await axios.put(`${BASE_URL}/contacts/${id}`, contactData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const deleteContact = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
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
  return response.data.data;
};

export const getReviewById = async (id, token) => {
  const response = await axios.get(`${BASE_URL}/reviews/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const createReview = async (reviewData, token) => {
  const response = await axios.post(`${BASE_URL}/reviews`, reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const updateReview = async (id, reviewData, token) => {
  const response = await axios.put(`${BASE_URL}/reviews/${id}`, reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const deleteReview = async (id, token) => {
  const response = await axios.delete(`${BASE_URL}/reviews/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
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
  const response = await axios.get(`${BASE_URL}/services`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const getServiceById = async (serviceId) => {
  const response = await axios.get(`${BASE_URL}/services/${serviceId}`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const createService = async (serviceData) => {
  const response = await axios.post(`${BASE_URL}/services`, serviceData, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const updateService = async (serviceId, serviceData) => {
  const response = await axios.put(
    `${BASE_URL}/services/${serviceId}`,
    serviceData,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );
  return response.data;
};

export const deleteService = async (serviceId) => {
  await axios.delete(`${BASE_URL}/services/${serviceId}`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
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
  const response = await axios.get(`${BASE_URL}/show-times/${showTimeId}`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const createShowTime = async (showTimeData) => {
  const response = await axios.post(`${BASE_URL}/show-times`, showTimeData, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const updateShowTime = async (showTimeId, showTimeData) => {
  const response = await axios.put(
    `${BASE_URL}/show-times/${showTimeId}`,
    showTimeData,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );
  return response.data;
};

export const deleteShowTime = async (showTimeId) => {
  await axios.delete(`${BASE_URL}/show-times/${showTimeId}`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
};
//////////////////////////////////////////////////////////////////////////////////////////

//Statistic

export const getRevenue = async (startDate, endDate) => {
  const response = await axios.get(`${BASE_URL}/statistics/revenue`, {
    params: { startDate, endDate },
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const getRevenueInSalon = async (startDate, endDate) => {
  const response = await axios.get(`${BASE_URL}/statistics/revenue`, {
    params: { startDate, endDate },
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const getProfitInSalon = async (startDate, endDate) => {
  const response = await axios.get(`${BASE_URL}/statistics/profit`, {
    params: { startDate, endDate },
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const getFinancialReportInSalon = async (startDate, endDate) => {
  const response = await axios.get(`${BASE_URL}/statistics/financial-report`, {
    params: { startDate, endDate },
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};

export const getProfit = async (startDate, endDate) => {
  const response = await axios.get(`${BASE_URL}/statistics/profit`, {
    params: { startDate, endDate },
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  return response.data;
};
//////////////////////////////////////////////////////////////////////////////////////

//Upload
export const displayImage = async (imageName) => {
  const url = `${BASE_URL}/images/${imageName}`;
  const response = await axios.get(url);
  return response.data;
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
