import axios from 'axios'

const API_URL = "https://fzigfgsvrflxostmrfsh.supabase.co/rest/v1/doctor"
const API_KEY = "sb_publishable_I5FKVtJhjPTjks3Q7lTMAg_NRFpJdrN"

const customHeaders = {
    "apikey": API_KEY,
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const doctorAPI = {
    // Ambil semua data dokter
    async fetchDoctors() {
        const response = await axios.get(API_URL, { headers: customHeaders })
        return response.data
    },

    // Tambah dokter baru
    async createDoctor(data) {
        const response = await axios.post(API_URL, data, { headers: customHeaders })
        return response.data
    },

    // Update data dokter berdasarkan doctor_id
    async updateDoctor(doctorId, data) {
        const response = await axios.patch(API_URL, data, {
            headers: customHeaders,
            params: {
                doctor_id: `eq.${doctorId}`
            }
        });
        return response.data;
    },

    // Hapus data dokter berdasarkan doctor_id
    async deleteDoctor(doctorId) {
        const response = await axios.delete(API_URL, {
            headers: customHeaders,
            params: {
                doctor_id: `eq.${doctorId}`
            }
        });
        return response.data;
    }
}