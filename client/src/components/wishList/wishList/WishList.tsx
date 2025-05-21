import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  removeFromWishList, selectWishList } from '../../../redux/slices/wishListSlice';
// import { wishlistProducts } from '../../../data/products';
import WishlistHeader from './WishListHeader';
import WishListItems from './WishListItems';
import type { AppDispatch } from '../../../redux/store';
import JustForYou from '../justForYou/JustForYou';

const Wishlist: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectWishList);

  // Populate wishlist with dummy data (initial setup)
  // useEffect(() => {
  //   wishlistProducts.forEach((product) => {
  //     dispatch(addToWishList(product));
  //   });
  // }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ko top par le aana
  }, []);
  const handleRemove = (id: number) => {
    dispatch(removeFromWishList(id));
  };

  const handleMoveAllToBag = () => {
    console.log('Move all to bag clicked');
    // Logic to move to cart will go here
  };

  return (
    <>
    <section>
      <WishlistHeader count={products.length} onMoveAllToBag={handleMoveAllToBag} />
      <WishListItems  products={products} onRemoveItem={handleRemove} />
    </section>
    <JustForYou/>
    </>
  );
};

export default Wishlist;
