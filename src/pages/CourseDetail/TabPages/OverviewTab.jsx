import React from 'react';
import { ProgressOverview } from '../Sections/ProgressOverview';
import { UpcomingActivities } from '../Sections/UpcomingActivities';
import { RecentActivities } from '../Sections/RecentActivities';
import { mockCourseData } from '../../../services/mockData/courseDetailData';

export const OverviewTab = () => {
    return (
        <>
            <ProgressOverview
                progress={mockCourseData.progress}
                currentGrade={mockCourseData.currentGrade}
            />

            <UpcomingActivities
                activities={mockCourseData.upcomingActivities}
            />

            <RecentActivities
                activities={mockCourseData.recentActivities}
            />
        </>
    );
};
