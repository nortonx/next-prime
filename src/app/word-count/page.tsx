"use client"

import { useState } from "react"
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea"
import styles from "./page.module.css";

const WordCountPage = () => {
  const [content, setContent] = useState("")

  const onChangeText = (content: string) => {
    setContent(content);
  }

  const wordCounter = (content: string) => {
    if (content) {
      const words = content.trim().split(" ")
      return words?.length
    }
    return 0
  }

  const characterCounter = (content: string) => {
    const characters = content.trim().split("")
    return characters?.length ?? 0
  }

  const sentencesCounter = (content: string) => {
    const sentences = content.match(/[^\.!\?]+[\.!\?]+/g)
    return sentences?.length ?? 0
  }

  const paragraphsCounter = (content: string) => {
    if (content) {
      const paragraphs = content.split(/\r?\n/)
      return paragraphs?.length
    }
    return 0
  }

  return(
    <section className="p-3" data-testid="word-count-page">
      <div className={styles.row}>
        <Card title="Words" className="w-2 flex">
          <span className="text-xl font-medium">{wordCounter(content)}</span>
        </Card>
        <Card title="Characters" className="w-2">
          <span className="text-xl font-medium">{characterCounter(content)}</span>
        </Card>
        <Card title="Sentences" className="w-2">
          <span className="text-xl font-medium">{sentencesCounter(content)}</span>
        </Card>
        <Card title="Paragraphs" className="w-2">
          <span className="text-xl font-medium">{paragraphsCounter(content)}</span>
        </Card>
      </div>
      <InputTextarea
        value={content}
        onChange={e => onChangeText(e.target.value)}
        autoResize
        className="w-6"
        rows={10}
      />
    </section>
  )
}

export default WordCountPage