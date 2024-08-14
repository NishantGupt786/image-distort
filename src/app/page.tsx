import PixelImage from '../components/PixelImage';

export default function Home() {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <PixelImage />
      <div className="jux-linx">
        <a href="https://stacksorted.com/image-effects/zajno" target="_blank" rel="noopener noreferrer">Source</a>
        <a href="https://youtu.be/gGvYq6baFiQ" target="_blank" rel="noopener noreferrer">Watch me explain this</a>
      </div>
    </div>
  );
}
