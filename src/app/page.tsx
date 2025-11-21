import MainSlider from "./_Components/MainSlider"
import Cards from "./_Components/Cards"
import Info from "./_Components/Info"
import ProductsSlider from "./_Components/ProductsSlider";
import OffersSlider from "./_Components/OffersSlider";
import DealsSlider from "./_Components/DealsSlider";
import OurCategories from "./_Components/OurCategories";

export default function Home() {
  return (
    <> 
    <OurCategories></OurCategories>
    <MainSlider></MainSlider>
    <Info></Info>
    <Cards></Cards>
    <OffersSlider></OffersSlider>
    <DealsSlider></DealsSlider>
    <ProductsSlider></ProductsSlider>
    
    </>
  );
}
