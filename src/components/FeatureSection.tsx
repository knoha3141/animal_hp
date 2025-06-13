export default function FeatureSection() {
    return (
        <section className="bg-gray-100 py-20 px-20">
            <h2 className="text-red-700 text-4xl font-bold mb-1">Feature</h2>
            <p className="text-xs text-gray-500 mb-4">特徴</p>
            <div className="grid md:grid-cols-3 gap-16 my-10">
                <div>
                    <div className="flex items-center mb-2 border-b border-gray-200 pb-2">
                        <span className="text-2xl text-red-700 font-bold mr-2">01</span>
                        <span className="text-red-700 text-xl font-bold">深い愛情診療</span>
                    </div>
                    <p className="text-black text-base mt-4">何よりも動物に信頼と安心を大切に、ペットとご家族に寄り添った診療を行います。</p>
                </div>
                <div>
                    <div className="flex items-center mb-2 border-b border-gray-200 pb-2">
                        <span className="text-2xl text-red-700 font-bold mr-2">02</span>
                        <span className="text-red-700 text-xl font-bold">充実の設備</span>
                    </div>
                    <p className="text-black text-base mt-4">最新の医療機器と清潔な環境で、安心して診療を受けていただけます。</p>
                </div>
                <div>
                    <div className="flex items-center mb-2 border-b border-gray-200 pb-2">
                        <span className="text-2xl text-red-700 font-bold mr-2">03</span>
                        <span className="text-red-700 text-xl font-bold">寄り添いサービス</span>
                    </div>
                    <p className="text-black text-base mt-4">飼い主様とペットの不安やストレスをトリミングやペットホテルの併設で積極的に支えます。</p>
                </div>
            </div>
        </section>
    );
} 