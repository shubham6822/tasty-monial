import { useState, useEffect } from "react";
import { Star, Users } from "lucide-react";
import { useFetchTestimonial } from "../hooks/useFetchTestimonial";
import LoadingSkeleton from "./components/LoadingSkeleton";

export interface TestimonialData {
  name: string;
  role: string;
  image: string;
  message: string;
  rating: number;
}

interface TestimonialProps {
  apiKey: string;
}

const Testimonial = ({ apiKey }: TestimonialProps) => {
  const { testimonials, isLoading, error } = useFetchTestimonial(apiKey);
  if (!testimonials || testimonials.length === 0 || isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "3rem",
        padding: "5rem",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      }}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #e5e7eb",
            background: "#ffffff",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            width: "350px",
            height: "300px",
          }}
        >
          <div
            style={{ display: "flex", color: "#fbbf24", marginBottom: "1rem" }}
          >
            <Star style={{ fill: "#fbbf24" }} />
            <Star style={{ fill: "#fbbf24" }} />
            <Star style={{ fill: "#fbbf24" }} />
            <Star style={{ fill: "#fbbf24" }} />
            <Star style={{ fill: "#fbbf24" }} />
          </div>
          <p
            style={{
              fontStyle: "italic",
              color: "#6b7280",
              marginBottom: "1rem",
            }}
          >
            &quot;TastyMonial has completely transformed how we collect and
            showcase client feedback. The setup was incredibly easy, and our
            conversion rates have improved by 30%!&quot;
          </p>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "auto" }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(59, 130, 246, 0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Users style={{ color: "blue" }} />
            </div>
            <div style={{ marginLeft: "0.75rem" }}>
              <p style={{ fontWeight: 500, color: "black" }}>Sarah Johnson</p>
              <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                CTO, DevStack
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
