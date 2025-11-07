// KHML Runtime with AI placeholder
console.log("⚙️ KHML Runtime loaded.");

async function generateAIText(prompt, el) {
  el.innerHTML = "🤖 thinking...";
  try {
    // call your backend route that talks to OpenAI, Gemini, etc.
    const res = await fetch(`/ai?prompt=${encodeURIComponent(prompt)}`);
    const data = await res.json();
    el.innerHTML = `<em>🤖 ${data.text}</em>`;
  } catch (e) {
    el.innerHTML = "⚠️ AI request failed";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ai-think").forEach((el) => {
    const prompt = el.dataset.prompt || el.innerText;
    const btn = document.createElement("button");
    btn.textContent = "Generate AI text";
    btn.onclick = () => generateAIText(prompt, el);
    el.appendChild(btn);
  });
});
