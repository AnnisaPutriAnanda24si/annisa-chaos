import axios from 'axios'

const API_URL = "https://fzigfgsvrflxostmrfsh.supabase.co/rest/v1/booking"
const API_KEY = "sb_publishable_I5FKVtJhjPTjks3Q7lTMAg_NRFpJdrN"

const customHeaders = {
    "apikey": API_KEY,
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const bookingAPI = {
    // Menarik data booking sekalian me-return join field sesuai request kamu
    async fetchBookings() {
        const joinQuery = "?select=booking_id,status,patient(full_name),treatment(treatment_name, price),schedule(date,doctor(doctor_name))";
        const response = await axios.get(`${API_URL}${joinQuery}`, { headers: customHeaders });
        return response.data;
    },

    // Tambah janji temu baru
    async createBooking(data) {
        const response = await axios.post(API_URL, data, { headers: customHeaders })
        return response.data
    },

    // Update status booking (misal ganti dari Pending -> Confirmed)
    async updateBooking(bookingId, data) {
        const response = await axios.patch(API_URL, data, {
            headers: customHeaders,
            params: { booking_id: `eq.${bookingId}` }
        });
        return response.data;
    },

    // Hapus booking
    async deleteBooking(bookingId) {
        const response = await axios.delete(API_URL, {
            headers: customHeaders,
            params: { booking_id: `eq.${bookingId}` }
        });
        return response.data;
    },

    async fetchTotalPatientsCount() {
        const URL_PATIENT = "https://fzigfgsvrflxostmrfsh.supabase.co/rest/v1/patient";
        const response = await axios.get(`${URL_PATIENT}?select=id`, { 
            headers: customHeaders 
        });
        return response.data.length; 
    }
}