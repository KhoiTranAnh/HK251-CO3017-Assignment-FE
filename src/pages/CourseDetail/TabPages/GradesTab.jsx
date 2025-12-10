import React, { useState } from 'react';
import { mockGradesData } from '../../../services/mockData/mockGradesData';
import { GradeCardTab } from '../Components/GradeCardTab';
import { GradesSearchFilter } from '../Components/GradesSearchFilter';
import { GradesTable } from '../Components/GradesTable';

export const GradesTab = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    // Filter assignments based on search and category
    const filteredAssignments = mockGradesData.assignments.filter(assignment => {
        const matchesSearch = assignment.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' ||
            assignment.gradeCategory.toLowerCase().includes(categoryFilter.toLowerCase());

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="grades-tab">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {mockGradesData.courseInfo.title}
                </h1>
                <p className="text-gray-600">
                    {mockGradesData.courseInfo.subtitle}
                </p>
            </div>

            {/* Overall Grade Card */}
            <GradeCardTab grade={mockGradesData.overallGrade} />

            {/* Grades Details Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                {/* Header with Title and Filters */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Điểm số chi tiết</h2>

                    <GradesSearchFilter
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        categoryFilter={categoryFilter}
                        setCategoryFilter={setCategoryFilter}
                        categories={mockGradesData.categories}
                    />
                </div>

                {/* Grades Table */}
                <GradesTable assignments={filteredAssignments} />
            </div>
        </div>
    );
};