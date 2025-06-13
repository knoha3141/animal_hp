import Image from "next/image";

export default function AccessSection() {
    return (
        <section className="bg-white py-20 px-20">
            <h2 className="text-red-700 text-4xl font-bold mb-2">Access</h2>
            <p className="text-sm text-gray-500 mb-10">病院案内</p>

            {/* Google Map */}
            <div className="w-full h-[400px] mb-12 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7379558936388!2d139.4715!3d35.7105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzM4LjQiTiAxMznCsDI4JzE3LjQiRQ!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* 左側：基本情報と診療時間 */}
                <div className="md:col-span-7">
                    <div className="mb-12">
                        <h3 className="font-bold text-black mb-2">住所</h3>
                        <p className="text-black">
                            〒185-0032<br />
                            東京都国分寺市日吉町 4-7-2
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="font-bold text-black mb-2">電話番号</h3>
                        <p className="text-black">
                            <a href="tel:042-320-5371" className="hover:text-red-700 transition-colors">
                                042-320-5371
                            </a>
                        </p>
                    </div>



                    <div>
                        <h3 className="font-bold text-black ">診療受付時間</h3>
                        <div className="w-full mb-4">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-black">
                                        <th className="py-2 text-left text-black"></th>
                                        <th className="py-2 text-center text-black">月</th>
                                        <th className="py-2 text-center text-black">火</th>
                                        <th className="py-2 text-center text-black">水</th>
                                        <th className="py-2 text-center text-black">木</th>
                                        <th className="py-2 text-center text-black">金</th>
                                        <th className="py-2 text-center text-black">土</th>
                                        <th className="py-2 text-center text-black">日</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-black">
                                        <td className="py-2 text-black">9:00〜12:00</td>
                                        <td className="py-2 text-center text-red-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-red-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-red-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-black text-4xl">×</td>
                                        <td className="py-2 text-center text-red-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-red-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-black text-4xl">×</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-black">16:00〜19:00</td>
                                        <td className="py-2 text-center text-yellow-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-yellow-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-yellow-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-black text-4xl">×</td>
                                        <td className="py-2 text-center text-yellow-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-yellow-700 text-4xl font-bold">○</td>
                                        <td className="py-2 text-center text-black text-4xl">×</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <span className="text-red-700 text-2xl">○</span>
                                <span className="text-sm text-black">通常診療</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-700 text-2xl">○</span>
                                <span className="text-sm text-black">予約優先診療</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-black text-2xl">×</span>
                                <span className="text-sm text-black">休診（木/日曜日・祝日）</span>
                            </div>
                        </div>
                    </div>
                    {/* 診療対象動物 */}
                    <div className="mt-12">
                        <h3 className="font-bold text-black mb-4">診療対象</h3>
                        <div className="flex flex-wrap gap-10 justify-start">
                            <div className="flex flex-col items-center">
                                <Image src="/images/animals/dog.svg" alt="犬" width={50} height={50} />
                                <span className="text-sm mt-2 text-black">犬</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image src="/images/animals/cat.svg" alt="猫" width={50} height={50} />
                                <span className="text-sm mt-2 text-black">猫</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image src="/images/animals/hamster.svg" alt="ハムスター" width={50} height={50} />
                                <span className="text-sm mt-2 text-black">ハムスター</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image src="/images/animals/bird.svg" alt="鳥" width={50} height={50} />
                                <span className="text-sm mt-2 text-black">鳥</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image src="/images/animals/other.svg" alt="その他小動物" width={50} height={50} />
                                <span className="text-sm mt-2 text-black">その他</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 右側：駐車場案内 */}
                <div className="md:col-span-5">
                    <div className="mb-8">
                        <h3 className="font-bold text-black mb-2">駐車場</h3>
                        <p className="text-black">近隣患者さま専用 4台</p>
                    </div>
                    <div className="relative">
                        <Image
                            src="/images/parking.png"
                            alt="駐車場案内図"
                            width={360}
                            height={300}
                            className="object-contain mx-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
} 