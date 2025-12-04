import React from "react";
import popularCourseImg from "../../../assets/img/popular-course-img.png"
import { PopularCourseCard } from "../../../components/PopularCourseCard/PopularCourseCard";

export const PopularCoursesSection = () => {
    return (
        <section className="flex grow-0 shrink-0 flex-col w-full items-start gap-5 px-0 py-[30px] relative flex-[0_0_auto] bg-gray-50">
            <header className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative w-fit font-h3 text-3xl font-bold text-black">
                    Các khóa học phổ biến
                </h2>

                <p className="relative w-fit font-body text-xl">
                    Những khóa học có nhiều người đăng ký nhất tháng này
                </p>
            </header>

            <div className="flex flex-row justify-center gap-[30px] p-2.5 relative self-stretch w-full">
                <PopularCourseCard
                    courseImgSource={popularCourseImg}
                    courseName={"Thiết kế và xây dựng website"}
                    courseDescription={"Học về HTLM, CSS, JavaScript, PHP, MySQL và hơn thế nữa"}
                    coursePrice={"250.000"}
                    courseStar={4.9}
                    courseInstructor={"Tran Abc Def"}
                    courseTagType={1}
                />

                <PopularCourseCard
                    courseImgSource={popularCourseImg}
                    courseName={"Thiết kế và xây dựng website"}
                    courseDescription={"Học về HTLM, CSS, JavaScript, PHP, MySQL và hơn thế nữa"}
                    coursePrice={"250.000"}
                    courseStar={4.9}
                    courseInstructor={"Tran Abc Def"}
                    courseTagType={1}
                />

                <PopularCourseCard
                    courseImgSource={popularCourseImg}
                    courseName={"Thiết kế và xây dựng website"}
                    courseDescription={"Học về HTLM, CSS, JavaScript, PHP, MySQL và hơn thế nữa"}
                    coursePrice={"250.000"}
                    courseStar={4.9}
                    courseInstructor={"Tran Abc Def"}
                    courseTagType={1}
                />
            </div>
        </section>
    );
};
