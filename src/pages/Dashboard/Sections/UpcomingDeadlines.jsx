import React from 'react';
import { DeadlineItem } from '../Components/DeadlineItem';

export const UpcomingDeadlines = ({ deadlines }) => {
    return (
        <section className="flex flex-col w-full gap-5 px-[50px] py-[30px] bg-white">
            <h2 className="text-2xl font-bold text-black mb-4">
                Lịch trình sắp tới
            </h2>

            <div className="flex flex-col gap-3">
                {deadlines.map((deadline) => (
                    <DeadlineItem
                        key={deadline.id}
                        title={deadline.title}
                        courseName={deadline.courseName}
                        dueDate={deadline.dueDate}
                        urgency={deadline.urgency}
                    />
                ))}
            </div>
        </section>
    );
};
