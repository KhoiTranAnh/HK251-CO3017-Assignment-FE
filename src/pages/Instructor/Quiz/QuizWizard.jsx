import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Stepper from "../../../components/Stepper/Stepper";
import QuizInfoStep from "./Steps/QuizInfoStep";
import QuizQuestionsStep from "./Steps/QuizQuestionsStep";
import QuizReviewStep from "./Steps/QuizReviewStep"; // New component
import { courseService } from "../../../services/mock/courseService";

const QuizWizard = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);

  const [quizData, setQuizData] = useState({
    title: "",
    durationHours: "",
    durationMinutes: "",
    scoringMethod: "Chia đều tổng điểm cho số câu hỏi",
    totalPoints: 100,
    openTime: { date: "", time: "" },
    closeTime: { date: "", time: "" },
    attempts: 1,
    gradeMethod: "Tính theo điểm cao nhất",
    allowReview: true,
    questions: [],
  });

  useEffect(() => {
    if (location.state && location.state.quizData) {
      // If editing, load data.
      // Note: The structure might need adaptation depending on what 'lesson' object looks like vs 'quizData'
      // For this mock, we assume they are compatible or we merge carefully.
      setQuizData((prev) => ({ ...prev, ...location.state.quizData }));
    }
  }, [location.state]);

  const steps = [
    { label: "Thông tin về bài kiểm tra" },
    { label: "Thêm câu hỏi cho bài kiểm tra" },
    { label: "Kiểm tra tổng quan và lưu" },
  ];

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSaveQuiz = async () => {
    try {
      const course = await courseService.getCourseById(courseId);
      const targetChapterId = course.chapters[0]?.chapter_id;

      if (targetChapterId) {
        // If editing (we might want to update instead of add, but mock service only has addQuiz mostly visible)
        // For now, assume add new for simplicity unless we add updateQuiz
        await courseService.addQuiz(targetChapterId, quizData);
        navigate(`/instructor/courses/${courseId}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-20 pt-6">
      <div className="mb-6">
        <p className="text-gray-500 text-sm mb-1">
          Dashboard &gt; Thiết kế và xây dựng website &gt; Tài liệu học tập &gt;{" "}
          <span className="text-blue-600 font-medium">Thêm bài kiểm tra</span>
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Advanced Web Design - WBD-401
        </h1>
        <p className="text-gray-500">
          Tạo bài kiểm tra cho chương 1: Introduction to Design Principles
        </p>
      </div>

      <Stepper activeStep={activeStep} steps={steps} />

      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        {activeStep === 0 && (
          <QuizInfoStep
            data={quizData}
            onChange={setQuizData}
            onNext={handleNext}
          />
        )}
        {activeStep === 1 && (
          <QuizQuestionsStep
            data={quizData}
            onChange={setQuizData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {activeStep === 2 && (
          <QuizReviewStep
            data={quizData}
            onSave={handleSaveQuiz}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default QuizWizard;
