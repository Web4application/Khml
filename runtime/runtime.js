console.log("⚙️ KHML Runtime loaded.");

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ai-think").forEach((el) => {
    const prompt = el.innerText.replace("🤖 Thinking:", "").trim();
    el.innerHTML = `<em>🤖 ${prompt}</em>`;
  });
});
