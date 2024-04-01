import { AudioClip } from "./Types";
import styles from "./page.module.css";

interface DrumProps {
    Content: AudioClip,
}

const SoundPlay = (Clip: AudioClip) => {
    (document.getElementById(Clip.keyTrigger) as HTMLAudioElement).play().catch(console.error);
    document.getElementById("show")!.innerHTML = Clip.id;
}  

const Drum = ({ Content }: DrumProps) => {
  return (
    <button
      id={`drum-${Content.keyTrigger}`}
      onClick={() => SoundPlay(Content)}
    >
      <audio id={Content.keyTrigger} src={Content.url} className={styles.audio}></audio>
      {Content.keyTrigger}
    </button>
  )
}

export default Drum;