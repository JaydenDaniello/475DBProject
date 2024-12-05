'use client';

import { Vendor } from "@/app/lib/definitions"; 
import { useEffect } from "react";

interface VendorTableProp {
    vendors: Vendor[];
}

export default function VendorTable({ vendors }: VendorTableProp) {
    // Handling case when vendors prop is empty or undefined
    if (!vendors || vendors.length === 0) {
        return <div className="text-white">No vendors to display or vendor prop is undefined</div>;
    }

    return (
        <div className="w-full max-w-4xl bg-black p-8 rounded-lg shadow-lg border border-cyan-200">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-200">Vendors</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-300 rounded-lg border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-gray-800 border-b">Vendor ID</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Company Name</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Email</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Phone Number</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Company Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.map((vendor) => (
                            <tr key={vendor.vendorid} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-gray-800 text-center">{vendor.vendorid}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{vendor.company_name}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{vendor.email}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{vendor.phone_number}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{vendor.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
