import React from "react";
import { FooterSection } from "./Sections/FooterSection";
import { HeaderSection } from "./Sections/HeaderSection";
import { MainContentSection } from "./Sections/MainContentSection";
import { PopularCoursesSection } from "./Sections/PopularCoursesSection";
import { TestimonialsSection } from "./Sections/TestimonialsSection";

export const FrontPage = () => {
    return (
        <div className="flex flex-col items-start relative bg-[#ffffff]">
            <HeaderSection />
            <MainContentSection />
            <PopularCoursesSection />
            <TestimonialsSection />
            <FooterSection />
        </div>
    );
};
