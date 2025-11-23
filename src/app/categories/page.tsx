  import React from 'react'
  import "../../CSS/categories.css"
  import Filter from "./Fillter"
  import Slider from "./Slider"
  import Ofers from "./Ofers"
  export default function page() {
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
    return <button key={buttton.id}       className={buttton.id === 2 ? "Btns active" : "Btns"}
 >{buttton.Bname}</button>;
  });
    return (
        <div className='container'>
        <h2>Electronics</h2>
            {ButtonsList}
           <Filter></Filter> 
           <Slider></Slider>
           <Ofers></Ofers>
        </div>  
  )
  }
