export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form>
          <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 hover:scale-x-105 duration-300 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none hover:scale-x-105 duration-300 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border hover:scale-x-105 duration-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-400"
              placeholder="Enter your message"
              rows="4"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
