export type EndingKey =
  | "all"
  | "me"
  | "friendA"
  | "friendB"
  | "friendC"
  | "self";

export type Option = {
  label: string;
  scores: Partial<Record<EndingKey, number>>;
};

export type Question = {
  id: number;
  text: string;
  options: [Option, Option];
};

export type Ending = {
  key: EndingKey;
  title: string;
  subtitle: string;
  analysis: string;
  surpriseTitle: string;
  surpriseMessage: string;
  members: string[];
};