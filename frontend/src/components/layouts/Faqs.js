import React, { useState, useRef } from "react";
import {VscAdd} from 'react-icons/vsc'
import { loremIpsum } from 'react-lorem-ipsum';


const Faqs = () => {

const [faqQuestions, setFaqQuestions] = useState([
    { id: 0, question: "What is Scratch9ja?", answer: loremIpsum(),isActive: false },
    { id: 1, question: "How does it work?", answer: loremIpsum(),isActive: false },
    { id: 2, question: "Where can I play?", answer: loremIpsum(),isActive: false },
    { id: 3, question: "What can I win on Scratch9ja?", answer: loremIpsum(),isActive: false },
]);

const faqBox = faqQuestions.map(faq => {
    const displayClass = faq.isActive ? "opened" : "";

    return (
        <div className={"faq-box " + displayClass} onClick={ () => toggleAccordion(faq.id) }>
            <div className="flex justify-between faq-question">
                <h1>{ faq.question }</h1>
                <VscAdd />
            </div>
            <div className="faq-answer">
                <span>{ faq.answer }</span>
            </div>
        </div>
    );
});


const toggleAccordion = (faqId) => {
    let updatedFaqs = faqQuestions.map(faq => {
    if (faq.id === faqId) {
        faq.isActive = !faq.isActive;
    } else {
        faq.isActive = false;
    }
    return faq;
    });
    setFaqQuestions(updatedFaqs);
};

return (
    <div className="mt-20 mb-20">
        <div className="flex justify-center section-heading mt-20 mb-10">
            <span>Frequently Asked Questions</span>
        </div>
        <div className="flex justify-center faq-container">
            <div>
                { faqBox }
            </div>
        </div>
    </div>
);
};

export default Faqs;