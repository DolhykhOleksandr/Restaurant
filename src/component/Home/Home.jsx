import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";

const restaurant = [1];

const Home = () => {
  return (
    <div className="pb-10">
      <section className="banner">
        <div className="content w-[50vw]">
          <p className="text-3xl lg:text-7xl font-bold py-5">
            Delivery Restaurants
          </p>
          <p className="text-2xl lg:text-5xl">
            Food for everyone, delivery everywhere.
          </p>
        </div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-black py-3 pb-10">
          Top Meals
        </p>
        <MultiItemCarousel />
      </section>
      <section className="px-5 lg:px-20 pt-10">
        <h1 className="text-2xl font-semibold text-black pb-8">
          Best Restautants
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {restaurant.map((item) => (
            <RestaurantCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
