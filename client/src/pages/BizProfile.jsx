const company = {
    name: 'Flex Systems & Software',
    type: 'Software Company',
    email: 'donaldsamptson@gmail.com',
    phone: '+234 907 307 7717',
    state: 'Oyo, Nigeria',
    address: '3 Lagbaye Street opposite Sherif Guid House, Oke Mopo',
};

const BizProfile = () => {
    return (
        <section className="space-y-8">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    Business profile
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-white">{company.name}</h1>
                <p className="text-sm text-slate-400">{company.type}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6">
                    <h2 className="text-lg font-semibold text-white">Contact</h2>
                    <dl className="mt-4 space-y-3 text-sm text-slate-300">
                        <div>
                            <dt className="text-slate-400">Email</dt>
                            <dd>{company.email}</dd>
                        </div>
                        <div>
                            <dt className="text-slate-400">Phone</dt>
                            <dd>{company.phone}</dd>
                        </div>
                        <div>
                            <dt className="text-slate-400">State</dt>
                            <dd>{company.state}</dd>
                        </div>
                        <div>
                            <dt className="text-slate-400">Address</dt>
                            <dd>{company.address}</dd>
                        </div>
                    </dl>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6">
                    <h2 className="text-lg font-semibold text-white">Workspace controls</h2>
                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                        <li>• Invite teammates to collaborate on briefs.</li>
                        <li>• Configure approval workflows per channel.</li>
                        <li>• Set payment preferences and auto payouts.</li>
                        <li>• Export compliance-ready campaign logs.</li>
                    </ul>
                    <button
                        type="button"
                        className="mt-5 w-full rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        Edit company profile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BizProfile;
