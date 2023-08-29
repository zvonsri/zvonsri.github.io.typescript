import { useState } from "react";
import "./App.css";
import { CSS } from "../CSS";
import { HTML } from "../HTML";
import { Javascript } from "../Javascript";
import { JSONAPIServer } from "../JSONAPIServer";
import { React } from "../React";
import { Typescript } from "../TypeScript";
import { SASS } from "../SASS";
import { WebpackBabel } from "../WebpackBabel";
import { SQLServer } from "../SQLServer";
import { AWS } from "../AWS";
import { Docker } from "../Docker";
import { GITCICD } from "../GITCICD";
import { API } from "../API";
import { Technology } from "../../Enums";
import { VSCode } from "../VSCode";
import { CustomControls } from "../CustomControls";

export const ShowContent = (technology: Technology = Technology.HTML) => {
    let content = null;
    switch (technology) {
      case Technology.HTML:
        content = <HTML />;
        break;
      case Technology.CSS:
        content = <CSS />;
        break;
      case Technology.Javascript:
        content = <Javascript />;
        break;
      case Technology.React:
        content = <React />;
        break;
      case Technology.Typescript:
        content = <Typescript />;
        break;
      case Technology.JSONAPIServer:
        content = <JSONAPIServer />;
        break;
      case Technology.SASS:
        content = <SASS />;
        break;
      case Technology.WebpackBabel:
        content = <WebpackBabel />;
        break;
      case Technology.SQLServer:
        content = <SQLServer />;
        break;
      case Technology.AWS:
        content = <AWS />;
        break;
      case Technology.Docker:
        content = <Docker />;
        break;
      case Technology.GITCICD:
        content = <GITCICD />;
        break;
      case Technology.API:
        content = <API />;
        break;
      case Technology.VSCode:
        content = <VSCode />;
        break;
      case Technology.CustomControls:
        content = <CustomControls/>;
        break;
      default:
        content = <p>No Content</p>
    }
    return content;
}

export const App = () => {
  
  const [technology, setTechnology] = useState(Technology.HTML);

  const handleSetShow = (tech:Technology) => {
        setTechnology(tech);
  } ;
  const mainContent = ShowContent(technology);
  return (
    <div className="App">
      <header className="App-header">React Typescript App</header>
      <SideBar setShow={handleSetShow} />
      <main>{mainContent}</main>
    </div>

  )
}

export const SideBar = ({setShow}: any) => {
  return (
      <aside>
        <nav>
          <ul>
            <li>
              <button onClick={() => setShow(Technology.HTML)}>HTML</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.CSS)}>CSS</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.Javascript)}>Javascript</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.React)}>React</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.Typescript)}>Typescript</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.JSONAPIServer)}>JSON API Server</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.SASS)}>SASS</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.WebpackBabel)}>Webpack/Babel</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.SQLServer)}>SQL Server</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.AWS)}>AWS</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.Docker)}>Docker</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.GITCICD)}>GIT CI/CD</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.API)}>API</button>
            </li>
            <li>
              <button onClick={() => setShow(Technology.VSCode)}>VSCode</button>
            </li>
          </ul>
        </nav>
        <hr />
        <nav>
          <ul>
          <li>
              <button onClick={() => setShow(Technology.CustomControls)}>Custom Controls</button>
            </li>
          </ul>
        </nav>
        <hr />
      </aside>
  );
}

export default App;
