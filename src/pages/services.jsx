export default function Services() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service Tiles */}
          {[
            {
              title: "Fast Delivery",
              description:
                "We ensure quick and reliable delivery to your doorstep.",
            },
            {
              title: "Secure Payments",
              description:
                "Enjoy safe transactions with our encrypted payment system.",
            },
            {
              title: "24/7 Support",
              description:
                "Our customer service is available anytime you need help.",
            },
            {
              title: "Easy Returns",
              description: "Hassle-free returns within 30 days of purchase.",
            },
            {
              title: "Exclusive Deals",
              description:
                "Get the best discounts and special offers only for you.",
            },
            {
              title: "Quality Assurance",
              description:
                "We guarantee the best quality products for our customers.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center hover:scale-105 duration-300">
              <h2 className="text-2xl font-semibold text-gray-700">
                {service.title}
              </h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
