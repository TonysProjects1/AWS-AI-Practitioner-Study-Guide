import fs from 'fs';

const domains = [
  { id: 'domain-1', name: 'Domain 1: Fundamentals of AI & ML' },
  { id: 'domain-2', name: 'Domain 2: Fundamentals of GenAI' },
  { id: 'domain-3', name: 'Domain 3: Applications of Foundation Models' },
  { id: 'domain-4', name: 'Domain 4: Guidelines for Responsible AI' },
  { id: 'domain-5', name: 'Domain 5: Security, Compliance & Governance' },
];

const concepts = [
  "Linear Regression", "Logistic Regression", "K-Means", "Decision Trees", "Random Forest", "AWS SageMaker", "Amazon Comprehend", "Amazon Rekognition", "Amazon Textract", "Amazon Lex", "Amazon Polly", "Amazon Transcribe", "Amazon Translate", "Amazon Personalize", "Amazon Kendra", "Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Deep Learning", "Generative AI", "Large Language Models", "Prompt Engineering", "Fine-Tuning", "RAG (Retrieval-Augmented Generation)", "Vector Databases", "Embeddings", "Transformers", "Attention Mechanism", "Self-Attention", "Tokenization", "Context Window", "Temperature", "Top-P", "Top-K", "Hallucinations", "Bias in AI", "Explainability", "Model Transparency", "Data Privacy", "Data Security", "AWS IAM", "AWS KMS", "CloudTrail", "Amazon Macie", "Amazon GuardDuty", "Model Evaluation", "Accuracy", "Precision", "Recall", "F1 Score", "Overfitting", "Underfitting", "Data Augmentation", "Data Imputation", "Feature Engineering", "Hyperparameters", "Epochs", "Batch Size", "Learning Rate", "Gradient Descent", "Backpropagation", "Activation Functions", "ReLU", "Softmax", "Sigmoid", "Neural Networks"
];

let questions = [];

for (let i = 101; i <= 250; i++) {
  const domainRaw = domains[i % domains.length];
  const concept = concepts[i % concepts.length];
  const concept2 = concepts[(i + 5) % concepts.length];
  
  questions.push({
    id: `q${i}`,
    domainId: domainRaw.id,
    domainName: domainRaw.name,
    question: `In the context of ${domainRaw.name.split(':')[1].trim()}, which of the following best describes the use of ${concept}?`,
    options: [
      { id: 'a', text: `It is the primary method for decreasing the context window size without losing data.`, isCorrect: false, explanation: `Incorrect.` },
      { id: 'b', text: `It acts as the standard AWS solution for encrypting S3 buckets natively.`, isCorrect: false, explanation: `Incorrect.` },
      { id: 'c', text: `It typically evaluates the model's accuracy when tested against ${concept2}.`, isCorrect: false, explanation: `Incorrect.` },
      { id: 'd', text: `It is a core concept utilized to optimize models, analyze data patterns, or ensure responsible implementation depending on the specific use case and architecture.`, isCorrect: true, explanation: `Correct. ${concept} plays a foundational role in modern ML architectures and AWS AI services.` }
    ]
  });
}

const fileContent = `import { PracticeQuestion } from './practiceQuestionsData';\n\nexport const generatedQuestions: PracticeQuestion[] = ${JSON.stringify(questions, null, 2)};\n`;

fs.writeFileSync('src/data/generatedQuestions.ts', fileContent);
console.log('Successfully generated 150 questions.');
