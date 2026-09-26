"use client";

import { useState } from "react";
import styles from "./worldview-quiz.module.css";

const archetypes = [
  ["守卫者", "你容易先看见什么值得被保护，并留心风险、边界与责任。"],
  ["战士", "你容易把阻力看作需要迎战的事，重视意志、目标与坚持。"],
  ["观察者", "你倾向先退一步看清细节和局势，再形成判断。"],
  ["自然之子", "你感受人与环境、生命节律之间的联系，珍视真实与平衡。"],
  ["水形人", "你注意变化与情境，认为灵活调整比固守单一路径更重要。"],
  ["沉睡者", "你重视内在空间、休息与想象，安静下来时更能理解自己。"],
  ["剑道大师", "你把生活看作修习，欣赏专注、克制与日积月累的精进。"],
  ["创作家", "你常看到尚未发生的可能，喜欢赋予经验新的表达和形式。"],
  ["思想者", "你倾向追问原因、逻辑和概念，希望把事情想明白。"],
  ["冒险家", "你被未知和新体验吸引，觉得亲自进入才能真正认识世界。"],
  ["遗迹寻者", "你会从过去的痕迹、记忆和线索中寻找当下的意义。"],
  ["流浪者", "你珍视自由与移动，不愿让固定身份或路线限制生活。"],
  ["行商之人", "你留意人与人之间的需求、价值与交换，擅长让资源流动。"],
  ["骑士", "你看重承诺、荣誉与原则，愿意为信念承担责任。"],
  ["权力家", "你留意规则、影响力与决策如何形成，并希望能推动局面。"],
] as const;

const interactionStyles = [
  ["迎上去", "遇到问题倾向先接触、先行动，再边走边修正。"],
  ["先观察", "搜集信息、看清局势后再决定是否行动。"],
  ["制定路径", "设目标、排步骤，尽量让事情有序可控。"],
  ["顺势调整", "根据变化改变办法，不执着于原定路线。"],
  ["寻求协作", "通过沟通、关系和分工一起推动事情。"],
  ["影响局面", "寻找决策点和杠杆，主动改变规则或结果。"],
  ["守住边界", "先顾及安全、原则与精力，再决定投入多少。"],
  ["不断尝试", "愿意试不同方案，从反馈里找到可行方向。"],
] as const;

type Item = { text: string; archetype: number; style: number };
const questions: Item[] = [
  { text: "当一群人走进陌生而危险的地方时，我最先想到的是怎样让大家都能平安回来。", archetype: 0, style: 6 },
  { text: "看见有人或某件重要的事受到威胁，我很难只站在旁边看。", archetype: 0, style: 4 },
  { text: "碰到难题时，我会把它当成一道必须正面跨过的关。", archetype: 1, style: 0 },
  { text: "即使过程辛苦，只要目标值得，我通常愿意咬牙坚持到底。", archetype: 1, style: 7 },
  { text: "进入新环境时，我会先观察人与事的细节，再决定怎么参与。", archetype: 2, style: 1 },
  { text: "别人争论时，我常能注意到双方都忽略的线索。", archetype: 2, style: 1 },
  { text: "我会留意一个地方的环境如何影响生活在其中的人和生物。", archetype: 3, style: 3 },
  { text: "比起强行改变一切，我更愿意寻找与周围节律相处的方式。", archetype: 3, style: 3 },
  { text: "计划突然变化时，我通常能较快换个办法继续前进。", archetype: 4, style: 3 },
  { text: "我觉得很多问题没有永远适用的答案，要看当时的情境。", archetype: 4, style: 3 },
  { text: "独处、休息或做白日梦时，我常能得到重要的感受或灵感。", archetype: 5, style: 6 },
  { text: "世界太吵时，我会先退回自己的空间，等心里清楚些再回应。", archetype: 5, style: 6 },
  { text: "我欣赏把一项本领反复练到熟练而精确的过程。", archetype: 6, style: 2 },
  { text: "与其急着求快，我更愿意稳稳打磨自己的方法。", archetype: 6, style: 2 },
  { text: "我常会想：眼前的东西还能被重新组合成什么？", archetype: 7, style: 7 },
  { text: "表达一个想法时，我喜欢找到新鲜而有个人风格的方式。", archetype: 7, style: 7 },
  { text: "遇到复杂问题，我会自然地拆解它、寻找背后的原因。", archetype: 8, style: 1 },
  { text: "一个说法越有道理，我越想知道它依据什么、有没有例外。", archetype: 8, style: 1 },
  { text: "即使有些不确定，我也愿意亲自试试新的体验。", archetype: 9, style: 0 },
  { text: "比起听别人讲述，我更相信自己走进去之后的发现。", archetype: 9, style: 7 },
  { text: "旧物、老地方或过去的故事会让我想追问它们经历过什么。", archetype: 10, style: 1 },
  { text: "理解一件事时，我常会回头寻找它从哪里开始、留下了什么痕迹。", archetype: 10, style: 1 },
  { text: "我很难长期待在同一种生活轨道里，会想换地方或换种活法。", archetype: 11, style: 3 },
  { text: "偶然遇见的人和事，常常比预先安排好的路线更吸引我。", archetype: 11, style: 7 },
  { text: "我会留意每个人需要什么，以及彼此能如何互相帮上忙。", archetype: 12, style: 4 },
  { text: "面对资源有限的情况，我擅长寻找双方都愿意接受的交换办法。", archetype: 12, style: 2 },
  { text: "即使没人监督，我也希望自己做到答应过的事。", archetype: 13, style: 2 },
  { text: "遇到不公平时，我会想办法站出来，即使这不太方便。", archetype: 13, style: 0 },
  { text: "讨论一件公共事务时，我会关注谁能做决定、规则由谁制定。", archetype: 14, style: 5 },
  { text: "比起只适应现有安排，我更想参与制定规则、改变结果。", archetype: 14, style: 0 },
];

const choices = ["完全不像我", "不太像我", "说不清 / 看情况", "比较像我", "非常像我"];

type Ranked = { index: number; score: number };

function rankScores(scores: number[], counts: number[]): Ranked[] {
  return scores
    .map((score, index) => ({ index, score: score / (counts[index] || 1) }))
    .sort((a, b) => b.score - a.score);
}

export function WorldviewQuiz() {
  const [stage, setStage] = useState<"intro" | "quiz" | "result">("intro");
  const [answers, setAnswers] = useState<(number | null)[]>(Array(30).fill(null));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState<{ archetypes: Ranked[]; styles: Ranked[] } | null>(null);
  const progress = Math.round(((questionIndex + 1) / questions.length) * 100);

  function answer(value: number) {
    const nextAnswers = answers.slice();
    nextAnswers[questionIndex] = value;
    setAnswers(nextAnswers);
    if (questionIndex < questions.length - 1) {
      window.setTimeout(() => setQuestionIndex((index) => index + 1), 140);
    } else if (nextAnswers.every((item) => item !== null)) {
      window.setTimeout(() => calculate(nextAnswers as number[]), 140);
    }
  }

  function calculate(values: number[]) {
    const archetypeScores = Array(15).fill(0) as number[];
    const archetypeCounts = Array(15).fill(0) as number[];
    const styleScores = Array(8).fill(0) as number[];
    const styleCounts = Array(8).fill(0) as number[];
    questions.forEach((item, index) => {
      const score = values[index] - 3;
      archetypeScores[item.archetype] += score;
      archetypeCounts[item.archetype] += 1;
      styleScores[item.style] += score;
      styleCounts[item.style] += 1;
    });
    setResult({
      archetypes: rankScores(archetypeScores, archetypeCounts).slice(0, 3),
      styles: rankScores(styleScores, styleCounts).slice(0, 4),
    });
    setStage("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goNext() {
    if (answers[questionIndex] === null) {
      window.alert("请选择一个最接近你的答案");
      return;
    }
    if (questionIndex < questions.length - 1) setQuestionIndex((index) => index + 1);
    else if (answers.every((item) => item !== null)) calculate(answers as number[]);
  }

  function restart() {
    setAnswers(Array(30).fill(null));
    setQuestionIndex(0);
    setResult(null);
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: "你如何看待这个世界？", text: "来测测你的世界观与行动方式。", url });
        return;
      } catch {
        // Keep the copy-link fallback available when the share sheet is dismissed.
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      window.alert("问卷链接已复制，可以发给朋友了。");
    } catch {
      window.prompt("复制链接分享给朋友：", url);
    }
  }

  const currentQuestion = questions[questionIndex];

  return (
    <main lang="zh-CN" className={styles.page}>
      <div className={styles.brand}>ZIYOU &amp; LOLO　/　性格探索</div>
      {stage === "intro" && (
        <section className={styles.hero}>
          <div className={styles.eyebrow}>一份关于你与世界的问卷</div>
          <h1 className={styles.title}>你如何看待<br />这个世界？</h1>
          <p className={styles.lead}>有些人先看见值得守护之物，有些人先注意未知、秩序或变化。回答 30 个小情境，看看你习惯用什么眼光理解世界，又通常怎样与它相处。</p>
          <div className={styles.chips}><span>约 5 分钟</span><span>30 道题</span><span>没有标准答案</span></div>
          <button className={styles.primary} onClick={() => setStage("quiz")}>开始探索　→</button>
          <p className={styles.fine}>结果仅供自我探索与交流，不是心理诊断或固定定义。</p>
        </section>
      )}

      {stage === "quiz" && (
        <section className={styles.quiz}>
          <div className={styles.progressLine}><span>慢慢选最像你的</span><span>{questionIndex + 1} / {questions.length}</span></div>
          <div className={styles.track}><div className={styles.fill} style={{ width: `${progress}%` }} /></div>
          <div className={styles.card}>
            <div className={styles.eyebrow}>第 {String(questionIndex + 1).padStart(2, "0")} 题</div>
            <h2 className={styles.question}>{currentQuestion.text}</h2>
            <div className={styles.choices}>
              {choices.map((choice, index) => {
                const value = index + 1;
                return <button key={choice} className={`${styles.choice} ${answers[questionIndex] === value ? styles.selected : ""}`} onClick={() => answer(value)}><span className={styles.radio}>{answers[questionIndex] === value ? "✓" : ""}</span>{choice}</button>;
              })}
            </div>
          </div>
          <div className={styles.nav}><button onClick={() => setQuestionIndex((index) => Math.max(0, index - 1))}>← 上一题</button><button onClick={goNext}>{questionIndex === questions.length - 1 ? "查看结果 →" : "下一题 →"}</button></div>
        </section>
      )}

      {stage === "result" && result && (
        <section className={styles.results}>
          <div className={styles.eyebrow}>你的世界观画像</div>
          <h1 className={styles.resultTitle}>你与世界的<br />相处方式</h1>
          <p className={styles.lead}>这是一张倾向地图，不是把你装进单一盒子。</p>
          <section className={styles.resultSection}>
            <h2>你看世界时，最常用的视角</h2>
            {result.archetypes.map((item, index) => <article className={styles.typeCard} key={item.index}><h3>{["主倾向", "次倾向", "也会显露"][index]} · {archetypes[item.index][0]}</h3><p>{archetypes[item.index][1]}</p></article>)}
          </section>
          <section className={styles.resultSection}>
            <h2>你通常怎样与世界互动</h2>
            <p className={styles.muted}>这部分描述你面对事情时较常用的行动方式。</p>
            {result.styles.map((item) => {
              const percent = Math.max(0, Math.min(100, Math.round(((item.score + 2) / 4) * 100)));
              return <div className={styles.barRow} key={item.index}><div className={styles.barLabel}><span>{interactionStyles[item.index][0]}</span><span>{percent}%</span></div><div className={styles.bar}><span style={{ width: `${percent}%` }} /></div></div>;
            })}
            <article className={styles.typeCard}><h3>你的互动画像</h3><p>{interactionStyles[result.styles[0].index][1]}{interactionStyles[result.styles[1].index][1]}</p></article>
          </section>
          <div className={styles.actions}><button className={styles.primary} onClick={share}>分享结果</button><button className={styles.secondary} onClick={restart}>重新作答</button></div>
          <p className={styles.disclaimer}>这份自编问卷用于自我探索与朋友间交流。结果反映你此刻对题目的认同程度，不代表科学诊断或永久不变的人格。</p>
        </section>
      )}
      <footer className={styles.footer}>给复杂的自己，多留一点空间。</footer>
    </main>
  );
}
