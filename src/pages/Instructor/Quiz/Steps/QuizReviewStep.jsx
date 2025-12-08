import React from "react";

const QuizReviewStep = ({ data, onSave, onBack }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">
        Kiểm tra tổng quan và lưu
      </h2>

      {/* General Info Summary */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
          Thông tin chung
        </h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Tên bài kiểm tra:</span>
            <span className="font-medium text-gray-900">
              {data.title || "Chưa đặt tên"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Thời gian làm bài:</span>
            <span className="font-medium text-gray-900">
              {data.durationHours || 0} giờ {data.durationMinutes || 0} phút
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tổng điểm:</span>
            <span className="font-medium text-gray-900">
              {data.totalPoints}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Số lượt làm bài:</span>
            <span className="font-medium text-gray-900">
              {data.attempts === "Unlimited" ? "Không giới hạn" : data.attempts}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Cách tính điểm:</span>
            <span className="font-medium text-gray-900">
              {data.scoringMethod}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Xem lại bài:</span>
            <span className="font-medium text-gray-900">
              {data.allowReview ? "Có" : "Không"}
            </span>
          </div>
        </div>
      </div>

      {/* Questions Summary */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
          Danh sách câu hỏi ({data.questions.length})
        </h3>
        {data.questions.map((q, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-4 rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-800">
                Câu {index + 1}: <span className="font-normal">{q.text}</span>
              </h4>
              <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">
                {q.type === "one" && "Single Choice"}
                {q.type === "multiple" && "Multiple Choice"}
                {q.type === "boolean" && "True/False"}
                {q.type === "short" && "Short Answer"}
              </span>
            </div>
            <ul className="pl-5 list-disc text-sm text-gray-600 space-y-1">
              {q.options.map((opt, i) => (
                <li
                  key={i}
                  className={opt.isCorrect ? "text-green-600 font-medium" : ""}
                >
                  {opt.text} {opt.isCorrect && "(Đúng)"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          Quay lại
        </button>
        <button
          onClick={onSave}
          className="px-6 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Lưu bài kiểm tra
        </button>
      </div>
    </div>
  );
};

export default QuizReviewStep;
