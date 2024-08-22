export interface IDescription {
  text: string;
  antioxidantProperties: string;
  antiDiabeticEffects: string;
  antiCancerProperties: string;
  immuneSupport: string;
  digestiveAid: string;
}

export interface IReviewProduct {
  name: string;
  photo: string;
  rating: number;
  date: string;
  review: string;
}

export interface IProduct {
  _id: string;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category: string;
  description: IDescription;
  reviews: IReviewProduct[];
}
