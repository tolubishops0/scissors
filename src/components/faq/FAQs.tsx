import React, { useState } from "react";

import blackline from "../../assets/black-line.png";
import plus from "../../assets/plus.svg";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

function FAQs({ faqs }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-10">
      <div className="flex items-center justify-center gap-x-2">
        <img src={blackline} alt="blackline" className="md:w-[6px]" />
        <h1 className="font-bold text-lg md:text-xl lg:text-3xl">
          FAQs<span className="text-secTextColorBlue"> Scissors. </span>
        </h1>
      </div>

      <div className="md:py-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            } w-[90%] mx-auto mt-5`}>
            <div
              className="font-semibold text-sm md:text-lg flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}>
              <h3>{faq.question}</h3>
              <button>
                <img src={plus} alt="plus" className="w-6" />
              </button>
            </div>
            {activeIndex === index && (
              <div className="font-normal text-xs md:text-base m-2 text-justify">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const faqs: FAQ[] = [
    {
      question: "How does URL shortening work?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    },
    {
      question: "How does URL shortening work?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    },
    {
      question: "Is it necessary to create an account ?",
      answer: "yes. lorem ipsum d lorem ipsum d lorem ipsum d lorem ips",
    },
    {
      question: "Is it necessary to create an account ?",
      answer: "yes. lorem ipsum d lorem ipsum d lorem ipsum d lorem ips",
    },
  ];

  return <FAQs faqs={faqs} />;
}

export default App;
