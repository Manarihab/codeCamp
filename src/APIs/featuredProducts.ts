
export default async function featuredProducts() {
  const res=await fetch(`http://127.0.0.1:8000/api/home/featured-products`);
  const payload = await res.json()
  return payload
}