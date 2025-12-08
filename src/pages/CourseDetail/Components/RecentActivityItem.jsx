import React from 'react';
import { activityTypeStyles } from '../../../utils/constants/activityStyles';

export const RecentActivityItem = ({ type, title, description, timestamp, authorName }) => {
    const typeStyle = activityTypeStyles[type];
    const Icon = typeStyle.icon;

    return (
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${typeStyle.bgColor}`}>
                <Icon fontSize="large" />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                    <h4 className="font-extrabold text-xl">{title}</h4>
                    <span className="text-base font-semibold text-gray-600">{timestamp}</span>
                </div>
                <p className="text-base text-gray-600 mb-1">{description}</p>
                {authorName && (
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-base text-gray-400">•</span>
                        <span className="text-base font-semibold text-gray-600">{authorName}</span>
                    </div>
                )}
                <button className={`text-base font-semibold ${typeStyle.actionColor} hover:underline mt-2`}>
                    {typeStyle.actionText}
                </button>
            </div>
        </div>
    );
};
