import React from 'react';
import { ProgressStatsCard } from '../Components/ProgressStatsCard';
import { GradeCard } from '../Components/GradeCard';

export const ProgressOverview = ({ progress, currentGrade }) => {
    return (
        <section className="flex gap-5 mb-8">
            <div className="flex-[0.7]">
                <ProgressStatsCard
                    progress={progress.overall}
                    lessonsComplete={progress.lessonsComplete}
                    studyTime={progress.studyTime}
                    assignmentsDone={progress.assignmentsDone}
                />
            </div>

            <div className="flex-[0.3]">
                <GradeCard
                    gradeLetter={currentGrade.letter}
                    gradePercentage={currentGrade.percentage}
                    onViewGradebook={() => console.log('View Gradebook clicked')}
                />
            </div>
        </section>
    );
};
