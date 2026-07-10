import axios from 'axios'

const API_URL = "https://fzigfgsvrflxostmrfsh.supabase.co/rest/v1/membership"
const API_KEY = "sb_publishable_I5FKVtJhjPTjks3Q7lTMAg_NRFpJdrN"

const customHeaders = {
    "apikey": API_KEY,
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const membershipAPI = {
    // Ambil semua tier membership
    async fetchMemberships() {
        // Kita urutkan berdasarkan membership_id agar Silver, Gold, dst berurutan
        const response = await axios.get(`${API_URL}?order=membership_id.asc`, { headers: customHeaders })
        return response.data
    },

    // Update tier membership
    async updateMembership(membershipId, data) {
        const response = await axios.patch(API_URL, data, {
            headers: customHeaders,
            params: {
                membership_id: `eq.${membershipId}`
            }
        });
        return response.data;
    }
}