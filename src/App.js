import React,{useState} from "react";

const emojis = ["😊","😂","😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","🥰","😗","😙","🥲","😚","🙂","🤗","🤩","🤔","🫡","😐","😑","😶","😶‍🌫️","🙄","😏","😣","😥","😮","🤐","😯","😫","🥱","😴","😌","😛","😜","😝","🤤","😒","😓","😔","😕","🫤","🙃","🫠","🤑","😲","☹️","🙁","😖","😞","😟","😤","😭","😦","😧","😨","😩","🤯","😬","😮‍💨","😰","😱","🥵","🥶","😳","🤪","😵","😵‍💫","🥴","😠","🤬","😷","🤒","🤕","🤮","🤧","😇","🥸","🥺","🤠","🤡","🤥","🤫","🫢","🫣","🧐","🤓","😈"];
const getRandomEmojis = () =>{
  return emojis[Math.floor(Math.random() * emojis.length)];
};

function App() {
  const [emojis,setEmojis] = useState(getRandomEmojis());
  const handleClick = () =>{
    const randomEmojis = getRandomEmojis();
    setEmojis(randomEmojis);
  };

  return (
    <div>
      <center>
        <h1>{emojis}</h1>
        <button onClick={handleClick}>Generate</button>
      </center>
    </div>
  );
}

export default App;