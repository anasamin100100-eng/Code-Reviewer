import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/themes/prism.css"
import Editor from "react-simple-code-editor"
import axios from 'axios' 
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "highlight.js/styles/github.css";
import prism from "prismjs"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`function sum() {
  return 1+1 
}`)

  const [review, setReview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  })

  async function reviewCode() { 
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      console.error('Error reviewing code:', error)
      setReview('Error getting code review. Please try again.')
    }
  }

  return (
    <>
      <main>
        <div className='left'>
          <div className="code-container">
            <div className="code-editor-wrapper">
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  minHeight: "100%",
                  width: "100%",
                  backgroundColor: "var(--code-editor-bg)",
                  color: "var(--text-primary)"
                }}
                textareaClassName="editor-textarea"
                preClassName="editor-pre"
              />
            </div>
          </div>
          <div
            onClick={reviewCode} 
            className="review"
          >
            Review
          </div>
        </div>
        <div className='right'>
          <Markdown
            rehypePlugins={[rehypeHighlight]}
          >
            {review}
          </Markdown>
        </div>
      </main> 
    </>
  )
}

export default App