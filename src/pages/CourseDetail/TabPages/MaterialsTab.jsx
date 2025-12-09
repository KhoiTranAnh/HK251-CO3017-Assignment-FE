import React, { useState } from 'react';
import { mockMaterialsData } from '../../../services/mockData/mockMaterialsData';
import { MaterialsSearchFilter } from '../Components/MaterialsSearchFilter';
import { ChapterItem } from '../Components/ChapterItem';

export const MaterialsTab = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [materialFilter, setMaterialFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    // Filter chapters based on search and filters
    const filteredChapters = mockMaterialsData.chapters.map(chapter => {
        const filteredLessons = chapter.lessons.filter(lesson => {
            const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesMaterial = materialFilter === 'all' || lesson.type === materialFilter;
            const matchesStatus = statusFilter === 'all' || lesson.status === statusFilter;

            return matchesSearch && matchesMaterial && matchesStatus;
        });

        return {
            ...chapter,
            lessons: filteredLessons,
            // Update completed count based on filtered lessons
            completed: filteredLessons.filter(l => l.status === 'completed').length,
            total: filteredLessons.length + (chapter.exam ? 1 : 0) + (chapter.project ? 1 : 0)
        };
    }).filter(chapter => chapter.lessons.length > 0); // Only show chapters with matching lessons

    return (
        <div className="materials-tab">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {mockMaterialsData.courseInfo.title}
                </h1>
                <p className="text-gray-600">
                    {mockMaterialsData.courseInfo.subtitle}
                </p>
            </div>

            {/* Search and Filters */}
            <MaterialsSearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                materialFilter={materialFilter}
                setMaterialFilter={setMaterialFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
            />

            {/* Chapters List */}
            <div className="chapters-list">
                {filteredChapters.length > 0 ? (
                    filteredChapters.map(chapter => (
                        <ChapterItem key={chapter.id} chapter={chapter} />
                    ))
                ) : (
                    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                        <p className="text-gray-500 text-lg">No materials found matching your filters</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setMaterialFilter('all');
                                setStatusFilter('all');
                            }}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};