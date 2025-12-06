import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuizInfoStep = ({ data, onChange, onNext }) => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    onChange((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    navigate(`/instructor/courses/${courseId}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên bài kiểm tra
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Nhập tên bài kiểm tra"
              value={data.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cách tính điểm cho mỗi câu hỏi
            </label>
            <select
              className="w-full bg-black text-white rounded-lg px-4 py-2 focus:outline-none"
              value={data.scoringMethod}
              onChange={(e) => handleChange("scoringMethod", e.target.value)}
            >
              <option value="Chia đều tổng điểm cho số câu hỏi">
                Chia đều tổng điểm cho số câu hỏi
              </option>
              <option value="Giảng viên tự gán điểm">
                Giảng viên tự gán điểm
              </option>
            </select>
            <p className="text-xs text-gray-500 mt-1 bg-gray-100 p-2 rounded inline-block">
              Giảng viên tự gán điểm cho từng câu hỏi
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời gian mở bài kiểm tra
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="DD"
                className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
              <input
                type="text"
                placeholder="MM"
                className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
              <input
                type="text"
                placeholder="DD"
                className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
              <input
                type="text"
                placeholder="MM"
                className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
              <input
                type="text"
                placeholder="YYYY"
                className="w-24 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số lượt làm bài của mỗi học viên
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 4, 8].map((num) => (
                <button
                  key={num}
                  onClick={() => handleChange("attempts", num)}
                  className={`w-10 h-10 rounded font-bold transition-colors ${
                    data.attempts === num
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handleChange("attempts", "Unlimited")}
                className={`px-3 py-2 rounded font-medium transition-colors ${
                  data.attempts === "Unlimited"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Không giới hạn
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cho phép xem lại bài kiểm tra sau khi hoàn thành
            </label>
            <div
              className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
                data.allowReview ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => handleChange("allowReview", !data.allowReview)}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  data.allowReview ? "left-7" : "left-1"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời gian làm bài
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="HH"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={data.durationHours}
                onChange={(e) => handleChange("durationHours", e.target.value)}
              />
              <input
                type="text"
                placeholder="MM"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={data.durationMinutes}
                onChange={(e) =>
                  handleChange("durationMinutes", e.target.value)
                }
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tổng điểm của bài kiểm tra
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Nhập số điểm"
              value={data.totalPoints}
              onChange={(e) => handleChange("totalPoints", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời gian đóng bài kiểm tra
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="DD"
                className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
              <input
                type="text"
                placeholder="MM"
                className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
              <input
                type="text"
                placeholder="DD"
                className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
              <input
                type="text"
                placeholder="MM"
                className="w-16 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
              <input
                type="text"
                placeholder="YYYY"
                className="w-24 border border-gray-300 rounded-lg px-2 py-2 text-center"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cách tính điểm trong trường hợp học viên có nhiều lượt làm bài
            </label>
            <select
              className="w-full bg-black text-white rounded-lg px-4 py-2 focus:outline-none"
              value={data.gradeMethod}
              onChange={(e) => handleChange("gradeMethod", e.target.value)}
            >
              <option value="Tính theo điểm cao nhất">
                Tính theo điểm cao nhất
              </option>
              <option value="Tính theo điểm trung bình">
                Tính theo điểm trung bình
              </option>
            </select>
            <p className="text-xs text-gray-500 mt-1 bg-gray-100 p-2 rounded inline-block">
              Tính theo trung bình điểm giữa các lần làm bài
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-4 pt-6">
        <button
          onClick={onNext}
          className="px-6 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Lưu và sang bước thêm câu hỏi
        </button>
        <button
          onClick={handleCancel}
          className="px-6 py-2 bg-[#EF4444] hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
        >
          Hủy bỏ
        </button>
      </div>
    </div>
  );
};

export default QuizInfoStep;
