export const mockMaterialsData = {
    courseInfo: {
        title: "Course Materials & Curriculum",
        subtitle: "Advanced Web Design - WBD-401"
    },
    chapters: [
        {
            id: 1,
            title: "Chapter 1: Introduction to Design Principles",
            totalLessons: 5,
            totalExams: 1,
            totalMaterials: 12,
            completed: 5,
            total: 8,
            lessons: [
                {
                    id: 1,
                    title: "Lesson 1.1: What is Design?",
                    type: "video",
                    duration: "18 minutes",
                    status: "completed"
                },
                {
                    id: 2,
                    title: "Lesson 1.2: Core Design Principles",
                    type: "pdf",
                    pages: "24 pages",
                    status: "completed"
                },
                {
                    id: 3,
                    title: "Lesson 1.3: Balance and Symmetry",
                    type: "video",
                    duration: "22 minutes",
                    status: "completed"
                },
                {
                    id: 4,
                    title: "Lesson 1.4: Color Theory Basics",
                    type: "video",
                    duration: "28 minutes",
                    status: "in_progress"
                },
                {
                    id: 5,
                    title: "Lesson 1.5: Typography Fundamentals",
                    type: "reading",
                    duration: "15 minutes",
                    status: "not_started"
                }
            ],
            exam: {
                title: "Exam: Chapter 1 Quiz",
                questions: 20,
                duration: "30 minutes",
                dueDate: "Dec 20, 2024",
                status: "due_soon"
            }
        },
        {
            id: 2,
            title: "Chapter 2: Layout and Composition",
            totalLessons: 6,
            totalProjects: 1,
            totalMaterials: 15,
            completed: 3,
            total: 7,
            lessons: [
                {
                    id: 6,
                    title: "Lesson 2.1: Grid Systems",
                    type: "video",
                    duration: "25 minutes",
                    status: "completed"
                },
                {
                    id: 7,
                    title: "Lesson 2.2: Flexbox Layout",
                    type: "video",
                    duration: "30 minutes",
                    status: "completed"
                },
                {
                    id: 8,
                    title: "Lesson 2.3: CSS Grid Advanced",
                    type: "pdf",
                    pages: "18 pages",
                    status: "completed"
                },
                {
                    id: 9,
                    title: "Lesson 2.4: Responsive Design",
                    type: "video",
                    duration: "35 minutes",
                    status: "not_started"
                },
                {
                    id: 10,
                    title: "Lesson 2.5: Mobile First Approach",
                    type: "reading",
                    duration: "20 minutes",
                    status: "not_started"
                },
                {
                    id: 11,
                    title: "Lesson 2.6: Design Systems",
                    type: "video",
                    duration: "28 minutes",
                    status: "not_started"
                }
            ],
            project: {
                title: "Project: Design Portfolio Layout",
                deadline: "Jan 15, 2025",
                status: "not_started"
            }
        },
        {
            id: 3,
            title: "Chapter 3: Advanced CSS Techniques",
            totalLessons: 7,
            totalExams: 2,
            totalMaterials: 20,
            completed: 0,
            total: 9,
            lessons: [
                {
                    id: 12,
                    title: "Lesson 3.1: CSS Animations",
                    type: "video",
                    duration: "32 minutes",
                    status: "not_started"
                },
                {
                    id: 13,
                    title: "Lesson 3.2: Transitions and Transforms",
                    type: "video",
                    duration: "28 minutes",
                    status: "not_started"
                },
                {
                    id: 14,
                    title: "Lesson 3.3: CSS Variables",
                    type: "pdf",
                    pages: "15 pages",
                    status: "not_started"
                },
                {
                    id: 15,
                    title: "Lesson 3.4: Modern CSS Features",
                    type: "video",
                    duration: "40 minutes",
                    status: "not_started"
                }
            ]
        }
    ]
};