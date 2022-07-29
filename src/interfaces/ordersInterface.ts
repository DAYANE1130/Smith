interface Products{
  id:number[]
}
interface Orders {
  id:number,
  userId:number,
  productsIds: Products
}

export default Orders;