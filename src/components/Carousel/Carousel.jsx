import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (direction) => {
    const container = carouselContainer.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="flex flex-col w-32 shrink-0">
        <div className="bg-gray-700 h-48 w-full rounded-lg mb-4 animate-pulse"></div>
        <div className="bg-gray-700 h-4 w-3/4 mb-2 animate-pulse"></div>
        <div className="bg-gray-700 h-4 w-1/2 animate-pulse"></div>
      </div>
    );
  };

  return (
    <div className="mb-12">
      <ContentWrapper>
        {title && (
          <div className="text-2xl text-white mb-5 font-normal">{title}</div>
        )}

        <BsFillArrowLeftCircleFill
          className="text-3xl text-black absolute top-1/2 left-8 transform -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-80 hidden md:block z-10"
          onClick={() => navigation("left")}
        />

        <BsFillArrowRightCircleFill
          className="text-3xl text-black absolute top-1/2 right-8 transform -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-80 hidden md:block z-10"
          onClick={() => navigation("right")}
        />

        {!loading ? (
          <div
            className="flex gap-4 overflow-y-hidden -mx-5 px-5"
            ref={carouselContainer}
          >
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="w-32 shrink-0 cursor-pointer"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="relative w-full h-48 bg-cover bg-center rounded-lg mb-4">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="text-white">
                    <span className="block text-sm mb-2 truncate">
                      {item.title || item.name}
                    </span>
                    <span className="block text-xs opacity-50">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-4 overflow-y-hidden -mx-5 px-5">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
