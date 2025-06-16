
import dynamic from 'next/dynamic';
const QuizPage = dynamic(() => import('../src/QuizPage'), { ssr: false });
export default function Home() {
  return <QuizPage />;
}
