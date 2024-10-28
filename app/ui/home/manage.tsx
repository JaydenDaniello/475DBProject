import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/openprojects'); // Adjust the route name as necessary
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-full max-w-4xl bg-black p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-200">Projects</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-300 border border-cyan-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-gray-800 border-b">Sales ID</th>
                                <th className="px-4 py-2 text-gray-800 border-b">Name</th>
                                <th className="px-4 py-2 text-gray-800 border border-red-500 border-b">PO</th>
                                <th className="px-4 py-2 text-gray-800 border border-green-500 border-b">Status</th>
                                <th className="px-4 py-2 text-gray-800 border-b">In-Hands Date</th>
                                <th className="px-4 py-2 text-gray-800 border-b">Project Name</th>
                                <th className="px-4 py-2 text-gray-800 border-b">Client ID</th>
                                <th className="px-4 py-2 text-gray-800 border-b">Vendor ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.po} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2 text-gray-800 text-center">{project.salesid}</td>
                                    <td className="px-4 py-2 text-gray-800 text-center">{project.name}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-red-500 text-center">{project.po}</td>
                                    <td className="px-4 py-2 text-gray-800 border border-green-500 text-center">{project.status}</td>
                                    <td className="px-4 py-2 text-gray-800 text-center">{project.due_date}</td>
                                    <td className="px-4 py-2 text-gray-800 text-center">{project.project_name}</td>
                                    <td className="px-4 py-2 text-gray-800 text-center">{project.clientid}</td>
                                    <td className="px-4 py-2 text-gray-800 text-center">{project.vendorid}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default HomePage;