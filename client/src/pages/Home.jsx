import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io5';
import { MdOutlineStackedLineChart, MdOutlineWeb } from 'react-icons/md';
import { PiUsersThreeBold } from 'react-icons/pi';
import { promoGallery } from '../data/sliderData.js';
import HeroSlider from '../components/home/HeroSlider.jsx';

const serviceHighlights = [
    {
        title: 'Brief once, publish everywhere',
        description: 'One campaign brief feeds WhatsApp, Facebook, Instagram, Twitter, and YouTube tasks instantly.',
        icon: MdOutlineStackedLineChart,
    },
    {
        title: 'Embedded creative studio',
        description: 'Use our no-code builder to package copy, visuals, and talking points tailored to each channel.',
        icon: MdOutlineWeb,
    },
    {
        title: 'Human promoters, real reach',
        description: 'Tap into a verified talent cloud of brand storytellers measured by completion rate and impact.',
        icon: PiUsersThreeBold,
    },
];

const channelFocus = [
    { label: 'WhatsApp Broadcast', icon: IoLogoWhatsapp, color: 'text-emerald-300' },
    { label: 'Instagram Stories', icon: IoLogoInstagram, color: 'text-pink-300' },
    { label: 'YouTube Shorts', icon: IoLogoYoutube, color: 'text-red-300' },
    { label: 'Meta Feed', icon: IoLogoFacebook, color: 'text-blue-300' },
    { label: 'X Threads', icon: IoLogoTwitter, color: 'text-sky-300' },
];

const Home = () => {
    return (
        <div className="space-y-12">
            <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
                <HeroSlider />
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-b from-emerald-500/20 via-slate-900 to-slate-950 p-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
                            Campaign cockpit
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                            Manage every brief, deliverable, and proof of work from one place.
                        </h3>
                        <p className="mt-3 text-sm text-slate-300">
                            Assign promoters, approve creatives, and receive completion evidence with time stamps.
                        </p>
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                        <Link
                            to="/registerbiz"
                            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                        >
                            Launch a business campaign
                        </Link>
                        <Link
                            to="/registerpromoter"
                            className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            Join as a promoter
                        </Link>
                    </div>
                </div>
            </div>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                            Full channel coverage
                        </p>
                        <h3 className="mt-2 text-3xl font-semibold text-white">
                            When you brief PromotionArmy, your story fans out to every social surface.
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {channelFocus.map((channel) => (
                            <span
                                key={channel.label}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
                            >
                                <channel.icon className={`h-4 w-4 ${channel.color}`} />
                                {channel.label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {serviceHighlights.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-5 shadow-xl"
                        >
                            <service.icon className="h-10 w-10 text-emerald-300" />
                            <h4 className="mt-4 text-lg font-semibold text-white">
                                {service.title}
                            </h4>
                            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
                        Promoter benefits
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">
                        Earn per-task payouts with automated tracking & dispute-free approvals.
                    </h3>
                    <ul className="mt-6 space-y-3 text-sm text-slate-300">
                        <li>• Inbox of curated campaigns that match your niche.</li>
                        <li>• Guardrails, caption ideas, and creative assets ready to post.</li>
                        <li>• Proof-of-work uploads with AI validation to avoid resubmits.</li>
                        <li>• Weekly payouts once campaigns are verified.</li>
                    </ul>
                    <Link
                        to="/registerpromoter"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                    >
                        Become a promoter
                    </Link>
                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
                    <h4 className="text-lg font-semibold text-white">Recent promo drops</h4>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {promoGallery.map((image) => (
                            <div key={image} className="group relative h-48 overflow-hidden rounded-2xl border border-white/10">
                                <img
                                    src={image}
                                    alt="promo"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                                <div className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                                    Ready-to-post asset
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
