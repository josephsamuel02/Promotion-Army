import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMiniBars3BottomRight, HiMiniXMark } from 'react-icons/hi2';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/pdashboard' },
    { label: 'Promoters', href: '/profile' },
    { label: 'Businesses', href: '/bizprofile' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/75 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <button
                    type="button"
                    className="text-left text-xl font-semibold tracking-tight text-white"
                    onClick={() => handleNavigate('/')}
                >
                    PromotionArmy
                </button>

                <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide text-slate-200 md:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={({ isActive }) =>
                                `transition hover:text-white ${
                                    isActive ? 'text-white' : 'text-slate-300'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <button
                        type="button"
                        className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
                        onClick={() => handleNavigate('/login')}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                        onClick={() => handleNavigate('/registerbiz')}
                    >
                        Launch Campaign
                    </button>
                </div>

                <button
                    type="button"
                    className="text-white md:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? (
                        <HiMiniXMark className="h-7 w-7" />
                    ) : (
                        <HiMiniBars3BottomRight className="h-7 w-7" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 md:hidden">
                    <nav className="flex flex-col gap-4 text-sm font-semibold uppercase text-slate-200">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                type="button"
                                className="text-left"
                                onClick={() => handleNavigate(link.href)}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            type="button"
                            className="rounded-lg border border-slate-700 px-4 py-2"
                            onClick={() => handleNavigate('/login')}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="rounded-lg bg-emerald-400 px-4 py-2 text-slate-950"
                            onClick={() => handleNavigate('/registerbiz')}
                        >
                            Launch Campaign
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
