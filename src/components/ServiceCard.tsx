const ServiceCard = ({ title, description, icon, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img src={icon} alt={title} className="w-12 h-12 mr-4" />
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 rounded-md font-medium transition">
          Dowiedz się więcej
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;