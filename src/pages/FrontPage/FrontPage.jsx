import React, { useState } from "react";
import { FooterSection } from "./Sections/FooterSection";
import { HeaderSection } from "./Sections/HeaderSection";
import { MainContentSection } from "./Sections/MainContentSection";
import { PopularCoursesSection } from "./Sections/PopularCoursesSection";
import { TestimonialsSection } from "./Sections/TestimonialsSection";
import { LogInModal } from "./Modals/LogInModal";
import { SignUpModal } from "./Modals/SignUpModal";

export const FrontPage = () => {

    const [showModal, setShowModal] = useState(false);
    // True is Log in, False is Sign up
    const [signUpOrLogIn, setSignUpOrLogIn] = useState(false);

    const toggleShowModal = () => {
        setShowModal(showModal => !showModal);
    }

    const togglesignUpOrLogIn = () => {
        setSignUpOrLogIn(signUpOrLogIn => !signUpOrLogIn);
    }

    const showLogInModal = () => {
        if (!showModal) toggleShowModal();

        if (signUpOrLogIn === false) togglesignUpOrLogIn();
        console.log(signUpOrLogIn ? "Login" : "Signup")
    }

    const showSignUpModal = () => {
        if (!showModal) toggleShowModal();

        if (signUpOrLogIn === true) togglesignUpOrLogIn();
        console.log(signUpOrLogIn ? "Login" : "Signup")
    }

    return (
        <div className={`flex flex-col items-start relative bg-white ${showModal && "w-screen h-screen overflow-hidden"}`}>
            <HeaderSection handleLoginButtonClick={showLogInModal} handleSignUpButtonClick={showSignUpModal} />
            <MainContentSection handleSignUpButtonClick={showSignUpModal} />
            <PopularCoursesSection />
            <TestimonialsSection />
            <FooterSection />

            {showModal && (<div className="absolute top-0 left-0 flex items-center justify-center content-center w-screen h-screen bg-gray-500/50 bg z-10">
                {signUpOrLogIn ? (<LogInModal handleClearIcon={toggleShowModal} switchToSignUp={togglesignUpOrLogIn} />) : (<SignUpModal switchToLogIn={togglesignUpOrLogIn} handleClearIcon={toggleShowModal} />)}
            </div>)}
        </div>
    );
};
