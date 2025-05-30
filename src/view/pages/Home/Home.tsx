/*export function Home() {
    return (
        <h1>Home Page</h1>
    );
}*/



export function Home() {
    return (
        <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-purple-700 mb-6">Welcome to Our Platform</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover amazing features and services tailored just for you.
                Join our community and experience the difference.
            </p>
            <div className="mt-8">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
}