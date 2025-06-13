import Image from "next/image";

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
    return (
        <section className="bg-white py-20 px-20">
            <div className="md:flex md:items-start md:justify-between max-w-7xl">
                {/* 左：見出し（30%） */}
                <div className="md:w-[30%] w-full mb-8 md:mb-0 flex-shrink-0">
                    <h2 className="text-red-700 text-4xl font-bold mb-1">Services</h2>
                    <p className="text-xs text-gray-500 mb-6">診療・サービス案内</p>
                </div>
                {/* 右：サービスカード（70%） */}
                <div className="md:w-[70%] w-full ml-auto">
                    {/* 上段：2つ並び 大きいカード */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                        {servicesTop.map((s, i) => (
                            <div key={i} className="bg-white rounded flex flex-col items-start w-full">
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
                    {/* 下段：3つ並び 小さいカード */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
                        {servicesBottom.map((s, i) => (
                            <div key={i} className="bg-white rounded flex flex-col items-start w-full">
                                <Image src={s.img} alt={s.title} width={140} height={90} className="rounded mb-3 w-full object-cover" />
                                <div className="flex w-full items-center justify-between border-b border-gray-300 pb-1">
                                    <span className="font-bold text-black text-sm md:text-base">{s.title}</span>
                                    <a href="#" className="text-black text-xs font-normal flex items-center gap-1 group">
                                        More <span className="text-base group-hover:translate-x-1 transition-transform">&gt;</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 