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
