import { TestimonialData } from ".";
export declare function useFetchTestimonial(apiKey: string): {
    testimonials: TestimonialData[];
    isLoading: boolean;
    error: string | null;
};
