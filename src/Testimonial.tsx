import { useState, useEffect } from "react";

interface TestimonialData {
  name: string;
  role: string;
  image: string;
  message: string;
}

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);

  // Simulate API call or data fetching
  useEffect(() => {
    setTimeout(() => {
      setTestimonials([
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
      ]);
    }, 1000); // Simulated delay
  }, []);

  // Handle case when testimonials are still loading or empty
  if (!testimonials || testimonials.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#6b7280" }}>
        Loading testimonials...
      </p>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "24px",
        padding: "24px",
      }}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          style={{
            maxWidth: "320px",
            padding: "24px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Profile Image */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Name & Role */}
            <h3
              style={{ fontSize: "20px", fontWeight: "600", marginTop: "16px" }}
            >
              {testimonial.name}
            </h3>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              {testimonial.role}
            </p>

            {/* Testimonial Message */}
            <p
              style={{
                marginTop: "16px",
                color: "#374151",
                fontStyle: "italic",
              }}
            >
              "{testimonial.message}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
