'use client';

import { User } from "@/app/lib/definitions";
import { useEffect } from "react";

interface UserTableProp {
    users: User[];
}

export default function UserTable({ users }: UserTableProp) {

    if (!users || users.length === 0) {
        return <div className="text-white">No users to display or user prop is undefined</div>; // Fallback if no projects
    }

    return (
        <div className="w-full max-w-4xl bg-black p-8 rounded-lg shadow-lg border border-cyan-200">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-200">Users</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-300 rounded-lg border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-gray-800 border-b">Sales_ID</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Name</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Email</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Phone_Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.salesid} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-gray-800 text-center">{user.salesid}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{user.name}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{user.email}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{user.phone_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
