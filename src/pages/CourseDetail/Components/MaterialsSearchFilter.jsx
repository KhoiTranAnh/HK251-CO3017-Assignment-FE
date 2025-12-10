import React from 'react';
// MUI
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MaterialsSearchFilter = ({ searchTerm, setSearchTerm, materialFilter, setMaterialFilter, statusFilter, setStatusFilter }) => {
    return (
        <div className="border border-gray-300 mb-6 rounded-lg bg-white px-6 py-6">
            <div className="flex items-center gap-3">
                {/* Search Box */}
                <div className="flex-1 relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" sx={{ fontSize: 20 }} />
                    <input
                        type="text"
                        placeholder="Search lessons, topics, or materials..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Filter Button */}
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FilterListIcon sx={{ fontSize: 20 }} />
                    <span className="font-medium text-gray-700">Filter</span>
                </button>

                {/* Material Type Dropdown */}
                <div className="relative">
                    <select
                        value={materialFilter}
                        onChange={(e) => setMaterialFilter(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Materials</option>
                        <option value="video">Videos</option>
                        <option value="pdf">PDF Documents</option>
                        <option value="reading">Reading Materials</option>
                    </select>
                    <KeyboardArrowDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>

                {/* Status Filter Dropdown */}
                <div className="relative">
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Status</option>
                        <option value="completed">Completed</option>
                        <option value="in_progress">In Progress</option>
                        <option value="not_started">Not Started</option>
                    </select>
                    <KeyboardArrowDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
            </div>
        </div>
    );
};