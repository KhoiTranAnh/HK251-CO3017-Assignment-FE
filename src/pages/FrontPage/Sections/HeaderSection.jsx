import React from "react";
import { Logo } from "../../../components/Logo/Logo";
import { Button } from "../../../components/Button/Button";

// const navigationLinks = [
//     { id: 1, label: "Khám phá" },
//     { id: 2, label: "Về chúng tôi" },
//     { id: 3, label: "Liên hệ" },
// ];

// export const HeaderSection = () => {
//     return (
//         <header className="flex w-full h-[70px] items-center justify-between px-[50px] py-2.5 relative bg-[#ffffff] [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border shadow-[0px_1px_2px_#0000000d]">
//             <div className="inline-flex items-center gap-[30px] px-2.5 py-0 relative flex-[0_0_auto]">
//                 <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] border-0 border-none">
//                     <div className="relative w-[30px] h-8 border-0 border-none">
//                         <div className="flex w-[30px] h-6 items-center justify-center relative top-[3px]">
//                             <div className="relative w-[30px] h-6 border-0 border-none">
//                                 <img
//                                     className="absolute w-[100.00%] h-[87.52%] top-[6.25%] left-0"
//                                     alt="Vector"
//                                     src={logo_vector}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="relative w-[93px] h-7 [font-family:'Inter-Bold',Helvetica] font-bold text-gray-900 text-xl tracking-[0] leading-7 whitespace-nowrap">
//                         EduLearn
//                     </div>
//                 </div>

//                 <nav className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
//                     {navigationLinks.map((link) => (
//                         <button
//                             key={link.id}
//                             className="all-[unset] box-border flex-[0_0_auto] inline-flex h-12 items-center justify-center relative"
//                             aria-label={link.label}
//                         >
//                             <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden">
//                                 <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto]">
//                                     <div className="text-text-dark relative flex items-center justify-center w-fit mt-[-1.00px] font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-[length:var(--m3-label-large-font-size)] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [font-style:var(--m3-label-large-font-style)]">
//                                         {link.label}
//                                     </div>
//                                 </div>
//                             </div>
//                         </button>
//                     ))}
//                 </nav>
//             </div>

//             <div className="inline-flex items-start gap-2.5 px-2.5 py-0 relative flex-[0_0_auto]">
//                 <button
//                     className="all-[unset] box-border flex-[0_0_auto] inline-flex h-12 items-center justify-center relative"
//                     aria-label="Đăng nhập"
//                 >
//                     <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden">
//                         <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto]">
//                             <div className="text-text-dark relative flex items-center justify-center w-fit mt-[-1.00px] font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-[length:var(--m3-label-large-font-size)] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [font-style:var(--m3-label-large-font-style)]">
//                                 Đăng nhập
//                             </div>
//                         </div>
//                     </div>
//                 </button>

//                 <button
//                     className="all-[unset] box-border flex-[0_0_auto] inline-flex h-12 items-center justify-center relative"
//                     aria-label="Đăng ký"
//                 >
//                     <div className="bg-blue inline-flex flex-col items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden">
//                         <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 relative flex-[0_0_auto]">
//                             <div className="text-white relative flex items-center justify-center w-fit mt-[-1.00px] font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-[length:var(--m3-label-large-font-size)] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [font-style:var(--m3-label-large-font-style)]">
//                                 Đăng ký
//                             </div>
//                         </div>
//                     </div>
//                 </button>
//             </div>
//         </header>
//     );
// };

export const HeaderSection = ({ handleLoginButtonClick, handleSignUpButtonClick }) => {
    return (
        <header className="flex flex-row h-[70px] w-full items-center px-5 py-2 justify-between grow-0 shrink-0">
            <div className="header-left flex flex-row h-fit w-fit gap-2 ">
                <Logo />
                <Button variant='ghost' label='Khám phá' />
                <Button variant='ghost' label='Về chúng tôi' />
                <Button variant='ghost' label='Liên hệ' />
            </div>
            <div className="header-right flex flex-row h-fit w-fit gap-2">
                <Button variant='ghost' label='Đăng nhập' onClick={() => handleLoginButtonClick()} />
                <Button variant='primary' label='Đăng ký' onClick={() => handleSignUpButtonClick()} />
            </div>
        </header>
    )
}
