import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: 1,
    text: "처음 친해질 때 더 편한 사람은?",
    options: [
      {
        label: "A. 먼저 분위기를 띄워주는 사람",
        scores: { all: 2, friendB: 1 },
      },
      {
        label: "B. 조용히 말 걸어주는 사람",
        scores: { me: 2, friendA: 1, self: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "누군가의 호의가 더 기억에 남는 순간은?",
    options: [
      {
        label: "A. 다 같이 있을 때 나를 챙겨줬을 때",
        scores: { all: 2, friendB: 1 },
      },
      {
        label: "B. 둘이 있을 때 세심하게 챙겨줬을 때",
        scores: { me: 2, friendA: 2 },
      },
    ],
  },
  {
    id: 3,
    text: "사람들이 나를 떠올릴 때 가장 먼저 드는 인상은?",
    options: [
      {
        label: "A. 같이 있으면 분위기가 살아나는 사람",
        scores: { all: 2, friendB: 2 },
      },
      {
        label: "B. 은근히 신경 쓰이고 챙기고 싶은 사람",
        scores: { me: 2, friendA: 1, self: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "관계에서 더 오래 기억나는 건?",
    options: [
      {
        label: "A. 같이 크게 웃었던 순간",
        scores: { all: 2, friendB: 2 },
      },
      {
        label: "B. 별말 없었는데도 느껴진 진심",
        scores: { me: 2, friendA: 2 },
      },
    ],
  },
  {
    id: 5,
    text: "누군가 나를 떠올리는 방식은 어느 쪽에 가까울까?",
    options: [
      {
        label: "A. 생각나면 바로 부르고 같이 보자는 타입",
        scores: { all: 2, friendB: 1 },
      },
      {
        label: "B. 조용히 기억해두고 챙기는 타입",
        scores: { me: 2, friendA: 2, self: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "예상 못 한 연락이 왔을 때 더 기분 좋은 건?",
    options: [
      {
        label: "A. 단체로 모이자는 연락",
        scores: { all: 2, friendB: 1 },
      },
      {
        label: "B. 나만 따로 찾는 연락",
        scores: { me: 2, friendA: 2 },
      },
    ],
  },
  {
    id: 7,
    text: "나는 주변인들에게서 어떤 반응을 끌어낼까?",
    options: [
      {
        label: "A. 밝고 티 나는 반응",
        scores: { all: 2, friendB: 2 },
      },
      {
        label: "B. 조용하지만 깊은 반응",
        scores: { me: 2, friendA: 1, self: 2 },
      },
    ],
  },
  {
    id: 8,
    text: "호감을 표현하는 방식 중 더 끌리는 건?",
    options: [
      {
        label: "A. 티 나게 표현하는 솔직한 방식",
        scores: { all: 2, friendB: 2 },
      },
      {
        label: "B. 말보다 행동으로 보여주는 방식",
        scores: { me: 2, friendA: 2, self: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "나는 주변 사람들에게 어떤 인상에 가까울까?",
    options: [
      {
        label: "A. 같이 있으면 재밌고 자꾸 부르고 싶은 사람",
        scores: { all: 2, friendB: 1, friendA: 1 },
      },
      {
        label: "B. 은근히 챙겨주고 싶어지는 사람",
        scores: { me: 2, friendA: 2, self: 1 },
      },
    ],
  },
  {
    id: 10,
    text: "결국 사람 사이에서 가장 중요한 건?",
    options: [
      {
        label: "A. 함께 만든 분위기와 순간",
        scores: { all: 3, friendB: 1 },
      },
      {
        label: "B. 오래 남는 진심과 태도",
        scores: { me: 2, friendA: 2, self: 1 },
      },
    ],
  },
];