// react
import { useNavigate, useParams } from 'react-router-dom';
// mui
import VisibilityIcon from '@mui/icons-material/Visibility';

export const AssignmentRow = ({ assignment }) => {
    const navigate = useNavigate();
    const { courseId } = useParams();

    const getStatusBadge = () => {
        const statusStyles = {
            green: 'bg-green-100 text-green-700',
            yellow: 'bg-yellow-100 text-yellow-700',
            red: 'bg-red-100 text-red-700'
        };

        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusStyles[assignment.statusColor]}`}>
                <span className={`w-2 h-2 rounded-full ${assignment.statusColor === 'green' ? 'bg-green-500' : assignment.statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                {assignment.statusLabel}
            </span>
        );
    };

    const getCategoryBadge = () => {
        const categoryStyles = {
            green: 'bg-green-100 text-green-700',
            blue: 'bg-blue-100 text-blue-700',
            purple: 'bg-purple-100 text-purple-700',
            red: 'bg-red-100 text-red-700',
            orange: 'bg-orange-100 text-orange-700'
        };

        return (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryStyles[assignment.gradeCategoryColor]}`}>
                {assignment.gradeCategory}
            </span>
        );
    };

    const handleViewClick = () => {
        // Navigate to quiz/assignment review page
        navigate(`/course/${courseId}/assignment/${assignment.id}/review`);
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 text-gray-900 font-medium">
                {assignment.name}
            </td>
            <td className="py-4 px-4">
                {getStatusBadge()}
            </td>
            <td className="py-4 px-4 text-center">
                {assignment.score !== null ? (
                    <span className="font-semibold text-gray-900">
                        {assignment.score}/{assignment.maxScore}
                    </span>
                ) : (
                    <span className="text-gray-400">-</span>
                )}
            </td>
            <td className="py-4 px-4 text-center">
                {assignment.percentage !== null ? (
                    <span className="font-semibold text-gray-900">
                        {assignment.percentage}%
                    </span>
                ) : (
                    <span className="text-gray-400">-</span>
                )}
            </td>
            <td className="py-4 px-4">
                {getCategoryBadge()}
            </td>
            <td className="py-4 px-4 text-gray-600 text-sm">
                {assignment.date}
            </td>
            <td className="py-4 px-4 text-center">
                {assignment.canView ? (
                    <button
                        onClick={handleViewClick}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                        <VisibilityIcon sx={{ fontSize: 18 }} />
                        Xem lại
                    </button>
                ) : (
                    <span className="text-gray-400 text-sm">-</span>
                )}
            </td>
        </tr>
    );
};