import { Send, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Exclusive</h3>
            <div className="space-y-4">
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black border border-white rounded-l px-4 py-2 w-full"
                />
                <button className="bg-black border border-l-0 border-white rounded-r px-4">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <address className="not-italic space-y-2">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </address>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Login / Register</a></li>
              <li><a href="#" className="hover:underline">Cart</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Download App</h3>
            <p className="text-sm text-gray-400 mb-4">Save $3 with App New User Only</p>
            <div className="flex space-x-4 mb-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;