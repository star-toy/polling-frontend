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

export const POLL_ITEMS: PollItemType[] = [
  {
    id: 1,
    image: '../../public/images/image(2).png',
    title: '내 아티스트가 이런 무대구성을 한다면?',
  },
  {
    id: 2,
    image: '../../public/images/image(3).png',
    title: '아이돌의 무대가 완성되기까지 이런 과정을 거친다고 하는데요',
  },
  { id: 3, image: '../../public/images/image(4).png', title: '아이돌 레전드 연말 무대는?' },
  { id: 4, image: '../../public/images/image(5).png', title: '역대급 K-POP 무대를 골라주세요!' },
];

export const POLL_OPTIONS: PollOptionType[] = [
  {
    id: 1,
    image: '../../public/images/newjeans-image.png',
    content: '뉴진스',
    pollingRate: 50,
  },
  {
    id: 2,
    image: '../../public/images/sister-image.png',
    content: '씨스타',
    pollingRate: 20,
  },
  {
    id: 3,
    image: '../../public/images/ive-image.png',
    content: '아이브',
    pollingRate: 10,
  },
  { id: 4, image: '../../public/images/twice-image.png', content: '트와이스', pollingRate: 10 },
];
