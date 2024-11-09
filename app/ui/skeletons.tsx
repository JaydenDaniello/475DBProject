const shimmer = 
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export default function HomeSkeleton() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black-900">
            <div className="w-full max-w-2xl p-8 bg-black-900 rounded-lg shadow-lg">
                <div className="animate-pulse space-y-8">
                    {/* Table Header Skeleton */}
                    <div className="flex justify-between space-x-4">
                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                    </div>

                    {/* Table Rows Skeleton */}
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="flex justify-between space-x-8">
                            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function LoginSkeleton() {
        return (
            <div
        className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
        <div className="flex p-4">
            <div className="h-5 w-5 rounded-md bg-gray-200" />
            <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        </div>
        <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
            <div className="h-7 w-20 rounded-md bg-gray-200" />
        </div>
        </div>
        );
}
    