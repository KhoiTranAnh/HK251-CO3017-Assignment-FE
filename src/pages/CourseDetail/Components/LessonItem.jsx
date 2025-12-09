import React from 'react';
// mui
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import VideocamIcon from '@mui/icons-material/Videocam';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { useNavigate, useParams } from 'react-router-dom';

export const LessonItem = ({ lesson }) => {
    const navigate = useNavigate();
    const { courseId } = useParams();

    const getStatusIcon = () => {
        if (lesson.status === 'completed') {
            return <CheckCircleIcon className="text-emerald-500" sx={{ fontSize: 24 }} />;
        } else if (lesson.status === 'in_progress') {
            return (
                <div className="w-6 h-6 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
            );
        } else {
            return <RadioButtonUncheckedIcon className="text-gray-300" sx={{ fontSize: 24 }} />;
        }
    };

    const getTypeIcon = () => {
        switch (lesson.type) {
            case 'video':
                return <VideocamIcon className="text-purple-500" sx={{ fontSize: 32 }} />;
            case 'pdf':
                return <DescriptionIcon className="text-blue-500" sx={{ fontSize: 32 }} />;
            case 'reading':
                return <MenuBookIcon className="text-amber-500" sx={{ fontSize: 32 }} />;
            default:
                return <DescriptionIcon className="text-gray-500" sx={{ fontSize: 32 }} />;
        }
    };

    const getStatusBadge = () => {
        if (lesson.status === 'completed') {
            return (
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                    Completed
                </span>
            );
        } else if (lesson.status === 'in_progress') {
            return (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    In Progress
                </span>
            );
        } else {
            return (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    Not Started
                </span>
            );
        }
    };

    const handleClick = () => {
        // Navigate to lesson detail page
        navigate(`/course/${courseId}/lesson/${lesson.id}`);
    };

    return (
        <div
            className="flex items-center justify-between p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group"
            onClick={handleClick}
        >
            <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0">
                    {getStatusIcon()}
                </div>

                <div className="flex items-center gap-3 flex-1">
                    <div className="flex-shrink-0">
                        {getTypeIcon()}
                    </div>
                    <div>
                        <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {lesson.title}
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                            {lesson.type === 'pdf' ? `PDF Document • ${lesson.pages}` :
                                lesson.type === 'video' ? `Video • ${lesson.duration}` :
                                    `Reading Material • ${lesson.duration}`}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-shrink-0">
                {getStatusBadge()}
            </div>
        </div>
    );
};