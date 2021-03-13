import { ApplicationProvider } from "./Application/Context";
import { Application } from "./Application";
import { Editor } from "./Editor";
import { CommandsHistory } from "./layers/ComandsLayer/CommandsHistory";
import { Editor as EditorComponent } from "./components/Editor";
import { Controls } from "./components/Controls";

import "./styles.css";
import { useEffect } from "react";

const editor = new Editor();
const commandsHistory = new CommandsHistory();
const application = new Application(editor, commandsHistory);

export default function App() {
  useEffect(() => {
    application.listenKeyBoard();

    return () => {
      application.unsubcsribeFromKeyBoard();
    };
  }, []);

  return (
    <ApplicationProvider value={{ application }}>
      <Controls />
      <EditorComponent />
    </ApplicationProvider>
  );
}
