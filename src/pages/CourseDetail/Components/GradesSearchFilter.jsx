import React from 'react';
// MUI
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const GradesSearchFilter = ({ searchTerm, setSearchTerm, categoryFilter, setCategoryFilter, categories }) => {
    return (
        <div className="flex items-center gap-3">
            {/* Search Box */}
            <div className="relative w-64">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" sx={{ fontSize: 20 }} />
                <input
                    type="text"
                    placeholder="Search assignments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            {/* Category Filter Dropdown */}
            <div className="relative">
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[180px]"
                >
                    {categories.map(category => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
                <KeyboardArrowDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
        </div>
    );
};