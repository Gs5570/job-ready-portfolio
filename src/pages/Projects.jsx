import Header from '../components/Header';
import Project from './Project';
import Footer from '../components/Footer';
export default function Projects({ downloadResume }) {
  return (
    <>
      <Header />
      <Project downloadResume={downloadResume} />
      <Footer />
    </>
  );
}
