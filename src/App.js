import MyProvider from "./context/MyProvider"
import PageRoute from "./PageRoute"

function App() {
  return (
    <MyProvider>
      <PageRoute />
    </MyProvider>
  );
}

export default App;
