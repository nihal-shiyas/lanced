export default function AdminPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="gap-8 space-y-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm ">
          <h2 className="text-2xl font-semibold text-center mb-4">Designers</h2>
          <button
            onClick={() => window.location.href = '/designers'}
            className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300"
          >
            Go to Designers
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-4">Works</h2>
          <button
            onClick={() => window.location.href = '/works'}
            className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300"
          >
            Go to Works
          </button>
        </div>
      </div>
    </div>
  );
}