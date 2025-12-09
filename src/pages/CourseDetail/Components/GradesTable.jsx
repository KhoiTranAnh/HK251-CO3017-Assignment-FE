import React from 'react';
// components
import { AssignmentRow } from './AssignmentRow';

export const GradesTable = ({ assignments }) => {
    return (
        <div className="overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-y border-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                                Tên bài đánh giá
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                                Trạng thái
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">
                                Điểm
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">
                                Phần trăm
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                                Danh mục đánh giá
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                                Ngày
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.length > 0 ? (
                            assignments.map(assignment => (
                                <AssignmentRow key={assignment.id} assignment={assignment} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="py-12 text-center text-gray-500">
                                    Không tìm thấy bài đánh giá nào
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};