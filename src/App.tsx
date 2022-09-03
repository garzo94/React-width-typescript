import "./App.css";
import Box from "./components/context/Box";
// import {ThemeContextProvider} from './components/context/ThemeContext'
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import { List } from "./components/generics/List";

function App() {
  return (
    <div className="App">
      {/* <UserContextProvider> */}
      {/* <Box/> */}
      {/* <User/>
</UserContextProvider> */}
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      <List
        items={[
          { first: "name", last: "name" },
          { first: "name", last: "name" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
