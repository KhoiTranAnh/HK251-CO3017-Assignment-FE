import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';

/**
 * Priority styles for activity items
 */
export const priorityStyles = {
    high: {
        bg: 'bg-red-50',
        border: 'border-red-300',
        text: 'text-red-700',
        badgeBg: 'bg-red-600',
        iconComponent: ErrorIcon,
        iconColor: 'text-red-600',
        label: 'High Priority'
    },
    medium: {
        bg: 'bg-orange-50',
        border: 'border-orange-300',
        text: 'text-orange-700',
        badgeBg: 'bg-orange-600',
        iconComponent: WarningIcon,
        iconColor: 'text-orange-600',
        label: 'Medium Priority'
    },
    low: {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        text: 'text-blue-700',
        badgeBg: 'bg-blue-600',
        iconComponent: AssignmentIcon,
        iconColor: 'text-blue-600',
        label: 'Low Priority'
    }
};

/**
 * Activity type styles for recent activities
 */
export const activityTypeStyles = {
    announcement: {
        icon: CampaignIcon,
        bgColor: 'bg-blue-100 text-blue-600',
        actionText: 'Read more',
        actionColor: 'text-blue-600'
    },
    grade: {
        icon: CheckCircleIcon,
        bgColor: 'bg-green-100 text-green-600',
        actionText: 'View Feedback',
        actionColor: 'text-green-600'
    },
    material: {
        icon: ArticleIcon,
        bgColor: 'bg-purple-100 text-purple-600',
        actionText: 'Start Learning',
        actionColor: 'text-purple-600'
    },
    comment: {
        icon: CommentIcon,
        bgColor: 'bg-orange-100 text-orange-600',
        actionText: 'View Comment',
        actionColor: 'text-orange-600'
    }
};
