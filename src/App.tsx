"use client";
import { useRef, useState } from "react";
import asleep from "./assets/asleep.jpg";
import cat from "./assets/cat.jpg";
import earrings from "./assets/earrings.jpg";
import her from "./assets/her.jpg";
import herHouse from "./assets/herHouse.jpg";
import ishaWCat from "./assets/ishaWCat.jpg";
import JBGlasses from "./assets/JBGlasses.jpg";
import kissing from "./assets/kissing.jpg";
import kissingHerCheek from "./assets/kissingHerCheek.jpg";
import meAndCat from "./assets/meAndCat.jpg";
import meAnnoyed from "./assets/meAnnoyed.jpg";
import solace from "./assets/solace.jpg";
import stellas from "./assets/stellas.jpg";
import usTogether from "./assets/usTogether.jpg";
import yay from "./assets/yay.mp3";
import yes from "./assets/yes.gif";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const yesButtonSize = noCount * 20 + 16;

  const yaySound = useRef<HTMLAudioElement>(null);


  const correctPassword = "eat"; 

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setPasswordInput("");
      setErrorMessage("Sorry pookie, wrong password");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const images = [
    her,
    asleep,
    earrings,
    herHouse,
    JBGlasses,
    kissingHerCheek,
    kissing,
    ishaWCat,
    meAndCat,
    meAnnoyed,
    solace,
    cat,
    stellas,
    usTogether,
  ];

  const sentences = [
    "Hi my baby :)",
    "Come fall asleep on my shoulder again :)",
    "U make me so chalant",
    "rmb what we did before this? 😏",
    "i wanna SEE u again",
    "i wanna KISS your cheek again",
    "i wanna kiss your FACE again",
    "you pmo",
    "This is me and your pu-",
    "u PMOOOOO",
    "MY tee, MY baby",
    "ur killing me please say yes",
    "still my favorite picture of u :))",
    "We look pretty fire tgt icl",
  ]

  const getNoButtonText = () => {
    const phrases = [
      "Nope",
      "r u sure?",
      "r u fr rn gng?",
      "please?",
      "illllll buy u a LARGE pearl milk tea :)",
      "illllll buy u tiramisu",
      "baby u gowda say yes",
      "you GOWDA",
      "that didnt work??",
      "so u literally hate me",
      "babeeee",
      "isha pookie please?",
      "my love? :)",
      "illlll eyo? :)",
      "illllll send u pictures??",
      "wtf THAT didnt work????",
      "please?",
      "i love u?",
      "pleaseeee"
    ];


    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getCurrentImage = () => {
    return images[Math.min(noCount, images.length - 1)];
  };

  const getCurrentCaption = () => {
    return sentences[Math.min(noCount, sentences.length - 1)];
  };

  return (
    <div className="min-h-screen bg-pink-200">
      <audio ref={yaySound} src={yay} loop />
      {!isAuthenticated ? (
        <div className="flex min-h-screen flex-col items-center justify-center bg-pink-200">
          <form onSubmit={handlePasswordSubmit} className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold">Enter Password</h1>
            <p className="text-left py-0.5">Hint: im gonna _ _ _ you</p>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Password"
              className="rounded border-2 border-gray-300 px-4 py-2 text-lg focus:outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="rounded bg-pink-500 px-6 py-2 font-bold text-white hover:bg-pink-600"
            >
              Login
            </button>
            {errorMessage && <p className="text-red-500 font-bold text-lg">{errorMessage}</p>}
          </form>
        </div>
      ) : (
        <div className="-mt-16 flex min-h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          
          <img className="h-[500px]" src= {yes}/>
          <p className="my-1 text-l italic text-gray-700">Our first photo :))</p>
          
          <div className="my-4 text-4xl font-bold">RAHHHHH lfggg!!!</div>
          <p className="mt-8 max-w-2xl text-center text-s font-light italic text-pink-900 leading-relaxed">
            Happy Valentines my love, I wish so bad that I could spend our first valentines together but hey, we've got like a million more together :)
            I hope you're having a fire day planning for Galentines (pmo) but just know the past 7 months have been so fucking great with you.
            I look at your lil giftbox every single day, and im literally ITCHING to read your notes rn but I wont :(
            I canNOT wait to see u baby, wherever it is I know we'll have a good time together. 
            I really hope you like this lil website baby and i hope you have as much fun reading it as I did making it, happy valentines day. 
            I love you so fucking much it hurts. 
            <br></br>
            ~ Your love, Aayush
          </p>
        </>
      ) : (
        <>
          <img
            className="h-[300px]"
            src={getCurrentImage()}
          />
          <p className="my-1 text-l italic text-gray-700">{getCurrentCaption()}</p>
          <h1 className="my-4 text-4xl">Hey Isha, will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true);
                yaySound.current?.play();
              }}
              
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>

          </div>

        </>
      )}
        </div>
      )}
    </div>
  );
}
