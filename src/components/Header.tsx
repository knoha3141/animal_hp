"use client";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full py-8 px-8 bg-white shadow-md flex items-center justify-end z-50">
            {/* PCナビ */}
            <nav className="space-x-6 text-black hidden md:flex">
                <a href="/" className="hover:underline font-bold">TOP</a>
                <a href="/about-hospital" className="hover:underline font-bold">病院紹介</a>
                <a href="/about" className="hover:underline font-bold">初めての方へ</a>
                <a href="/treatments" className="hover:underline font-bold">診療案内</a>
                <a href="/services" className="hover:underline font-bold">サービス</a>
                <a href="/recruit" className="hover:underline font-bold">採用情報</a>
            </nav>
            {/* ハンバーガーアイコン（スマホのみ表示） */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                onClick={() => setOpen(!open)}
                aria-label="メニューを開く"
            >
                <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${open ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-black transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
            {/* ドロワーメニュー（スマホ） */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 md:hidden animate-fade-in z-50">
                    <a href="/" className="py-2 text-lg font-bold" onClick={() => setOpen(false)}>TOP</a>
                    <a href="/about-hospital" className="py-2 text-lg font-bold" onClick={() => setOpen(false)}>病院紹介</a>
                    <a href="/about" className="py-2 text-lg font-bold" onClick={() => setOpen(false)}>初めての方へ</a>
                    <a href="/treatments" className="py-2 text-lg font-bold" onClick={() => setOpen(false)}>診療案内</a>
                    <a href="/services" className="py-2 text-lg font-bold" onClick={() => setOpen(false)}>サービス</a>
                    <a href="/recruit" className="py-2 text-lg font-bold" onClick={() => setOpen(false)}>採用情報</a>
                </div>
            )}
        </header>
    );
} 