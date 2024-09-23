import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div>
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/">메인 페이지로 돌아가기</Link>
    </div>
  );
};

export default NotFoundPage;
