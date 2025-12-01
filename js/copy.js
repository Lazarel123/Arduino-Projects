document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.textContent = "Copy";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.textContent);
      button.textContent = "Copied!";
      setTimeout(() => (button.textContent = "Copy"), 1500);
    });

    const pre = codeBlock.parentNode;
    pre.style.position = "relative";
    pre.appendChild(button);
  });
});
