import { useEffect, useRef, useContext } from "react";
import { ApplicationContext } from "../../Application/Context";
import { getSelection } from "../../utils";

export const Editor = () => {
  const { application } = useContext(ApplicationContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const checkSelection = () => {
    if (!getSelection(textareaRef?.current)) {
      application.getEditor().clearSelection();
    }
  };

  const onSelect = () => {
    if (!textareaRef.current) return;

    const selectedText = getSelection(textareaRef.current);

    if (!selectedText) return;

    application.getEditor().setSelection(selectedText);
  };

  const onClick = () => {
    checkSelection();
  };

  const onBlur = () => {
    checkSelection();
  };

  const onFocus = () => {
    checkSelection();
  };

  const onChange = () => {
    checkSelection();
  };

  useEffect(() => {
    textareaRef.current?.addEventListener("select", onSelect);

    return () => {
      textareaRef.current?.removeEventListener("select", onSelect);
      checkSelection();
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
