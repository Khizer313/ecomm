import { Store, DollarSign, Gift, Wallet } from 'lucide-react';
import ServiceFeatures from '../../components/services/ServiceFeatures';

const About = () => {
  const stats = [
    { icon: <Store className="w-8 h-8" />, value: '10.5k', label: 'Sellers active our site' },
    { icon: <DollarSign className="w-8 h-8" />, value: '33k', label: 'Monpthly Product Sale', highlight: true },
    { icon: <Gift className="w-8 h-8" />, value: '45.5k', label: 'Customer active in our site' },
    { icon: <Wallet className="w-8 h-8" />, value: '25k', label: 'Anual gross sale in our site' }
  ];

  const team = [
    {
      name: 'Tom Cruise',
      role: 'Founder & Chairman',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Emma Watson',
      role: 'Managing Director',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Will Smith',
      role: 'Product Designer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];



  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-gray-700">Home</a>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-800">About</span>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 mb-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported
            by wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3
            millions customers across the region.
          </p>
          <p className="text-gray-600">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Shopping women"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-center ${
              stat.highlight ? 'bg-red-500 text-white' : 'bg-white border'
            }`}
          >
            <div className="flex justify-center mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <ServiceFeatures/>
    </div>
  );
};

export default About;