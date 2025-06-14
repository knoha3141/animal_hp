"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const images = [
        "/images/hero.jpg",
        "/images/hero2.jpg",
        "/images/hero3.jpg",
        "/images/hero4.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={`bg-gray-100 py-50 flex justify-center transition-opacity duration-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative flex justify-center items-center max-w-4xl w-full h-[500px]">
                {/* メインビジュアル */}
                <div className="w-[600px] h-[500px] relative">
                    {images.map((src, index) => (
                        <Image
                            key={src}
                            src={src}
                            alt="メインビジュアル"
                            fill
                            className={`rounded object-cover transition-opacity duration-[1500ms] ${currentImageIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                            priority={index === 0}
                            sizes="600px"
                        />
                    ))}
                </div>
                {/* キャッチコピー（左側に被せる） */}
                <div className={`absolute left-[-80px] top-1/2 -translate-y-1/2 md:w-80 w-56 p-4 rounded flex flex-col items-end transition-transform duration-[1500ms] ${isLoaded ? 'translate-x-0' : '-translate-x-20'}`}>
                    <p className="text-black font-bold text-base md:text-xl leading-relaxed whitespace-pre-line text-left tracking-widest">
                        何より深い愛情と信頼を大切に、
                        ペットとご家族に寄り添った診療を行います。
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm mt-2">Caring for Your Pet, With Deep Love and Trust.</p>
                </div>
                {/* ロゴ（右側に被せる） */}
                <div className={`absolute right-[-100px] top-1/2 -translate-y-1/2 p-2 rounded flex items-center transition-transform duration-[1500ms] ${isLoaded ? 'translate-x-0' : '-translate-x-20'}`}>
                    <Image
                        src="/images/logo.png"
                        alt="ロゴ"
                        width={300}
                        height={80}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
} 