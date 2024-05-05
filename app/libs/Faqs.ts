interface IFaqData {
    question: string;
    answer: string;
    id: number;
}

const faqData: IFaqData[] = [
    {
      question: "What is your educational platform about?",
      answer: "Our platform provides a community-backed learning experience, offering various resources and fostering collaboration among learners.",
      id: 1,
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up for a free account and explore the available courses and materials. We also offer paid plans with additional benefits.",
      id: 2,
    },
    // Add more FAQ items
  ];

export default faqData