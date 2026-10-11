import type {
  ServiceCopy,
  ServiceSlug,
  ServiceUiCopy,
} from "@/lib/service-pages";

export const serviceUiEn: ServiceUiCopy = {
  estimate: "Typical timeline",
  bestFor: "Best for",
  problemsEyebrow: "Common challenges",
  scopeEyebrow: "Outcomes and scope",
  scopeTitle: "What you get",
  outcomesTitle: "Business outcomes",
  deliverablesTitle: "What we deliver",
  processEyebrow: "How we work",
  processTitle: "From first conversation to go-live",
  step: "Step",
  proofEyebrow: "Proof",
  projectKindClient: "Client project",
  projectKindProduct: "Product demo",
  viewCaseStudy: "Read the case study",
  tryDemo: "Try the demo",
  demoNote:
    "The demo is a reference for flow and interface. The production version is tailored to your data, roles, and business process.",
  faqEyebrow: "FAQ",
  faqTitle: "Questions we often hear",
  relatedEyebrow: "More services",
  relatedTitle: "Other things we can build for you",
  relatedCta: "View service",
};

export const servicePagesEn: Record<ServiceSlug, ServiceCopy> = {
  "company-profile": {
    shortName: "Company Profile",
    summary:
      "A professional website that explains what you do and makes it easy for prospects to reach you.",
    metaTitle: "Company Profile Website Development",
    metaDescription:
      "Company profile website development for businesses in Indonesia: content structure, responsive design, basic SEO, and handover. Typically 2-4 weeks.",
    keywords: [
      "company profile website",
      "corporate website development Indonesia",
      "business website Indonesia",
      "website development Bandung",
    ],
    eyebrow: "Company Profile Launch",
    headline:
      "A company profile website that makes your business look credible and easy to reach",
    lede: "We plan the page structure, write the service copy, build a responsive site, and set up basic SEO and an inquiry form, so prospects understand what you offer and know how to contact you.",
    primaryCta: "Request a Website Estimate",
    demoCta: "View Demo",
    timeline: "2-4 weeks",
    bestFor:
      "Service companies, manufacturers, distributors, healthcare providers, schools, and organizations that need to look credible online.",
    problemsTitle: "Signs your website isn't working for the business",
    problems: [
      "Your company profile is still a PDF that is hard to find on Google and awkward to share",
      "The current site doesn't clearly explain your services, track record, or how to get in touch",
      "It looks broken or loads slowly on phones",
    ],
    outcomes: [
      "Your brand looks serious when sent to prospects, partners, or tender committees",
      "Visitors see what you offer, the proof behind it, and how to contact you, all in one flow",
      "Your sales team gets one consistent link to use in follow-ups",
    ],
    deliverables: [
      "Page structure: home, about, services, projects, and contact",
      "Copywriting: positioning, value proposition, and calls to action",
      "Inquiry form, WhatsApp button, SEO metadata, sitemap, and robots file",
      "Deployment to your domain, basic analytics, and content handover",
    ],
    workflow: [
      {
        label: "Discovery",
        text: "We map your positioning, target customers, core services, and the proof of credibility you can show.",
      },
      {
        label: "Content and design",
        text: "We draft the page structure, copy, visual hierarchy, and CTA components, then review them with you.",
      },
      {
        label: "Build and launch",
        text: "We build the responsive site, set up basic SEO and analytics, and deploy it to your domain.",
      },
    ],
    proofTitle: "See a finished example",
    proofText:
      "Our company profile demo is a multi-page corporate site covering about, operations, governance, sustainability, and contact. Open the demo to see the design and flow, or read the case study.",
    faq: [
      {
        question: "Can you help if our content isn't ready?",
        answer:
          "Yes. We help shape the page structure, headlines, service narrative, and CTAs from whatever you already have, such as an existing PDF profile, brochure, or catalog.",
      },
      {
        question: "How long does it take?",
        answer:
          "Usually 2-4 weeks, depending on the number of pages and how ready your content is. We confirm the exact schedule once the scope is agreed.",
      },
      {
        question: "Can the website grow after launch?",
        answer:
          "Yes, in stages. The first version can focus on credibility, then add a blog, product catalog, careers page, or CRM integration.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Cost follows scope: the number of pages, how much copy we need to write, and any extra features. Tell us about your business through the form or WhatsApp and we will send an estimate covering scope, schedule, and cost.",
      },
    ],
    ctaHeadline: "Need a company profile website your sales team can use?",
    ctaSubtext:
      "Tell us about your business and which pages you need. We will send an estimate of the scope and schedule.",
    whatsappMessage:
      "Hello CatalystForge, I would like to discuss a company profile website.",
  },

  "custom-crm": {
    shortName: "Custom CRM",
    summary:
      "Sales pipeline, follow-ups, and customer data in one system built around your process.",
    metaTitle: "Custom CRM Development for Sales Teams",
    metaDescription:
      "Custom CRM for sales teams in Indonesia: pipeline, follow-ups, customer data, and reports built around your sales process. Typically 4-8 weeks.",
    keywords: [
      "custom CRM Indonesia",
      "CRM development company",
      "sales pipeline software",
      "custom CRM for business",
    ],
    eyebrow: "Custom CRM",
    headline:
      "A custom CRM for a tidier sales pipeline, follow-ups, and customer data",
    lede: "We build a CRM around how your team actually sells: pipeline stages, lead ownership, follow-up tasks, and reports. It replaces the spreadsheets and personal notes each salesperson keeps today.",
    primaryCta: "Discuss a Custom CRM",
    demoCta: "Try the CRM Demo",
    timeline: "4-8 weeks",
    bestFor:
      "B2B sales teams, distributors, agencies, schools, clinics, and any business with a prospect pipeline that needs order.",
    problemsTitle: "When spreadsheets stop being enough for a sales team",
    problems: [
      "Leads arrive from many channels, but their status isn't tracked in one place",
      "Follow-ups depend on each salesperson's personal notes, so prospects slip through when someone leaves",
      "Management can't read the pipeline because the data sits in several spreadsheets and has to be compiled by hand",
    ],
    outcomes: [
      "A transparent pipeline for both sales and management",
      "Follow-ups no longer fall through the cracks because activities and tasks are logged",
      "Sales reports you can read directly, without repeated manual compilation",
    ],
    deliverables: [
      "Dashboard for pipeline, accounts, contacts, activities, and follow-up tasks",
      "Sales stages that match your business process",
      "Data import/export, filters, search, and role-based access",
      "Deployment, user documentation, and initial support",
    ],
    workflow: [
      {
        label: "Pipeline mapping",
        text: "We map lead sources, stages, ownership, activities, and the reports you need.",
      },
      {
        label: "First version (MVP)",
        text: "We build the core modules so your team can start logging accounts, deals, and follow-ups.",
      },
      {
        label: "Review and growth",
        text: "We add automation, reports, and integrations once daily use has proven itself.",
      },
    ],
    proofTitle: "See the CRM in action",
    proofText:
      "Our CRM demo includes a sales pipeline dashboard, accounts and contacts, follow-up tasks, and reports with role-based access.",
    faq: [
      {
        question: "Can you migrate our data from spreadsheets?",
        answer:
          "Yes. Spreadsheet data becomes the basis for accounts, contacts, pipeline, and activities. We map the columns first, then import.",
      },
      {
        question: "Can it connect to our lead channels?",
        answer:
          "Yes, once the core workflow is stable. For example a website form, email, WhatsApp links, or a dashboard for management.",
      },
      {
        question: "Do all the features have to be built at once?",
        answer:
          "No. We start with the core modules (accounts, pipeline, and follow-ups), then add reports and automation once your team uses it every day. The first version usually takes 4-8 weeks.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Cost follows scope: the number of modules, integrations, and how much data we migrate. Describe your sales process through the form or WhatsApp and we will send an estimate covering scope, schedule, and cost.",
      },
    ],
    ctaHeadline: "Want a tidier, more visible sales pipeline?",
    ctaSubtext:
      "Tell us how your team sells and which tools you use today. We will help scope a realistic first version of your CRM.",
    whatsappMessage:
      "Hello CatalystForge, I would like to discuss a custom CRM for my sales team.",
  },

  "custom-hris": {
    shortName: "Custom HRIS",
    summary:
      "Employee data, attendance, leave, and payroll summaries organized in one system.",
    metaTitle: "Custom HRIS Development for Companies",
    metaDescription:
      "Custom HRIS for companies in Indonesia: employee data, attendance, leave, payroll summaries, and HR reports that follow your policies. Typically 4-8 weeks.",
    keywords: [
      "custom HRIS Indonesia",
      "HRIS development company",
      "employee management system",
      "attendance and leave software",
    ],
    eyebrow: "Custom HRIS",
    headline:
      "A custom HRIS for employee data, attendance, leave, and payroll you can control",
    lede: "We build an HR system that runs your company's own policies: attendance rules, leave types, approval flows, and payroll summaries, with access for admins and managers according to their roles.",
    primaryCta: "Discuss a Custom HRIS",
    demoCta: "Try the HRIS Demo",
    timeline: "4-8 weeks",
    bestFor:
      "Businesses that are outgrowing manual handling of employee data, attendance, payroll, leave, and HR administration.",
    problemsTitle: "When HR administration starts taking too much time",
    problems: [
      "Employee data is scattered across spreadsheets, folders, and chats, so it is hard to find and often out of date",
      "Attendance, leave, and payroll need repeated manual compilation every period",
      "HR struggles to produce quick reports for management",
    ],
    outcomes: [
      "Employee data in one place and easy to keep current",
      "More consistent handling of leave, attendance, and payroll",
      "HR reports that are ready to support operational decisions",
    ],
    deliverables: [
      "Employee database, department structure, positions, and employment status",
      "Attendance, leave, payroll summary, and simple approvals",
      "HR dashboard, report filters, and data export",
      "Admin and manager roles, documentation, and initial support",
    ],
    workflow: [
      {
        label: "Policy mapping",
        text: "We map your attendance, leave, payroll, and approval rules and your organization structure.",
      },
      {
        label: "Core HR modules",
        text: "We build the employee data, attendance, leave request, and HR dashboard modules.",
      },
      {
        label: "Handover",
        text: "We prepare documentation, import your data, review access rights, and support you through go-live.",
      },
    ],
    proofTitle: "See the HRIS in action",
    proofText:
      "Our HRIS demo brings employee data, attendance, payroll, performance reviews, and the org structure into one dashboard.",
    faq: [
      {
        question: "Do all the modules have to be built at once?",
        answer:
          "No. Start with employee data and attendance, then add leave, payroll, and approvals in stages. For payroll, our standard scope is a summary; more complex rules are covered during policy mapping.",
      },
      {
        question: "Can you import our existing employee data?",
        answer:
          "Yes, as long as the data structure can be mapped clearly. A tidy Excel or CSV file is usually the easiest to process.",
      },
      {
        question: "How is access to employee data controlled?",
        answer:
          "Access is split by role. Admins and managers only see and edit the data they are responsible for. We define the roles with you during policy mapping.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Cost follows scope: the number of modules, how complex your leave and payroll rules are, and how much data we import. Describe your HR needs through the form or WhatsApp and we will send an estimate covering scope, schedule, and cost.",
      },
    ],
    ctaHeadline: "Ready to bring order to HR administration?",
    ctaSubtext:
      "Tell us how attendance, leave, and payroll work today. We will help decide which modules to build first.",
    whatsappMessage:
      "Hello CatalystForge, I would like to discuss a custom HRIS for my company.",
  },

  "custom-pos": {
    shortName: "Custom POS",
    summary:
      "Checkout transactions, inventory, and sales reports by product and branch in one system.",
    metaTitle: "Custom POS Development: Checkout and Inventory",
    metaDescription:
      "Custom POS for retail and F&B: checkout transactions, inventory, multi-branch support, and sales reports built around your operations. Typically 4-8 weeks.",
    keywords: [
      "custom POS Indonesia",
      "POS system development",
      "retail point of sale software",
      "inventory management app",
    ],
    eyebrow: "Custom POS",
    headline:
      "A custom POS for clearer transactions, inventory, and sales reports",
    lede: "We build a checkout system that is connected to inventory and reporting, so transactions, stock movements, and sales by product or branch are all recorded in one system.",
    primaryCta: "Discuss a Custom POS",
    demoCta: "Try the POS Demo",
    timeline: "4-8 weeks",
    bestFor:
      "Retail, F&B, multi-branch stores, small distributors, and any sales business that needs tidier transactions, inventory, and reporting.",
    problemsTitle: "When manual checkout records start causing problems",
    problems: [
      "Checkout transactions aren't connected to inventory, so system counts often differ from what is on the shelf",
      "Owners can't easily see which products sell best or how each branch performs",
      "Sales summaries need a lot of manual corrections at the end of the day or month",
    ],
    outcomes: [
      "Daily transactions recorded consistently",
      "Inventory that is easy to track by product and branch",
      "Sales reports you can read without a long manual summary",
    ],
    deliverables: [
      "Checkout, product catalog, transactions, discounts, and payment methods",
      "Inventory, stock in and out, and low-stock alerts",
      "Sales reports by product and branch, plus data export",
      "Cashier and admin roles, deployment, documentation, and initial support",
    ],
    workflow: [
      {
        label: "Sales flow mapping",
        text: "We map your checkout process, inventory, products, returns, branches, and key reports.",
      },
      {
        label: "POS first version",
        text: "We build the transaction, inventory, dashboard, and report export modules.",
      },
      {
        label: "Operational test",
        text: "We test the daily flow with your cashiers and admins, then decide which integrations to add.",
      },
    ],
    proofTitle: "See the POS in action",
    proofText:
      "Our POS demo covers checkout transactions, product and price management, multi-branch inventory, and daily sales reports.",
    faq: [
      {
        question: "Can it support multiple branches?",
        answer:
          "Yes. Branch structure, user roles, and per-branch reports can be set up from the first version.",
      },
      {
        question: "Can it connect to receipt printers or digital payments?",
        answer:
          "It can, depending on your needs. The first version focuses on transactions and inventory; printer or payment integrations are added once the checkout flow is stable.",
      },
      {
        question: "What about our existing product and stock data?",
        answer:
          "We cover that during mapping. A product list with prices and opening stock from a spreadsheet can usually serve as the basis for the catalog.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Cost follows scope: the number of branches, checkout features, and device or payment integrations. Describe how your store operates through the form or WhatsApp and we will send an estimate covering scope, schedule, and cost.",
      },
    ],
    ctaHeadline: "Want checkout, inventory, and sales reports connected?",
    ctaSubtext:
      "Tell us your type of business, how many branches you run, and how you record sales today. We will help scope a realistic POS.",
    whatsappMessage:
      "Hello CatalystForge, I would like to discuss a custom POS system for my business.",
  },

  "ai-support": {
    shortName: "AI Support",
    summary:
      "An AI chatbot backed by a knowledge base, with handoff to your team for customer questions.",
    metaTitle: "AI Chatbot and AI Support for Business",
    metaDescription:
      "AI chatbot and AI support with a knowledge base and handoff to your human team, so customers get faster answers. Typically 1-3 weeks.",
    keywords: [
      "AI support Indonesia",
      "AI chatbot development Indonesia",
      "customer support automation",
      "AI knowledge base chatbot",
    ],
    eyebrow: "AI Automation Sprint",
    headline:
      "AI support and chatbots that answer customers faster and more consistently",
    lede: "We build a chatbot that answers from your own knowledge base (FAQs, service documents, and SOPs), complete with a handoff to your team for sensitive or out-of-scope questions.",
    primaryCta: "Discuss AI Support",
    demoCta: "Try the AI Demo",
    timeline: "1-3 weeks",
    bestFor:
      "Businesses that get the same customer questions again and again, keep an internal knowledge base or service FAQ, or want a chatbot as the first response.",
    problemsTitle: "When an AI chatbot starts to make sense for your business",
    problems: [
      "Customer service answers the same questions over and over",
      "Service information is scattered, so answers differ from one admin to the next",
      "Your team needs a fast first response without taking people out of the loop for complex cases",
    ],
    outcomes: [
      "Repeated questions answered faster, without waiting for an admin",
      "More consistent answers because they come from a structured knowledge base",
      "Your team can monitor conversations and improve answers over time",
    ],
    deliverables: [
      "AI chatbot or assistant flow built for your service",
      "Knowledge base, prompts, fallback, and handoff to a human admin",
      "Conversation console, answer audit, and basic analytics",
      "Deployment, early monitoring, and answer iteration",
    ],
    workflow: [
      {
        label: "Knowledge mapping",
        text: "We gather FAQs, SOPs, service documents, answer boundaries, and handoff scenarios.",
      },
      {
        label: "Assistant build",
        text: "We build the chatbot flow, prompts, knowledge base, console, and conversation tracking.",
      },
      {
        label: "Test and monitor",
        text: "We test answers, refine prompts, and watch response quality in the early days of use.",
      },
    ],
    proofTitle: "From a hospital chatbot to the management console",
    proofText:
      "Pomeng helps patients and visitors of RS Prima Inti Medika find hospital service information through WhatsApp. The AI Support Console demo shows the management side: chat, knowledge base, and conversation analytics.",
    faq: [
      {
        question: "Can conversations be handed over to a human admin?",
        answer:
          "Yes. We set up a fallback handoff so sensitive or out-of-scope questions are passed on to your team.",
      },
      {
        question: "Where can the chatbot's knowledge come from?",
        answer:
          "The knowledge base can start from FAQs, service documents, SOPs, catalogs, or existing customer support conversations.",
      },
      {
        question: "Which channels can the chatbot run on?",
        answer:
          "We decide the channel during mapping, based on where your customers ask questions. The RS Prima Inti Medika chatbot, one of our projects, is connected to WhatsApp.",
      },
      {
        question: "How do you keep the AI's answers reliable?",
        answer:
          "Answers are limited to the knowledge base and the response boundaries we agree on. Conversations are logged in the console for auditing, and out-of-scope questions are routed to an admin.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Cost follows scope: the number of knowledge sources, channels, and console needs. Tell us the questions your customers ask most through the form or WhatsApp and we will send an estimate covering scope, schedule, and cost.",
      },
    ],
    ctaHeadline: "Want customers to get answers faster?",
    ctaSubtext:
      "Tell us the questions your team hears most. We will help map the knowledge base and handoff flow for a first chatbot.",
    whatsappMessage:
      "Hello CatalystForge, I would like to discuss an AI chatbot for my customer support.",
  },
};
