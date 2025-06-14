"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const servicesTop = [
    { title: "内科等一般診療", img: "/images/service1.jpg" },
    { title: "外科等一般診療", img: "/images/service2.jpg" },
];
const servicesBottom = [
    { title: "予防医療", img: "/images/service3.jpg" },
    { title: "トリミング", img: "/images/service4.jpg" },
    { title: "ペットホテル", img: "/images/service5.jpg" },
];

export default function ServicesSection() {
    const headingRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [headingVisible, setHeadingVisible] = useState(false);
    const totalCards = servicesTop.length + servicesBottom.length;
    const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(totalCards).fill(false));

    // Observe heading
    useEffect(() => {
        if (!headingRef.current) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeadingVisible(true);
                    obs.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );
        obs.observe(headingRef.current);
        return () => obs.disconnect();
    }, []);

    // Observe each card
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number((entry.target as HTMLElement).dataset.index);
                        setVisibleCards((prev) => {
                            const copy = [...prev];
                            copy[idx] = true;
                            return copy;
                        });
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        cardRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-white py-20 px-20">
            <div className="md:flex md:items-start md:justify-between max-w-7xl">
                {/* 左：見出し */}
                <div
                    ref={headingRef}
                    className={`md:w-[30%] w-full mb-8 md:mb-0 flex-shrink-0 transition-all duration-[1500ms] transform ${headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <h2 className="text-red-700 text-4xl font-bold mb-1">Services</h2>
                    <p className="text-xs text-gray-500 mb-6">診療・サービス案内</p>
                </div>

                {/* 右：サービスカード */}
                <div className="md:w-[70%] w-full ml-auto">
                    {/* 上段 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                        {servicesTop.map((s, i) => (
                            <div
                                key={i}
                                data-index={i}
                                ref={(el) => {
                                    cardRefs.current[i] = el;
                                }}
                                className={`bg-white rounded flex flex-col items-start w-full transition-all duration-[1500ms] transform ${visibleCards[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                            >
                                <Image src={s.img} alt={s.title} width={260} height={260} className="rounded mb-3 w-full h-[260px] object-cover" />
                                <div className="flex w-full items-center justify-between border-b border-gray-300 pb-1">
                                    <span className="font-bold text-black text-base md:text-lg">{s.title}</span>
                                    <a href="#" className="text-black text-xs font-normal flex items-center gap-1 group">
                                        More <span className="text-base group-hover:translate-x-1 transition-transform">&gt;</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* 下段 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
                        {servicesBottom.map((s, i) => {
                            const idx = servicesTop.length + i; // continue index
                            return (
                                <div
                                    key={idx}
                                    data-index={idx}
                                    ref={(el) => {
                                        cardRefs.current[idx] = el;
                                    }}
                                    className={`bg-white rounded flex flex-col items-start w-full transition-all duration-[1500ms] transform ${visibleCards[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                        }`}
                                >
                                    <Image src={s.img} alt={s.title} width={140} height={90} className="rounded mb-3 w-full object-cover" />
                                    <div className="flex w-full items-center justify-between border-b border-gray-300 pb-1">
                                        <span className="font-bold text-black text-sm md:text-base">{s.title}</span>
                                        <a href="#" className="text-black text-xs font-normal flex items-center gap-1 group">
                                            More <span className="text-base group-hover:translate-x-1 transition-transform">&gt;</span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
} 