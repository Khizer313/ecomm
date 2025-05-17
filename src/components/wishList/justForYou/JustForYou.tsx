import React from 'react';
import JustForYouHeader from './JustForYouHeader';
import JustForYouItems from './JustForYouItems';
import { useSelector } from 'react-redux';
import { selectJustForYou } from '../../../redux/slices/justForYouSlice'; // Correct the import path if needed
import { useLocation } from 'react-router-dom';
import { bestSellingProduct, flashSaleProduct } from '../../../data/products';
import type { BestSellingProduct } from '../../../types/product';




const JustForYou: React.FC = () => {
  // Redux store se data retrieve karo
  const products = useSelector(selectJustForYou);

  const handleSeeAll = () => {
    console.log('Navigating to all recommended products');
    // Real app mein yeh kisi page ko navigate karega
  };




  const location = useLocation();
  const { product } = location.state || {};
  const allProducts = [...bestSellingProduct, ...flashSaleProduct, ...products];

  // Get recommended products from same category/subcategory
  const recommendedProducts = product
  ? allProducts
      .filter(p =>
        p.id !== product.id &&
        (p.category === product.category || p.subcategory === product.subcategory)
      )
      .slice(0, 4)
      .map(p => ({
        ...p,
        id: typeof p.id === 'string' ? Number(p.id) : p.id,

      })) as BestSellingProduct[]
  : [];








  return (
    <section>
      <JustForYouHeader onSeeAll={handleSeeAll} />
      {/* <JustForYouItems products={products} /> */}
      <JustForYouItems products={recommendedProducts} />

    </section>
  );
};

export default JustForYou;
