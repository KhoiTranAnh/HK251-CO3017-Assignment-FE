import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseService } from "../../../services/mock/courseService";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { LectureModal } from "../../../components/Modal/LectureModal";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  // UI State for Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
  const [activeChapterId, setActiveChapterId] = useState(null);

  // UX States
  const [expandedChapters, setExpandedChapters] = useState({});
  const [editingChapterId, setEditingChapterId] = useState(null);
  const [editChapterTitle, setEditChapterTitle] = useState("");

  // Delete Dialog
  const [deleteChapterId, setDeleteChapterId] = useState(null);

  // Status Dropdown
  const [statusDropdownId, setStatusDropdownId] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await courseService.getCourseById(courseId);
        if (data) {
          setCourse(data);
          setChapters(data.chapters || []);
          // Expand all by default
          const expanded = {};
          (data.chapters || []).forEach((c) => (expanded[c.chapter_id] = true));
          setExpandedChapters(expanded);
        }
      } catch (error) {
        console.error("Failed to fetch course", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  // Handlers
  const toggleExpand = (id) => {
    setExpandedChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddChapter = async () => {
    try {
      const newChapter = await courseService.addChapter(courseId, {
        title: "New Chapter",
        status: "Published",
      });
      setChapters([...chapters, newChapter]);
      setExpandedChapters((prev) => ({
        ...prev,
        [newChapter.chapter_id]: true,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  // Edit Chapter Name
  const startEditChapter = (chapter) => {
    setEditingChapterId(chapter.chapter_id);
    setEditChapterTitle(chapter.title);
  };

  const saveEditChapter = async () => {
    try {
      await courseService.updateChapter(courseId, editingChapterId, {
        title: editChapterTitle,
      });
      setChapters((prev) =>
        prev.map((c) =>
          c.chapter_id === editingChapterId
            ? { ...c, title: editChapterTitle }
            : c
        )
      );
      setEditingChapterId(null);
    } catch (e) {
      console.error(e);
    }
  };

  // Delete Chapter
  const confirmDeleteChapter = async () => {
    if (!deleteChapterId) return;
    // Mock delete - locally remove
    setChapters((prev) => prev.filter((c) => c.chapter_id !== deleteChapterId));
    setDeleteChapterId(null);
  };

  // Status Toggle
  const changeStatus = async (chapterId, newStatus) => {
    try {
      await courseService.updateChapter(courseId, chapterId, {
        status: newStatus,
      });
      setChapters((prev) =>
        prev.map((c) =>
          c.chapter_id === chapterId ? { ...c, status: newStatus } : c
        )
      );
      setStatusDropdownId(null);
    } catch (e) {
      console.error(e);
    }
  };

  // Lesson Handlers
  const handleOpenAddLesson = (chapterId) => {
    setActiveChapterId(chapterId);
    setEditingLesson(null);
    setModalOpen(true);
  };

  const handleOpenEditLesson = (chapterId, lesson) => {
    if (lesson.type === "quiz") {
      // Navigate to Quiz Wizard for editing.
      // In a real app we would pass the quiz ID.
      // For this mock, we'll navigate to the "new" route but we really should likely have an edit route.
      // However, the user request says "click 'Chỉnh sửa bài kiểm tra' then show steps with field filled".
      // We will simulate this by passing state or just navigating to the same route and handling it there if we had IDs.
      // Since we don't have persistent quizzes with IDs in this simple mock that the Wizard can fetch from
      // (Wizard state is local), we might face an issue where it resets.
      // BUT, for now let's route to the wizard.
      navigate(`/instructor/courses/${courseId}/quiz/new`, {
        state: { quizData: lesson },
      });
    } else {
      setActiveChapterId(chapterId);
      setEditingLesson(lesson);
      setModalOpen(true);
    }
  };

  const handleDeleteLesson = async (chapterId, lessonId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      try {
        // Mock delete
        setChapters((prev) =>
          prev.map((c) => {
            if (c.chapter_id !== chapterId) return c;
            return {
              ...c,
              lessons: c.lessons.filter((l) => l.lesson_id !== lessonId),
            };
          })
        );
        // In real app, call API
        // await courseService.deleteLesson(chapterId, lessonId);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleSaveLesson = async (chapterId, lessonData) => {
    try {
      if (editingLesson) {
        // UPDATE
        await courseService.updateLesson(chapterId, editingLesson.lesson_id, {
          title: lessonData.title,
          resource: lessonData.resource,
          supplementaryMaterial: lessonData.supplementaryMaterial, // Ensure this is passed
        });
      } else {
        // ADD
        await courseService.addLesson(chapterId, {
          title: lessonData.title,
          duration: "0m",
          type: "video",
          supplementaryMaterial: lessonData.supplementaryMaterial, // Ensure this is passed
        });
      }
      // Refresh data
      const data = await courseService.getCourseById(courseId);
      setChapters(data.chapters);
      setModalOpen(false);
    } catch (error) {
      console.error("Failed to save lesson", error);
    }
  };

  const handleAddQuiz = (chapterId) => {
    // Navigate to Wizard
    navigate(`/instructor/courses/${courseId}/quiz/new`);
  };

  // Icons helper
  const getLessonIcon = (type) => {
    if (type === "video")
      return <VideocamIcon className="text-purple-500" fontSize="small" />;
    if (type === "pdf")
      return <PictureAsPdfIcon className="text-red-500" fontSize="small" />;
    if (type === "quiz")
      return <QuizIcon className="text-blue-500" fontSize="small" />;
    if (type === "submission")
      return <AssignmentIcon className="text-green-500" fontSize="small" />;
    return <DescriptionIcon className="text-gray-500" fontSize="small" />;
  };

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found</div>;

  const breadcrumbs = [
    { label: course.title, link: "/instructor/dashboard" },
    { label: "Tài liệu học tập" },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header Section */}
      <div className="mb-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Cấu trúc môn học & tài liệu học tập
        </h1>
        <p className="text-gray-500 text-sm">
          {course.title} - {course.course_id.split("-")[0]}-401
        </p>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddChapter}
          className="bg-[#3B82F6] hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
        >
          Thêm chương mới
        </button>
      </div>

      {/* Chapters List */}
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.chapter_id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            {/* Chapter Header */}
            <div
              className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(chapter.chapter_id)}
            >
              <div className="flex items-center gap-3">
                <ExpandMoreIcon
                  className={`text-gray-400 transition-transform ${
                    expandedChapters[chapter.chapter_id] ? "" : "-rotate-90"
                  }`}
                />
                <div onClick={(e) => e.stopPropagation()}>
                  {editingChapterId === chapter.chapter_id ? (
                    <div className="flex items-center gap-2">
                      <input
                        className="border border-blue-500 rounded px-2 py-1 text-sm font-bold text-gray-800"
                        value={editChapterTitle}
                        onChange={(e) => setEditChapterTitle(e.target.value)}
                        autoFocus
                      />
                      <button
                        onClick={saveEditChapter}
                        className="text-green-600 hover:bg-green-100 p-1 rounded"
                      >
                        <CheckIcon fontSize="small" />
                      </button>
                      <button
                        onClick={() => setEditingChapterId(null)}
                        className="text-red-500 hover:bg-red-100 p-1 rounded"
                      >
                        <CloseIcon fontSize="small" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-800 text-lg">
                        Chapter {index + 1}: {chapter.title}
                      </h3>
                      <button
                        onClick={() => startEditChapter(chapter)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <EditIcon fontSize="small" style={{ fontSize: 18 }} />
                      </button>
                      <button
                        onClick={() => setDeleteChapterId(chapter.chapter_id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <DeleteIcon fontSize="small" style={{ fontSize: 18 }} />
                      </button>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-0.5">
                    {chapter.lessons?.length || 0} Bài giảng • 0 Bài kiểm tra •
                    0 Bài nộp
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-gray-500 text-sm">Trạng thái</span>
                <button
                  onClick={() =>
                    setStatusDropdownId(
                      statusDropdownId === chapter.chapter_id
                        ? null
                        : chapter.chapter_id
                    )
                  }
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold
                                        ${
                                          chapter.status === "Draft"
                                            ? "bg-gray-200 text-gray-700"
                                            : "bg-green-100 text-green-700"
                                        }
                                    `}
                >
                  {chapter.status === "Draft" ? (
                    <VisibilityOffIcon
                      fontSize="small"
                      style={{ fontSize: 16 }}
                    />
                  ) : (
                    <VisibilityIcon fontSize="small" style={{ fontSize: 16 }} />
                  )}
                  {chapter.status === "Draft" ? "Riêng tư" : "Công khai"}
                  <ExpandMoreIcon style={{ fontSize: 16 }} />
                </button>

                {statusDropdownId === chapter.chapter_id && (
                  <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 z-10 py-1">
                    <button
                      onClick={() =>
                        changeStatus(chapter.chapter_id, "Published")
                      }
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-green-700"
                    >
                      <VisibilityIcon fontSize="small" /> Công khai
                    </button>
                    <button
                      onClick={() => changeStatus(chapter.chapter_id, "Draft")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                    >
                      <VisibilityOffIcon fontSize="small" /> Riêng tư
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Lessons List */}
            {expandedChapters[chapter.chapter_id] && (
              <div>
                {chapter.lessons &&
                  chapter.lessons.map((lesson) => (
                    <div
                      key={lesson.lesson_id}
                      className="p-4 flex items-center justify-between border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getLessonIcon(lesson.type)}
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {lesson.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {lesson.type === "video"
                              ? "Video"
                              : lesson.type === "quiz"
                              ? "Quiz"
                              : "Document"}{" "}
                            • {lesson.duration || "15 mins"}{" "}
                            {lesson.total_questions
                              ? ` • ${lesson.total_questions} Questions`
                              : ""}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleOpenEditLesson(chapter.chapter_id, lesson)
                          }
                          className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-medium transition-colors"
                        >
                          <EditIcon fontSize="small" style={{ fontSize: 16 }} />
                          {lesson.type === "quiz"
                            ? "Chỉnh sửa bài kiểm tra"
                            : "Chỉnh sửa bài giảng"}
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteLesson(
                              chapter.chapter_id,
                              lesson.lesson_id
                            )
                          }
                          className="p-1.5 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                        >
                          <DeleteIcon
                            fontSize="small"
                            style={{ fontSize: 18 }}
                          />
                        </button>
                      </div>
                    </div>
                  ))}

                <div className="p-4 flex flex-wrap gap-2 bg-white">
                  <button
                    onClick={() => handleOpenAddLesson(chapter.chapter_id)}
                    className="flex items-center gap-1 px-4 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <DescriptionIcon fontSize="small" />
                    Thêm bài giảng
                  </button>
                  <button
                    onClick={() => handleAddQuiz(chapter.chapter_id)}
                    className="flex items-center gap-1 px-4 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <QuizIcon fontSize="small" />
                    Thêm bài kiểm tra
                  </button>
                  <button className="flex items-center gap-1 px-4 py-2 bg-[#3B82F6] hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                    <AssignmentIcon fontSize="small" />
                    Thêm bài nộp
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modals */}
      <LectureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveLesson}
        initialData={editingLesson}
        chapterId={activeChapterId}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteChapterId} onClose={() => setDeleteChapterId(null)}>
        <DialogTitle>Xóa chương</DialogTitle>
        <DialogContent>
          Bạn có chắc chắn muốn xóa chương này không? Hành động này không thể
          hoàn tác.
        </DialogContent>
        <DialogActions>
          <button
            onClick={() => setDeleteChapterId(null)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Hủy
          </button>
          <button
            onClick={confirmDeleteChapter}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Xóa
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CourseDetail;
