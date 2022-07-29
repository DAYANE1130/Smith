interface Products {
  id: number;
}

export default interface Orders {
  id:number,
  userId:number,
  productsIds: Products
}
