const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Acme Corp",
      image:
        "https://cdn.toon-crafter.com/user/clx4f6fg50000922l3qdw6hy8/20241213/cm4m2kj1v0001dochqivzvz0a_0.jpg",
      message: "This service is absolutely amazing! Highly recommended.",
    },
    {
      name: "Jane Smith",
      role: "Marketing Manager, Tech Ltd",
      image:
        "https://cdn.toon-crafter.com/user/clx4f6fg50000922l3qdw6hy8/20241213/cm4m2kj1v0001dochqivzvz0a_0.jpg",
      message: "A game-changer for our business. Fantastic experience!",
    },
    {
      name: "Samuel Green",
      role: "Freelancer",
      image:
        "https://cdn.toon-crafter.com/user/clx4f6fg50000922l3qdw6hy8/20241213/cm4m2kj1v0001dochqivzvz0a_0.jpg",
      message: "Superb quality and great support. Five stars!",
    },
  ];
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <div
          className="max-w-md p-6 shadow-lg rounded-2xl bg-white text-center"
          key={index}
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <div className="flex mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.188 3.674a1 1 0 00.95.69h3.863c.969 0 1.371 1.24.588 1.81l-3.127 2.268a1 1 0 00-.364 1.118l1.188 3.674c.3.921-.755 1.688-1.54 1.118l-3.127-2.268a1 1 0 00-1.176 0l-3.127 2.268c-.784.57-1.838-.197-1.54-1.118l1.188-3.674a1 1 0 00-.364-1.118L2.36 9.101c-.783-.57-.38-1.81.588-1.81h3.863a1 1 0 00.95-.69l1.188-3.674z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-gray-700 italic">"{testimonial.message}"</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonial;
