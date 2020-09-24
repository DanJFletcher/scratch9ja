    import React, { useState, useRef } from "react";
    import { FiPlus, FiX } from "react-icons/fi";

    const Faqs = () => {
    const [currentFaq, setCurrentFaq] = useState(0);

    const [faqQuestions, setFaqQuestions] = useState([
        {
        id: 0,
        name: "What is Scratch9ja?",
        details:
            "veryyyy long yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga",
        isActive: false
        },
        {
        id: 1,
        name: "How does it work?",
        details:
            "veryyyy long yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga!",
        isActive: false
        },
        {
        id: 2,
        name: "Where can i play?",
        details:
            "veryyyy long yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga",
        isActive: false
        },
        {
        id: 3,
        name: "What can i win on Scratch9ja?",
        details:
            "veryyyy long yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga yama yama jaga jaga",
        isActive: false
        }
    ]);

    const faqTab = faqQuestions.map((faq) => {
        const detailsDisplay = faq.isActive ? "block" : "hidden";

        const changeIcon = faq.isActive ? <FiPlus /> : <FiX />;

        return (
        <div
            key={faqQuestions.id}
            onClick={() => filterAccordion(faq.id)}
            className={""}
        >
            <span
            className={
                "Accordion-name md:font-bold ml-auto mr-auto mt-2 text-2xl pt-5 pl-8 faq-title" +
                changeIcon
            }
            >
            {faq.name}
            {/* <FiPlus/> 
                        <FiX/> */}
            </span>
            <p className={" ml-auto mr-auto tab-content " + detailsDisplay}>
            {faq.details}{" "}
            </p>
        </div>
        );
    });

    const filterAccordion = (faqId) => {
        let updatedFaqs = faqQuestions.map((faq) => {
        if (faq.id === faqId) {
            faq.isActive = true;
        } else {
            faq.isActive = false;
        }
        return faq;
        });
        setCurrentFaq(updatedFaqs);
    };

    return (
        <div className=" mb-20 ">
            <h1 className="text-5xl md:font-bold text-center faq-header ">
                Frequently Asked Questions
            </h1>
            <div className="  ">{faqTab}</div>
        </div>
    );
    };

    export default Faqs;
