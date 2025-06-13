export default function FixedReserveButton() {
    return (
        <a
            href="#" // 実際の予約URLがあればここに
            className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-green-700 transition font-bold tracking-widest"
            style={{ minWidth: 180, textAlign: "center" }}
        >
            ネット予約はこちら
        </a>
    );
} 