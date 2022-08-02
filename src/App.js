import "./App.css";
import Comment from "./components/Comment";
import {comment} from './data/data'

function App() {
  return (
    <div className="App">
      <Comment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      />
         <Comment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      />
         <Comment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      />
    </div>
  );
}

export default App;

