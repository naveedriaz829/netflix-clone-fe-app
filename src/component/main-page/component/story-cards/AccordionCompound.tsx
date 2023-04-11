import React from "react";
import AccordionItem from "./component/Accordion/AccordionItem";
import AccordionHeader from "./component/Accordion/AccordionHeader";
import AccordionBody from "./component/Accordion/AccordionBody";
import FAQData from "../../../../faqs.json";
import './AccordionCompound.css'

function AccordionCompound() {

  
  return (
    <section className="accordion-wrapper">
      <h1 className="accordion-title">Frequently Asked Questions</h1>
      {FAQData.map((item: any) => (
        <AccordionItem key={item.id}>
          <AccordionHeader>{item.header}</AccordionHeader>
          <AccordionBody>{item.body}</AccordionBody>
        </AccordionItem>
      ))}
    </section>
  );
}

export default AccordionCompound;
