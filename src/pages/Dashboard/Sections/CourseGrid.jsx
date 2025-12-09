import { CourseCard } from '../Components/CourseCard';
import { Pagination } from '../Components/Pagination';
import popularCourseImg from "../../../assets/img/popular-course-img.png";

export const CourseGrid = ({ courses, currentPage, totalPages, onPageChange }) => {
    // Hiển thị 3 courses mỗi trang
    const coursesPerPage = 3;
    const startIndex = (currentPage - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const currentCourses = courses.slice(startIndex, endIndex);

    return (
        <section className="flex flex-col w-full gap-5 px-[50px] py-[30px] bg-gray-50">
            <h2 className="text-2xl font-bold text-black">
                Các khóa học của bạn
            </h2>

            <div className="grid grid-cols-3 gap-[30px]">
                {currentCourses.map((course) => (
                    <CourseCard
                        key={course.courseId}
                        courseId={course.courseId}
                        courseImgSource={popularCourseImg}
                        courseName={course.title}
                        courseDescription={course.description}
                        courseInstructor={"Abc Def Ghi"}
                        courseStar={5}
                        courseTag={course.category}
                        courseDuration={12}
                        progress={0}
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            )}
        </section>
    );
};
