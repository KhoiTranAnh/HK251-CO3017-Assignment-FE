import React from "react";
import { TestimonialCard } from "../../../components/TestimonialCard/TestimonialCard";



export const TestimonialsSection = () => {
    const testimonialsData = [
        {
            id: 1,
            rating: 5,
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel ligula at eros auctor accumsan a at urna. Integer sed purus quis dui varius tristique. Aliquam viverra eget neque quis scelerisque.",
            name: "Firstname Lastname",
            course: "Student's course",
        },
        {
            id: 2,
            rating: 5,
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel ligula at eros auctor accumsan a at urna. Integer sed purus quis dui varius tristique. Aliquam viverra eget neque quis scelerisque.",
            name: "Firstname Lastname",
            course: "Student's course",
        },
        {
            id: 3,
            rating: 5,
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel ligula at eros auctor accumsan a at urna. Integer sed purus quis dui varius tristique. Aliquam viverra eget neque quis scelerisque.",
            name: "Firstname Lastname",
            course: "Student's course",
        },
    ];

    return (
        <section className="flex flex-col w-full items-start gap-5 px-0 py-[30px] relative flex-[0_0_auto] bg-white">
            <header className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative w-fit font-h3 text-3xl font-bold text-black">
                    Xem những người khác đang đạt được gì thông qua học tập
                </h2>
            </header>

            <div className="flex flex-row justify-center gap-[30px] p-2.5 relative self-stretch w-full">
                {/* {testimonialsData.map((testimonial) => { <TestimonialCard key={testimonial.id} rating={testimonial.rating} comment={testimonial.comment} studentCourse={testimonial.course} studentName={testimonial.name} /> })} */}
                <TestimonialCard key={testimonialsData[0].id} rating={testimonialsData[0].rating} comment={testimonialsData[0].comment} studentCourse={testimonialsData[0].course} studentName={testimonialsData[0].name} />
                <TestimonialCard key={testimonialsData[0].id} rating={testimonialsData[0].rating} comment={testimonialsData[0].comment} studentCourse={testimonialsData[0].course} studentName={testimonialsData[0].name} />
                <TestimonialCard key={testimonialsData[0].id} rating={testimonialsData[0].rating} comment={testimonialsData[0].comment} studentCourse={testimonialsData[0].course} studentName={testimonialsData[0].name} />
            </div>
        </section>
    );
};
