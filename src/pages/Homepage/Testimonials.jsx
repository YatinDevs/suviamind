import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { reviews } from "../../constants/index";

const Testimonials = () => {
  return (
    <section className="max-container  bg-blue-50 py-24 text-gray-700">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="mr-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          Customers
        </span>
        Says?
      </h3>
      <p className="info-text text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satified Customers about their exceptional
        experiences woth use.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col ">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
