"use client";

import { useEffect, useRef, useState } from "react";

interface NewsItem {
    date: string;
    title: string;
    isNew?: boolean;
}

const newsData: NewsItem[] = [
    { date: "2023/08/02", title: "6月の診療について", isNew: true },
    { date: "2023/07/13", title: "狂犬病のワクチン接種始まってます", isNew: true },
    { date: "2023/06/20", title: "新年の診療日程が決まりました" },
    { date: "2023/06/20", title: "新年の診療日程が決まりました" },
    { date: "2023/06/20", title: "新年の診療日程が決まりました" },
    { date: "2023/06/20", title: "新年の診療日程が決まりました" }
];

export default function NewsSection() {
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(
        Array(newsData.length).fill(false)
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number((entry.target as HTMLElement).dataset.index);
                        setVisibleItems((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        itemRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-gray-50 py-20 px-20 text-black">
            <div className="flex flex-col md:flex-row justify-between items-start w-full">
                {/* 左：見出し */}
                <div className={`md:w-2/12 w-full flex flex-col items-start order-1 md:order-1 mb-4 md:mb-0 transition-all duration-[1500ms] transform ${visibleItems.some(Boolean) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-red-700 text-4xl font-bold mb-1">News</h2>
                    <p className="text-xs text-gray-500 mb-4">お知らせ</p>
                </div>
                {/* 右：リスト */}
                <div className="md:w-10/12 w-full order-2 md:order-2">
                    <ul className="border-t border-b">
                        {newsData.map((item, index) => (
                            <li
                                key={index}
                                data-index={index}
                                ref={(el) => {
                                    itemRefs.current[index] = el;
                                }}
                                className={`news-item flex justify-between py-6 px-8 border-b last:border-b-0 transition-all duration-[1500ms] transform ${visibleItems[index]
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                    }`}
                            >
                                <span>
                                    {item.date}　{item.title}
                                </span>
                                {item.isNew && (
                                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">New</span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="text-right mt-2 transition-opacity duration-[1500ms]" style={{ opacity: visibleItems.some(Boolean) ? 1 : 0 }}>
                        <a href="#" className="text-red-700 underline">
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 