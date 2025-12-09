import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { HeaderSection } from '../FrontPage/Sections/HeaderSection';
import { FooterSection } from '../FrontPage/Sections/FooterSection';
import { CourseSidebar } from './Components/CourseSidebar';
import { Breadcrumb } from './Components/Breadcrumb';
import { OverviewTab } from './TabPages/OverviewTab';
import { MaterialsTab } from './TabPages/MaterialsTab';
import { GradesTab } from './TabPages/GradesTab';
// import { mockCourseData } from '../../services/mockData/courseDetailData';
import { mockDashboardData } from '../../services/mockData/dashboardData';
import { cookieUtils } from '../../utils/cookieUtils';

const CourseDetail = () => {
    const { courseId, tab } = useParams();
    console.log(courseId, tab)
    const activeTab = tab || 'overview';

    const [isLogin, setIsLogin] = useState(cookieUtils.getCookie("token") !== null);

    const [userName, setUserName] = useState(cookieUtils.getCookie("userName"));

    const handleLogOut = () => {
        setIsLogin(false);
        setUserName("");
        cookieUtils.resetCookies();
        window.location.href = '/'
    }

    // Find the course from dashboard data based on courseId
    const currentCourse = mockDashboardData.courses.find(course => course.id === parseInt(courseId));
    const courseName = currentCourse ? currentCourse.courseName : 'Khóa học không tìm thấy';

    // Map tab names to breadcrumb labels
    const tabLabels = {
        'overview': 'Thông tin chung',
        'materials': 'Tài liệu học tập',
        'grades': 'Điểm số'
    };

    // Redirect to overview if invalid tab
    if (tab && !tabLabels[tab]) {
        return <Navigate to={`/student/courses/${courseId}/overview`} replace />;
    }

    const breadcrumbItems = [
        { label: "Dashboard", link: "/student/dashboard" },
        { label: courseName, link: null },
        { label: tabLabels[activeTab], link: null }
    ];

    return (
        <div className="course-detail-wrapper flex flex-col min-h-screen bg-gray-50">
            <HeaderSection isLogin={isLogin} userName={userName} handleLogOut={handleLogOut} />

            <div className="course-detail-page flex flex-row flex-1">
                <CourseSidebar
                    activeTab={activeTab}
                />

                <div className="main-content flex-1 p-[30px]">
                    <Breadcrumb items={breadcrumbItems} />

                    {activeTab === 'overview' && <OverviewTab />}
                    {activeTab === 'materials' && <MaterialsTab />}
                    {activeTab === 'grades' && <GradesTab />}
                </div>
            </div>

            <FooterSection />
        </div>
    );
};

export default CourseDetail;
