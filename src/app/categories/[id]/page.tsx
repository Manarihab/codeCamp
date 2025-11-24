  import React from 'react'
  import "../../../CSS/categories.css"
  import Filter from "../_Components/Fillter"
  import Slider from "../_Components/Slider"
  import Ofers from "../_Components/Ofers"
import prodByCat from '@/APIs/prodByCat'
import { ProdsBy } from '@/interfaces/prodByCat'

  export default async function page({params}:{params:Promise<{id:string}>}) {
   const {id} = await params
    const data:ProdsBy = await prodByCat(id)
    
    
    const Buttons = [
    {
      id: 1,
      Bname: "All",
    },

        {
      id: 2,
      Bname: "TVs",
    },

        {
      id: 3,
      Bname: "TVs",
    },

        {
      id: 4,
      Bname: "Tablets",
    },

        {
      id: 5,
      Bname: "Phones",
    },

        {
      id: 6,
      Bname: "Smart Watch",
    },
  ];

  const ButtonsList = Buttons.map((buttton) => {
    return <button key={buttton.id}       className={`${buttton.id === 2 ? "Btns active" : "Btns"} transition-all duration-300`}
 >{buttton.Bname}</button>;
  });
    return (
       <>
           <div className='container'>
        <h2>{data.category}</h2>
            {ButtonsList}
           <Filter></Filter> 
           <Slider></Slider>
           <Ofers data={data}></Ofers>
        </div>  
       </>
  )
  }
