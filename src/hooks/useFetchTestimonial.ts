import { useEffect, useState } from "react";
import { TestimonialData } from "../Testimonial";

export function useFetchTestimonial(apiKey: string) {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://tasty-monial.vercel.app/api/testimonials",
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        const data = await res.json();
        setTestimonials(data);
        setIsLoading(false);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : String(error) || "An unknown error occurred"
        );
        setIsLoading(false);
        console.error(error);
      }
    };
    fetchTestimonials();
  }, [apiKey]);

  return { testimonials, isLoading, error };
}
