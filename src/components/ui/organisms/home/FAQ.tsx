"use client"

import { faqsData } from '@/constants/homeSectionsData'
import { useState } from 'react'
import FAQQuestion from '../../molecules/FAQQuestion';
import { FaqItem } from '@/types';

const FAQ = () => {
    const [faqsState, setFaqsState] = useState(faqsData);

    const toggle = (index: number) => {
        setFaqsState((prev: any) =>
            prev.map((faq: FaqItem, i: any) => ({
                ...faq,
                isOpen: i === index ? !faq.isOpen : false,
            }))
        );
    };
  return (
      <section className='min-h-svh mx-auto flex flex-col items-center pt-20 lg:pt-24 pb-12 lg:pb-30'>
          <div className="w-full max-lg:max-w-[90%] lg:max-w-[80%] min-h-svh flex flex-col items-center justify-start gap-12 lg:gap-[12vh]">
              <h3 className="title">Question fréquentes</h3>
              <div className="w-full flex flex-col items-center justify-start gap-2">
                  {faqsState.map((faq, index) => (
                      <FAQQuestion
                          key={faq.question}
                          {...faq}
                          onToggle={() => toggle(index)}
                      />
                  ))}
              </div>
          </div>
      </section>
  )
}

export default FAQ
