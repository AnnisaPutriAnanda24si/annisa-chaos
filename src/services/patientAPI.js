import axios from 'axios'

const API_URL = "https://fzigfgsvrflxostmrfsh.supabase.co/rest/v1/patient"
const API_KEY = "sb_publishable_I5FKVtJhjPTjks3Q7lTMAg_NRFpJdrN"

const customHeaders = {
    "apikey": API_KEY,
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const patientsAPI = {
    // 1. Ambil semua data pasien
    async fetchPatients() {
        const response = await axios.get(API_URL, { headers: customHeaders })
        return response.data
    },

    // 2. Tambah pasien baru
    async createPatient(data) {
        const response = await axios.post(API_URL, data, { headers: customHeaders })
        return response.data
    },

    // 3. Update data pasien berdasarkan patient_id
    async updatePatient(patientId, data) {
        const response = await axios.patch(API_URL, data, {
            headers: customHeaders,
            params: {
                patient_id: `eq.${patientId}`
            }
        });
        return response.data;
    },

    // 4. Hapus data pasien berdasarkan patient_id
    async deletePatient(patientId) {
        const response = await axios.delete(API_URL, {
            headers: customHeaders,
            params: {
                patient_id: `eq.${patientId}`
            }
        });
        return response.data;
    },
}