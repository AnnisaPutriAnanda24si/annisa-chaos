import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImSpinner2  } from 'react-icons/im';
import { BsExclamationDiamondFill } from 'react-icons/bs';
import axios from 'axios';

export default function Login() {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [dataForm, setDataForm] = useState({
        username: "",
        password: "",
    })

  const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

  		/* process form */
	const handleSubmit = async (e) => {
		        e.preventDefault()
		
		        setLoading(true)
		        setError(false)
		
            axios
		            .post("https://dummyjson.com/user/login", {
		                username: dataForm.username,
		                password: dataForm.password,
		            })
		            .then((response) => {
		                // Jika status bukan 200, tampilkan pesan error
		                if (response.status !== 200) {
		                    setError(response.data.message);
		                    return; 
		                }
		
		                // Redirect ke dashboard jika login sukses
		                navigate("/");
		            })
		            .catch((err) => {
		                if (err.response) {
		                    setError(err.response.data.message || "An error occurred");
		                } else {
		                    setError(err.message || "An unknown error occurred");
		                }
		            })
		            .finally(() => {
		                setLoading(false); 
		            });
    }
  
  /* error & loading status */
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
      <h2 className="mb-2 font-serif text-3xl">Login</h2>
      <p className="mb-8 text-xs text-zinc-500">
        Welcome back, we're so glad you're joining us today. Log in to your account.
      </p>

        {errorInfo}

        {loadingInfo}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</label>
          <input 
            type="text"
            name='username'
            onChange={handleChange}
            className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Password</label>
          <input 
            type="password" 
            name='password'
            onChange={handleChange}
            className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
            placeholder="••••••••"
          />
        </div>

        <a href='/home_member' className="mt-4 w-full bg-zinc-900 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-orange-500 transition">
          Login
        </a>
      </form>

      <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-zinc-500">
        Don't have an account? <Link to="/register" className="font-bold text-zinc-900 hover:underline">Register</Link>
      </p>
    </>
  );
}