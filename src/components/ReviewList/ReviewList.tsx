export const ReviewList = () => {
  const reviews = [
    {
      name: "Maria Tkachuk",
      testimonial:
        "I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4fydQCAwICuVApo9oOVC3o1ehFKpYjUwxqe5R4tl84WAMfbH8ibyGIaQpCfmk77MwKg&usqp=CAU",
    },
    {
      name: "Sergey Rybachok",
      testimonial:
        "I had a great experience using this medical platform to access my health records. This platform is a game-changer for managing my healthcare needs.",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLb2hQ2VRmGTQwkQ4JQT8EYZMOR0SpnSKXayHgZ8nqnU3aJW-OEbGVjqaZhwi9Rz_RbI&usqp=CAU",
    },
    {
      name: "Natalia Chatuk",
      testimonial:
        "I recently had a virtual appointment with my doctor through this medical platform, and I was pleasantly surprised by how seamless the experience was.",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qpAcVT2KdIPpmnyFbr1mK9KpHi1QnXHzgg&s",
    },
  ];

  return (
    <section className="pb-[80px] md:pb-[120px]">
      <div className="container lg:px-[119px]">
        <h2 className="font-semibold text-[28px] md:text-[36px] leading-[1.4] md:leading-[1.2] text-[#1d1e21] text-center mb-[14px]">
          Reviews
        </h2>
        <p className="font-normal text-[14px] md:text-[16px] leading-[1.25] text-[#93939a] text-center mb-[64px] md:mb-[88px]">
          Search for Medicine, Filter by your location
        </p>
        <div className="carousel carousel-center flex space-x-[16px] lg:space-x-0 lg:gap-[28px]">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="carousel-item relative px-[16px] lg:px-[28px] pb-[32px] lg:pb-10 w-[328px] md:w-[344px] lg:w-[382px] h-[232px] rounded-[27px] border border-[#f1f1f1] bg-[#fdfdfd] shadow-lg pt-[54px] mb:pt-[24px]"
            >
              <img
                className="absolute w-16 h-16 -top-6 left-1/2 transform -translate-x-1/2 rounded-[50%] bg-white shadow-scroll"
                src={review.photo}
                alt={review.name}
                loading="lazy"
              />
              <h3 className="font-semibold text-[20px] leading-[1.5] text-[#1d1e21] text-center mb-[16px]">
                {review.name}
              </h3>
              <p className="font-normal text-[16px] leading-[1.25] text-[#93939a] text-center">
                {review.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
