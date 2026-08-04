import React from "react";
import { useSpeech } from "react-text-to-speech";

export default function App() {
  const text = `HANA`;
  const { Text, speechStatus, start, pause, stop } = useSpeech({ text, pitch: 1, rate: 1, volume: 1, lang: "ja-JP", voiceURI: "", autoPlay: false, highlightText: false, showOnlyHighlightedText: false, highlightMode: "word", enableDirectives: "false" });

  return (
    <div style={{ margin: "1rem", whiteSpace: "pre-wrap" }}>
      <div style={{ display: "flex", columnGap: "1rem", marginBottom: "1rem" }}>
        <button disabled={speechStatus === "started"} onClick={start}>
          Start
        </button>
        <button disabled={speechStatus === "paused"} onClick={pause}>
          Pause
        </button>
        <button disabled={speechStatus === "stopped"} onClick={stop}>
          Stop
        </button>
      </div>
      <Text />
    </div>
  );
}