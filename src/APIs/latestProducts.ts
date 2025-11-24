

export default async function latestProducts() {
  const res=await fetch(`http://127.0.0.1:8000/api/home/latestProduct`);
  const payload = await res.json()
  return payload
}
