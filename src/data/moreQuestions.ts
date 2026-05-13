import { PracticeQuestion } from './practiceQuestionsData';

export const moreQuestions: PracticeQuestion[] = [
  // Domain 1: Fundamentals of AI & ML
  {
    id: "q16",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "Which of the following describes unstructured data?",
    options: [
      { id: "a", text: "Data stored in relational databases with rows and columns.", isCorrect: false, explanation: "Incorrect. This describes structured data." },
      { id: "b", text: "Data with a defined schema like CSV files.", isCorrect: false, explanation: "Incorrect. This describes structured data." },
      { id: "c", text: "Data like raw text, images, and audio that lacks a predefined data model.", isCorrect: true, explanation: "Correct. Unstructured data does not follow an organized tabular format." },
      { id: "d", text: "Data containing semantic tags like JSON.", isCorrect: false, explanation: "Incorrect. This describes semi-structured data." }
    ]
  },
  {
    id: "q17",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "A company wants to classify emails as either 'Spam' or 'Not Spam'. Which type of machine learning task is this?",
    options: [
      { id: "a", text: "Regression", isCorrect: false, explanation: "Incorrect. Regression is for predicting continuous numerical values." },
      { id: "b", text: "Clustering", isCorrect: false, explanation: "Incorrect. Clustering groups unlabeled data." },
      { id: "c", text: "Classification", isCorrect: true, explanation: "Correct. Classification assigns categorical labels (e.g., Spam or Not Spam)." },
      { id: "d", text: "Reinforcement Learning", isCorrect: false, explanation: "Incorrect. RL involves an agent learning through rewards." }
    ]
  },
  {
    id: "q18",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "What is the role of an epoch in training a machine learning model?",
    options: [
      { id: "a", text: "It refers to one complete pass of the entire training dataset through the algorithm.", isCorrect: true, explanation: "Correct. An epoch means the model has seen all training examples once." },
      { id: "b", text: "It is the learning rate of the model.", isCorrect: false, explanation: "Incorrect. Learning rate dictates the step size during optimization." },
      { id: "c", text: "It indicates the size of the validation set.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "It represents a single batch of data.", isCorrect: false, explanation: "Incorrect. A batch is a subset of the data processed in one step, whereas an epoch is the entire dataset." }
    ]
  },
  {
    id: "q19",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "What is the primary difference between AI and ML?",
    options: [
      { id: "a", text: "They are completely synonymous terms.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "AI requires neural networks, whereas ML does not.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "AI is a subset of ML focused on robotics.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "AI is the broader concept of mimicking human intelligence, while ML is a subset focused on learning patterns from data.", isCorrect: true, explanation: "Correct. ML is the application of AI where machines learn from data." }
    ]
  },
  {
    id: "q20",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "In standard ML dataset splitting, what is the validation set primarily used for?",
    options: [
      { id: "a", text: "To report the final accuracy metric to stakeholders at the end of the project.", isCorrect: false, explanation: "Incorrect. This is what the test set is for." },
      { id: "b", text: "To tune hyperparameters and evaluate the model during training before the final test.", isCorrect: true, explanation: "Correct. The validation set helps tune the model objectively before evaluating on the final unseen test set." },
      { id: "c", text: "To train the model weights and biases.", isCorrect: false, explanation: "Incorrect. This is the purpose of the training set." },
      { id: "d", text: "To impute missing data.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  // Domain 2
  {
    id: "q21",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "Which LLM parameter restricts the model to sampling only from the top K most likely next tokens?",
    options: [
      { id: "a", text: "Temperature", isCorrect: false, explanation: "Incorrect. Temperature alters the probability distribution." },
      { id: "b", text: "Max Tokens", isCorrect: false, explanation: "Incorrect. Max Tokens controls the length of the generated output." },
      { id: "c", text: "Top-P", isCorrect: false, explanation: "Incorrect. Top-P considers tokens whose cumulative probability exceeds a threshold." },
      { id: "d", text: "Top-K", isCorrect: true, explanation: "Correct. Top-K limits selection to the K highest probability tokens." }
    ]
  },
  {
    id: "q22",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "What issue does the concept of a 'Context Window' limit present for LLMs?",
    options: [
      { id: "a", text: "It dictates how long the model can train before overfitting.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "It limits the maximum amount of input text (tokens) the model can analyze and remember in a single prompt.", isCorrect: true, explanation: "Correct. Exceeding the context window causes the model to 'forget' early information or fail." },
      { id: "c", text: "It prevents the model from generating code.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "It enforces a rate limit on the number of API calls per second.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q23",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "What is an AI Hallucination?",
    options: [
      { id: "a", text: "When an LLM refuses to answer a prompt due to toxicity.", isCorrect: false, explanation: "Incorrect. This is a refusal." },
      { id: "b", text: "When the model produces varied outputs for the same prompt.", isCorrect: false, explanation: "Incorrect. This is nondeterminism." },
      { id: "c", text: "When an LLM confidently generates fundamentally false or fictional information.", isCorrect: true, explanation: "Correct. Hallucinations are plausible-sounding but factually incorrect statements." },
      { id: "d", text: "When the model takes too long to generate a response.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q24",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "Which of the following is considered an Agentic AI behavior?",
    options: [
      { id: "a", text: "Generating a summarized paragraph from an uploaded PDF.", isCorrect: false, explanation: "Incorrect. This is standard zero-shot generation." },
      { id: "b", text: "An LLM autonomously deciding to call an external weather API, observing the results, and generating a response.", isCorrect: true, explanation: "Correct. Agentic AI involves autonomy and tool-use (action/observation loops)." },
      { id: "c", text: "Translating a sentence from English to French.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Classifying the sentiment of a tweet as positive.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q25",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "If a user attempts to bypass a chatbot's hidden safety instructions to make it output malicious content, what type of attack is occurring?",
    options: [
      { id: "a", text: "Data poisoning", isCorrect: false, explanation: "Incorrect. Data poisoning affects the model during training." },
      { id: "b", text: "Model inversion", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "SQL Injection", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Prompt Injection", isCorrect: true, explanation: "Correct. Prompt injection involves crafting input to override system-level prompt instructions." }
    ]
  },
  // Domain 3
  {
    id: "q26",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "A company wants an AI model to analyze invoices. The model consistently returns the correct data but in unpredictable text formats. Which prompt engineering technique can best force the model to output a specific JSON structure?",
    options: [
      { id: "a", text: "Zero-Shot Prompting", isCorrect: false, explanation: "Incorrect. Zero-shot forces the model to guess the format." },
      { id: "b", text: "Few-Shot Prompting", isCorrect: true, explanation: "Correct. Providing a few examples of the desired JSON input/output structure in the prompt strongly guides the model's output formatting." },
      { id: "c", text: "Chain-of-Thought Prompting", isCorrect: false, explanation: "Incorrect. CoT helps with logic, not strict schema formatting." },
      { id: "d", text: "Negative Prompting", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q27",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "In a Retrieval-Augmented Generation (RAG) architecture, what mechanism is responsible for finding the most relevant chunks of text to include in the context?",
    options: [
      { id: "a", text: "Semantic similarity search using vector embeddings", isCorrect: true, explanation: "Correct. Vector databases compare the mathematical vector of the prompt against the vectors of the document chunks using cosine similarity." },
      { id: "b", text: "Relational SQL exact keyword matching", isCorrect: false, explanation: "Incorrect. SQL relies on exact string matches, not semantic meaning." },
      { id: "c", text: "Foundation Model fine-tuning", isCorrect: false, explanation: "Incorrect. Fine-tuning updates weights; RAG operates dynamically without changing weights." },
      { id: "d", text: "Hyperparameter tuning", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q28",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "When is Instruction Fine-Tuning typically used?",
    options: [
      { id: "a", text: "To teach an LLM entirely new facts from private corporate databases.", isCorrect: false, explanation: "Incorrect. Fine-tuning is poor for factual knowledge retention compared to RAG." },
      { id: "b", text: "To teach a base model how to behave like a conversational chatbot and reliably follow strict instructions.", isCorrect: true, explanation: "Correct. Instruction fine-tuning converts a base text-completion model into a helpful chatbot assistant." },
      { id: "c", text: "To embed documents into a vector database.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "To lower the cost of standard API calls without changing behavior.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q29",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "You need to evaluate a machine learning model designed to accurately translate French legal documents into English. Which evaluation metric is most appropriate?",
    options: [
      { id: "a", text: "ROUGE", isCorrect: false, explanation: "Incorrect. ROUGE is typically used to evaluate summarization." },
      { id: "b", text: "RMSE", isCorrect: false, explanation: "Incorrect. RMSE is used for regression." },
      { id: "c", text: "BLEU", isCorrect: true, explanation: "Correct. BLEU (Bilingual Evaluation Understudy) measures how similar machine translation is to professional human translations." },
      { id: "d", text: "LLM-as-a-judge", isCorrect: false, explanation: "Incorrect. While possible, BLEU is the established standard metric specifically designated for translation overlap evaluation." }
    ]
  },
  {
    id: "q30",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "What is an advantage of using LoRA (Low-Rank Adaptation) over full Fine-Tuning?",
    options: [
      { id: "a", text: "It prevents prompt injection attacks.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "It completely eliminates hallucinations.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "It drastically reduces compute and memory requirements by freezing the majority of original model weights.", isCorrect: true, explanation: "Correct. LoRA only trains a tiny 'adapter' layer, saving massive costs." },
      { id: "d", text: "It requires zero training data.", isCorrect: false, explanation: "Incorrect. LoRA is a fine-tuning technique and still requires a dataset." }
    ]
  },
  // Domain 4
  {
    id: "q31",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "Which of the following describes 'Historical Bias' in a machine learning model?",
    options: [
      { id: "a", text: "The dataset is missing data from recent years.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "The training data accurately reflects pre-existing societal prejudices or discriminatory practices.", isCorrect: true, explanation: "Correct. If society historically favored one group, the data will reflect that bias, even if accurately labeled." },
      { id: "c", text: "The algorithm becomes less accurate as the data distribution shifts over time.", isCorrect: false, explanation: "Incorrect. This describes data drift." },
      { id: "d", text: "The data was collected using broken sensors.", isCorrect: false, explanation: "Incorrect. This is measurement bias." }
    ]
  },
  {
    id: "q32",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "What is an effective way to improve the 'Explainability' of a complex deep learning model?",
    options: [
      { id: "a", text: "Use SHAP values via Amazon SageMaker Clarify to show feature importance.", isCorrect: true, explanation: "Correct. SHAP values indicate exactly which variables influenced a specific prediction, helping to explain 'black-box' models." },
      { id: "b", text: "Increase the number of hidden layers in the neural network.", isCorrect: false, explanation: "Incorrect. More layers make the model harder to explain." },
      { id: "c", text: "Encrypt the training dataset.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Use a higher temperature setting.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q33",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "What is the intended purpose of Amazon SageMaker Model Cards?",
    options: [
      { id: "a", text: "To securely store credit card data for billing.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "To act as a governance document detailing the model's capabilities, limitations, and intended use cases.", isCorrect: true, explanation: "Correct. They act as a 'nutrition label' to ensure AI transparency." },
      { id: "c", text: "To actively block toxic inputs before reaching the model.", isCorrect: false, explanation: "Incorrect. This describes Bedrock Guardrails." },
      { id: "d", text: "To automatically scale the underlying EC2 instances.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q34",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "An AI loan approval system relies on a model that incorrectly rejects highly qualified applicants simply because they live in a specific zip code heavily associated with a minority group. What dimension of Responsible AI is violated?",
    options: [
      { id: "a", text: "Transparency", isCorrect: false, explanation: "Incorrect. The model may be transparent about its logic, but it is still biased." },
      { id: "b", text: "Robustness", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Safety", isCorrect: false, explanation: "Incorrect. Safety generally refers to physical harm or dangerous actions." },
      { id: "d", text: "Fairness", isCorrect: true, explanation: "Correct. The model is exhibiting algorithmic bias that leads to a discriminatory outcome across a demographic subgroup." }
    ]
  },
  {
    id: "q35",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "A company wants to introduce a Human-in-the-Loop (HITL) step. When an automated document OCR model is less than 90% confident, the prediction should be routed to an employee for review. Which AWS service provides this?",
    options: [
      { id: "a", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect. Macie searches S3 for PII." },
      { id: "b", text: "Amazon Augmented AI (A2I)", isCorrect: true, explanation: "Correct. A2I manages human review workflows for ML predictions." },
      { id: "c", text: "Amazon Bedrock", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "AWS CloudTrail", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  // Domain 5
  {
    id: "q36",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "A startup wants to analyze thousands of recorded customer service telephone calls to automatically transcribe the speech and identify negative sentiment. Which combination of AWS AI services should they use?",
    options: [
      { id: "a", text: "Amazon Lex and Amazon Rekognition", isCorrect: false, explanation: "Incorrect. Lex is for chatbots; Rekognition is for images/video." },
      { id: "b", text: "Amazon Transcribe and Amazon Comprehend", isCorrect: true, explanation: "Correct. Transcribe converts the audio to text, and Comprehend performs sentiment analysis on the resulting text." },
      { id: "c", text: "Amazon Personalize and Amazon Translate", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Amazon Kendra and Amazon Textract", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q37",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which of the following best describes the core function of Amazon Textract?",
    options: [
      { id: "a", text: "It translates text between different languages.", isCorrect: false, explanation: "Incorrect. This is Amazon Translate." },
      { id: "b", text: "It extracts text, handwriting, and layout data from scanned documents like PDFs.", isCorrect: true, explanation: "Correct. Textract handles document OCR." },
      { id: "c", text: "It builds a conversational chatbot.", isCorrect: false, explanation: "Incorrect. This is Amazon Lex." },
      { id: "d", text: "It reviews code for security vulnerabilities.", isCorrect: false, explanation: "Incorrect. This is Amazon Q Developer." }
    ]
  },
  {
    id: "q38",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "What is the primary purpose of AWS CloudTrail?",
    options: [
      { id: "a", text: "To trace the execution path of a deep neural network.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "To discover PII in Amazon S3 securely.", isCorrect: false, explanation: "Incorrect. This is Macie." },
      { id: "c", text: "To log and audit all AWS API calls made within an AWS account.", isCorrect: true, explanation: "Correct. CloudTrail tracks who made an API call, when, and from which IP address, enabling deep security auditing." },
      { id: "d", text: "To provision resources automatically.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q39",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which AWS service helps customers heavily automate the collection of evidence to prove their architecture meets compliance frameworks like SOC 2 or HIPAA?",
    options: [
      { id: "a", text: "AWS Artifact", isCorrect: false, explanation: "Incorrect. Artifact is where you download pre-existing AWS reports from Amazon." },
      { id: "b", text: "AWS Config", isCorrect: false, explanation: "Incorrect. While it tracks configurations, it does not manage end-to-end evidence gathering for auditors." },
      { id: "c", text: "AWS Audit Manager", isCorrect: true, explanation: "Correct. Audit Manager maps AWS usage to compliance frameworks and gathers evidence automatically." },
      { id: "d", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q40",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "An organization wants to empower business analysts—who have zero Python experience—to build machine learning models using a visual interface. Which service is best suited?",
    options: [
      { id: "a", text: "Amazon SageMaker Studio", isCorrect: false, explanation: "Incorrect. SageMaker Studio requires programming." },
      { id: "b", text: "Amazon SageMaker Canvas", isCorrect: true, explanation: "Correct. SageMaker Canvas provides a visual, no-code ML interface aimed at business analysts." },
      { id: "c", text: "Amazon Bedrock", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "AWS Glue", isCorrect: false, explanation: "Incorrect." }
    ]
  }
];
