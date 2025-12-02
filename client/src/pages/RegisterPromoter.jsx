import { Link } from 'react-router-dom';

const RegisterPromoter = () => {
    return (
        <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl">
            <header className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
                    Promoter onboarding
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-white">
                    Tell us about you and start receiving briefs.
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                    Complete the short form below. Once verified, you’ll unlock the dashboard and immediate campaigns.
                </p>
            </header>

            <form className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="text-sm font-semibold text-slate-200">
                    Full name
                    <input
                        type="text"
                        placeholder="Jane Doe"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
                <label className="text-sm font-semibold text-slate-200">
                    Email address
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
                <label className="text-sm font-semibold text-slate-200">
                    Phone number
                    <input
                        type="tel"
                        placeholder="+234 900 000 0000"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
                <label className="text-sm font-semibold text-slate-200">
                    Preferred platform
                    <select className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none">
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>WhatsApp</option>
                        <option>Twitter / X</option>
                        <option>YouTube</option>
                    </select>
                </label>
                <label className="text-sm font-semibold text-slate-200">
                    Create password
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
                <label className="text-sm font-semibold text-slate-200">
                    Confirm password
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
                <label className="md:col-span-2 text-sm font-semibold text-slate-200">
                    Portfolio / handle link
                    <input
                        type="url"
                        placeholder="https://instagram.com/your-handle"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
            </form>

            <button
                type="submit"
                className="mt-8 w-full rounded-2xl bg-emerald-400 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-emerald-300"
                onClick={(event) => event.preventDefault()}
            >
                Submit application
            </button>

            <p className="mt-4 text-center text-sm text-slate-400">
                Managing a business?{' '}
                <Link to="/registerbiz" className="text-emerald-300 hover:text-emerald-200">
                    Register here instead
                </Link>
                .
            </p>
        </section>
    );
};

export default RegisterPromoter;
