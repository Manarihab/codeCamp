import React from "react";
import tv from "../../../assets/tv.jpg";
import ProductSlider from "../_Components/ProductSlider";
import ProductOptions from "../_Components/ProductOptions";
import ProductDetailsTabs from "../_Components/ProductDetailsTabs";
import singleProduct from "@/APIs/singleProduct";
import { SingleProd } from "@/interfaces/singleProd";
import RelatedProducts from "../_Components/RelatedProducts";

export default async function page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params
  const data:SingleProd= await singleProduct(id)
 
 
 return (
    <>
      <div className="flex gap-6 mt-28">
        <div className="border rounded-xl border-[#00000033] vh  w-1/2 flex items-center">
          <ProductSlider images={data.images} />
        </div>
        <div className="w-1/2">
            <ProductOptions prod={data}/>
        </div>
      </div>
      <ProductDetailsTabs prod={data}/>
  <RelatedProducts />
    </>
  );
}
