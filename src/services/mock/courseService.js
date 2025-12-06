// Mock data generator
const generateCourses = (count) => {
  const courses = [];
  const categories = [
    "Web Development",
    "Data Science",
    "Mobile Dev",
    "UI/UX Design",
    "DevOps",
    "Cybersecurity",
  ];
  const levels = ["Beginner", "Intermediate", "Advanced"];
  const statuses = ["Published", "Draft", "Pending"];

  for (let i = 1; i <= count; i++) {
    courses.push({
      course_id: `CID-${1000 + i}`,
      instructor_id: "INS-001",
      title: `Course ${i}: ${categories[i % categories.length]} Mastery`,
      description: `Comprehensive guide to ${
        categories[i % categories.length]
      } covering all essential topics. This is a generated description for course ${i}.`,
      category: categories[i % categories.length],
      price: (Math.random() * 100 + 20).toFixed(2),
      level: levels[i % levels.length],
      status: statuses[i % statuses.length],
      image: "https://placehold.co/600x400",
      total_lesson: Math.floor(Math.random() * 50) + 10,
      total_duration: `${Math.floor(Math.random() * 40) + 5}h ${Math.floor(
        Math.random() * 60
      )}m`,
      detail: "Detailed course content goes here...",
      created_time: new Date(
        Date.now() - Math.floor(Math.random() * 10000000000)
      ).toISOString(),
      chapters: [
        {
          chapter_id: `CHAP-${i}-1`,
          course_id: `CID-${1000 + i}`,
          title: "Introduction",
          description: "Getting started with the course.",
          position: 1,
          lessons: [
            {
              lesson_id: `LES-${i}-1-1`,
              title: "Welcome",
              duration: "5m",
              type: "video",
            },
            {
              lesson_id: `LES-${i}-1-2`,
              title: "Setup",
              duration: "10m",
              type: "video",
            },
          ],
        },
        {
          chapter_id: `CHAP-${i}-2`,
          course_id: `CID-${1000 + i}`,
          title: "Core Concepts",
          description: "Deep dive into core concepts.",
          position: 2,
          lessons: [
            {
              lesson_id: `LES-${i}-2-1`,
              title: "Concept A",
              duration: "15m",
              type: "video",
            },
            {
              lesson_id: `LES-${i}-2-2`,
              title: "Concept B",
              duration: "20m",
              type: "video",
            },
          ],
        },
      ],
    });
  }
  return courses;
};

// Initialize data in localStorage if not present
const STORAGE_KEY = "mock_courses_data";

const initData = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const initialData = generateCourses(50);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    return initialData;
  }
  return JSON.parse(stored);
};

// --- API Simulation ---

const getCourses = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return initData();
};

const getCourseById = async (courseId) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const courses = initData();
  return courses.find((c) => c.course_id === courseId);
};

// PUT API: Update Course or Chapter
// For simplicity, let's treat this as a generic update
const updateChapter = async (courseId, chapterId, updateData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const courses = initData();
  const courseIndex = courses.findIndex((c) => c.course_id === courseId);

  if (courseIndex === -1) throw new Error("Course not found");

  const chapterIndex = courses[courseIndex].chapters.findIndex(
    (ch) => ch.chapter_id === chapterId
  );
  if (chapterIndex === -1) throw new Error("Chapter not found");

  // Update
  courses[courseIndex].chapters[chapterIndex] = {
    ...courses[courseIndex].chapters[chapterIndex],
    ...updateData,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  return courses[courseIndex].chapters[chapterIndex];
};

// SET API (POST): Add new Chapter
const addChapter = async (courseId, chapterData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const courses = initData();
  const courseIndex = courses.findIndex((c) => c.course_id === courseId);

  if (courseIndex === -1) throw new Error("Course not found");

  const newChapter = {
    chapter_id: `CHAP-${Date.now()}`,
    course_id: courseId,
    lessons: [],
    created_time: new Date().toISOString(),
    ...chapterData,
  };

  courses[courseIndex].chapters.push(newChapter);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  return newChapter;
};

// Generic update for course
const updateCourse = async (courseId, updateData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const courses = initData();
  const index = courses.findIndex((c) => c.course_id === courseId);
  if (index === -1) throw new Error("Course not found");

  courses[index] = { ...courses[index], ...updateData };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  return courses[index];
};

// Add Lesson
const addLesson = async (chapterId, lessonData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const courses = initData();

  // Find chapter through courses
  let foundChapter = null;
  let courseIndex = -1;
  let chapterIndex = -1;

  for (let i = 0; i < courses.length; i++) {
    const cIndex = courses[i].chapters.findIndex(
      (c) => c.chapter_id === chapterId
    );
    if (cIndex !== -1) {
      foundChapter = courses[i].chapters[cIndex];
      courseIndex = i;
      chapterIndex = cIndex;
      break;
    }
  }

  if (!foundChapter) throw new Error("Chapter not found");

  const newLesson = {
    lesson_id: `LES-${Date.now()}`,
    created_time: new Date().toISOString(),
    ...lessonData,
  };

  if (!foundChapter.lessons) foundChapter.lessons = [];
  foundChapter.lessons.push(newLesson);

  courses[courseIndex].chapters[chapterIndex] = foundChapter;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  return newLesson;
};

// Update Lesson
const updateLesson = async (chapterId, lessonId, updateData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const courses = initData();

  // Find chapter and course
  let courseIndex = -1;
  let chapterIndex = -1;

  for (let i = 0; i < courses.length; i++) {
    const cIndex = courses[i].chapters.findIndex(
      (c) => c.chapter_id === chapterId
    );
    if (cIndex !== -1) {
      courseIndex = i;
      chapterIndex = cIndex;
      break;
    }
  }

  if (courseIndex === -1) throw new Error("Chapter not found");

  const chapter = courses[courseIndex].chapters[chapterIndex];
  if (!chapter.lessons) throw new Error("Lesson not found");

  const lessonIndex = chapter.lessons.findIndex(
    (l) => l.lesson_id === lessonId
  );
  if (lessonIndex === -1) throw new Error("Lesson not found");

  chapter.lessons[lessonIndex] = {
    ...chapter.lessons[lessonIndex],
    ...updateData,
  };

  courses[courseIndex].chapters[chapterIndex] = chapter;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  return chapter.lessons[lessonIndex];
};

// Add Quiz
const addQuiz = async (chapterId, quizData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const courses = initData();

  // Find chapter through courses
  let courseIndex = -1;
  let chapterIndex = -1;

  for (let i = 0; i < courses.length; i++) {
    const cIndex = courses[i].chapters.findIndex(
      (c) => c.chapter_id === chapterId
    );
    if (cIndex !== -1) {
      courseIndex = i;
      chapterIndex = cIndex;
      break;
    }
  }

  if (courseIndex === -1) throw new Error("Chapter not found");

  const newLesson = {
    lesson_id: `QUIZ-${Date.now()}`,
    type: "quiz",
    created_time: new Date().toISOString(),
    ...quizData,
  };

  if (!courses[courseIndex].chapters[chapterIndex].lessons) {
    courses[courseIndex].chapters[chapterIndex].lessons = [];
  }
  courses[courseIndex].chapters[chapterIndex].lessons.push(newLesson);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  return newLesson;
};

export const courseService = {
  getCourses,
  getCourseById,
  updateChapter,
  addChapter,
  updateCourse,
  addLesson,
  updateLesson,
  addQuiz,
};
