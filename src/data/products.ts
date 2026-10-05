export type DetailedItem = { title: string; description?: string };
export type UseCaseItem = { category?: string; items: string[] };
export type FAQItem = { question: string; answer: string };

export type Product = {
  slug: string;
  name: string;
  oneLiner?: string;
  category: string;
  description: string;
  price: string;
  affiliateComm: string;
  partnerComm: string;
  popular: boolean;
  features: string[];
  benefits: DetailedItem[];
  useCases: UseCaseItem[];
  superPowers?: DetailedItem[];
  deliverables?: string[];
  faqs?: FAQItem[];
  pitchDeckUrl?: string;
};

export const categories = ["All", "Bundles", "Software", "Automation"];

export const products: Product[] = [
  {
    slug: "bluerock-loyalty",
    pitchDeckUrl: "https://drive.google.com/file/d/1wRi13OfJrFA-qJV6GAxsnVZk6lvSEtT2/view?usp=sharing",
    name: "BlueRock Loyalty",
    oneLiner: "Reward every purchase. Bring customers back automatically. Turn loyalty into repeat revenue.",
    category: "Software",
    description: "BlueRock Loyalty is a digital loyalty and customer-retention system that rewards customers for coming back, keeps your brand on their phones, automates customer engagement, and helps businesses turn one-time buyers into consistent repeat customers.",
    price: "₦890,000",
    affiliateComm: "₦100,000",
    partnerComm: "₦50,000",
    popular: true,
    features: [
      "Digital loyalty card",
      "Apple Wallet support",
      "Google Wallet support",
      "QR-code customer onboarding",
      "Instant points and rewards",
      "Automated points updates",
      "Push notifications",
      "Lock-screen promotions",
      "Geolocation-triggered notifications",
      "Birthday automations",
      "Anniversary automations",
      "“We Miss You” reminders",
      "Customer segmentation",
      "Real-time loyalty dashboard",
      "Top-customer tracking",
      "Active loyalty-user tracking",
      "Dormant-customer tracking",
      "Promotion-performance tracking",
      "Purchase-frequency visibility",
      "Spending-behaviour visibility",
      "Multi-location support",
      "Integration with existing checkout/POS workflows",
      "Custom-branded loyalty card",
      "Automation workflows",
      "Promotional QR codes and materials",
      "Staff training",
      "Ongoing support"
    ],
    benefits: [
      { title: "Increase Repeat Purchases", description: "Give customers a real incentive to return instead of allowing the relationship to end after one transaction." },
      { title: "Increase Customer Spend", description: "Rewards encourage customers to continue buying and work toward the next benefit." },
      { title: "Bring Dormant Customers Back", description: "Automatically reconnect with customers who have stopped purchasing." },
      { title: "Build a Valuable Customer Database", description: "Understand who your customers are, how often they buy and who your most valuable customers are." },
      { title: "Communicate Directly With Customers", description: "Reach customers with offers and reminders without depending entirely on social-media algorithms." },
      { title: "Make Retention Measurable", description: "See who is active, who has gone quiet and how promotions are performing." },
      { title: "Reduce Manual Customer Engagement", description: "Automations handle repetitive customer communication that staff would otherwise have to remember manually." },
      { title: "Build More Predictable Revenue", description: "Instead of starting from zero every month, continue generating revenue from customers the business has already acquired." }
    ],
    superPowers: [
      { title: "Put Your Brand Directly on the Customer’s Phone", description: "Customers save a branded digital loyalty card directly into Apple Wallet or Google Wallet. No app. No passwords. No friction." },
      { title: "Reward Every Purchase", description: "Customers earn points and rewards as they buy, giving them a clear reason to return and continue purchasing." },
      { title: "Advertise Directly to Their Lock Screen", description: "Send promotions, reminders and relevant offers through push notifications instead of waiting for customers to open an email or see a social post." },
      { title: "Bring Customers Back Automatically", description: "Automate birthday offers, anniversary messages and “We Miss You” campaigns to re-engage customers who have stopped purchasing." },
      { title: "Reach Customers at the Right Location", description: "Use geolocation triggers to send relevant notifications when customers are near the business." },
      { title: "Know Who Your Best Customers Are", description: "See active loyalty members, top customers, dormant customers, frequency of purchase, spending behaviour and promotion performance from the dashboard." },
      { title: "Target Different Customers Differently", description: "Segment customers so the business can send different offers to: High-value customers, New customers, Loyal customers, Dormant customers, Customers who have not visited recently." },
      { title: "Work Across Multiple Locations", description: "Businesses with branches can manage loyalty across multiple locations rather than operating completely separate programmes." }
    ],
    useCases: [
      { category: "Hospitality", items: ["Restaurants", "Hotels", "Cafés", "Bars & lounges", "Spas", "Wellness businesses", "Shortlets", "Airbnbs"] },
      { category: "Retail & Consumer Businesses", items: ["Fashion", "Beauty", "Skincare", "Cosmetics", "Grocery", "Lifestyle brands", "E-commerce stores"] },
      { category: "Other Repeat-Customer Businesses", items: ["Healthcare", "Salons", "Auto care", "Fitness/wellness", "Any business with an existing customer base that should be purchasing repeatedly"] }
    ],
    deliverables: [
      "Custom-branded digital loyalty card",
      "Complete system setup",
      "Reward configuration",
      "Automation workflows",
      "Customer dashboard",
      "Geolocation notifications",
      "Promotional QR codes",
      "Customer segmentation",
      "Staff training",
      "Ongoing support"
    ],
    faqs: [
      { question: "Does BlueRock Loyalty require a mobile app?", answer: "No. Customers do not need to download an additional app or create another password. Their branded loyalty card sits directly inside Apple Wallet or Google Wallet. They simply scan a QR code and save the card to their phone." },
      { question: "Does the business need special hardware?", answer: "No additional expensive loyalty hardware is required. The programme is designed to work digitally using QR codes and can fit into the business’s existing checkout or customer-service process." },
      { question: "How do customers earn points?", answer: "Customers present their digital loyalty card, the QR code is scanned, and their points or rewards are updated. The exact reward structure can be configured around the business." },
      { question: "Does having the loyalty programme automatically bring customers back?", answer: "No. The programme provides the infrastructure to drive retention, but the business still needs a strong loyalty strategy and should actively promote it to existing and new customers. BlueRock can support with structuring rewards, campaigns and customer-engagement ideas." },
      { question: "What kind of loyalty programme can we run?", answer: "The programme can be structured around the business and its customers, including points, rewards, special offers, customer segments, birthday offers, win-back campaigns and other incentives designed to encourage repeat purchases." },
      { question: "Can we bring old or inactive customers back?", answer: "Yes. The system supports automated “We Miss You” reminders, birthday and anniversary campaigns, and targeted offers to customers who have not returned in a while." },
      { question: "Can we communicate directly with customers?", answer: "Yes. Push notifications can be used to send promotions, reminders and offers directly to customers through their loyalty cards, including notifications that can appear on their lock screens." },
      { question: "Can we target different customers with different offers?", answer: "Yes. Customer segmentation allows the business to create different campaigns for new customers, loyal customers, high-value customers or inactive customers instead of sending the same offer to everyone." },
      { question: "Can we see whether the programme is actually working?", answer: "Yes. The dashboard can show information such as top customers, active loyalty users, dormant customers, promotion performance, visit frequency and spending behaviour." },
      { question: "Can it work for a business with multiple branches?", answer: "Yes. BlueRock Loyalty supports multi-location businesses, allowing loyalty activity to be managed across different branches." },
      { question: "Does it replace our existing POS or checkout system?", answer: "Not necessarily. The loyalty programme can sit alongside the business’s existing customer journey and is designed to integrate without requiring the business to completely change its current checkout process." },
      { question: "Who is BlueRock Loyalty best for?", answer: "It is strongest for businesses where customers are expected to return regularly, such as restaurants, hotels, cafés, bars, spas, wellness businesses, beauty brands, retail stores, e-commerce businesses, healthcare businesses and other repeat-purchase businesses." },
      { question: "What does BlueRock handle?", answer: "BlueRock handles the core setup, including the branded loyalty card, system configuration, automation workflows, customer dashboard, QR materials, staff training and ongoing support." }
    ]
  },
  {
    slug: "sme-business-growth-bundle",
    pitchDeckUrl: "https://drive.google.com/file/d/1wRi13OfJrFA-qJV6GAxsnVZk6lvSEtT2/view?usp=sharing",
    name: "SME Business Growth Bundle",
    category: "Bundles",
    description: "A complete growth suite: Website + CRM + Loyalty Programme. Built to help growing businesses launch and scale their digital presence quickly.",
    price: "₦890,000",
    affiliateComm: "₦100,000",
    partnerComm: "₦50,000",
    popular: true,
    features: [
      "Professional Custom Website Design",
      "CRM Configuration & Setup",
      "Digital Loyalty Programme Integration",
      "Google Workspace & Email Setup",
      "1 Year Free Hosting & Domain"
    ],
    benefits: [
      { title: "Establishes instant professional credibility" },
      { title: "Saves 15+ hours a week on manual data entry" },
      { title: "Automates customer follow-ups and retention" },
      { title: "All-in-one scalable foundation for growth" }
    ],
    superPowers: [
      { title: "Instant Credibility", description: "A beautifully designed digital presence that converts." },
      { title: "Scale Without Hiring", description: "Automated systems do the heavy lifting of a junior team." },
      { title: "Data-Driven Decisions", description: "Know exactly where leads come from and how they convert." }
    ],
    useCases: [
      { category: "Ideal For", items: ["Retail stores moving to e-commerce", "Consulting firms needing professional branding", "Service businesses managing client pipelines"] }
    ]
  },
  {
    slug: "customer-relationship-management",
    name: "Customer Relationship Management (CRM)",
    category: "Software",
    description: "Manage leads, automate follow-ups, and organize sales pipelines efficiently. Perfect for businesses losing track of their prospects.",
    price: "₦450,000",
    affiliateComm: "₦45,000",
    partnerComm: "₦20,000",
    popular: false,
    features: [
      "Visual Sales Pipeline Builder",
      "Automated Email & SMS Follow-ups",
      "Lead Capture Forms & Webhooks",
      "Task Management & Reminders",
      "Advanced Sales Reporting & Analytics"
    ],
    benefits: [
      { title: "Prevents leads from falling through the cracks" },
      { title: "Increases sales conversion rates by 30%" },
      { title: "Gives managers complete visibility into team performance" }
    ],
    superPowers: [
      { title: "Pipeline Visibility", description: "See every deal at every stage in real-time." },
      { title: "Automated Outreach", description: "Never forget to follow up with a warm lead again." },
      { title: "Zero Lead Leakage", description: "Capture every inquiry automatically into your system." }
    ],
    useCases: [
      { category: "Ideal For", items: ["Real Estate Agencies managing buyers", "B2B Service Providers with long sales cycles", "Education consultancies managing student intakes"] }
    ]
  },
  {
    slug: "whatsapp-automation-suite",
    name: "WhatsApp Automation Suite",
    category: "Automation",
    description: "AI-powered WhatsApp chatbots for customer service and automated order taking directly in WhatsApp.",
    price: "₦250,000",
    affiliateComm: "₦25,000",
    partnerComm: "₦10,000",
    popular: false,
    features: [
      "24/7 AI Customer Support Chatbot",
      "Automated Order Processing Flow",
      "Abandoned Cart WhatsApp Reminders",
      "Broadcast Messaging to Customer Lists",
      "Multi-Agent Shared Inbox"
    ],
    benefits: [
      { title: "Provides instant replies to customers 24/7" },
      { title: "Reduces customer service workload by 70%" },
      { title: "Captures sales outside of business hours" }
    ],
    superPowers: [
      { title: "24/7 Availability", description: "Your business never sleeps, answering queries instantly." },
      { title: "Zero Response Time", description: "Eliminate customer frustration with instant, accurate replies." },
      { title: "Instant Cart Recovery", description: "Automatically message users who drop off during purchase." }
    ],
    useCases: [
      { category: "Ideal For", items: ["E-commerce stores taking orders via chat", "Logistics companies providing tracking updates", "Clinics automating appointment bookings"] }
    ]
  }
];
