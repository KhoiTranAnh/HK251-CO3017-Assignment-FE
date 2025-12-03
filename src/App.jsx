import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FrontPage } from "./pages/FrontPage/FrontPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { CourseDetail } from "./pages/CourseDetail/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:courseId" element={<Navigate to="overview" replace />} />
          <Route path="/course/:courseId/:tab" element={<CourseDetail />} />
          <Route path="/front" element={<FrontPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
