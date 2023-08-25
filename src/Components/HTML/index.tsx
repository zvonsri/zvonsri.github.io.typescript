import { useState } from "react";
import "./index.css";
export const HTML = () => {
  const [mainContent, setMainContent] = useState(1)
  return (
    <>
      <h2>HTML Page</h2>
      <aside>
        <nav>
          <ul>
            <li>
              <button onClick={() => {setMainContent(1)}}>Headers</button>
            </li>
            <li>
              <button onClick={() => {setMainContent(2)}}>Image</button>
            </li>
            <li>
            <button onClick={() => {setMainContent(3)}}>Block Level Elements</button>
            </li>
            <li>
            <button onClick={() => {setMainContent(4)}}>In Line Elements</button>
            </li>
            <li>
            <button onClick={() => {setMainContent(5)}}>Symantic Elements</button>
            </li>
            <li>
            <button onClick={() => {setMainContent(6)}}>Form Elements</button>
            </li>
            <li>
            <button onClick={() => {setMainContent(7)}}>Box Level</button>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <MainContent mainContent={mainContent} />
      </main>
    </>
  );
};

export const MainContent = ({mainContent}:any) => {
    if (mainContent === 2) return <Image />;
    if (mainContent === 3) return <BlockLevelElements />;
    if (mainContent === 4) return <InlineElements />;
    if (mainContent === 5) return <SymanticElements />;
    if (mainContent === 6) return <FormElements />;
    if (mainContent === 7) return <BoxModel />;
    return <Headers />
}

export const Headers = () => {
    return (
        <><h3>Headers</h3>
        <p>h1</p>
        <p>h2</p>
        <p>h3</p>
        <p>h4</p>
        <p>h5</p>
        <p>h6</p>
        </>
    )
}

export const BlockLevelElements = () => {
    return (
        <>
        <h3>Block Level Elements</h3>
        <p>Div</p>
        <p>Img</p>
        </>
    )
}

export const Image = () => {
    return (
        <>
        <h3>Image</h3>
        <p>Src</p>
        <p>alt</p>
        <p>Width</p>
        <p>Height</p>
        </>
    )
}

export const InlineElements = () => {
    return (
        <>
        <h3>Inline Elements</h3>
        <p>span</p>
        <p>form elements</p>
        <p>a</p>
        <p>ul</p>
        <p>ol</p>
        <p>li</p>
        </>
    )
}

export const SymanticElements = () => {
    return (
        <>
        <h3>Symantic Elements</h3>
        <p>nav</p>
        <p>aside</p>
        <p>address</p>
        <p>header</p>
        <p>footer</p>
        <p>strong</p>
        </>
    )
}

export const FormElements = () => {
    return (
        <>
        <h3>Form Elements</h3>
        <p>input</p>
        <p>button</p>
        <p>label</p>
        <p>textarea</p>
        </>
    )
}

export const BoxModel = () => {
    return (
        <>
        <h3>Box Level</h3>
        <p>Margin</p>
        <p>Padding</p>
        <p>Border</p>
        <p>Outline</p>
        </>
    )
}

export const MetaTags = () => {
  return (
    <>
    <h3>Meta Tags</h3>
    <p>charset="utf-8"</p>
    <p> meta name="" content=""</p>
    <p>keywords, description, subject</p>
    <p>copyright, language,</p>
    <p>author, owner</p>
    <p>Never put email</p>
    <p></p>
    <p></p>
    </>
  )
}

export const OtherElements = () => (
  <>
  <h3>Other Elements</h3>
  <p>Favicons</p>
  <p><link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  </>
)