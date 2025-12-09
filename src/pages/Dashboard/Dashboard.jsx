import React, { useEffect, useState } from 'react';
import { HeaderSection } from '../FrontPage/Sections/HeaderSection';
import { FooterSection } from '../FrontPage/Sections/FooterSection';
import { DashboardHeader } from './Sections/DashboardHeader';
import { CourseGrid } from './Sections/CourseGrid';
import { UpcomingDeadlines } from './Sections/UpcomingDeadlines';
import { mockDashboardData } from '../../services/mockData/dashboardData';
import { cookieUtils } from '../../utils/cookieUtils';
import { studyScheduleService } from '../../services/studyScheduleService';

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 3;

    const [isLogin, setIsLogin] = useState(cookieUtils.getCookie("token") !== null);

    const [userName, setUserName] = useState(cookieUtils.getCookie("userName"));

    const handleLogOut = () => {
        setIsLogin(false);
        setUserName("");
        cookieUtils.resetCookies();
        window.location.href = '/'
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const [courses, setCourses] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function getCourses() {
            const responseCourses = await studyScheduleService.getCurrentStudentCourses();

            console.log("asbs", responseCourses)

            setCourses(responseCourses);

            setTotalPages(Math.ceil(responseCourses.length / coursesPerPage))
        }

        getCourses();
    }, [])



    return (
        <div className="dashboard-page flex flex-col items-start relative bg-[#ffffff] min-h-screen">
            <HeaderSection isLogin={isLogin} userName={userName} handleLogOut={handleLogOut} />

            <div className="dashboard-content w-full">
                <DashboardHeader
                    userName={mockDashboardData.user.name}
                    stats={mockDashboardData.stats}
                />

                <CourseGrid
                    courses={courses || mockDashboardData.courses}
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

export default Dashboard;