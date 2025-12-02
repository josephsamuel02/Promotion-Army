import { useEffect, useRef, useState } from 'react';
import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';
import { heroSlides } from '../../data/sliderData.js';

const SLIDE_INTERVAL = 8000;

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, []);

    function startAutoPlay() {
        stopAutoPlay();
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSlides.length);
        }, SLIDE_INTERVAL);
    }

    function stopAutoPlay() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }

    const goTo = (index) => {
        setActiveIndex((index + heroSlides.length) % heroSlides.length);
        startAutoPlay();
    };

    return (
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl">
            <button
                type="button"
                className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-2 text-white transition hover:bg-black/60 md:block"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous slide"
            >
                <HiMiniChevronLeft className="h-5 w-5" />
            </button>

            <button
                type="button"
                className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-2 text-white transition hover:bg-black/60 md:block"
                        onClick={() => goTo(activeIndex + 1)}
                aria-label="Next slide"
            >
                <HiMiniChevronRight className="h-5 w-5" />
            </button>

            {heroSlides.map((slide, index) => (
                <article
                    key={slide.heading}
                    className={`relative h-[440px] w-full transition-opacity duration-700 ${
                        index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
                    }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.heading}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/70" />
                    <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-6 py-8 text-white sm:px-12">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                            Full-funnel promotion
                        </span>
                        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                            {slide.heading}
                        </h2>
                        <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
                            {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                className="rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
                            >
                                {slide.cta}
                            </button>
                            <button
                                type="button"
                                className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                                onClick={() => goTo(activeIndex + 1)}
                            >
                                Next insight
                            </button>
                        </div>
                    </div>
                </article>
            ))}

            <div className="relative z-10 flex items-center justify-center gap-2 pb-6">
                {heroSlides.map((slide, index) => (
                    <button
                        type="button"
                        key={slide.heading}
                        className={`h-2 w-8 rounded-full transition ${
                            index === activeIndex
                                ? 'bg-emerald-400'
                                : 'bg-white/20 hover:bg-white/50'
                        }`}
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
