import { useState, useEffect } from "react";

interface TestimonialData {
  name: string;
  role: string;
  image: string;
  message: string;
  rating: number;
}

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);

  // Simulate API call or data fetching
  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch(
        "https://tasty-monial.vercel.app/api/testimonials"
      );
      const data = await res.json();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  // Handle case when testimonials are still loading or empty
  if (!testimonials || testimonials.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#6b7280" }}>
        Loading testimonials..
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
            {/* <div
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
            </div> */}

            {/* Name & Role */}
            <div id="stars" style={{ marginTop: "16px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    color: star <= testimonial.rating ? "gold" : "#d1d5db",
                    fontSize: "24px",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              {testimonial.role}
            </p>

            {/* Testimonial Message */}
            <p
              style={{
                marginTop: "16px",
                color: "black",
                fontStyle: "italic",
              }}
            >
              "{testimonial.message}"
            </p>
          </div>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "400",
              marginTop: "16px",
              color: "#4b5563",
            }}
          >
            Name : {testimonial.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
