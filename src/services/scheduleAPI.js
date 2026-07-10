import axios from 'axios'

const API_URL = "https://fzigfgsvrflxostmrfsh.supabase.co/rest/v1/schedule"
const API_KEY = "sb_publishable_I5FKVtJhjPTjks3Q7lTMAg_NRFpJdrN"

const customHeaders = {
    "apikey": API_KEY,
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const scheduleAPI = {
    // Ambil data schedule (ditambahkan param select untuk menarik info nama dokter jika dibutuhkan)
    async fetchSchedules() {
        // Query ini akan otomatis menggabungkan data doctor_name dari tabel doctor
        const response = await axios.get(`${API_URL}?select=*,doctor(doctor_name)`, { headers: customHeaders })
        return response.data
    },

    // Tambah schedule baru
    async createSchedule(data) {
        const response = await axios.post(API_URL, data, { headers: customHeaders })
        return response.data
    },

    // Update schedule
    async updateSchedule(scheduleId, data) {
        const response = await axios.patch(API_URL, data, {
            headers: customHeaders,
            params: {
                schedule_id: `eq.${scheduleId}`
            }
        });
        return response.data;
    },

    // Hapus schedule
    async deleteSchedule(scheduleId) {
        const response = await axios.delete(API_URL, {
            headers: customHeaders,
            params: {
                schedule_id: `eq.${scheduleId}`
            }
        });
        return response.data;
    }
}