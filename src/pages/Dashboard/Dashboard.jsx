import React, { useState } from 'react';
import { HeaderSection } from '../FrontPage/Sections/HeaderSection';
import { FooterSection } from '../FrontPage/Sections/FooterSection';
import { DashboardHeader } from './Sections/DashboardHeader';
import { CourseGrid } from './Sections/CourseGrid';
import { UpcomingDeadlines } from './Sections/UpcomingDeadlines';
import { mockDashboardData } from '../../services/mockData/dashboardData';

export const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 3;
    const totalPages = Math.ceil(mockDashboardData.courses.length / coursesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="dashboard-page flex flex-col items-start relative bg-[#ffffff] min-h-screen">
            <HeaderSection />

            <div className="dashboard-content w-full">
                <DashboardHeader
                    userName={mockDashboardData.user.name}
                    stats={mockDashboardData.stats}
                />

                <CourseGrid
                    courses={mockDashboardData.courses}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />

                <UpcomingDeadlines
                    deadlines={mockDashboardData.deadlines}
                />
            </div>

            <FooterSection />
        </div>
    );
};
