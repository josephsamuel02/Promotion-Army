const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950/90">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
                <p>&copy; {new Date().getFullYear()} PromotionArmy. All rights reserved.</p>
                <div className="flex flex-wrap items-center gap-6">
                    <a href="mailto:hello@promotionarmy.com" className="transition hover:text-white">
                        Contact
                    </a>
                    <a href="/" className="transition hover:text-white">
                        Help Center
                    </a>
                    <a href="/" className="transition hover:text-white">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
