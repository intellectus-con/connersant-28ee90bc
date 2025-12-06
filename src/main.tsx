import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import fonts to ensure Vite processes them
import regularFont from "./assets/fonts/Literaturnaya.ttf";
import italicFont from "./assets/fonts/Literaturnaya-Italic.ttf";
import boldFont from "./assets/fonts/Literaturnaya-Bold.ttf";
import boldItalicFont from "./assets/fonts/Literaturnaya-BoldItalic.ttf";

// Inject font-face rules dynamically
const fontStyles = document.createElement('style');
fontStyles.textContent = `
  @font-face {
    font-family: 'Literaturnaya';
    src: url('${regularFont}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Literaturnaya';
    src: url('${italicFont}') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Literaturnaya';
    src: url('${boldFont}') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Literaturnaya';
    src: url('${boldItalicFont}') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }
`;
document.head.appendChild(fontStyles);

createRoot(document.getElementById("root")!).render(<App />);
