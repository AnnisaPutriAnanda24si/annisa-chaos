import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';
import { BsExclamationDiamondFill } from 'react-icons/bs';
import { usersAPI } from '@/services/usersAPI';
import { patientsAPI } from '@/services/patientAPI';

export default function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // 1. TAMBAHKAN STATE FORM UNTUK DATA PASIEN
    const [dataForm, setDataForm] = useState({
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
        full_name: "",    // data untuk patient
        gender: "Male",   // data untuk patient (default Male)
        birth_date: "",   // data untuk patient
        phone: "",        // data untuk patient
        city: "",         // data untuk patient
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (dataForm.password !== dataForm.password_confirmation) {
                setError("Password confirmation tidak sesuai");
                setLoading(false);
                return;
            }

            const existingUser = await usersAPI.checkUser(
                dataForm.email,
                dataForm.username
            );

            if (existingUser.length > 0) {
                setError("Email atau Username sudah digunakan");
                setLoading(false);
                return;
            }

            // INSERT KE TABEL USERS (Role otomatis 100% selalu "member")
            const newUserResponse = await usersAPI.createUsers({
                email: dataForm.email,
                username: dataForm.username,
                password: dataForm.password,
                role: "member", 
            });

            const createdUser = newUserResponse?.[0];

            if (!createdUser || !createdUser.id) {
                throw new Error("Gagal mendapatkan User ID baru.");
            }

            // INSERT KE TABEL PATIENT (Mengambil data asli dari input form yang diisi user)
            await patientsAPI.createPatient({
                user_id: createdUser.id,        // Relasi ke tabel users
                membership_id: 1,               // Otomatis set ke ID 1 ('None')
                full_name: dataForm.full_name,  // Diambil dari input nama lengkap
                gender: dataForm.gender,        // Diambil dari input gender
                birth_date: dataForm.birth_date,// Diambil dari input tanggal lahir
                phone: dataForm.phone,          // Diambil dari input nomor hp
                email: dataForm.email,          // Disamakan dengan email akun users
                city: dataForm.city,            // Diambil dari input kota
            });

            navigate("/login");

        } catch (err) {
            setError(err.message || "Terjadi kesalahan saat mendaftar");
        } finally {
            setLoading(false);
        }
    };

    const errorInfo = error ? (
        <div className="bg-red-50 border border-red-100 mb-6 p-4 text-[11px] uppercase tracking-widest text-red-600 flex items-center shadow-sm">
            <BsExclamationDiamondFill className="text-red-500 me-3 text-lg" />
            {error}
        </div>
    ) : null;

    const loadingInfo = loading ? (
        <div className="bg-white border border-zinc-100 mb-6 p-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 flex items-center shadow-sm">
            <ImSpinner2 className="me-3 animate-spin text-orange-400" />
            Please Wait...
        </div>
    ) : null;

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="mb-2 font-serif text-3xl">Register Account</h2>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* --- DATA AKUN (USERS) --- */}
                <h3 className="text-xs font-bold text-zinc-800 uppercase tracking-widest border-b pb-1 border-zinc-100">Account Info</h3>
                
                <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</label>
                    <input type="email" name="email" value={dataForm.email} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition" placeholder="your@email.com" required />
                </div>

                <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Username</label>
                    <input type="text" name="username" value={dataForm.username} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition" placeholder="username" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Password</label>
                        <input type="password" name="password" value={dataForm.password} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition" placeholder="••••••••" required />
                    </div>
                    <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Confirm Password</label>
                        <input type="password" name="password_confirmation" value={dataForm.password_confirmation} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition" placeholder="••••••••" required />
                    </div>
                </div>

                {/* --- DATA PROFIL (PATIENT) --- */}
                <h3 className="text-xs font-bold text-zinc-800 uppercase tracking-widest border-b pb-1 border-zinc-100 pt-4">Patient Profile Info</h3>

                <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                    <input type="text" name="full_name" value={dataForm.full_name} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition" placeholder="John Doe" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Gender</label>
                        <select name="gender" value={dataForm.gender} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Birth Date</label>
                        <input type="date" name="birth_date" value={dataForm.birth_date} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition" required />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                        <input type="tel" name="phone" value={dataForm.phone} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition" placeholder="08123456789" required />
                    </div>
                    <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">City</label>
                        <input type="text" name="city" value={dataForm.city} onChange={handleChange} className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition" placeholder="Medan" required />
                    </div>
                </div>

                <button type="submit" disabled={loading} className="mt-6 w-full bg-zinc-900 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-orange-500 transition disabled:opacity-50">
                    {loading ? "REGISTERING..." : "REGISTER ACCOUNT & PATIENT"}
                </button>
            </form>

            <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-zinc-500">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-zinc-900 hover:underline">Login</Link>
            </p>
        </div>
    );
}