import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default class areas extends Component {
    render() {
        return (
          <div className="areas"> 
           <h2>Areas of Wellness</h2>
           <div className="example">
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Financial
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ul>
                        <li>Start a savings account & add small payments if possible</li>
                        <li>Write a list before you go shopping</li>
                    </ul>
                        
                    
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Social
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ul>
                        <li>Volunteer in the community </li>
                        <li>Keep in touch with supportive friends and family</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Intellectual
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ul>
                        <li>Watch a documentary</li>
                        <li>Read for fun</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Occupational
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ul>
                        <li>Reflect on what you are doing and be open to change</li>
                        <li>Practice open communication and proper conflict management </li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Spiritual
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ul>
                        <li>Practice mindfulness</li>
                        <li>Look for a religious faith that aligns with your values</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Emotional
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ul>
                        <li>Practice gratitude</li>
                        <li>Share thoughts and feelings with someone you trust</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Environmental
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ul>
                        <li>Use reusable bags</li>
                        <li>Recycle and compost</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Physical
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <ul>
                        <li>Eat foods that make you feel good</li>
                        <li>Maintain a regular sleep schedule</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
        </div>
    );
        }
    }



