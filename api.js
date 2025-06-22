import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchVets = () => axios.get(`${API_BASE}/vets`);
export const updateVetStatus = (vetId, status) => axios.post(`${API_BASE}/vets/status`, { vetId, status });
export const checkSymptoms = (symptoms) => axios.post(`${API_BASE}/symptoms`, { symptoms });
export const bookAppointment = (data) => axios.post(`${API_BASE}/appointments`, data);
export const fetchHistory = (params) => axios.get(`${API_BASE}/history`, { params });
export const fetchPets = () => axios.get(`${API_BASE}/pets`);
export const addPetHistory = (petId, data) =>
  axios.post(`${API_BASE}/history/add`, { petId, ...data });
