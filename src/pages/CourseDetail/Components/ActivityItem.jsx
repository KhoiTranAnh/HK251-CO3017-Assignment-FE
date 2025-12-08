import React from 'react';
import { Button } from '../../../components/Button/Button';
import { priorityStyles } from '../../../utils/constants/activityStyles';
import { formatDate, getDateParts } from '../../../utils/dateUtils';

export const ActivityItem = ({
    type,
    title,
    description,
    dueDate,
    daysLeft,
    priority,
    isOverdue
}) => {
    const styles = priorityStyles[priority];
    const dateParts = getDateParts(dueDate);

    return (
        <div className={`flex items-start gap-4 p-4 rounded-lg border-2 ${styles.bg} ${styles.border} hover:shadow-md transition-shadow`}>
            {/* Date Box */}
            <div className={`flex flex-col items-center justify-center rounded-lg p-2 min-w-[60px] ${styles.bg}`}>
                <p className={`text-2xl font-bold ${styles.text}`}>{dateParts.day}</p>
                <p className={`text-xs font-semibold uppercase ${styles.text}`}>{dateParts.month}</p>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h4 className={`font-semibold text-lg mb-1 ${styles.text}`}>
                    {title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm text-gray-600">
                        Due {formatDate(dueDate)}
                        {daysLeft > 0 && <span className="ml-1">({daysLeft} days left)</span>}
                    </p>
                    <span className={`px-2 py-0.5 ${styles.badgeBg} text-white text-xs rounded font-medium`}>
                        {styles.label}
                    </span>
                    {isOverdue && (
                        <span className="px-2 py-0.5 bg-red-600 text-white text-xs rounded font-medium">
                            Overdue
                        </span>
                    )}
                </div>
            </div>

            {/* Action Button */}
            <Button variant="ghost" label={<span className="text-lg font-bold">View</span>} />
        </div>
    );
};
