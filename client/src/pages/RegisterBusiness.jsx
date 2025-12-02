import { Link } from 'react-router-dom';

const RegisterBusiness = () => {
    return (
        <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl">
            <header className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
                    Business onboarding
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-white">
                    Plug your brand into a ready-made promotion engine.
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                    Share the essentials about your company and we will configure a private workspace within minutes.
                </p>
            </header>

            <form className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="text-sm font-semibold text-slate-200">
                    Business name
                    <input
                        type="text"
                        placeholder="Flex Systems & Software"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
                <label className="text-sm font-semibold text-slate-200">
                    Company email
                    <input
                        type="email"
                        placeholder="team@company.com"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
                <label className="text-sm font-semibold text-slate-200">
                    Phone line
                    <input
                        type="tel"
                        placeholder="+234 123 456 7890"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
                <label className="text-sm font-semibold text-slate-200">
                    Office address
                    <input
                        type="text"
                        placeholder="3 Lagbaye Street, Oke Mopo"
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
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
                    Campaign goals
                    <textarea
                        rows="4"
                        placeholder="Describe the audience or KPIs you want to hit..."
                        className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                </label>
            </form>

            <button
                type="submit"
                className="mt-8 w-full rounded-2xl bg-white py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100"
                onClick={(event) => event.preventDefault()}
            >
                Request workspace
            </button>

            <p className="mt-4 text-center text-sm text-slate-400">
                Are you a promoter?{' '}
                <Link to="/registerpromoter" className="text-emerald-300 hover:text-emerald-200">
                    Join the talent cloud
                </Link>
                .
            </p>
        </section>
    );
};

export default RegisterBusiness;
