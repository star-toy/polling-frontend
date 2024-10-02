export interface PollItemType {
  id: number;
  image: string;
  title: string;
}

export interface PollOptionType {
  id: number;
  image: string;
  content: string;
  pollingRate: number;
}

export const POLL_DATA = {
  'postUid': 'string',
  'title': '크리스마스 연말 무대 때 보고 싶은 무대는?',
  'polls': [
    {
      'pollUid': 'string',
      'pollSeq': 1,
      'pollCategory': '노래',
      'pollDescription': '크리스마스 무대에서 들어보고 싶은 노래를 선택해주세요.',
      'pollOptions': [
        {
          'pollOptionUid': '100',
          'pollOptionSeq': 1,
          'pollOptionText': '캐롤 메들리',
          'votedCount': 100,
          'imageUrl': '/images/twice-image.png',
        },
        {
          'pollOptionUid': '200',
          'pollOptionSeq': 2,
          'pollOptionText': '겨울 발라드',
          'votedCount': 200,
          'imageUrl': '/images/twice-image.png',
        },
        {
          'pollOptionUid': '300',
          'pollOptionSeq': 3,
          'pollOptionText': '신나는 댄스곡',
          'votedCount': 300,
          'imageUrl': '/images/twice-image.png',
        },
        {
          'pollOptionUid': '400',
          'pollOptionSeq': 4,
          'pollOptionText': '아카펠라 공연',
          'votedCount': 400,
          'imageUrl': '/images/twice-image.png',
        },
      ],
    },
    {
      'pollUid': 'string',
      'pollSeq': 2,
      'pollCategory': '무대 컨셉',
      'pollDescription': '크리스마스 무대의 전반적인 분위기를 선택해주세요.',
      'pollOptions': [
        {
          'pollOptionUid': '100',
          'pollOptionSeq': 1,
          'pollOptionText': '로맨틱한 분위기',
          'votedCount': 100,
          'imageUrl': '/images/newjeans-image.png',
        },
        {
          'pollOptionUid': '200',
          'pollOptionSeq': 2,
          'pollOptionText': '화려한 파티 분위기',
          'votedCount': 400,
          'imageUrl': '/images/newjeans-image.png',
        },
        {
          'pollOptionUid': '300',
          'pollOptionSeq': 3,
          'pollOptionText': '따뜻한 가족 분위기',
          'votedCount': 300,
          'imageUrl': '/images/newjeans-image.png',
        },
        {
          'pollOptionUid': '400',
          'pollOptionSeq': 4,
          'pollOptionText': '동화 속 겨울왕국',
          'votedCount': 400,
          'imageUrl': '/images/newjeans-image.png',
        },
      ],
    },
    {
      'pollUid': 'string',
      'pollSeq': 3,
      'pollCategory': '아이돌',
      'pollDescription': '무대를 섰으면 하는 아이돌을 선택해주세요.',
      'pollOptions': [
        {
          'pollOptionUid': '100',
          'pollOptionSeq': 1,
          'pollOptionText': '뉴진스 하니',
          'votedCount': 100,
          'imageUrl': '/images/ive-image.png',
        },
        {
          'pollOptionUid': '200',
          'pollOptionSeq': 2,
          'pollOptionText': '씨스타 보라',
          'votedCount': 200,
          'imageUrl': '/images/ive-image.png',
        },
        {
          'pollOptionUid': '300',
          'pollOptionSeq': 3,
          'pollOptionText': '스테이시 시은',
          'votedCount': 300,
          'imageUrl': '/images/ive-image.png',
        },
        {
          'pollOptionUid': '400',
          'pollOptionSeq': 4,
          'pollOptionText': '아이브 안유진',
          'votedCount': 400,
          'imageUrl': '/images/ive-image.png',
        },
      ],
    },
  ],
};

export const POLL_ITEMS: PollItemType[] = [
  {
    id: 1,
    image: '/images/image(2).png',
    title: '내 아티스트가 이런 무대구성을 한다면?',
  },
  {
    id: 2,
    image: '/images/image(3).png',
    title: '아이돌의 무대가 완성되기까지 이런 과정을 거친다고 하는데요',
  },
  { id: 3, image: '/images/image(4).png', title: '아이돌 레전드 연말 무대는?' },
  {
    id: 4,
    image: '/images/image(5).png',
    title: '역대급 K-POP 무대를 골라주세요!',
  },
];

export const POLL_OPTIONS: PollOptionType[] = [
  {
    id: 1,
    image: '/images/newjeans-image.png',
    content: '뉴진스',
    pollingRate: 50,
  },
  {
    id: 2,
    image: '/images/sister-image.png',
    content: '씨스타',
    pollingRate: 20,
  },
  {
    id: 3,
    image: '/images/ive-image.png',
    content: '아이브',
    pollingRate: 10,
  },
  {
    id: 4,
    image: '/images/twice-image.png',
    content: '트와이스',
    pollingRate: 10,
  },
];

export const POLL_CATEGORIES = ['아티스트', '노래', '음악방송'];
