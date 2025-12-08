import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { StatCard } from '../Components/StatCard';

export const DashboardHeader = ({ userName, stats }) => {
    return (
        <section className="flex flex-col w-full gap-5 px-[50px] py-[30px] bg-white">
            <h1 className="text-3xl font-bold text-black">
                Chào bạn, {userName}
            </h1>

            <div className="stats-grid grid grid-cols-4 gap-5 w-full">
                <StatCard
                    icon={MenuBookIcon}
                    iconColor="bg-blue-100 text-blue-600"
                    value={stats.enrolledCourses}
                    label="Khóa học đang được học"
                />
                <StatCard
                    icon={CheckCircleIcon}
                    iconColor="bg-green-100 text-green-600"
                    value={stats.completedCourses}
                    label="Khóa học đã hoàn thành"
                />
                <StatCard
                    icon={AccessTimeIcon}
                    iconColor="bg-orange-100 text-orange-600"
                    value={`${stats.weeklyHours}h`}
                    label="Giờ học trong tuần này"
                />
                <StatCard
                    icon={EmojiEventsIcon}
                    iconColor="bg-purple-100 text-purple-600"
                    value={stats.certificates}
                    label="Chứng chỉ"
                />
            </div>
        </section>
    );
};
