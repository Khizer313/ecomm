export interface ProductBase {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  subcategory?: string;
  isNew?: boolean;
}

export interface BestSellingProduct extends ProductBase {
  image: string;
  currentPrice: number;
  originalPrice: number;
}

export interface FlashSaleProduct extends ProductBase {
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

export interface ColorVariant {
  color: string;
  name: string;
}

export interface Product extends ProductBase {
  price: number;
  imageUrl: string;
  showAddToCart?: boolean;
  colors?: ColorVariant[];
}

export interface ServiceData {
  id: number;
  title: string;
  description: string;
}

export interface wishListData {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  discountPercentage?: number;
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
  category?: string;
  subcategory?: string;
}

export interface recommendedData {
  id: string;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  category?: string;
  subcategory?: string;
}
