import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    {/* 左側：ロゴと電話番号 */}
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center mb-6">
                            <Image src="/images/logo-white.png" alt="恋ヶ窪動物病院" width={280} height={50} />
                        </div>
                        <div className="bg-gray-700 p-4 rounded">
                            <Link href="tel:042-320-5371" className="text-2xl font-bold flex items-center">
                                <Image src="/images/phone-icon.svg" alt="電話" width={24} height={24} className="mr-2" />
                                042-320-5371
                            </Link>
                        </div>
                    </div>

                    {/* 右側：メニューリンク */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <Link href="/about" className="block mb-3 hover:text-gray-300">病院紹介</Link>
                            <Link href="/first-visit" className="block mb-3 hover:text-gray-300">初めての方へ</Link>
                            <Link href="/medical" className="block mb-3 hover:text-gray-300">診療案内</Link>
                        </div>
                        <div>
                            <Link href="/service" className="block mb-3 hover:text-gray-300">サービス</Link>
                            <Link href="/hotel" className="block mb-3 hover:text-gray-300">・ペットホテル</Link>
                            <Link href="/trimming" className="block mb-3 hover:text-gray-300">・トリミング</Link>
                            <Link href="/recruit" className="block mb-3 hover:text-gray-300">採用情報</Link>
                            <Link href="/privacy" className="block mb-3 hover:text-gray-300">プライバシーポリシー</Link>
                        </div>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="text-center pt-8 border-t border-gray-700">
                    <p className="text-sm">Copyright© 2020 恋ヶ窪動物病院 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
} 