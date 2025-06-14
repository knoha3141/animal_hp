"use client";

import { useEffect, useRef, useState } from "react";

interface FeatureItem {
    no: string;
    title: string;
    description: string;
}

const features: FeatureItem[] = [
    {
        no: "01",
        title: "深い愛情診療",
        description: "何よりも動物に信頼と安心を大切に、ペットとご家族に寄り添った診療を行います。",
    },
    {
        no: "02",
        title: "充実の設備",
        description: "最新の医療機器と清潔な環境で、安心して診療を受けていただけます。",
    },
    {
        no: "03",
        title: "寄り添いサービス",
        description: "飼い主様とペットの不安やストレスをトリミングやペットホテルの併設で積極的に支えます。",
    },
];

export default function FeatureSection() {
    const headingRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visible, setVisible] = useState<boolean[]>(Array(features.length).fill(false));
    const [headingVisible, setHeadingVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number((entry.target as HTMLElement).dataset.index);
                        setVisible((prev) => {
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
        itemRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

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

    return (
        <section className="bg-gray-100 py-20 px-20">
            <div
                ref={headingRef}
                className={`transition-all duration-[1500ms] transform ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <h2 className="text-red-700 text-4xl font-bold mb-1">Feature</h2>
                <p className="text-xs text-gray-500 mb-4">特徴</p>
            </div>
            <div className="grid md:grid-cols-3 gap-16 my-10">
                {features.map((f, idx) => (
                    <div
                        key={idx}
                        data-index={idx}
                        ref={(el) => {
                            itemRefs.current[idx] = el;
                        }}
                        className={`transition-all duration-[1500ms] transform ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div className="flex items-center mb-2 border-b border-gray-200 pb-2">
                            <span className="text-2xl text-red-700 font-bold mr-2">{f.no}</span>
                            <span className="text-red-700 text-xl font-bold">{f.title}</span>
                        </div>
                        <p className="text-black text-base mt-4">{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 