import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: 1,
    text: "처음 친해질 때 더 편한 사람은?",
    options: [
      {
        label: "A. 먼저 분위기를 띄워주는 사람",
        scores: { all: 2, friendA: 1 },
      },
      {
        label: "B. 조용히 말 걸어주는 사람",
        scores: { me: 1, friendB: 1, friendC: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "누군가의 호의가 더 기억에 남는 순간은?",
    options: [
      {
        label: "A. 다 같이 있을 때 자연스럽게 챙겨줬을 때",
        scores: { all: 2, friendA: 1 },
      },
      {
        label: "B. 둘이 있을 때 세심하게 챙겨줬을 때",
        scores: { me: 2, friendB: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "사람들이 나를 떠올릴 때 가장 먼저 드는 인상은?",
    options: [
      {
        label: "A. 같이 있으면 재밌고 반응이 살아나는 사람",
        scores: { friendA: 2, all: 1 },
      },
      {
        label: "B. 편하고 잔잔하게 오래 보고 싶은 사람",
        scores: { friendC: 2, friendB: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "관계에서 더 오래 기억나는 건?",
    options: [
      {
        label: "A. 같이 크게 웃었던 순간",
        scores: { all: 1, friendA: 2 },
      },
      {
        label: "B. 분위기 좋은 곳에서 편하게 보낸 시간",
        scores: { friendC: 2, me: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "누군가 나를 떠올리는 방식은 어느 쪽에 가까울까?",
    options: [
      {
        label: "A. 생각나면 바로 부르고 같이 보자는 타입",
        scores: { all: 2, friendA: 1 },
      },
      {
        label: "B. 중요한 순간에 조용히 챙기는 타입",
        scores: { friendB: 2, me: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "예상 못 한 연락이 왔을 때 더 기분 좋은 건?",
    options: [
      {
        label: "A. 갑자기 같이 놀자고 하는 연락",
        scores: { all: 1, friendA: 1, friendC: 1 },
      },
      {
        label: "B. 별말 없이 상태를 물어봐주는 연락",
        scores: { me: 2, friendB: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "나는 어떤 방식으로 주변의 호의를 끌어당길까?",
    options: [
      {
        label: "A. 밝고 티 나는 반응을 끌어당긴다",
        scores: { friendA: 2, all: 1 },
      },
      {
        label: "B. 담백하지만 오래 남는 반응을 끌어당긴다",
        scores: { friendB: 2, self: 1 },
      },
    ],
  },
  {
    id: 8,
    text: "호감을 표현하는 방식 중 더 끌리는 건?",
    options: [
      {
        label: "A. 티 나게 표현하는 솔직한 방식",
        scores: { friendA: 2, all: 1 },
      },
      {
        label: "B. 말보다 같이 시간을 보내는 방식",
        scores: { friendC: 2, me: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "나는 주변 사람들에게 어떤 인상에 가까울까?",
    options: [
      {
        label: "A. 자꾸 장난치고 싶고 반응 보고 싶은 사람",
        scores: { me: 2, friendA: 1 },
      },
      {
        label: "B. 취향 맞는 사람끼리 오래 보고 싶은 사람",
        scores: { friendC: 2, friendB: 1 },
      },
    ],
  },
  {
    id: 10,
    text: "결국 사람 사이에서 가장 중요한 건?",
    options: [
      {
        label: "A. 함께 만든 분위기와 순간",
        scores: { all: 2, friendA: 1 },
      },
      {
        label: "B. 편하게 오래 쌓이는 시간과 진심",
        scores: { friendB: 1, friendC: 1, self: 1 },
      },
    ],
  },
];