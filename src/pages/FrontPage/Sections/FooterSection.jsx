import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Logo } from "../../../components/Logo/Logo";

export const FooterSection = () => {
    // const footerSections = [
    //     {
    //         title: "Về công ty",
    //         links: [
    //             { text: "Về chúng tôi" },
    //             { text: "Việc làm" },
    //             { text: "Các bài viết về chúng tôi" },
    //         ],
    //     },
    //     {
    //         title: "Hỗ trợ",
    //         links: [
    //             { text: "Trung tâm hỗ trợ" },
    //             { text: "Các câu hỏi thường gặp" },
    //             { text: "Liên hệ" },
    //         ],
    //     },
    //     {
    //         title: "Pháp lý",
    //         links: [
    //             { text: "Chính sách riêng tư" },
    //             { text: "Điều khoản dịch vụ" },
    //             { text: "Chính sách về Cookies" },
    //         ],
    //     },
    // ];

    return (
        <footer className="w-full h-fit bg-gray-900 border-0 border-none py-20 px-20 flex flex-col gap-10">
            <div className="flex flex-row justify-around">
                <div className="logo-socialMedia flex flex-col gap-3">
                    <Logo colorMode={"light"} size={"large"} />
                    <div className="socialMediaLink flex flex-row gap-3">
                        <FacebookIcon color="primary" fontSize="large" />
                        <LinkedInIcon color="primary" fontSize="large" />
                        <XIcon color="primary" fontSize="large" />
                        <InstagramIcon color="primary" fontSize="large" />
                    </div>
                </div>
                <div className="aboutUs flex flex-col gap-5">
                    <p className="text-xl text-white font-bold">Về công ty</p>
                    <p className="text-gray-200">Về chúng tôi</p>
                    <p className="text-gray-200">Việc làm</p>
                    <p className="text-gray-200">Các bài viết về chúng tô</p>
                </div>
                <div className="supportLink flex flex-col gap-5">
                    <p className="text-xl text-white font-bold">Hỗ trợ</p>
                    <p className="text-gray-200">Trung tâm hỗ trợ</p>
                    <p className="text-gray-200">Các câu hỏi thường gặ</p>
                    <p className="text-gray-200">Liên hệ</p>
                </div>
                <div className="legal flex flex-col gap-5">
                    <p className="text-xl text-white font-bold">Pháp lý</p>
                    <p className="text-gray-200">Chính sách riêng tư</p>
                    <p className="text-gray-200">Điều khoản dịch vụ</p>
                    <p className="text-gray-200">Chính sách về Cookies</p>
                </div>
            </div>
            <div className="border-white h-0.5 border mx-20"></div>
            <p className="w-full text-center text-gray-200">© 2025 EduLearn. All rights reserved.</p>
        </footer>
    );
};
