import Sidebar from './Sidebar';
import MainContent from './MainContent';

function HeroMain() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4 md:flex-row">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default HeroMain;