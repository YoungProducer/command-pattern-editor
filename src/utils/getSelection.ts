export const getSelection = (
  textarea?: HTMLTextAreaElement | null
): string | undefined => {
  if (!textarea) return;

  const selectionStart = textarea.selectionStart;
  const selectionEnd = textarea.selectionEnd;

  if (selectionEnd === selectionStart) return;

  return textarea.value.substring(
    Math.min(selectionStart, selectionEnd),
    Math.max(selectionStart, selectionEnd)
  );
};
