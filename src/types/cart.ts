export interface ICartProduct {
  _id: string;
  quantity: number;
}

export interface ICart {
  _id: string;
  userId: string;
  products: ICartProduct[];
}

export interface ICustomer {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IOrder {
  _id: string;
  customer: ICustomer;
  products: ICartProduct[];
  dateOfOrder: Date;
  totalPrice: number;
}

export interface INewOrder extends Omit<IOrder, "_id"> {}
