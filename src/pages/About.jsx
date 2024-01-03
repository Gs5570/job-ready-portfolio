import Header from '../components/Header';
import Footer from '../components/Footer';

//style
import '../styles/Header.css';
import '../styles/About.css';
import '../App.css';
export default function About() {
  const resumeUrl = 'http://localhost:5173/se-resume.docx';

  async function downloadResumeWithBlob() {
    const fileName = resumeUrl.split('/').pop();

    try {
      const response = await fetch(resumeUrl);
      const fileData = await response.blob();

      const blob = new Blob([fileData], {
        type:
          response.headers.get('content-type') || 'application/octet-stream',
      });

      const url = URL.createObjectURL(blob);

      const aTag = document.createElement('a');
      aTag.href = url;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }

  return (
    <>
      <Header />
      <div className="about-container">
        <div className=" bio-details-container">
          <div className="quote-container">
            <div className="left-quote">
              <span> &ldquo; </span>
            </div>
            <div className="quote-text-container">
              <p>
                <em>
                  Learning to write programs stretches your mind, and helps you
                  think better, creates a way of thinking about things that I
                  think is helpful in all domains....
                </em>
                <span>_Bill Gates_</span>
              </p>
            </div>
            <div className="right-quote">
              <span> &rdquo;</span>
            </div>
          </div>
          <div className="about-bio-container">
            <div className="head-container">
              <p>About Me</p>
              <h2>I build Web Applications</h2>
            </div>
            <div className="content-container">
              <p>
                Hello, I am Galekwan, I am a dedicated and enthusiastic
                developer with a strong passion for coding, problem solving and
                Cyber Security. My area of focus revolves around Full stack
                development, Software development engineering principles, and
                Information Security. However, I am flexible to take on
                different, like Bruce Lee: once said:{' '}
                <pan>
                  <em>Be like water </em>
                </pan>
                I can do front-end, back-end or all together. I am eager to
                contribute to a dynamic team and leverage technical skills to
                drive innovative solutions.
              </p>

              <p>
                On the other hand, outside of web development I enjoy making
                music, working out and meeting people. I cannot fit everything
                in here but this a small summary of myself{' '}
              </p>
            </div>
            <div className="info-container">
              <div className="name-email-container">
                <div className="name-container">
                  <h3>Name:</h3>
                  <p>Galekwan Sango</p>
                </div>
                <div className="email-container">
                  <h3>Email</h3>
                  <p>galekwansango@gmail.com</p>
                </div>
              </div>
              <div className="education-employment-container">
                <div className="education-container">
                  <h3>Education</h3>
                  <p>
                    Rochester Institute of Technology / MS in Software
                    Engineering
                  </p>
                </div>
                <div className="employment-container">
                  <h3>Employment Status</h3>
                  <p>Open and Ready to go</p>
                </div>
              </div>
            </div>
            <div className="resume-btn">
              <button onClick={() => downloadResumeWithBlob()}>
                Download resume
              </button>
            </div>
          </div>
        </div>
        <div className="skills-container">
          <div className="web-skills-container">
            <p>web</p>
          </div>
          <div className="cyber-skills-container">
            <p>cyber</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
