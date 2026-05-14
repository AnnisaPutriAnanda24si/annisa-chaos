import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
      <h2 className="mb-2 font-serif text-3xl">Register</h2>
      <p className="mb-8 text-xs text-zinc-500">
        Welcome to Seven Beauty, we're happy your about us. We hope you enjoy the hair & body care.
      </p>

      <form className="space-y-5">
        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
          <input 
            type="text" 
            className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</label>
          <input 
            type="email" 
            className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Password</label>
          <input 
            type="password" 
            className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm outline-none focus:border-zinc-900 transition"
            placeholder="••••••••"
          />
        </div>

        <button className="mt-4 w-full bg-zinc-900 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-orange-500 transition">
          Register
        </button>
      </form>

      <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-zinc-500">
        Already have an account? <Link to="/login" className="font-bold text-zinc-900 hover:underline">Login</Link>
      </p>
    </>
  );
}