import React, {useState, useRef} from 'react';

const Faqs = () => {

    const [currentFaq, setCurrentFaq] = useState(0)


    const [ faqQuestions, setFaqQuestions] = useState([
        {id: 0, name: 'What is Scratch9ja?', details: 'Scratch9ja is a gamified platform', isActive: false},
        {id: 1, name: 'How does it work?', details: 'Buy a card, scratch and win!', isActive: false},
        {id: 2, name: 'Where can i play?', details: 'Scratch9ja is accessible to you on your device and through physical cards',  isActive: false},
        {id: 3, name: 'What can i win on netflix', details: 'How much is it to play', isActive: false},
    ])



        
    const faqTab = faqQuestions.map(faq => {
        var detailsDisplay = faq.isActive ? 'block' : 'hidden'
        return(
            <div key={faqQuestions.id} onClick={() => filterAccordion(faq.id)} className={"tab-element " } >
                <span>{faq.name}</span>
                <p className={detailsDisplay}>{faq.details}</p>  
            </div>
        )
    })


    const filterAccordion = (faqId) => {
        let updatedFaqs = faqQuestions.map(faq => {
            if(faq.id === faqId) {
                faq.isActive = true
            }else{
                faq.isActive = false
            }
            return faq
        })
        setCurrentFaq(updatedFaqs)
    }


    return (
        <div>
            <div className="  ">{faqTab}</div>

            {/* <div>{FaqAnswers} </div> */}
        </div>
        
    )
}


export default Faqs
