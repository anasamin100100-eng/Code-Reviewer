const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-flash-lite-latest",
  systemInstruction:
    "You are a senior software engineer and code reviewer. Analyze the following code for logic, structure, and efficiency. Identify issues, potential bugs, and areas for optimization. Then refactor or rewrite the code to follow clean code principles, modern best practices, and professional readability standards. Provide explanations for your improvements.",
});
async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}
module.exports = generateContent;
