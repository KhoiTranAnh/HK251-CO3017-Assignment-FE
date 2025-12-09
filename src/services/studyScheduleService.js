import axios from "axios";
import { cookieUtils } from "../utils/cookieUtils";

const getCurrentStudentCourses = async () => {
  const curStudentId = cookieUtils.getCookie("userStudyId");

  const response = await axios.get(
    `/api/study/schedules/${curStudentId}/courses`
  );

  console.log(response.data);

  return response.data.courses;
};

export const studyScheduleService = { getCurrentStudentCourses };
