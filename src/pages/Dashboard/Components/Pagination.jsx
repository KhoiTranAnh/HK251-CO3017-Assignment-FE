import React from 'react';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];

        // Nếu tổng số trang <= 5, hiển thị tất cả
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }

        // Luôn có trang 1
        pages.push(1);

        if (currentPage <= 2) {
            // Trang 1-2: 1 2 3 ... 6 7
            pages.push(2);
            pages.push(3);
            pages.push('...');
            pages.push(totalPages - 1);
            pages.push(totalPages);
        } else if (currentPage >= totalPages - 1) {
            // Trang cuối: 1 2 ... 5 6 7
            pages.push(2);
            pages.push('...');
            pages.push(totalPages - 2);
            pages.push(totalPages - 1);
            pages.push(totalPages);
        } else {
            // Ở giữa: 1 ... 3 4 5 ... 7
            pages.push('...');
            pages.push(currentPage - 1);
            pages.push(currentPage);
            pages.push(currentPage + 1);
            pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex flex-row gap-2 items-center justify-center mt-5">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border border-gray-300 font-medium transition-colors
                    ${currentPage === 1
                        ? 'opacity-50 cursor-not-allowed bg-gray-100'
                        : 'hover:bg-gray-100 bg-white'
                    }`}
            >
                ← Previous
            </button>

            {pageNumbers.map((page, index) => {
                if (page === '...') {
                    return (
                        <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                            ...
                        </span>
                    );
                }

                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-2 rounded-lg border font-medium transition-colors
                            ${page === currentPage
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border border-gray-300 font-medium transition-colors
                    ${currentPage === totalPages
                        ? 'opacity-50 cursor-not-allowed bg-gray-100'
                        : 'hover:bg-gray-100 bg-white'
                    }`}
            >
                Next →
            </button>
        </div>
    );
};
