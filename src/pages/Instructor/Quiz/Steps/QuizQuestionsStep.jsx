import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const QuestionItem = ({ question, index, onEdit, onDelete, isReview }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 mb-4 bg-white shadow-sm relative group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-lg text-gray-800">Câu {index + 1}</h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          question.type === "one"
                            ? "bg-green-100 text-green-700"
                            : question.type === "multiple"
                            ? "bg-blue-100 text-blue-700"
                            : question.type === "boolean"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                    `}
          >
            {question.type === "one" && "Chọn 1 đáp án"}
            {question.type === "multiple" && "Chọn nhiều đáp án"}
            {question.type === "boolean" && "Đúng/Sai"}
            {question.type === "short" && "Câu trả lời ngắn"}
          </span>
        </div>
        {!isReview && (
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(index)}
              className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <EditIcon />
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <DeleteIcon />
            </button>
          </div>
        )}
      </div>

      <p className="text-gray-600 mb-4">
        {question.text || "Chưa nhập nội dung câu hỏi"}
      </p>

      {/* Minimal Preview of Options */}
      <div className="space-y-2 pl-4 border-l-2 border-gray-100">
        {question.options &&
          question.options.map((opt, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              {question.type === "one" || question.type === "boolean" ? (
                opt.isCorrect ? (
                  <CheckCircleIcon
                    fontSize="inherit"
                    className="text-green-500"
                  />
                ) : (
                  <RadioButtonUncheckedIcon fontSize="inherit" />
                )
              ) : opt.isCorrect ? (
                <CheckBoxIcon fontSize="inherit" className="text-blue-500" />
              ) : (
                <CheckBoxOutlineBlankIcon fontSize="inherit" />
              )}
              <span
                className={opt.isCorrect ? "font-medium text-gray-800" : ""}
              >
                {opt.text}
              </span>
            </div>
          ))}
        {question.type === "short" && (
          <div className="text-sm bg-gray-50 p-2 rounded text-gray-500 italic">
            Giới hạn độ dài: {question.maxLength || "Không giới hạn"}
          </div>
        )}
      </div>
    </div>
  );
};

const QuestionForm = ({ onSubmit, initialData, onCancel }) => {
  const [qData, setQData] = useState(
    initialData || {
      type: "one", // one, multiple, boolean, short
      text: "",
      image: null,
      options: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
      // For short answer
      maxLength: "",
    }
  );

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...qData.options];
    newOptions[index] = { ...newOptions[index], [field]: value };

    // Logic for single choice: only one correct
    if (
      field === "isCorrect" &&
      value === true &&
      (qData.type === "one" || qData.type === "boolean")
    ) {
      newOptions.forEach((opt, i) => {
        if (i !== index) opt.isCorrect = false;
      });
    }
    setQData({ ...qData, options: newOptions });
  };

  const addOption = () => {
    setQData({
      ...qData,
      options: [...qData.options, { text: "", isCorrect: false }],
    });
  };

  const removeOption = (index) => {
    setQData({
      ...qData,
      options: qData.options.filter((_, i) => i !== index),
    });
  };

  const handleTypeChange = (type) => {
    let newOptions = qData.options;
    if (type === "boolean") {
      newOptions = [
        { text: "Đúng", isCorrect: true }, // Default
        { text: "Sai", isCorrect: false },
      ];
    } else if (qData.type === "boolean" && type !== "boolean") {
      // Reset to 4 empty options if switching away from boolean
      newOptions = [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ];
    }
    setQData({ ...qData, type, options: newOptions });
  };

  return (
    <div className="border-2 border-blue-500 rounded-xl p-6 bg-white shadow-lg mb-8 animate-fade-in-up">
      <h3 className="font-bold text-xl mb-6">Câu hỏi mới</h3>

      {/* Type Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Chọn loại câu hỏi
        </label>
        <div className="flex flex-wrap gap-2">
          {["one", "multiple", "boolean", "short"].map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                qData.type === type
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {type === "one" && "Chọn một đáp án"}
              {type === "multiple" && "Chọn nhiều đáp án"}
              {type === "boolean" && "Đúng/Sai"}
              {type === "short" && "Câu trả lời ngắn"}
            </button>
          ))}
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Câu hỏi
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập câu hỏi"
          value={qData.text}
          onChange={(e) => setQData({ ...qData, text: e.target.value })}
        />
      </div>

      {/* Image Placeholder */}
      <div className="mb-8 flex justify-center">
        <div className="w-64 h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
          {/* Icon placeholder like design */}
          <div className="w-16 h-16 bg-gray-200 rounded-lg mb-2"></div>
          <button className="px-4 py-2 bg-[#3B82F6] text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors flex items-center gap-2">
            <CloudUploadIcon fontSize="small" /> Tải lên hình ảnh liên quan
          </button>
        </div>
      </div>

      {/* Options Area */}
      {qData.type !== "short" && (
        <div className="space-y-3 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Các lựa chọn cho câu hỏi
          </label>
          {qData.options.map((option, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {/* Selector (Radio/Checkbox) */}
              <div
                className="cursor-pointer text-gray-400 hover:text-gray-600"
                onClick={() =>
                  handleOptionChange(idx, "isCorrect", !option.isCorrect)
                }
              >
                {qData.type === "one" || qData.type === "boolean" ? (
                  option.isCorrect ? (
                    <CheckCircleIcon className="text-black" />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )
                ) : option.isCorrect ? (
                  <CheckBoxIcon className="text-black" />
                ) : (
                  <CheckBoxOutlineBlankIcon />
                )}
              </div>

              {/* Input */}
              <input
                type="text"
                className={`flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
                                     ${
                                       option.isCorrect
                                         ? "border-green-500 bg-green-50"
                                         : "border-gray-300"
                                     }
                                `}
                placeholder={
                  qData.type === "boolean"
                    ? idx === 0
                      ? "Đúng"
                      : "Sai"
                    : `Nhập nội dung lựa chọn ${idx + 1}`
                }
                value={option.text}
                onChange={(e) =>
                  handleOptionChange(idx, "text", e.target.value)
                }
                readOnly={qData.type === "boolean"} // Fixed text for boolean
              />

              {/* Delete Action (Except Boolean) */}
              {qData.type !== "boolean" && (
                <button
                  onClick={() => removeOption(idx)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 w-8 h-8 flex items-center justify-center"
                >
                  <DeleteIcon style={{ fontSize: 16 }} />
                </button>
              )}
            </div>
          ))}

          {/* Add Option Button */}
          {qData.type !== "boolean" && (
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Nhập nội dung lựa chọn mới"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 opacity-50 cursor-not-allowed"
                disabled
              />
              <button
                onClick={addOption}
                className="px-4 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                Thêm lựa chọn
              </button>
            </div>
          )}

          <p className="mt-2 text-sm text-green-700 font-medium">
            Lựa chọn đúng:{" "}
            {qData.options
              .filter((o) => o.isCorrect)
              .map((o) => o.text)
              .join(", ") || "Chưa chọn"}
          </p>
        </div>
      )}

      {qData.type === "short" && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Giới hạn độ dài
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Nhập độ dài tối đa cho câu trả lời. Bỏ trống nếu không đặt giới hạn"
            value={qData.maxLength}
            onChange={(e) => setQData({ ...qData, maxLength: e.target.value })}
          />
        </div>
      )}

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
        <button
          onClick={onCancel}
          className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg"
        >
          Hủy
        </button>
        <button
          onClick={() => onSubmit(qData)}
          className="px-6 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white font-medium rounded-lg"
        >
          {initialData ? "Cập nhật câu hỏi" : "Lưu câu hỏi"}
        </button>
      </div>
    </div>
  );
};

const QuizQuestionsStep = ({ data, onChange, onNext, onBack, isReview }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);

  const questions = data.questions || [];

  const handleAddQuestion = (newQuestion) => {
    if (editingIndex >= 0) {
      const updated = [...questions];
      updated[editingIndex] = newQuestion;
      onChange((prev) => ({ ...prev, questions: updated }));
      setEditingIndex(-1);
    } else {
      onChange((prev) => ({ ...prev, questions: [...questions, newQuestion] }));
    }
    setIsAdding(false);
  };

  const handleDelete = (index) => {
    const updated = questions.filter((_, i) => i !== index);
    onChange((prev) => ({ ...prev, questions: updated }));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setIsAdding(true);
    // Scroll to form?
  };

  return (
    <div>
      {/* List Existing Questions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Danh sách câu hỏi ({questions.length})
        </h2>
        {questions.length === 0 && !isAdding && (
          <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-gray-500">
            Chưa có câu hỏi nào. Hãy thêm câu hỏi mới.
          </div>
        )}
        {questions.map((q, i) =>
          // Hide item if currently editing it (it will be shown in form)
          isAdding && editingIndex === i ? null : (
            <QuestionItem
              key={i}
              index={i}
              question={q}
              onEdit={handleEdit}
              onDelete={() => handleDelete(i)}
              isReview={isReview}
            />
          )
        )}
      </div>

      {/* Add/Edit Form */}
      {isAdding && (
        <QuestionForm
          onSubmit={handleAddQuestion}
          onCancel={() => {
            setIsAdding(false);
            setEditingIndex(-1);
          }}
          initialData={editingIndex >= 0 ? questions[editingIndex] : null}
        />
      )}

      {/* Add Button */}
      {!isAdding && !isReview && (
        <button
          onClick={() => setIsAdding(true)}
          className="w-full py-4 border-2 border-dashed border-blue-300 bg-blue-50 text-blue-600 rounded-xl font-bold hover:bg-blue-100 transition-colors mb-8 flex items-center justify-center gap-2"
        >
          <span className="text-2xl">+</span> Thêm câu hỏi mới
        </button>
      )}

      {/* Actions */}
      <div className="flex justify-start gap-4 pt-6 border-t border-gray-200">
        <button
          onClick={onNext}
          className="px-6 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          {isReview ? "Lưu bài kiểm tra" : "Tiếp tục: Kiểm tra tổng quan"}
        </button>
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
        >
          Quay lại
        </button>
        {!isReview && (
          <button className="px-6 py-2 bg-[#EF4444] hover:bg-red-600 text-white font-medium rounded-lg transition-colors">
            Hủy bỏ
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestionsStep;
