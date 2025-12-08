import React, { useEffect, useState } from "react";
import { courseService } from "../../../services/mock/courseService";
import { CourseCard } from "../../../components/CourseCard/CourseCard";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 6; // Adjusted for bigger cards

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseService.getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const paginatedCourses = courses.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(courses.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-8 pb-10">
      {/* Greeting Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Chào bạn, [Họ và tên]
        </h1>
      </div>

      {/* Course Section Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Các khóa học bạn đang dạy
        </h2>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedCourses.map((course) => (
                <div key={course.course_id} className="h-full">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 items-center gap-4">
              <button
                className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
                disabled={page === 1}
                onClick={() => handleChangePage(null, page - 1)}
              >
                ← Previous
              </button>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                color="primary"
                shape="rounded"
                hideNextButton
                hidePrevButton
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontFamily: "inherit",
                    fontWeight: 600,
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#333 !important",
                    color: "#fff",
                  },
                }}
              />
              <button
                className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
                disabled={page === totalPages}
                onClick={() => handleChangePage(null, page + 1)}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InstructorDashboard;
