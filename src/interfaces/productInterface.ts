export interface Iproducts {
  id: number;
  name: string;
  amount: string;
  orderId: number;
}
export interface IcreateProduct extends Iproducts{
  name: string;
  amount: string;
}