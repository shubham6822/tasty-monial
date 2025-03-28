export interface TestimonialData {
    _id: string;
    name: string;
    message: string;
    email: string;
    rating: number;
    date: string;
    projectId: string;
    title: string;
    company: string;
    socialLinks: string[];
    image: string;
    video: string;
    profession: string;
    createdAt: string;
    updatedAt: string;
}
interface TestimonialProps {
    apiKey: string;
}
declare const Testimonial: ({ apiKey }: TestimonialProps) => import("react/jsx-runtime").JSX.Element;
export default Testimonial;
