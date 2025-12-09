import React, { useState } from 'react';
// mui
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArticleIcon from '@mui/icons-material/Article';
//components
import { LessonItem } from './LessonItem';
import { ExamItem } from './ExamItem';

export const ChapterItem = ({ chapter }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const completionPercentage = Math.round((chapter.completed / chapter.total) * 100);

    return (
        <div className="border border-gray-200 rounded-lg mb-4 bg-white overflow-hidden">
            {/* Chapter Header */}
            <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-3 flex-1">
                    <button className="text-gray-400 hover:text-gray-600">
                        {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                    </button>
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base">{chapter.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            {chapter.totalLessons} Lessons • {chapter.totalExams && `${chapter.totalExams} Exam • `}
                            {chapter.totalMaterials} Materials
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-emerald-600">
                        {chapter.completed}/{chapter.total} Completed
                    </span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 transition-all duration-300"
                            style={{ width: `${completionPercentage}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Chapter Content */}
            {isExpanded && (
                <div className="border-t border-gray-200">
                    {chapter.lessons.map((lesson) => (
                        <LessonItem key={lesson.id} lesson={lesson} />
                    ))}

                    {chapter.exam && <ExamItem exam={chapter.exam} />}

                    {chapter.project && (
                        <div className="p-4 bg-blue-50 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl"><ArticleIcon className="text-gray-500" sx={{ fontSize: 32 }} /></span>
                                <div>
                                    <p className="font-medium text-gray-900">{chapter.project.title}</p>
                                    <p className="text-sm text-gray-500">Deadline: {chapter.project.deadline}</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                View Project
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};