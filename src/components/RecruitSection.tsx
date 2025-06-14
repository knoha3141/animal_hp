"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RecruitSection() {
    const headingRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [headingVisible, setHeadingVisible] = useState(false);
    const [cardVisible, setCardVisible] = useState(false);

    // observe heading
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

    // observe card
    useEffect(() => {
        if (!cardRef.current) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCardVisible(true);
                    obs.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );
        obs.observe(cardRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="bg-gray-100 py-20 px-20">
            {/* 見出し */}
            <div
                ref={headingRef}
                className={`transition-all duration-[1500ms] transform ${headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <h2 className="text-red-700 text-4xl font-bold mb-2">Recruit</h2>
                <p className="text-sm text-gray-500 mb-10">採用情報</p>
            </div>

            {/* 採用カード */}
            <div
                ref={cardRef}
                className={`flex justify-center mb-20 transition-all duration-[1500ms] transform ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="relative max-w-10xl">
                    <div className="w-[500px] ml-[-500px]">
                        <Image
                            src="/images/recruit.jpg"
                            alt="採用情報"
                            width={500}
                            height={320}
                            className="rounded w-full h-[340px] object-cover"
                        />
                    </div>
                    <div className="bg-gray-50 p-8 rounded absolute bottom-[-64px] right-[-480px] md:w-[500px] w-[100%] shadow-2xl">
                        <div className="font-bold text-red-700 text-2xl mb-6">『動物看護師 兼トリマー募集中！』</div>
                        <p className="text-black text-base leading-relaxed">
                            週2～3日からの勤務OK！<br />
                            トリミングは、シャンプーや簡単なケアができればOKです。経験が浅い方やブランクがある方も安心してご応募ください。<br />
                            私たちと一緒に、小さな家族の健康と幸せをサポートしませんか？<br />
                            ご興味のある方は、ぜひお気軽にお問い合わせください！
                        </p>
                        <div className="text-right mt-4">
                            <a href="/recruit" className="text-red-700 hover:text-red-800 font-medium inline-flex items-center">
                                more <span className="ml-1">&gt;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 