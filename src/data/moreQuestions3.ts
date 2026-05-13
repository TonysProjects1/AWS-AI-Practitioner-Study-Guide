import { PracticeQuestion } from './practiceQuestionsData';

export const moreQuestions3: PracticeQuestion[] = [
  // Additional Domain Questions (Mixed to reach 100)
  {
    id: "q66",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "When evaluating a binary classification model, which metric combines Precision and Recall into a single score?",
    options: [
      { id: "a", text: "F1 Score", isCorrect: true, explanation: "Correct. The F1 Score is the harmonic mean of Precision and Recall, useful for imbalanced datasets." },
      { id: "b", text: "Accuracy", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "R-Squared", isCorrect: false, explanation: "Incorrect. R-Squared is used for regression." },
      { id: "d", text: "Mean Absolute Error", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q67",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "What is 'Data Imputation'?",
    options: [
      { id: "a", text: "Encrypting sensitive columns.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Replacing missing data points with substituted values like the mean or median.", isCorrect: true, explanation: "Correct. Imputation handles null values." },
      { id: "c", text: "Removing outliers.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Normalizing data between 0 and 1.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q68",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "In Machine Learning, what is a 'Hyperparameter'?",
    options: [
      { id: "a", text: "A parameter automatically learned by the model during training (like weights).", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "A configuration value set by the data scientist BEFORE training begins (e.g., learning rate).", isCorrect: true, explanation: "Correct. Hyperparameters govern the training process itself." },
      { id: "c", text: "A metric used to evaluate performance.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "A data row containing an outlier.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q69",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "In standard Transformer architectures, what is the role of Positional Encoding?",
    options: [
      { id: "a", text: "To determine which GPU a batch of data is processed on.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "To inject information about the order of words into the embeddings, since the attention mechanism processes them all at once.", isCorrect: true, explanation: "Correct. Transformers process in parallel, so they need positional encoding to know if a word is at the start or end of a sentence." },
      { id: "c", text: "To translate text into another language.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "To filter toxic words.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q70",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "Which of the following defines a 'Zero-Shot' prompt?",
    options: [
      { id: "a", text: "A prompt that asks the model a question without providing any examples of the desired output format.", isCorrect: true, explanation: "Correct. Zero-shot means zero examples are provided." },
      { id: "b", text: "A prompt that explicitly lists 5 examples.", isCorrect: false, explanation: "Incorrect. This is few-shot." },
      { id: "c", text: "A prompt designed to crash the model.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "A prompt that uses RAG.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q71",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "What does 'RLHF' stand for?",
    options: [
      { id: "a", text: "Randomized Learning with Hidden Features", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Reinforcement Learning from Human Feedback", isCorrect: true, explanation: "Correct. Human testers rank LLM outputs to train the model to act safely and helpfully." },
      { id: "c", text: "Recurrent Language Handling Framework", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Reduced Latency High Frequency", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q72",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "A bank wants to create a chatbot that answers questions based on a user's recent bank statements. Why is basic Fine-Tuning a poor choice for this?",
    options: [
      { id: "a", text: "Fine-tuning cannot handle financial math.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Fine-tuning bakes knowledge statically into weights, meaning daily transactions would require constant retraining, and it risks leaking data between users.", isCorrect: true, explanation: "Correct. Transaction data is highly dynamic and user-specific, making RAG the only viable architecture." },
      { id: "c", text: "Fine-tuning reduces the context window to 0.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Fine-tuning is blocked by Bedrock Guardrails.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q73",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "What is an Agent's 'Memory' in the context of LLM orchestration?",
    options: [
      { id: "a", text: "The physical RAM of the host EC2 instance.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "A mechanism to store and recall past conversation turns to maintain context over a long chat session.", isCorrect: true, explanation: "Correct. Models are stateless, so 'Memory' mechanisms append past turns to the current prompt." },
      { id: "c", text: "The vector database indices.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The pre-trained weights.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q74",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "Which term refers to an AI model being resilient against malicious inputs designed to force it into making mistakes (such as slightly altering an image so a self-driving car ignores a stop sign)?",
    options: [
      { id: "a", text: "Fairness", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Transparency", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Robustness", isCorrect: true, explanation: "Correct. Robustness ensures the model performs reliably even when faced with adversarial attacks or noisy data." },
      { id: "d", text: "Explainability", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q75",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "Amazon Bedrock provides 'Watermarking' for which type of foundation model outputs?",
    options: [
      { id: "a", text: "Text outputs (e.g., adding hidden characters).", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Code generation (e.g., commenting the author).", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Image generation (e.g., Amazon Titan Image Generator invisibly watermarks images to prove AI provenance).", isCorrect: true, explanation: "Correct. Bedrock places invisible watermarks on AI images to promote transparency and fight deepfakes." },
      { id: "d", text: "Audio synthesis.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q76",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which of the following AWS services helps developers confidently and securely write code by generating snippets and scanning for vulnerabilities?",
    options: [
      { id: "a", text: "Amazon Q Developer (formerly CodeWhisperer)", isCorrect: true, explanation: "Correct. Q Developer provides real-time code suggestions and security scanning natively in the IDE." },
      { id: "b", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "AWS Artifact", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Amazon Athena", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q77",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "What problem does K-Fold Cross-Validation solve?",
    options: [
      { id: "a", text: "It prevents an LLM from hallucinating.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "It reduces the size of a dataframe.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "It provides a more reliable estimate of model performance than a single train/test split, mitigating luck-of-the-draw splits.", isCorrect: true, explanation: "Correct. It trains the model multiple times on different segments of the data to ensure stable performance metrics." },
      { id: "d", text: "It converts text strings to numerical vectors.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q78",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "You want to run a tiny open-source LLM entirely on a standard user's laptop without a heavy GPU. What technique helps drastically shrink the model's file size?",
    options: [
      { id: "a", text: "Prompt Engineering", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Quantization", isCorrect: true, explanation: "Correct. Quantization converts the model's high-precision 32-bit floating-point weights into lower-precision 8-bit or 4-bit integers, massively reducing RAM overhead." },
      { id: "c", text: "RAG", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Embedding Generation", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q79",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "What is 'Semantic Chunking' in a RAG pipeline?",
    options: [
      { id: "a", text: "Dividing customer payments into chunks.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Splitting a large document into smaller pieces based on natural breaks (like sentences or paragraphs) rather than fixed character counts.", isCorrect: true, explanation: "Correct. Semantic chunking ensures the meaning of a concept isn't strictly cut in half mid-sentence." },
      { id: "c", text: "Upgrading the EC2 instance running the database.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Fine-tuning base weights.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q80",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "A company blocks users from typing certain politically sensitive keywords into their chatbot. This is an example of implementing:",
    options: [
      { id: "a", text: "Model Inversion", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Data Drift", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Guardrails and Content Filtering", isCorrect: true, explanation: "Correct. Guardrails act as a filter layer to intercept and block denied topics." },
      { id: "d", text: "Explainability", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q81",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which AWS service helps an organization visually build conversational bots for a customer service call center?",
    options: [
      { id: "a", text: "Amazon Connect / Amazon Lex", isCorrect: true, explanation: "Correct. Amazon Lex powers the conversational AI, frequently deployed via Amazon Connect." },
      { id: "b", text: "Amazon Textract", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Amazon SageMaker Studio", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "AWS Ground Station", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q82",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "A company needs to continuously monitor their AWS accounts for malicious activity and unauthorized behavior regarding ML resources. Which service provides threat detection?",
    options: [
      { id: "a", text: "Amazon GuardDuty", isCorrect: true, explanation: "Correct. GuardDuty is AWS's intelligent threat detection service." },
      { id: "b", text: "Amazon CloudFront", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "AWS Shield", isCorrect: false, explanation: "Incorrect. Shield is specifically for DDoS protection." },
      { id: "d", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect. Macie is for S3 data privacy." }
    ]
  },
  {
    id: "q83",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "A deep learning model assigns a probability of 0.8 to a dog and 0.2 to a cat. Which activation function is typically used in the final layer to produce these probabilities?",
    options: [
      { id: "a", text: "ReLU", isCorrect: false, explanation: "Incorrect. ReLU is used in hidden layers." },
      { id: "b", text: "Sigmoid or Softmax", isCorrect: true, explanation: "Correct. Softmax squashes outputs into a probability distribution summing to 1.0." },
      { id: "c", text: "Linear", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Tanh", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q84",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "Which is a common method for mitigating 'Prompt Injection' attacks?",
    options: [
      { id: "a", text: "Increasing model Temperature", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Using explicit delimiters (e.g., 'Analyze the text enclosed in ###')", isCorrect: true, explanation: "Correct. Delimiters help the model distinguish between instructions and untrusted user data." },
      { id: "c", text: "Pre-training from scratch", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Increasing Max Tokens", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q85",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "What is an 'LLM-as-a-judge'?",
    options: [
      { id: "a", text: "An AI system that physically sentences criminals.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Using a powerful LLM (like Claude 3 Opus) to automatically score or evaluate the outputs generated by a smaller, cheaper LLM.", isCorrect: true, explanation: "Correct. It's a scalable framework to grade outputs against a rubric automatically." },
      { id: "c", text: "A fine-tuning algorithm.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "A legal summarization model.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q86",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "According to guidelines, how should AI-generated interactions be presented to end consumers?",
    options: [
      { id: "a", text: "They should be indistinguishable from human operators.", isCorrect: false, explanation: "Incorrect. This violates transparency." },
      { id: "b", text: "With clear disclosure that the user is interacting with an artificial intelligence system.", isCorrect: true, explanation: "Correct. Transparency mandates that users know when they are talking to a bot." },
      { id: "c", text: "With a human name attached to build trust.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Without any disclaimer to improve conversion rates.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q87",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which AWS service acts as a fully managed hub for discovering, preparing, and sharing ML features across teams?",
    options: [
      { id: "a", text: "Amazon SageMaker Feature Store", isCorrect: true, explanation: "Correct. Feature Store manages features centrally to ensure offline/online consistency." },
      { id: "b", text: "AWS S3", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Amazon ECR", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "AWS DynamoDB", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q88",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "What term describes the process of a neural network updating its weights backwards from output to input to minimize loss?",
    options: [
      { id: "a", text: "Forward Propagation", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Backpropagation", isCorrect: true, explanation: "Correct. Backpropagation calculates the gradient of the loss function to adjust weights." },
      { id: "c", text: "One-Hot Encoding", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Clustering", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q89",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "What is typically the output layer of an Embedding Model?",
    options: [
      { id: "a", text: "A single classification string (e.g., 'Positive').", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "An array of floating-point numbers (a vector).", isCorrect: true, explanation: "Correct. Embeddings are high-dimensional vectors." },
      { id: "c", text: "A generated image.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "A SQL query.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q90",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "You want an LLM to generate code, but it keeps generating text explanations around the code block. What instruction should you add to the prompt?",
    options: [
      { id: "a", text: "Think step by step.", isCorrect: false, explanation: "Incorrect. This increases text generation." },
      { id: "b", text: "Output ONLY the required code and nothing else.", isCorrect: true, explanation: "Correct. Strict formatting instructions help suppress conversational filler." },
      { id: "c", text: "Increase temperature to 1.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Perform zero-shot retrieval.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q91",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "A model performing facial biometrics has a higher false-positive rate for women than men. Which Responsible AI pillar requires immediate attention?",
    options: [
      { id: "a", text: "Explainability", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Fairness", isCorrect: true, explanation: "Correct. Disparate impact across demographic groups is a directly related to Fairness." },
      { id: "c", text: "Security", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Privacy", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q92",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "For a highly regulated workload, how do you prevent AWS engineers from having access to the encryption keys used by your SageMaker instances?",
    options: [
      { id: "a", text: "Use basic S3 Server-Side Encryption (SSE-S3).", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Use AWS KMS with Customer Managed Keys (CMK).", isCorrect: true, explanation: "Correct. CMKs give the customer exclusive control over key policies and auditing." },
      { id: "c", text: "Use CloudTrail.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Disable internet access.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q93",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "Which of the following is an Unsupervised Learning algorithm?",
    options: [
      { id: "a", text: "Linear Regression", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Decision Tree", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "K-Means Clustering", isCorrect: true, explanation: "Correct. K-Means finds groupings in unlabeled data." },
      { id: "d", text: "Logistic Regression", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q94",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "When interacting with an LLM, what is the 'System Prompt'?",
    options: [
      { id: "a", text: "The final answer the model produces.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "A set of high-level instructions providing context, persona, and rules for the session before the user's input.", isCorrect: true, explanation: "Correct. The system prompt configures the backbone behavior." },
      { id: "c", text: "An error message from the API.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The physical server configuration.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q95",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "What defines an LLM's 'Reasoning' capability in advanced models?",
    options: [
      { id: "a", text: "The ability to look up internet articles.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "The ability to break down complex problems into logical intermediate steps before concluding.", isCorrect: true, explanation: "Correct. Advanced reasoning models internally execute chain-of-thought logic." },
      { id: "c", text: "The ability to produce high-resolution images.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The amount of parameters it has.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q96",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "To prevent 'Measurement Bias', a data scientist should:",
    options: [
      { id: "a", text: "Ensure their measurement tools (e.g. surveys, sensors) accurately and consistently record the intended targets without skewed scales.", isCorrect: true, explanation: "Correct. Measurement bias stems from faulty data collection mechanisms." },
      { id: "b", text: "Download a larger pre-trained model.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Increase Top-P.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Use Amazon VPC endpoints.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q97",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which of the following is the most severe risk of allowing an LLM open access to your corporate database via a SQL Agent without strict Role-Based Access Control?",
    options: [
      { id: "a", text: "High latency API calls.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "A user could prompt the Agent to permanently DROP TABLE or read sensitive HR salary tables.", isCorrect: true, explanation: "Correct. Agents without strict 'least privilege' sandboxing can be manipulated via Prompt Injection to execute malicious actions." },
      { id: "c", text: "The model might 'forget' its weights.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The context window will clear.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q98",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "What is an 'Activation Function'?",
    options: [
      { id: "a", text: "A mathematical 'gate' that determines whether a neuron should fire, introducing non-linearity to the network.", isCorrect: true, explanation: "Correct. Without non-linear activation functions, neural networks would just be linear regression models." },
      { id: "b", text: "The button a user clicks to start an API request.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "An AWS Lambda trigger.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The embedding database query mechanism.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q99",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "When evaluating outputs, what constraint does Generative AI specifically introduce compared to traditional Classification ML?",
    options: [
      { id: "a", text: "Generative AI outputs are identical every time.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Generative AI requires massive SQL databases.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Generative AI text outputs are highly open-ended, making exact-match evaluation (Accuracy) nearly impossible.", isCorrect: true, explanation: "Correct. Because there are infinite ways to say the same thing, GenAI requires specialized qualitative metrics like ROUGE, BLEU, or LLM-as-a-judge." },
      { id: "d", text: "Generative AI cannot process numbers.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q100",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Under the Shared Responsibility Model, who is responsible for configuring Amazon Bedrock Guardrails to block specific toxic industry topics?",
    options: [
      { id: "a", text: "AWS.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "The foundation model provider (e.g., Anthropic, Meta).", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "The Customer.", isCorrect: true, explanation: "Correct. The customer is responsible for defining and configuring the specific content policies required for their use case." },
      { id: "d", text: "The end consumer using the app.", isCorrect: false, explanation: "Incorrect." }
    ]
  }
];
