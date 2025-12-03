import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { yellow } from '@mui/material/colors';
import { Button } from '../../../components/Button/Button';
import { ProgressBar } from './ProgressBar';

export const CourseCard = ({
    courseId,
    courseImgSource,
    courseName,
    courseDescription,
    courseInstructor,
    courseStar,
    courseTag,
    courseDuration,
    progress
}) => {
    return (
        <div className="border border-gray-300 rounded-xl overflow-hidden flex flex-col w-full h-[550px] bg-white hover:shadow-lg transition-shadow duration-200">
            <div className="courseImage w-full h-[280px]">
                <img src={courseImgSource} alt={courseName} className="w-full h-full object-cover" />
            </div>

            <div className="courseDetail h-full w-full flex flex-col px-4 gap-2 py-3">
                <div className="courseTagAndDuration flex flex-row gap-2 w-full h-fit py-1">
                    <div className="courseTag rounded-sm flex items-center bg-blue-100 px-2.5 py-1">
                        <p className="text-center text-xs text-blue-700 font-medium">
                            {courseTag}
                        </p>
                    </div>
                    <div className="courseDuration rounded-sm flex items-center bg-gray-200 px-2.5 py-1">
                        <p className="text-center text-xs text-gray-700">
                            {courseDuration}
                        </p>
                    </div>
                </div>

                <div className="courseName w-full h-fit">
                    <p className="text-lg font-semibold">{courseName}</p>
                </div>

                <div className="courseDescription w-full h-fit">
                    <p className="text-sm text-gray-600">{courseDescription}</p>
                </div>

                <div className="courseInstructor flex flex-row gap-2 h-fit w-fit items-center">
                    <AccountCircleIcon fontSize="large" />
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-sm">{courseInstructor}</p>
                        <div className="flex flex-row items-center gap-1">
                            <StarIcon sx={{ color: yellow[600], fontSize: 18 }} />
                            <span className="text-sm font-medium">{courseStar}</span>
                        </div>
                    </div>
                </div>

                <div className="courseProgress w-full mt-2">
                    <ProgressBar progress={progress} showLabel={true} />
                </div>

                <div className="courseAction w-full mt-2">
                    <Link to={`/course/${courseId}/overview`} className="block w-full">
                        <Button
                            variant="primary"
                            label="Tiếp tục học"
                            fullWidth={true}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};
