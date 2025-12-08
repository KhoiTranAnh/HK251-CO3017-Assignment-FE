import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FrontPage } from "../pages/FrontPage/FrontPage";

// Placeholder for lazy loaded components
const InstructorDashboard = React.lazy(() =>
  import("../pages/Instructor/Dashboard/InstructorDashboard")
);
const InstructorCourseDetail = React.lazy(() =>
  import("../pages/Instructor/CourseDetail/CourseDetail")
);
const InstructorLayout = React.lazy(() =>
  import("../layouts/InstructorLayout")
);
const QuizWizard = React.lazy(() =>
  import("../pages/Instructor/Quiz/QuizWizard")
);
const StudentDashboard = React.lazy(() =>
  import("../pages/Dashboard/Dashboard")
);
const StudentCourseDetail = React.lazy(() =>
  import("../pages/CourseDetail/CourseDetail")
);

export const AppRoutes = () => {
  return (
    <React.Suspense fallback={<div className="p-4">Loading...</div>}>
      <Routes>
        <Route path="/" element={<FrontPage />} />

        {/* Instructor Routes */}
        <Route path="/instructor" element={<InstructorLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<InstructorDashboard />} />
          <Route path="courses/:courseId" element={<InstructorCourseDetail />} />
          <Route path="courses/:courseId/quiz/new" element={<QuizWizard />} />
        </Route>

        <Route path="/student" element={<StudentDashboard />}>
          <Route path="dashboard" element={<StudentDashboard />} />
        </Route>

        <Route path="/student/courses/:courseId" element={<StudentCourseDetail />} />
        <Route path="/student/courses/:courseId/:tab" element={<StudentCourseDetail />} />


        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </React.Suspense>
  );
};
