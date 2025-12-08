import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FrontPage } from "../pages/FrontPage/FrontPage";

// Placeholder for lazy loaded components
const InstructorDashboard = React.lazy(() =>
  import("../pages/Instructor/Dashboard/InstructorDashboard")
);
const CourseDetail = React.lazy(() =>
  import("../pages/Instructor/CourseDetail/CourseDetail")
);
const InstructorLayout = React.lazy(() =>
  import("../layouts/InstructorLayout")
);
const QuizWizard = React.lazy(() =>
  import("../pages/Instructor/Quiz/QuizWizard")
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
          <Route path="courses/:courseId" element={<CourseDetail />} />
          <Route
            path="courses/:courseId/quiz/new"
            element={<QuizWizard />}
          />{" "}
          {/* New Route */}
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </React.Suspense>
  );
};
