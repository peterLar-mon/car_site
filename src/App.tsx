import { RowsPhotoAlbum } from "react-photo-album"
import './styles/style.css'
import "react-photo-album/rows.css"

const photos = [
  { src: "../public/img/gallery/Snímek obrazovky 2025-05-28 085522.png", width: 100, height: 100 },
  { src: "../public/img/gallery/Snímek obrazovky 2025-05-28 085527.png", width: 100, height: 100 },
  { src: "../public/img/gallery/Snímek obrazovky 2025-05-28 085534.png", width: 100, height: 100 },
  { src: "../public/img/gallery/Snímek obrazovky 2025-05-28 085542.png", width: 100, height: 100 },
  { src: "../public/img/gallery/Snímek obrazovky 2025-05-28 085548.png", width: 100, height: 100 },
];

function App() {
  return <RowsPhotoAlbum photos={photos} />;
}

export default App
