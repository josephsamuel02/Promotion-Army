import { useMemo, useState } from 'react';
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoWhatsapp,
    IoLogoYoutube,
} from 'react-icons/io5';

const platformConfigs = [
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        color: 'bg-emerald-500/20 text-emerald-200',
        icon: IoLogoWhatsapp,
    },
    {
        id: 'facebook',
        label: 'Facebook',
        color: 'bg-blue-500/20 text-blue-200',
        icon: IoLogoFacebook,
    },
    {
        id: 'instagram',
        label: 'Instagram',
        color: 'bg-pink-500/20 text-pink-200',
        icon: IoLogoInstagram,
    },
    {
        id: 'twitter',
        label: 'Twitter',
        color: 'bg-sky-500/20 text-sky-200',
        icon: IoLogoTwitter,
    },
    {
        id: 'youtube',
        label: 'YouTube',
        color: 'bg-red-500/20 text-red-200',
        icon: IoLogoYoutube,
    },
];

const createTasks = (label) =>
    Array.from({ length: 4 }).map((_, index) => ({
        id: `${label}-${index}`,
        status: index % 2 === 0 ? 'Pending proof' : 'Ready to publish',
        deadline: '18:34:23',
        preview: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80',
    }));

const taskStore = platformConfigs.reduce((acc, platform) => {
    acc[platform.id] = createTasks(platform.id);
    return acc;
}, {});

const Dashboard = () => {
    const [activePlatform, setActivePlatform] = useState('whatsapp');
    const tasks = useMemo(() => taskStore[activePlatform] ?? [], [activePlatform]);

    return (
        <section className="space-y-8">
            <header className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
                    Promoter dashboard
                </p>
                <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-white">All channel queue</h1>
                        <p className="text-sm text-slate-400">
                            Tap a channel to review pending briefs, proof-of-work, and payouts.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {platformConfigs.map((platform) => (
                            <button
                                key={platform.id}
                                type="button"
                                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                                    activePlatform === platform.id
                                        ? 'border-white bg-white text-slate-950'
                                        : 'border-white/20 text-white hover:border-white/60'
                                }`}
                                onClick={() => setActivePlatform(platform.id)}
                            >
                                <platform.icon className="h-5 w-5" />
                                {platform.label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6">
                <h2 className="text-xl font-semibold text-white">
                    {platformConfigs.find((p) => p.id === activePlatform)?.label} queue
                </h2>
                <div className="mt-4 grid gap-4">
                    {tasks.map((task) => (
                        <article
                            key={task.id}
                            className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:flex-row"
                        >
                            <img
                                src={task.preview}
                                alt="task"
                                className="h-40 w-full rounded-xl object-cover sm:h-32 sm:w-40"
                            />
                            <div className="flex flex-1 flex-col justify-between gap-3">
                                <div>
                                    <p className="text-sm text-slate-400">Status</p>
                                    <p className="text-base font-semibold text-white">{task.status}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Time remaining</p>
                                    <p className="text-base font-semibold text-white">{task.deadline}</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="h-fit rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900"
                            >
                                Post update
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
