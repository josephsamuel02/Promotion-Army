import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="mx-auto w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl">
            <header className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
                    Welcome back
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-white">Sign in to your workspace</h1>
                <p className="mt-2 text-sm text-slate-400">
                    Use the phone number connected to your promoter or business account.
                </p>
            </header>

            <form className="mt-8 space-y-5">
                <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        placeholder="e.g. +234 907 307 7717"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded-2xl bg-emerald-400 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-emerald-300"
                    onClick={(event) => event.preventDefault()}
                >
                    Log in
                </button>
            </form>

            <div className="mt-5 flex flex-col gap-2 text-center text-sm text-slate-400">
                <button type="button" className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                    Forgot password?
                </button>
                <p>
                    No account yet?{' '}
                    <Link to="/registerpromoter" className="text-emerald-300 hover:text-emerald-200">
                        Sign up as a promoter
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
