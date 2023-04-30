import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Word from './components/Word';
import WordColor from './components/WordColor';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/word/:word" element={<Word/>} />
            {/* this is for both a word and a number becuase in the Word.jsx the params word uses a ternary with isNaN is not a number true or false. So either a word or number can be displayed */}
            <Route path="/word/:word/:color" element={<WordColor/>} />
            {/* this route is just changing the text color */}
            <Route path="/word/:word/:color/:bgColor" element={<WordColor/>} />
            {/* this route is changing the text color and the background color */}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

