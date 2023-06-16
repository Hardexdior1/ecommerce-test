import React, { useState } from "react";
import "../styles/News.css";

const News = () => {
  const [showBreaking, setShowBreaking] = useState(true);
  const [showSport, setShowSport] = useState(false);
  const [showCrypto, setShowCrypto] = useState(false);
  return (
    <div className="carrier">
      <div className="newsBtn">
        <button
          onClick={() => {
            setShowSport(false);
            setShowBreaking(true);
            setShowCrypto(false);
          }}>
          BreakingNews
        </button>

        <button
          onClick={() => {
            setShowSport(true);
            setShowBreaking(false);
            setShowCrypto(false);
          }}>
          Sport
        </button>

        <button
          onClick={() => {
            setShowSport(false);
            setShowBreaking(false);
            setShowCrypto(true);
          }}>
          CryptoTrading
        </button>
      </div>

      <div className="BreakingNews">
        {showBreaking ? (
          <div className="newsText">
            <h4 className="white">Tina Turner dies at 83</h4>
            <p>
              Legendary Tina Turner has died after a long illness , her family
              said in a statement on wednesday she was 83 ..known as the queen
              of rock Turner mega-hits include "proud Mary","What Love Got To do
              With it" and "The Best". she began her career as the lead singer
              of the ike & Tina Turner Revenue with her ex-husband before
              becoming solo performer
            </p>
          </div>
        ) : (
          ""
        )}
        {showSport ? (
          <div className="showSport">
            <h4 className="white">ManchesterCity wins the premier league</h4>
            <p>
              MANCHESTER, England, May 21 Reuters - Manchester City celebrated
              their Premier League title success on Sunday, beating Chelsea 1-0
              with an early goal by Julian Alvarez in the team's home finale at
              a sun-drenched Etihad Stadium. Treble-chasing City, who wrapped up
              the title when second-placed Arsenal were beaten at Nottingham
              Forest on Saturday, have won 12 successive games in the top
              flight. .
            </p>
          </div>
        ) : (
          ""
        )}

        {showCrypto ? (
          <div className="showCrypto">
            <h4 className="white">Crypto Market</h4>
            <p>
              ApeCoin {"(APE)"} aptly named after a very popular animal in
              trading circles, is a crypto currency inspired by the famous NFT
              collection, the Bored Ape Yacht Club.. ..crypterium was widely
              discussed after its immediate launch in 2018 Afterward, it kind of
              disappeared off the radar for a bit. And now it is back
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default News;
