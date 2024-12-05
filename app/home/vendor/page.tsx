import { fetchVendors } from "@/app/lib/data"; // Import vendor data fetch function
import { cookies } from "next/headers";
import { Vendor } from "@/app/lib/definitions"; 
import VendorTable from "@/app/ui/home/VendorTable"; 

export default async function VendorPage() {
    try {
        // Get token from cookies
        const cookieStore = cookies();
        const token = (await cookieStore).get('token')?.value;

        // Check token existence
        if (!token) {
            throw new Error('Authentication token is missing. Please log in.');
        }

        // Fetch vendors
        const vendorInfo = await fetchVendors(token);
        const vendors: Vendor[] = vendorInfo;

        return (
            <main className="flex justify-center items-center min-h-screen bg-black">
                <VendorTable vendors={vendors} />
            </main>
        );
    } catch (error) {
        console.error('Error fetching vendor data:', error);

        // Error message for UI
        return (
            <main className="flex justify-center items-center min-h-screen bg-black text-white">
                <p>An error occurred while fetching vendor data. Please try again later.</p>
            </main>
        );
    }
}
