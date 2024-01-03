import Body from '../components/Body';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const resumeUrl = 'https://galekwan-portfolio.netlify.app/se-resume.docx';

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
      <Body
        downloadResume={() => {
          downloadResumeWithBlob();
        }}
      />
      <Footer />
    </>
  );
}
