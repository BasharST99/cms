export type RelationalItem<T> = { item?: T | null };

export type HeroRecord = {
  id: number;
  title?: string;
  boldtitle?: string;
  subtitle?: string;
  hero_image?: string | null;
  premium_properties?: string;
  premium_properties_value?: number | string;
  expert_agents?: string;
  expert_agents_value?: number | string;
  client_satisfaction?: string;
  client_satisfaction_value?: number | string;
};

export type InvestHeroRecord = {
  id: number;
  title?: string;
  subtitle?: string;
  paragraph?: string;
  button1?: string;
  button2?: string;
  tag1?: string;
  tag1_value?: string;
  tag2?: string;
  tag2_value?: string;
  tag3?: string;
  tag3_value?: string;
  tag4?: string;
  tag4_value?: string;
  hero_image?: string | null;
};

export type FeaturedPropertyRecord = {
  id: number;
  title?: string;
  subtitle?: string;
  blocks?: RelationalItem<Record<string, unknown>>[];
  properties_list?: RelationalItem<Record<string, unknown>>[];
  sort_by?: RelationalItem<Record<string, unknown>>[];
  properties_button?: string;
};

export type ContactRecord = {
  id: number;
  title?: string;
  subtitle?: string;
  call_us?: string;
  mobile_number?: string;
  email_us?: string;
  email?: string;
  visit_us?: string;
  location?: string;
  form_title?: string;
  full_name_placeholder?: string;
  email_placeholder?: string;
  phone_placeholder?: string;
  requirements?: string;
  send_button?: string;
  service_needed?: RelationalItem<Record<string, string | undefined>>[];
};

export type AgentRecord = {
  id: number;
  title: string;
  subtitle: string;
  agents_button: string;
  agents: RelationalItem<Record<string, unknown>>[];
};

export type MarketInsightRecord = {
  id: number;
  title?: string;
  subtitle?: string;
  insights?: RelationalItem<Record<string, unknown>>[];
  insights_trendin?: RelationalItem<Record<string, unknown>>[];
};

export type OurServicesRecord = {
  id: number;
  titel?: string;
  title?: string;
  subtitle?: string;
  services_data?: RelationalItem<Record<string, unknown>>[];
};

export type InvestmentToolsRecord = {
  id: number;
  title: string;
  subtitle: string;
  roi_calculator_title: string;
  property_value: string;
  monthly_rent: string;
  loan_amount: string;
  interest_rate: string;
  loan_term: string;
  investment_summary: string;
  monthly_payment: string;
  annual_rent: string;
  market_insights: string;
  market_insights_tag1: string;
  market_insights_tag2: string;
  market_insights_tag3: string;
  get_investment_consultation: string;
};

export type FooterRecord = {
  id: number;
  description?: string;
  logo?: string | null;
  legal_links?: RelationalItem<Record<string, unknown>>[];
  locations?: RelationalItem<Record<string, unknown>>[];
  social_links?: RelationalItem<Record<string, unknown>>[];
  services?: RelationalItem<Record<string, unknown>>[];
  contact?: RelationalItem<Record<string, unknown>>[];
};
