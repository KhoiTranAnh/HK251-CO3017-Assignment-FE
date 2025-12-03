import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const GradeCard = ({ gradeLetter, gradePercentage, onViewGradebook }) => {
    return (
        <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
            <EmojiEventsIcon sx={{ fontSize: 80 }} className="mb-3" />

            <h3 className="text-lg font-semibold mb-2">Điểm số hiện tại</h3>

            <div className="text-center mb-4">
                <p className="text-5xl font-bold mb-1">{gradeLetter}</p>
                <p className="text-2xl">({gradePercentage}%)</p>
            </div>

            <button
                onClick={onViewGradebook}
                className="text-sm underline hover:no-underline cursor-pointer transition-all"
            >
                View Full Gradebook
            </button>
        </div>
    );
};
