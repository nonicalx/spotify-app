import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./globalComponents/nav/Nav";
import Pages from "./pages/Pages.js";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/auth" element={<Pages.Auth />} />
          <Route path="/top-songs" element={<Pages.TopSongs />} />
          <Route path="/top-artists" element={<Pages.TopArtists />} />
          <Route path="/top-albums" element={<Pages.TopAlbums />} />
          <Route path="/my-playlists" element={<Pages.MyPlaylists />} />
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
