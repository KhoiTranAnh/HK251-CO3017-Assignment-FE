import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ProgressBar } from '../../../pages/Dashboard/Components/ProgressBar';
import { ProgressStatItem } from './ProgressStatItem';

export const ProgressStatsCard = ({ progress, lessonsComplete, studyTime, assignmentsDone }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-extrabold">Tiến trình của bạn</h3>
                <span className="text-4xl font-extrabold text-blue-600">{progress}%</span>
            </div>

            <div className="mb-6">
                <ProgressBar progress={progress} showLabel={false} />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <ProgressStatItem
                    icon={MenuBookIcon}
                    value={`${lessonsComplete.current}/${lessonsComplete.total}`}
                    label="Lessons Complete"
                    iconColor="bg-blue-100 text-blue-600"
                />
                <ProgressStatItem
                    icon={AccessTimeIcon}
                    value={`${studyTime}h`}
                    label="Study Time"
                    iconColor="bg-orange-100 text-orange-600"
                />
                <ProgressStatItem
                    icon={CheckCircleIcon}
                    value={`${assignmentsDone.current}/${assignmentsDone.total}`}
                    label="Assignments Done"
                    iconColor="bg-green-100 text-green-600"
                />
            </div>
        </div>
    );
};
