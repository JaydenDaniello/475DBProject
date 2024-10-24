import React from "react";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen ">
            <div className="w-full flex-none">
                
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto">

            </div>
        </div>
    );
}