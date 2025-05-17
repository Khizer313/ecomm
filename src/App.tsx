
 import Topbar from './components/header/Topbar';
 import Navbar from './components/header/Navbar';
import Footer from './components/Footer';



import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] ">
      {/* Header */}
       <Topbar />
       <Navbar />
      <ScrollToTop/>

      {/* Main Content */}
      <main className="flex-grow p-4 bg-gray-50">
        <Outlet /> {/* Dynamic content based on routes */}
      </main>

      {/* Footer */}
      <Footer/>
      

    
    </div>
  );
}
