import { CloseButton } from "../CloseButton";

import bugImage from "/emoji.svg";
import ideaImage from "/idea.svg";
import thoughtImage from "/thought.svg";
import { useState } from "react";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImage,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImage,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false)

  function handleRestartFeedback(){
    setFeedbackSend(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {
        feedbackSend ?  <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/> : (
          <>
          {!feedbackType ? <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
       : <FeedbackContentStep 
       feedbackType={feedbackType}
       onFeedbackRestartRequested={handleRestartFeedback}
       onFeedbackSend={() => setFeedbackSend(true)}/>
       
      }
          </>
        )
      }

      <footer className="text-xs text-neutral-400">
        Feito com ❤️ pela{" "}
        <a href="#" className="underline underline-offset-2">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
