export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  badge: string;
  description: string;
  focus: string[];
}

export interface WhoWeHelpItem {
  title: string;
  tag: string;
  description: string;
}

export interface ModalityItem {
  name: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
