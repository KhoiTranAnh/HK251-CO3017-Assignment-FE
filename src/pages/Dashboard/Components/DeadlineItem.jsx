import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import AssignmentIcon from '@mui/icons-material/Assignment';

const urgencyStyles = {
    high: {
        bg: 'bg-red-50',
        border: 'border-red-300',
        text: 'text-red-700',
        icon: <ErrorIcon className="text-red-600" />
    },
    medium: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-300',
        text: 'text-yellow-700',
        icon: <WarningIcon className="text-yellow-600" />
    },
    low: {
        bg: 'bg-gray-50',
        border: 'border-gray-300',
        text: 'text-gray-700',
        icon: <AssignmentIcon className="text-gray-600" />
    }
};

export const DeadlineItem = ({ title, courseName, dueDate, urgency = 'low' }) => {
    const style = urgencyStyles[urgency];

    return (
        <div className={`
            flex flex-row items-center gap-4 p-4 rounded-lg border-2 
            ${style.bg} ${style.border}
            hover:shadow-md transition-shadow duration-200
        `}>
            {style.icon}
            <div className="flex flex-col">
                <p className={`font-semibold ${style.text}`}>
                    {title}
                </p>
                <p className="text-sm text-gray-600">
                    {courseName} · {dueDate}
                </p>
            </div>
        </div>
    );
};
