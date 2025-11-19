import Image from "next/image";
import card from "./assete/card.png";
import card1 from "./assete/card1.png";
import "./CSS/card.css";

export default function Cards() {
  return (
    <div className="card-container">

      <div className="image-card">
        <Image 
          src={card}
          alt="Clothes Sale"
          width={400}
          height={400}
        />
      </div>

      <div className="image-card">
        <Image 
          src={card1}
          alt="Phone Sale"
          width={400}
          height={400}
        />
      </div>

    </div>
  );
}
