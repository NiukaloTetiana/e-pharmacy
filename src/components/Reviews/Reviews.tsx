import { ReviewProductItem } from "../../components";

const Reviews = () => {
  const reviews = [
    {
      name: "Leroy Jenkins",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLb2hQ2VRmGTQwkQ4JQT8EYZMOR0SpnSKXayHgZ8nqnU3aJW-OEbGVjqaZhwi9Rz_RbI&usqp=CAUhttps://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
      rating: 4,
      data: "2 days ago",
      review:
        "I've been using Moringa powder in my smoothies for a few weeks now. My energy levels are up, and I feel great. I followed the recommended dosage, and it seems to be a perfect addition to my daily routine. Highly recommend!",
    },
    {
      name: "Lessy Krash",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4fydQCAwICuVApo9oOVC3o1ehFKpYjUwxqe5R4tl84WAMfbH8ibyGIaQpCfmk77MwKg&usqp=CAU",
      rating: 5,
      data: "2 days ago",
      review:
        "I tried Moringa capsules as part of my wellness regimen, and I've been pleasantly surprised by the results. My skin looks healthier, and I've noticed an improvement in my digestion. A natural and effective supplement!",
    },
    {
      name: "Djeck Norri",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qpAcVT2KdIPpmnyFbr1mK9KpHi1QnXHzgg&s",
      rating: 3,
      data: "2 days ago",
      review:
        "I added Moringa oil to my skincare routine, and the results are amazing. My skin feels smoother and more nourished. I was skeptical at first, but now I'm a firm believer in its benefits.",
    },
  ];
  return (
    <ul className="flex flex-col gap-5">
      {reviews.map((review, index) => (
        <ReviewProductItem key={index} {...review} />
      ))}
    </ul>
  );
};

export default Reviews;
