import React from 'react';
export const GradeCardTab = ({ grade }) => {
    const getGradeColor = (letter) => {
        const colors = {
            'A': 'text-green-600',
            'B': 'text-blue-600',
            'C': 'text-yellow-600',
            'D': 'text-orange-600',
            'F': 'text-red-600'
        };
        return colors[letter] || 'text-gray-600';
    };

    return (
        <div className="flex items-center justify-center mb-8">
            <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">{grade.label}</p>
                <div className="flex items-center gap-4">
                    <span className={`text-7xl font-bold ${getGradeColor(grade.letter)}`}>
                        {grade.letter}
                    </span>
                    <span className="text-4xl font-semibold text-gray-700">
                        {grade.percentage}%
                    </span>
                </div>
            </div>
        </div>
    );
};