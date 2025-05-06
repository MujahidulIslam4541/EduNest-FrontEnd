import React from 'react'

const FAQ = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="join join-vertical w-full bg-base-100 shadow-lg rounded-lg">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title text-lg font-semibold">
                        ❓ Why should I join EduNest?
                    </div>
                    <div className="collapse-content text-sm">
                        EduNest is more than just an online learning platform — it's a complete learning experience designed to help you grow from beginner to job-ready professional. When you join EduNest, you get access to high-quality courses taught by industry experts, real-world projects that build your portfolio, and a supportive community that helps you every step of the way. With features like progress tracking, instructor interaction, lifetime course access, and certificates, EduNest ensures that you're not just learning — you're preparing for real opportunities. Whether you're starting fresh or upgrading your skills, EduNest is the smart choice for your learning journey.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-lg font-semibold">
                        ❓ What kind of support does EduNest offer to learners?
                    </div>
                    <div className="collapse-content text-sm">
                        EduNest offers a dedicated support system where learners can get help through live chat, email, and community forums. Whether you’re facing technical issues or need help understanding course content, our support team and instructors are always ready to assist you quickly and effectively.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-lg font-semibold">
                        ❓ Are the courses beginner-friendly?
                    </div>
                    <div className="collapse-content text-sm">
                        Yes, all EduNest courses are carefully designed with beginners in mind. Whether you’re completely new to programming, design, or any other field, our courses start from the absolute basics and gradually progress to advanced topics. Each lesson includes easy-to-understand explanations, hands-on projects, and real-life examples. You’ll also have access to community support and instructor guidance, so you’ll never feel lost on your learning journey. EduNest ensures that even someone with no prior experience can confidently build real-world skills from day one.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-lg font-semibold">
                        ❓ Is there a certificate after completing a course?
                    </div>
                    <div className="collapse-content text-sm">
                        Yes, EduNest provides an official certificate of completion after you successfully finish any course. This certificate is digitally generated and can be downloaded or shared directly on platforms like LinkedIn. It includes your name, course title, instructor name, and completion date — making it a valuable addition to your professional portfolio or resume. Whether you're applying for jobs, freelancing, or showcasing your skills to potential clients, this certificate serves as proof of your dedication and the knowledge you've gained through structured, project-based learning.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-lg font-semibold">
                        ❓ If I take a course from EduNest, will I be able to get a job directly?
                    </div>
                    <div className="collapse-content text-sm">
                        EduNest is designed to equip you with real-world, job-ready skills through hands-on projects, expert guidance, and career-focused course content. While we do not guarantee direct job placement, many of our learners have successfully landed jobs and freelance opportunities after completing our courses. We focus on building your portfolio, enhancing your problem-solving skills, and preparing you for interviews — all of which significantly increase your chances of getting hired. With dedication and consistent practice, EduNest can be your stepping stone to a professional career.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FAQ
