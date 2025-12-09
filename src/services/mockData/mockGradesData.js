export const mockGradesData = {
    courseInfo: {
        title: "Điểm số của bạn",
        subtitle: "Advanced Web Design - WBD-401"
    },
    overallGrade: {
        letter: "D",
        percentage: 51.7,
        label: "Điểm hiện tại"
    },
    assignments: [
        {
            id: 1,
            name: "Quiz 1",
            status: "submitted",
            statusLabel: "Đã có điểm",
            statusColor: "green",
            score: 88,
            maxScore: 100,
            percentage: 88,
            gradeCategory: "Quiz (10%)",
            gradeCategoryColor: "green",
            date: "2025/11/18",
            canView: true
        },
        {
            id: 2,
            name: "Mid term",
            status: "graded",
            statusLabel: "Chờ chấm điểm",
            statusColor: "yellow",
            score: null,
            maxScore: 100,
            percentage: null,
            gradeCategory: "Giữa kỳ (20%)",
            gradeCategoryColor: "blue",
            date: "2025/11/18",
            canView: false
        },
        {
            id: 3,
            name: "Final",
            status: "not_submitted",
            statusLabel: "Không nộp",
            statusColor: "red",
            score: 0,
            maxScore: 100,
            percentage: 0,
            gradeCategory: "Cuối kỳ (40%)",
            gradeCategoryColor: "purple",
            date: "2025/11/18",
            canView: false
        },
        {
            id: 4,
            name: "Assignment",
            status: "submitted",
            statusLabel: "Đã có điểm",
            statusColor: "green",
            score: 99,
            maxScore: 100,
            percentage: 99,
            gradeCategory: "Bài tập lớn (20%)",
            gradeCategoryColor: "red",
            date: "2025/11/18",
            canView: true
        },
        {
            id: 5,
            name: "Lab",
            status: "submitted",
            statusLabel: "Đã có điểm",
            statusColor: "green",
            score: 77,
            maxScore: 100,
            percentage: 77,
            gradeCategory: "Bài thực hành (30%)",
            gradeCategoryColor: "orange",
            date: "2025/11/18",
            canView: true
        }
    ],
    categories: [
        { value: "all", label: "All Categories" },
        { value: "quiz", label: "Quiz" },
        { value: "midterm", label: "Giữa kỳ" },
        { value: "final", label: "Cuối kỳ" },
        { value: "assignment", label: "Bài tập lớn" },
        { value: "lab", label: "Bài thực hành" }
    ]
};