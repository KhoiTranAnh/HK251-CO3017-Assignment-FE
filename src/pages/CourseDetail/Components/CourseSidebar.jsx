import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssessmentIcon from '@mui/icons-material/Assessment';

const menuItems = [
    { id: 'overview', label: 'Thông tin chung', icon: InfoIcon },
    { id: 'materials', label: 'Tài liệu học tập', icon: MenuBookIcon },
    { id: 'grades', label: 'Điểm số', icon: AssessmentIcon }
];

export const CourseSidebar = ({ activeTab }) => {
    const navigate = useNavigate();
    const { courseId } = useParams();

    const handleTabClick = (tabId) => {
        navigate(`/course/${courseId}/${tabId}`);
    };

    return (
        <div className="sidebar w-[250px] bg-white border-r border-gray-200 min-h-screen p-5">
            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleTabClick(item.id)}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <Icon fontSize="small" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};
