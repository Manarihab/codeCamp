export default async function getCats() {
  const res=await fetch(`http://127.0.0.1:8000/api/home/categories`);
  const payload = await res.json()
  return payload
}