import MainSlider from "./_Components/MainSlider"
import Cards from "./_Components/Cards"
import Info from "./_Components/Info"
import ProductsSlider from "./_Components/ProductsSlider";
import OffersSlider from "./_Components/OffersSlider";
import DealsSlider from "./_Components/DealsSlider";
import latestProducts from "@/APIs/latestProducts";
import { LatestProducts } from "@/interfaces/latestProd";
import { Featured } from "@/interfaces/featuredProd";
import featuredProducts from "@/APIs/featuredProducts";
import { Cats } from "@/interfaces/cats";
import getCats from "@/APIs/categories";

export default async function Home() {
  const data:LatestProducts =await latestProducts()
  const fdata:Featured = await featuredProducts()

  return (
    <> 
    <MainSlider></MainSlider>
    <Info></Info>
    <Cards></Cards>
    <OffersSlider data={data}></OffersSlider>
    <DealsSlider></DealsSlider>
    <ProductsSlider fdata={fdata}></ProductsSlider>
    
    </>
  );
}
