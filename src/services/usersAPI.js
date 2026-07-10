import axios from 'axios'

const API_URL = "https://fzigfgsvrflxostmrfsh.supabase.co/rest/v1/users"
const API_KEY = "sb_publishable_I5FKVtJhjPTjks3Q7lTMAg_NRFpJdrN"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const usersAPI = {
    async fetchUsers() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createUsers(data) {
        // const response = await axios.post(API_URL, data, { headers })
        // return response.data

        const response = await axios.post(API_URL, data, { 
        headers: {
            ...headers,
            "Prefer": "return=representation" // PENTING: Supaya data yang baru di-insert langsung dikembalikan hasilnya
        } 
    })
    return response.data
    
    },

    async updateUser(id, data) {
        const response = await axios.patch(`${API_URL}`, data, {
            headers,
            params: {
                id: `eq.${id}` // Mencari user berdasarkan ID untuk di-update
            }
        });
        return response.data;
    },

    async deleteUser(id) {
        const response = await axios.delete(`${API_URL}`, {
            headers,
            params: {
                id: `eq.${id}` // Mencari user berdasarkan ID untuk di-hapus
            }
        });
        return response.data;
    },

    async login(username, password) {
        const response = await axios.get(API_URL, {
            headers,
            params: {
                username: `eq.${username}`,
                password: `eq.${password}`
            }
        })

        return response.data
    },
    
     async checkUser(email, username) {
        const response = await axios.get(API_URL, {
            headers,
            params: {
                select: "*",
                or: `(email.eq.${email},username.eq.${username})`
            }
        })

        return response.data
    }
}