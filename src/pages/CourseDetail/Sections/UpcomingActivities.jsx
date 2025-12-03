import React, { useState } from 'react';
import { ActivityItem } from '../Components/ActivityItem';
import { Pagination } from '../../Dashboard/Components/Pagination';

export const UpcomingActivities = ({ activities }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const activitiesPerPage = 5;
    const totalPages = Math.ceil(activities.length / activitiesPerPage);

    // Get current activities
    const startIndex = (currentPage - 1) * activitiesPerPage;
    const endIndex = startIndex + activitiesPerPage;
    const currentActivities = activities.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-extrabold mb-7">Các hoạt động cần hoàn thành</h2>

            <div className="flex flex-col gap-3 mb-5">
                {currentActivities.map((activity) => (
                    <ActivityItem
                        key={activity.id}
                        type={activity.type}
                        title={activity.title}
                        description={activity.description}
                        dueDate={activity.dueDate}
                        daysLeft={activity.daysLeft}
                        priority={activity.priority}
                        isOverdue={activity.isOverdue}
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </section>
    );
};
