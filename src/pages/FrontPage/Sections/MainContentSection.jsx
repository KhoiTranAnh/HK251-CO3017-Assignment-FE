import React from "react";
import rs8101Gettyimages658984533Hig39908495451 from "../../../assets/img/RS8101_GettyImages-658984533-hig-3990849545.jpg"
import { Button } from "../../../components/Button/Button";

export const MainContentSection = () => {
    return (
        <section className="flex w-full h-[500px] items-center justify-center gap-[30px] relative bg-[linear-gradient(161deg,rgba(40,97,234,1)_0%,rgba(126,34,206,1)_100%)]">
            <div className="flex flex-col w-[500px] items-start gap-[30px] p-2.5 relative">
                <h1 className="relative self-stretch font-h3 font-medium text-white">
                    Học kỹ năng mới trực tuyến với giảng viên chuyên nghiệp
                </h1>

                <p className="relative self-stretch font-body font-medium text-white">
                    Tham gia cùng hàng ngàn sinh viên đang học hỏi từ các chuyên gia trong
                    ngành. Xây dựng sự nghiệp của bạn với các khóa học trực tuyến toàn
                    diện của chúng tôi.
                </p>

                <Button label='Tạo tài khoản để bắt đầu' variant='primary' />
            </div>

            <div className="flex flex-col w-[600px] items-start gap-2.5 p-2.5 relative">
                <img
                    className="relative self-stretch w-full aspect-[1.5] object-cover"
                    alt="Học sinh đang học tập cùng giảng viên chuyên nghiệp"
                    src={rs8101Gettyimages658984533Hig39908495451}
                />
            </div>
        </section>
    );
};
