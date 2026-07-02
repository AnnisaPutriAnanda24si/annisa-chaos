import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';
import { BsExclamationDiamondFill } from 'react-icons/bs';
import { usersAPI } from '@/services/usersAPI';

export default function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [dataForm, setDataForm] = useState({
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
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
            // Validasi password
            if (dataForm.password !== dataForm.password_confirmation) {
                setError("Password confirmation tidak sesuai");
                return;
            }

            const existingUser = await usersAPI.checkUser(
                dataForm.email,
                dataForm.username
            );

            if (existingUser.length > 0) {
                setError("Email sudah digunakan");
                return;
            }

            await usersAPI.createUsers({
                email: dataForm.email,
                username: dataForm.username,
                password: dataForm.password,
                role: "user",
            });

            navigate("/login");

        } catch (err) {
            setError(err.message || "Terjadi kesalahan");
        } finally {
            setLoading(false);
        }
    };

    const errorInfo = error ? (
        <div className="bg-red-50 border border-red-100 mb-6 p-4 text-[11px] uppercase tracking-widest text-red-600 rounded-none flex items-center shadow-sm">
            <BsExclamationDiamondFill className="text-red-500 me-3 text-lg" />
            {error}
        </div>
    ) : null;

    const loadingInfo = loading ? (
        <div className="bg-white border border-zinc-100 mb-6 p-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 rounded-none flex items-center shadow-sm">
            <ImSpinner2 className="me-3 animate-spin text-orange-400" />
            Please Wait...
        </div>
    ) : null;

    return (
        <>
            <h2 className="mb-2 font-serif text-3xl">
                Register
            </h2>

            <p className="mb-8 text-xs text-zinc-500">
                Welcome to Seven Beauty, we're happy you're joining us.
            </p>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={dataForm.email}
                        onChange={handleChange}
                        className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Username
                    </label>

                    <input
                        type="text"
                        name="username"
                        value={dataForm.username}
                        onChange={handleChange}
                        className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
                        placeholder="username"
                        required
                    />
                </div>

                <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        value={dataForm.password}
                        onChange={handleChange}
                        className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        name="password_confirmation"
                        value={dataForm.password_confirmation}
                        onChange={handleChange}
                        className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 w-full bg-zinc-900 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-orange-500 transition disabled:opacity-50"
                >
                    {loading ? "REGISTERING..." : "REGISTER"}
                </button>
            </form>

            <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-zinc-500">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="font-bold text-zinc-900 hover:underline"
                >
                    Login
                </Link>
            </p>
        </>
    );
}