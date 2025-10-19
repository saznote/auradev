import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "agent-id": string;
        },
        HTMLElement
      >;
    }
  }
}

const ElevenLabsWidget = () => {
  useEffect(() => {
    // Ensure the script has loaded
    const checkWidget = setInterval(() => {
      if (window.customElements && window.customElements.get("elevenlabs-convai")) {
        clearInterval(checkWidget);
      }
    }, 100);

    return () => clearInterval(checkWidget);
  }, []);

  return <elevenlabs-convai agent-id="agent_5201k7xfmt9fe91ar3fgq1z3sa4v" />;
};

export default ElevenLabsWidget;
