export interface Product {
  id: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface ApiResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
export interface Params {
  productId: string;
}

export interface ProductDetailPageProps {
  params: Params;
}
export interface ProductGridProps {
  productResponse: ApiResponse;
}
export interface FetchProductsArgs {
  limit: number;
  skip: number;
}
export interface InitialState {
  productResponse: ApiResponse;
  singleProduct: Product;
  isLoading: boolean;
  bestSellerProducts: ApiResponse;
  isLoadingSingleProduct: boolean;
  error: string;
}
export type FeaturePost = {
  number: number;
  postDate: string;
  postTitle: string;
  postText: string;
  numberOfComments: number;
};
