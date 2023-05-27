const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion__panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(activePanel) {
  const buttons = activePanel.parentElement.querySelectorAll("button");
  const contents = activePanel.parentElement.querySelectorAll(
    ".accordion__content"
  );

  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });

  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });

  activePanel.querySelector("button").setAttribute("aria-expanded", true);
  activePanel
    .querySelector(".accordion__content")
    .setAttribute("aria-hidden", false);
  console.log(buttons);
}
