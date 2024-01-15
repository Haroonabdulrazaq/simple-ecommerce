export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface InitialState {
  productList: Product[];
  isLoading: boolean;
  error: string;
}

export type FeaturePost = {
  number: number;
  postDate: string;
  postTitle: string;
  postText: string;
  numberOfComments: number;
};
