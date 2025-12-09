import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// mui
import QuizIcon from '@mui/icons-material/Quiz';

export const ExamItem = ({ exam }) => {
    const navigate = useNavigate();
    const { courseId } = useParams();

    const handleStartExam = (e) => {
        e.stopPropagation();
        // Navigate to exam page
        navigate(`/course/${courseId}/exam/${exam.title}`);
    };

    return (
        <div className="p-4 bg-amber-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-3xl"><QuizIcon className="text-amber-500" sx={{ fontSize: 32 }} /></span>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="font-semibold text-gray-900">{exam.title}</p>
                            {exam.status === 'due_soon' && (
                                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
                                    Due Soon
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            {exam.questions} questions • {exam.duration} • Due: {exam.dueDate}
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleStartExam}
                    className="px-6 py-2.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 hover:cursor-pointer transition-colors font-medium text-sm shadow-sm"
                >
                    Start Exam
                </button>
            </div>
        </div>
    );
};