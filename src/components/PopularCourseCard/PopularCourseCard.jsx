import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { yellow } from '@mui/material/colors'

export const PopularCourseCard = ({ courseImgSource, courseTagType, courseStar, courseName, courseDescription, courseInstructor, coursePrice }) => {
    let tag = null;

    if (!courseTagType || courseTagType === 1) {
        tag = (<div className='courseTag rounded-sm flex items-center bg-green-200 px-2.5'>
            <p className=" text-center text-sm decoration-green-500">
                Thu hút
            </p>
        </div>);
    }


    return (<div className="popularCourseCard border border-gray-300 rounded-xl overflow-hidden flex flex-col w-[400px] h-[500px]">
        <div className="courseImage w-full h-[280px]">
            <img src={courseImgSource} alt="course Image" className="w-full" />
        </div>

        <div className="courseDetail h-full w-full flex flex-col px-4 gap-2 py-3">
            <div className="courseTagAndRating flex flex-row justify-between w-full h-fit py-1">
                {tag}
                <div className='flex flex-row gap-2'>
                    <StarIcon sx={{ color: yellow[600] }} /> {courseStar}
                </div>
            </div>
            <div className="courseName w-full h-fit">
                <p className='text-lg font-semibold'>{courseName}</p>
            </div>
            <div className="courseDescription w-full h-fit">
                <p className=''>{courseDescription}</p>
            </div>
            <div className="courseInstructorAndPrice flex flex-row justify-between w-full h-fit items-center">
                <div className='flex flex-row gap-2 h-fit w-fit items-center'>
                    < AccountCircleIcon fontSize="large" />
                    <p className='text-lg'>{courseInstructor}</p>
                </div>
                <p className='text-lg font-bold'>{coursePrice} VNĐ</p>
            </div>
        </div>

    </div>)
}