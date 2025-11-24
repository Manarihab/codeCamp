export default async function prodByCat(id:string) {
  const res=await fetch(`http://127.0.0.1:8000/api/categories/${id}/products`);
  const payload = await res.json()
  return payload
}