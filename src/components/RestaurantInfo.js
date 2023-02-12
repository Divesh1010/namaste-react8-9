import { IMG_CDN_URL } from "../../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetMenu from "../utils/useGetMenu";
import { additem } from "../utils/cartslice";
import { useDispatch } from "react-redux";

const RestaurantInfo = () => {
  const { id } = useParams();

  const restaurant = useGetMenu(id);

  const dispatch = useDispatch();

  const addfooditem = (item) => {
    dispatch(additem(item));
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restInfo">
      <div>
        <h1>Name :- {restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
        <h2> {restaurant?.area} </h2>
        <h2> {restaurant?.city} </h2>
        <h2> {restaurant?.avgRating} </h2>
        <h2> {restaurant?.costForTwoMsg} </h2>
      </div>
      <div>
        <button onClick={() => handleadditem}>additem</button>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item?.id}> {item.name} - <button onClick={() => addfooditem(item)}>add</button> </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
