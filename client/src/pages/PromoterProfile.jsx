import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp } from 'react-icons/io5';

const identity = {
    name: 'Donald Sampson',
    email: 'donaldsamptson@gmail.com',
    phone: '+234 907 307 7717',
    state: 'Lagos, Nigeria',
    accountType: 'Elite Promoter',
};

const socialProof = [
    { label: 'WhatsApp', value: '+234 907 307 7717', icon: IoLogoWhatsapp, color: 'text-emerald-400' },
    { label: 'Facebook', value: 'facebook.com/myaccount', icon: IoLogoFacebook, color: 'text-blue-400' },
    { label: 'Instagram', value: '@minimouse34', icon: IoLogoInstagram, color: 'text-pink-400' },
    { label: 'Twitter', value: '@mini_mouse', icon: IoLogoTwitter, color: 'text-sky-400' },
];

const PromoterProfile = () => {
    return (
        <section className="space-y-8">
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center md:flex-row md:text-left">
                <img
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=320&q=80"
                    alt="profile"
                    className="h-32 w-32 rounded-3xl object-cover"
                />
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold text-white">{identity.name}</h1>
                    <p className="text-sm text-slate-400">{identity.accountType}</p>
                    <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                        <span>Email: {identity.email}</span>
                        <span>Phone: {identity.phone}</span>
                        <span>State: {identity.state}</span>
                    </div>
                    <button
                        type="button"
                        className="mt-4 rounded-2xl border border-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        Edit profile
                    </button>
                </div>
            </div>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
                <header className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                            Verification
                        </p>
                        <h2 className="text-2xl font-semibold text-white">Connected channels</h2>
                    </div>
                    <button
                        type="button"
                        className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950"
                    >
                        Add new channel
                    </button>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                    {socialProof.map((item) => (
                        <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
                            <div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                    <item.icon className={`h-5 w-5 ${item.color}`} />
                                    {item.label}
                                </div>
                                <p className="text-sm text-slate-400">{item.value}</p>
                            </div>
                            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                                Verified
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800/70 bg-slate-950/50 p-5">
                    <h3 className="text-lg font-semibold text-white">Invite link</h3>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                        <input
                            type="text"
                            readOnly
                            value="https://promotionarmy.com/invite/suernameswjrh34b4b"
                            className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
                        />
                        <button
                            type="button"
                            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default PromoterProfile;
