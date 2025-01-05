"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react"

const faqItems = [
  {
    question: "How Much Will It Cost?",
    answer: "To get a better idea of the cost of what you want to build, give us a quick phone call. We’ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. Then we’ll be able to give you a ballpark figure. If you’re still interested, we’ll come to your place of business and come up with a firm quote."
  },
  {
    question: "How Long It Takes To Design?",
    answer: "The time limit of any assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client."
  },
  {
    question: "How Do I Associate With IT Company?",
    answer: "The process begins when you contact us with your requirements. We analyze your requirements and respond to you. On the basis of the further discussion, you can choose an engagement model that suits you the best. After that, we begin the process of development."
  },
  {
    question: "Can You Help My Current Site Look More Professional?",
    answer: "Yes. Give us your requirements and we have experienced expertise to help you give a new professional look that really wonders!"
  },
  {
    question: "When Do I Pay?",
    answer: "For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs. We understand that this is a big investment and want to help you budget for the expense in whatever way possible. We accept checks, PayPal, and all major credit cards."
  }
]

export function FAQ() {

  return (
    <>
     
     <section className="py-20 bg-gray-900" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="inline-flex items-center text-3xl font-bold text-cyan-400">
          <span className="mt-[18px] text-4xl">⌞</span>
            FAQ's
            <span className="ml-1 text-4xl">⌝</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none"
              >
                <AccordionTrigger className="bg-cyan-400 text-white px-6 py-4 rounded-lg hover:bg-cyan-500 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white mt-2 px-6 py-4 rounded-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
    </>
  )
}

