import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // Icon for notifications/badges if needed

export const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/instructor/courses/${course.course_id}`);
  };

  // Helper to format mock stats
  const studentCount = "123";
  const avgProgress = "35%";

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full border border-gray-100">
      {/* Card Image */}
      <div className="relative aspect-video bg-gray-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        {/* Notification Badge (Mock from UI) */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm cursor-pointer hover:bg-red-200">
          <ErrorOutlineIcon style={{ fontSize: 16 }} />
          <span>n thông báo</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-[17px] font-bold text-gray-900 mb-2 leading-tight line-clamp-2 min-h-[44px]"
          title={course.title}
        >
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-[40px]">
          {course.description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Mã khóa học</span>
            <span className="text-gray-900 uppercase">
              {course.course_id.split("-")[0]}-401
            </span>{" "}
            {/* Mock suffix */}
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Số lượng học viên</span>
            <span className="text-gray-900">{studentCount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Quá trình học trung bình</span>
            <span className="text-gray-900">{avgProgress}</span>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="mt-auto w-full py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg font-semibold text-sm transition-colors"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};
