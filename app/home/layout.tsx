'use client'

import React from "react";
import Navbar from "../ui/home/navbar";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen ">
            <div className="w-full flex-none">
                <Navbar />
            </div>
            <div className="flex-grow">
                {children}
            </div>
            
        </div>
    );
}