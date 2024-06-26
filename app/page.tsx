"use client";
import Drum from "./Drum";
import styles from "./page.module.css";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { AudioClip } from "./Types";

const audioClip: AudioClip[] = [
  {
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  }, {
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  }, {
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  }, {
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  }, {
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  }, {
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  }, {
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  }, {
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  }, {
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

export default function Home() {
  const AudioPlay = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const Clip = audioClip.find((clip) => clip.keyTrigger === e.key.toUpperCase())
    if (!Clip) return;
    (document.getElementById(Clip.keyTrigger) as HTMLAudioElement).play().catch(console.error)
  
    document.getElementById("drum-" + Clip?.keyTrigger)?.focus();
    document.getElementById("show")!.innerHTML = Clip.id;
  }  
  return (
    <div id="drum-machine" className={styles.container} onKeyDown={AudioPlay}>
      <div className={styles.drums}>
        {audioClip.map((clip) => {
          return <Drum Content={clip} key={clip.keyTrigger}/>
        })}
      </div>
      <div className={styles.logo}>
        <div>FCC&nbsp;</div>
        <LiaFreeCodeCamp />
      </div>
      <div id="display" className={styles.display}>
        <div id="show" className={styles.Show}></div>
      </div>
    </div>
  );
}
