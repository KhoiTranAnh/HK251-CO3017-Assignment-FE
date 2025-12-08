import React from 'react';

export const ProgressBar = ({ progress, color = 'bg-blue-600', showLabel = true }) => {
    return (
        <div className="w-full">
            {showLabel && (
                <p className="text-sm text-gray-600 mb-1 font-medium">{progress}%</p>
            )}
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                    className={`${color} h-2 rounded-full transition-all duration-300 ease-out`}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};
