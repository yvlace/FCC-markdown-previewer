import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown' 

const defaultMarkdown= `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
\`\`\`javascript
function add(a, b) {
  return a + b;
}
\`\`\`
### And here's some code, \`<div></div>\`, between two backticks.
You can also make text **bold** or _italic_ or... **_both!_**
You can add lists like this:
- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.
1. And there are numbered lists too.
2. With different indentation levels.
3. That look like this.
You can also make text [links](https://www.freecodecamp.org).
You can add images like this:
![React Logo w/ Text](https://goo.gl/Umyytc)
You can add blockquotes like this:
> Blockquotes are very handy in email to emulate reply text.
You can also use horizontal rules:
___
You can embed YouTube videos like this:
[![Watch the video](https://img.youtube.com/vi/0BmhB8f2g4I/hqdefault.jpg)](https://www.youtube.com/watch?v=0BmhB8f2g4I)
You can also use HTML elements:
<div style="color: red;">This is a red text</div>
You can also use custom components:
\`\`\`html
<div style="color: red;">This is a red text</div>
\`\`\`
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
    <div>
      <h1>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea
          name="editor"
          id="editor"
          value={markdownText}
          placeholder="Enter your markdown here..."
          title="Markdown Editor"
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
