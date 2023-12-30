"use client";
import { Modal } from "@/components/Modal";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import useControlModal from "@/hook/useControlModal";

import "./globals.css";
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setModal = useControlModal((state) => state.setValueModal);
  const pathname = usePathname();
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 77) {
        setModal();
      }
    });
  }, []);

  return (
    <html lang="en">
      <head />
      <body className="bg-slate-900">
        <div className=" max-w-7xl mx-auto">
          <Header />
          <main
            className={`mx-auto w-full flex justify-between py-14 max-lg:px-10 `}
          >
            {children}
          </main>
          <Footer />
          <Modal />
        </div>
      </body>
    </html>
  );
}
