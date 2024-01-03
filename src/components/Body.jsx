import Intro from '../pages/Intro';
import Projects from '../pages/Project';

import '../styles/Body.css';

export default function Body({ downloadResume }) {
  return (
    <div className="body-container">
      <Intro downloadResume={downloadResume} />
      <Projects downloadResume={downloadResume} />
    </div>
  );
}
