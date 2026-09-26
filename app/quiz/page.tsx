import type { Metadata } from "next";

import { WorldviewQuiz } from "./_components/worldview-quiz";

export const metadata: Metadata = {
  title: "你如何看待世界？",
  description: "30 道小情境，探索你看待世界的视角与和世界相处的方式。",
};

export default function QuizPage() {
  return <WorldviewQuiz />;
}
