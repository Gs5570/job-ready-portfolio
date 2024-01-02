import Intro from '../pages/Intro';
import Projects from '../pages/Project';

import '../styles/Body.css';

export default function Body() {
  return (
    <div className="body-container">
      <Intro />
      <Projects />
    </div>
  );
}
