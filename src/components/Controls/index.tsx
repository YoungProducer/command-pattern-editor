import { useContext } from "react";

import { ApplicationContext } from "../../Application/Context";
import { CopyCommand, PasteCommand } from "../../layers/ComandsLayer/Commands";

export const Controls = () => {
  const { application } = useContext(ApplicationContext);

  const onCopy = () => {
    const command = new CopyCommand(application, application.getEditor());
    application.executeCommand(command);
  };

  const onPaste = () => {
    const command = new PasteCommand(application, application.getEditor());
    application.executeCommand(command);
  };

  return (
    <div>
      <button onClick={onCopy}>Copy</button>
      <button onClick={onPaste}>Paste</button>
    </div>
  );
};
