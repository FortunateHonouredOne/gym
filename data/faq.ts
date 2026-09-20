export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Membership" | "Facilities";
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where exactly is Dark Gym City located in Thrissur?",
    answer: "Dark Gym City is situated on the Ground Floor of Thrissur Sports Center on Azhikkodan Smarak Road in Kuriachira, Thrissur, Kerala (PIN: 680006). It is easily accessible from all central parts of Thrissur with ample on-site vehicle parking.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "What are the gym opening hours?",
    answer: "The gym operates Monday through Saturday from 5:00 AM to 10:00 PM. Dark Gym City is closed on Sundays for routine deep sanitization and equipment maintenance.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "Are there dedicated sessions or hours for women?",
    answer: "Yes! Dark Gym City hosts an exclusive dedicated Ladies Session every day from 10:00 AM to 1:00 PM (Monday through Saturday). During this window, the gym provides a comfortable, private environment tailored specifically for women with attentive coach support.",
    category: "Facilities"
  },
  {
    id: "faq-4",
    question: "How can I inquire about membership plans and pricing?",
    answer: "We offer flexible membership packages including monthly, quarterly, half-yearly, and annual plans. Because plans are customized based on individual fitness goals (general access vs personal training), we invite you to click 'Ask About Membership' or message us on WhatsApp (+91 97469 36105) for current rates.",
    category: "Membership"
  },
  {
    id: "faq-5",
    question: "Can I tour the facility or request a visit before joining?",
    answer: "Absolutely. We encourage prospective members to visit during workout hours to experience the training atmosphere, inspect the equipment, and meet the coaching staff. You can book a walk-in visit using the 'Request a Visit' button on this site.",
    category: "Membership"
  },
  {
    id: "faq-6",
    question: "Is personal training (1-on-1 coaching) available?",
    answer: "Yes, structured personal training is offered by certified trainers for goals such as progressive strength building, fat loss, muscle hypertrophy, and postural correction. Personal training includes dedicated form correction and custom programming.",
    category: "Membership"
  },
  {
    id: "faq-7",
    question: "Is vehicle parking available at the gym?",
    answer: "Yes, members have dedicated parking spaces available directly at Thrissur Sports Center for both two-wheelers and four-wheelers.",
    category: "Facilities"
  }
];
