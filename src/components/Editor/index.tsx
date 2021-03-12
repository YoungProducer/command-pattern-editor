import {
  useEffect,
  useRef,
  useContext,
  ChangeEvent,
  useLayoutEffect
} from "react";
import { ApplicationContext } from "../../Application/Context";

export const Editor = () => {
  const { application } = useContext(ApplicationContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (!textareaRef.current) return;
    application.getEditor().setTextArea(textareaRef.current);
  }, [textareaRef, application]);

  const onSelect = () => {
    application.getEditor().updateSelection();
  };

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

    const value = e.target.value;
    application.getEditor().setText(value);
  };

  useEffect(() => {
    textareaRef.current?.addEventListener("select", onSelect);

    return () => {
      textareaRef.current?.removeEventListener("select", onSelect);
      application.getEditor().checkSelection();
    };
  }, []);

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
