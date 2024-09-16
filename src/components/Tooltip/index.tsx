import { type JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);

  const messages = [
    "Exploring new horizons!",
    "Curious about our science?",
    "Innovation at your fingertips!",
    "Discovery awaits!",
    "Eager to learn more?",
    "Keep clicking for insights!",
    "Uncover the mysteries!",
    "Your curiosity drives progress!",
    "Stay curious, stay innovative!",
    "The journey of discovery continues!",
    "Delving deeper into biotech!",
    "Every click reveals more!",
    "Science is a click away!",
    "Pioneering knowledge with every click!",
    "Your quest for knowledge is inspiring!",
    "Unlocking the future of biotech!",
    "Stay tuned for more discoveries!",
    "The adventure of science unfolds!",
    "Continuing the exploration!",
    "Great minds explore!",
    "Curiosity fuels innovation!",
    "Last chance to unveil more!",
    "You're on a roll with discovery!",
    "Final insight: What’s next in biotech?",
  ];

  const currentMessage = () => {
    const count = clickCount();
    return messages[Math.min(count, messages.length - 1)];
  };

  return (
    <div class="relative inline-block">
      <div
        onMouseDown={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onMouseUp={() => {
          setIsVisible(false);
        }}
        onTouchStart={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onTouchEnd={() => {
          setIsVisible(false);
        }}
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="absolute shadow-lg left-1/2 -translate-x-1/2 -translate-y-26 w-auto max-h-[70px] py-2 px-4 bg-purple-600 text-white text-center rounded-lg z-10 whitespace-normal">
          <p class="w-max">{currentMessage()}</p>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;
