import {
  useRef,
  useContext,
  ChangeEvent,
  useLayoutEffect,
  useCallback
} from "react";

import { ApplicationContext } from "../../Application/Context";
import { EditCommand } from "../../layers/ComandsLayer/Commands";

export const Editor = () => {
  const { application } = useContext(ApplicationContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onSelect = useCallback(() => {
    application.getEditor().updateSelection();
  }, [application]);

  const onClick = () => {
    application.getEditor().checkSelection();
  };

  const onBlur = () => {
    application.getEditor().checkSelection();
  };

  const onFocus = () => {
    application.getEditor().checkSelection();
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    application.getEditor().checkSelection();

    const command = new EditCommand(application, application.getEditor());
    application.executeCommand(command, e.target.value);
  };

  useLayoutEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current?.addEventListener("select", onSelect);
    application.getEditor().setTextArea(textareaRef.current);

    return () => {
      textareaRef.current?.removeEventListener("select", onSelect);
      application.getEditor().checkSelection();
    };
  }, [textareaRef, application, onSelect]);

  return (
    <div>
      <textarea
        ref={textareaRef}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};
