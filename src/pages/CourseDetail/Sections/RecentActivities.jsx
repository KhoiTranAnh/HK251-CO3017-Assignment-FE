import React, { useState } from 'react';
import { RecentActivityItem } from '../Components/RecentActivityItem';
import { Pagination } from '../../Dashboard/Components/Pagination';

export const RecentActivities = ({ activities }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const activitiesPerPage = 4;
    const totalPages = Math.ceil(activities.length / activitiesPerPage);

    // Get current activities
    const startIndex = (currentPage - 1) * activitiesPerPage;
    const endIndex = startIndex + activitiesPerPage;
    const currentActivities = activities.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-5">Các hoạt động gần đây</h2>

            <div className="flex flex-col gap-4 mb-5">
                {currentActivities.map((activity) => (
                    <RecentActivityItem
                        key={activity.id}
                        type={activity.type}
                        title={activity.title}
                        description={activity.description}
                        timestamp={activity.timestamp}
                        authorName={activity.author}
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
