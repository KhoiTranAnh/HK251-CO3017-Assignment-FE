import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const Breadcrumb = ({ items }) => {
    return (
        <nav className="breadcrumb flex items-center gap-2 text-sm mb-5">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.link ? (
                        <Link
                            to={item.link}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-blue-600 font-medium">{item.label}</span>
                    )}
                    {index < items.length - 1 && (
                        <ChevronRightIcon className="text-gray-400" fontSize="small" />
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};
