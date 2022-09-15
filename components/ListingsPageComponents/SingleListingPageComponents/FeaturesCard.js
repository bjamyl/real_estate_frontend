import React from "react";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoBedOutline } from "react-icons/io";
import { BiBath } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import {BsCalendarDate} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import {IoMdSquare} from 'react-icons/io'

export default function FeaturesCardOne({
  price,
  bedrooms,
  bathrooms,
  garage,
}) {
  return (
    <section>
      <div>
        <p>
          <MdOutlinePriceChange />
          Asking Price
        </p>
        <p>{price}</p>
      </div>
      <div>
        <p>
          <IoBedOutline /> Bedrooms
        </p>
        <p>{bedrooms}</p>
      </div>
      <div>
        <p>
          <BiBath /> Bathrooms
        </p>
        <p>{bathrooms}</p>
      </div>
      <div>
        <p>
          {" "}
          <GiHomeGarage /> Asking Price
        </p>
        <p>{garage}</p>
      </div>
    </section>
  );
}

