// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
import Delete from "./components/Delete";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Delete} />
    </>
  );
}

export default App;
