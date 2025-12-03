import React from 'react';

export const StatCard = ({ icon: Icon, iconColor, value, label }) => {
    return (
        <div className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-gray-300 w-full h-[100px] shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-row items-center justify-between">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColor}`}>
                    <Icon fontSize="medium" />
                </div>
                <p className="text-2xl font-bold text-black">{value}</p>
            </div>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    );
};
