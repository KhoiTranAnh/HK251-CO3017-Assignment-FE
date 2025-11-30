import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { yellow } from '@mui/material/colors'

export const TestimonialCard = ({ rating, comment, studentCourse, studentName }) => {
    let ratingStars = []

    for (let i = 0; i < rating; i++) {
        ratingStars.push(<StarIcon sx={{ color: yellow[600] }} />)
    }


    return (<div className="testimonialCard border border-gray-300 rounded-xl overflow-hidden flex flex-col gap-3 w-[400px] h-[300px] px-5 py-5">
        <div className="star">
            {ratingStars}
        </div>

        <div className="comment">
            <p className='text-gray-700 text-justify'>"{comment}"</p>
        </div>

        <div className="studentInfo flex flex-row gap-3">
            <AccountCircleIcon sx={{ fontSize: 50 }} />
            <div className='studentNameCourse'>
                <p className='text-xl font-bold'>{studentName}</p>
                <p className='text-lg'>{studentCourse}</p>
            </div>
        </div>
    </div>)
}