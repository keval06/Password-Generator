import { useState, useCallback, useEffect, useRef } from "react";
// import './App.css'
// c-1 - to generate random password
// c-2 - generates random password according to user choice, nimber allowes or not.
// c-3 - copy the content o clipboard, and show it to user.
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += '~`!@#$%^&*()_+-=[]{};:"/<>|';

    for (let i = 0; i <= length; i++) {
      // only index
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
      //we were over writing the value of pass by
      //  pass=str.charAt(char)
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    //clipboard ma writr karo ,
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
  }, [password]);

  //if there are changes in the dependencies of this, useEffest will run the function.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-[90%] h-[300px] max-w-[500px] mx-auto shadow-md rounded-lg px-[50px] py-[50px] my-8 mt-[100px] bg-gray-800 text-orange-500 flex flex-col justify-center items-center">
      <h1 className="text-white text-center my-3 mb-[30px] text-3xl">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-[40px]">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-gray-600 text-xl"
          placeholder="Password"
          readOnly
          //useRef hook use
          ref={passwordRef}
        />

        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 cursor-pointer"
        >
          Copy Me..!
        </button>
      </div>

      <div className="flex text-sm gap-x-6">
        <div className="flex justify-around items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer "
            //  onChane , onClick
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-[14px]">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="cursor-pointer">
            Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            className="cursor-pointer"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="cursor-pointer">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
