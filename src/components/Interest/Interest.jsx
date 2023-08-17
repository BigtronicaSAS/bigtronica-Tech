import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';
import './Interest.css';

const Interest = () => {
  const [expandedItems, setExpandedItems] = useState([0]); 

  const isItemExpanded = (uuid) => expandedItems.includes(uuid);

  const toggleExpanded = (uuid) => {
    if (isItemExpanded(uuid)) {
      setExpandedItems(expandedItems.filter((item) => item !== uuid));
    } else {
      setExpandedItems([...expandedItems, uuid]);
    }
  };

  return (
    <div className="interest-wrapper">
      <div className="paddings innerWidth flexCenter interest-container">
        <div className="i-left">
          <div className="image-contact">
            <img src="interest-image.svg" alt="preguntas" />
          </div>
        </div>

        <div className="flexCenter i-right">
          <span className='primaryText'>Preguntas Frecuentes..</span>
          <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={expandedItems}>
            {data.map((item, i) => {
              const isExpanded = isItemExpanded(i);
              return (
                <AccordionItem className={`accordionItem ${isExpanded ? "expanded" : ""}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton' onClick={() => toggleExpanded(i)}>
                      <div className="flexCenter icon">
                        {item.icon}
                      </div>
                      <span className="primaryText">
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      {item.detail}
                    </p>
                    <div className="viewInfo">
                    <a className='ViewButton' href={item.UrlInfo} target='blank'>{item.buttonInfo}</a>
                    </div>
                    
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Interest;
