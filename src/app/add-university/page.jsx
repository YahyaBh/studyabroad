export default function AddUniversity() {
    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
            <h1 className="text-3xl font-bold mb-6 text-center">Add University</h1>
            <form className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium" htmlFor="name">University Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter university name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="country">Country</label>
                    <input
                        id="country"
                        type="text"
                        placeholder="Country"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="type">Type</label>
                    <select
                        id="type"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
