import axios from "axios";

const getCourses = async () => {
  const response = await axios.get("/api/study/schedules/courses");

  //   console.log(response.data);

  return response.data.courses;
};

const getCourseById = async (courseId) => {
  const response = await axios.get(`/api/study/courses/${courseId}`);

  return response.data;
};

const getChapterInCourseId = async (courseId) => {
  const response = await axios.get(`/api/study/chapters/course/${courseId}`);

  console.log(response.data);

  let ls = [];

  for (let i = 0; i < response.data.length; i++) {
    let chapter = response.data[i];

    const getChapterLesson = await axios.get(
      `/api/study/lessons/chapter/${chapter.chapterId}`
    );

    ls.push({ ...chapter, lessons: getChapterLesson.data || [] });
  }

  console.log(ls);

  return ls;
};

const addChapterToCourseId = async (courseId, { title, status }) => {
  const body = {
    courseId: courseId,
    title: title,
  };

  const response = await axios.post("/api/study/chapters", body);

  console.log(response);

  const getChapterLession = await axios.get(
    `/api/study/lessons/chapter/${response.data.chapterId}`
  );

  const result = {
    chapterId: response.data.chapterId,
    course_id: courseId,
    lessons: getChapterLession.data,
    created_time: new Date().toISOString(),
  };

  return result;
};

const editChapterInCourseId = async (courseId, chapterId, updatedTitle) => {
  const body = {
    title: updatedTitle,
    courseId: courseId,
  };

  const response = await axios.put(`/api/study/chapters/${chapterId}`, body);

  console.log(response);
};

const deleteChapterId = async (chapterId) => {
  const response = await axios.delete(`/api/study/chapters/${chapterId}`);

  console.log(response);
};

const addLessonToChapterId = async (chapterId, lesssonData) => {
  const body = {
    chapterId: chapterId,
    title: lesssonData.title,
    resource: lesssonData.mainMaterial,
  };

  const response = await axios.post(`/api/study/lessons`, body);

  console.log("Add lesson response: ", response);
};

const updateLessonInChapterId = async (chapterId, lesssonData, lession_id) => {
  const body = {
    chapterId: chapterId,
    title: lesssonData.title,
    resource: lesssonData.mainMaterial,
  };

  const response = await axios.put(`/api/study/lessons/${lession_id}`, body);

  console.log("Update lesson response: ", response);
};

const deleteLesson = async (lessonId) => {
  const response = await axios.delete(`/api/study/lessons/${lessonId}`);

  console.log("Update lesson response: ", response);
};

export const instructorService = {
  getCourses,
  getCourseById,
  getChapterInCourseId,
  addChapterToCourseId,
  editChapterInCourseId,
  deleteChapterId,
  addLessonToChapterId,
  updateLessonInChapterId,
  deleteLesson,
};
