import React from 'react';

export const ProgressStatItem = ({ icon: Icon, value, label, iconColor }) => {
    // Tách màu nền từ iconColor (vd: 'bg-blue-100 text-blue-600')
    const bgColor = iconColor.split(' ')[0];
    return (
        <div className={`flex flex-col items-center text-center gap-2 border border-gray-200 rounded-lg p-4 ${bgColor}`}>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 ${iconColor}`}>
                <Icon fontSize="large" />
            </div>
            <p className="text-3xl font-extrabold">{value}</p>
            <p className="text-base font-semibold text-gray-700">{label}</p>
        </div>
    );
};
