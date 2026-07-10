import axios from 'axios'

const API_URL = "https://fzigfgsvrflxostmrfsh.supabase.co/rest/v1/treatment"
const API_KEY = "sb_publishable_I5FKVtJhjPTjks3Q7lTMAg_NRFpJdrN"

const customHeaders = {
    "apikey": API_KEY,
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const treatmentAPI = {
    // Ambil semua data treatment
    async fetchTreatments() {
        const response = await axios.get(API_URL, { headers: customHeaders })
        return response.data
    },

    // Tambah treatment baru
    async createTreatment(data) {
        const response = await axios.post(API_URL, data, { headers: customHeaders })
        return response.data
    },

    // Update treatment berdasarkan treatment_id
    async updateTreatment(treatmentId, data) {
        const response = await axios.patch(API_URL, data, {
            headers: customHeaders,
            params: {
                treatment_id: `eq.${treatmentId}`
            }
        });
        return response.data;
    },

    // Hapus treatment berdasarkan treatment_id
    async deleteTreatment(treatmentId) {
        const response = await axios.delete(API_URL, {
            headers: customHeaders,
            params: {
                treatment_id: `eq.${treatmentId}`
            }
        });
        return response.data;
    }
}