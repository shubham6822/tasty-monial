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
declare const Testimonial: ({ apiKey }: TestimonialProps) => import("react/jsx-runtime").JSX.Element;
export default Testimonial;
