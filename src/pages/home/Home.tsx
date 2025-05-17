import BestSelling from "../../components/BestSeliing";
import BrowseCategories from "../../components/browseByCategories/BrowseCategories";
import BuyNow from "../../components/explore/BuyNow";
import Products from "../../components/explore/Products";
import FlashSales from "../../components/flashsales/FlashSales";
import HeroMain from "../../components/hero/HeroMain";
import Login from "../../components/Login";
import NewArrival from "../../components/NewArrival";
import ServiceFeatures from "../../components/services/ServiceFeatures";
import SignUp from "../../components/SignUp";
import Wishlist from "../../components/wishList/wishList/WishList";
import JustForYou from "../../components/wishList/justForYou/JustForYou";
import Cart from "../../components/Cart/Cart";
import Account from "../Account/Account";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <HeroMain />
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <FlashSales />
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <BrowseCategories />
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <BestSelling />
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <BuyNow />
        <Products />
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <NewArrival />
        <ServiceFeatures/>
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <Login />
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <SignUp />
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-8">
        <Wishlist />
        <JustForYou />
      </div>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <Cart />
      </section>
      <section className="px-4 py-6 md:px-6 lg:px-8">
        <Account />
      </section>
      </section>
      
    </main>
  );
}