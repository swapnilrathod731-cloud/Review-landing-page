import "./Review.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Review() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
  axios
    .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
    .then((response) => {
      console.log(response.data);

      // Store only the first 4 reviews
      setReviews(response.data.data.slice(0, 4));
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  return (
    <section className="review-section">

      <h1>What Our Customers Say</h1>

      <div className="review-container">

        {reviews.slice(0, 4).map((review) => (
        <div className="review-card" key={review.ID}>
         <h2>{review.Name}</h2>
         <p>{review.Reviews}</p>
        <p>{review.Company}</p>
        <p>⭐ {review.rating}</p>
    </div>
    ))}

      </div>

    </section>
  );
}

export default Review;