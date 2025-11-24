export default async function singleProduct(id:string) {
  const res= await fetch(`http://127.0.0.1:8000/api/products/${id}`);
  const payload = await res.json()
  return payload
}