import { PracticeQuestion } from './practiceQuestionsData';

export const moreQuestions2: PracticeQuestion[] = [
  // Domain 1: Fundamentals of AI & ML
  {
    id: "q41",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "Which of the following problems is best solved using a regression algorithm?",
    options: [
      { id: "a", text: "Grouping customers based on their purchase history.", isCorrect: false, explanation: "Incorrect. This is a clustering (unsupervised learning) problem." },
      { id: "b", text: "Identifying whether an image contains a cat or a dog.", isCorrect: false, explanation: "Incorrect. This is a classification problem." },
      { id: "c", text: "Predicting the future sales revenue of a store for the next quarter.", isCorrect: true, explanation: "Correct. Regression is used to predict continuous numerical values like revenue, price, or temperature." },
      { id: "d", text: "Filtering out spam emails from a user's inbox.", isCorrect: false, explanation: "Incorrect. This is classification." }
    ]
  },
  {
    id: "q42",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "A company wants to identify hidden patterns in a large dataset of unlabeled text documents. Which type of machine learning should they use?",
    options: [
      { id: "a", text: "Supervised Learning", isCorrect: false, explanation: "Incorrect. Supervised learning requires labeled data." },
      { id: "b", text: "Unsupervised Learning", isCorrect: true, explanation: "Correct. Unsupervised learning analyzes unlabeled data to find hidden patterns or groupings." },
      { id: "c", text: "Reinforcement Learning", isCorrect: false, explanation: "Incorrect. Reinforcement learning relies on rewards and interactions." },
      { id: "d", text: "Transfer Learning", isCorrect: false, explanation: "Incorrect. Transfer learning leverages an existing model." }
    ]
  },
  {
    id: "q43",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "During model evaluation, what metric represents the proportion of true positive predictions out of all the positive predictions made by the model?",
    options: [
      { id: "a", text: "Recall", isCorrect: false, explanation: "Incorrect. Recall is true positives out of all actual positives." },
      { id: "b", text: "Precision", isCorrect: true, explanation: "Correct. Precision measures how accurate the model's positive predictions are." },
      { id: "c", text: "F1 Score", isCorrect: false, explanation: "Incorrect. The F1 Score is the harmonic mean of precision and recall." },
      { id: "d", text: "Accuracy", isCorrect: false, explanation: "Incorrect. Accuracy measures the overall percentage of correct predictions." }
    ]
  },
  {
    id: "q44",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "What is 'Feature Engineering' in the context of the machine learning lifecycle?",
    options: [
      { id: "a", text: "Selecting the correct deep learning framework (e.g., PyTorch vs TensorFlow).", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Transforming raw data into meaningful variables that better represent the underlying problem to the predictive model.", isCorrect: true, explanation: "Correct. Feature engineering involves creating, modifying, and selecting the inputs given to the algorithm." },
      { id: "c", text: "Deploying the model to a production environment.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Tuning the learning rate of the model.", isCorrect: false, explanation: "Incorrect. That is hyperparameter tuning." }
    ]
  },
  {
    id: "q45",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "If a model suffers from 'high bias', what issue is it likely experiencing?",
    options: [
      { id: "a", text: "Underfitting", isCorrect: true, explanation: "Correct. High bias means the model is too simple and makes strong assumptions, leading to underfitting both training and test data." },
      { id: "b", text: "Overfitting", isCorrect: false, explanation: "Incorrect. High variance is associated with overfitting." },
      { id: "c", text: "Data Drift", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Data Leakage", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  // Domain 2: Fundamentals of GenAI
  {
    id: "q46",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "Which component of the prompt specifies the desired persona or behavioral guidelines for a generative AI model?",
    options: [
      { id: "a", text: "The Output Format", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "The System Prompt", isCorrect: true, explanation: "Correct. The System Prompt sets the boundaries, persona, and overarching instructions for the AI's behavior." },
      { id: "c", text: "The Few-Shot Examples", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The Temperature Setting", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q47",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "Which of the following best describes the difference between a traditional ML model and a Foundation Model?",
    options: [
      { id: "a", text: "Traditional ML models are pre-trained on massive datasets, whereas Foundation models are trained purely on proprietary data.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Foundation Models are trained on vast, unlabeled datasets using self-supervised learning, allowing them to adapt to many downstream tasks.", isCorrect: true, explanation: "Correct. Foundation models act as a versatile base that can be adapted, unlike traditional ML which is trained for a single specific task." },
      { id: "c", text: "Traditional ML uses neural networks but Foundation Models do not.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Foundation Models cannot generate text.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q48",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "What is an LLM 'Token'?",
    options: [
      { id: "a", text: "An authentication credential used to access the AI API.", isCorrect: false, explanation: "Incorrect in this context." },
      { id: "b", text: "The numeric weight assigned to a neural network layer.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "The fundamental unit of data processed by an LLM, which can be a word, subword, or character.", isCorrect: true, explanation: "Correct. LLMs break text into chunks called tokens before processing them." },
      { id: "d", text: "A measure of computational power required for inference.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q49",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "A company wants to build a generative AI application that creates high-quality marketing images from text descriptions. Which type of architecture is primarily associated with this task?",
    options: [
      { id: "a", text: "Decoder-only Transformers", isCorrect: false, explanation: "Incorrect. Decoder-only models (like GPT) generate text." },
      { id: "b", text: "Diffusion Models", isCorrect: true, explanation: "Correct. Diffusion models progressively remove noise to create high-resolution images from text prompts." },
      { id: "c", text: "Recurrent Neural Networks (RNN)", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "K-Means Clustering", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q50",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "What does 'temperature = 0' imply when calling an LLM API?",
    options: [
      { id: "a", text: "The model will generate highly creative, unpredictable responses.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "The model will always output the exact same response for a given prompt (greedy decoding).", isCorrect: true, explanation: "Correct. A temperature of 0 removes randomness, forcing the model to always pick the highest probability next token." },
      { id: "c", text: "The model will refuse to answer.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The model will prioritize safety over accuracy.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  // Domain 3: Applications of Foundation Models
  {
    id: "q51",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "A data engineer wants to orchestrate a multistep AI workflow where one LLM classifies an incoming email, a second LLM extracts key entities, and a database is updated. Which orchestration framework is most commonly used for this?",
    options: [
      { id: "a", text: "Amazon SageMaker Data Wrangler", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "LangChain", isCorrect: true, explanation: "Correct. LangChain (and open-source orchestrators generally) are designed to chain LLM calls and tools together." },
      { id: "c", text: "Amazon Transcribe", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "TensorFlow", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q52",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "Which of the following is true regarding RAG (Retrieval-Augmented Generation)?",
    options: [
      { id: "a", text: "It prevents prompt injection.", isCorrect: false, explanation: "Incorrect. RAG actually increases the risk of indirect prompt injection." },
      { id: "b", text: "It requires frequent retraining of the Foundation Model to keep data up-to-date.", isCorrect: false, explanation: "Incorrect. The entire point of RAG is avoiding retraining." },
      { id: "c", text: "It reduces hallucinations by grounding the generator in factual retrieved documents.", isCorrect: true, explanation: "Correct. By injecting factual context into the prompt, RAG minimizes guessing." },
      { id: "d", text: "It shrinks the size of the required context window.", isCorrect: false, explanation: "Incorrect. RAG usually consumes a large portion of the context window." }
    ]
  },
  {
    id: "q53",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "During Fine-Tuning, a developer notices 'Catastrophic Forgetting'. What does this mean?",
    options: [
      { id: "a", text: "The model's vector database became corrupted.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "The underlying hardware crashed during training.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "The context window was exceeded, causing the model to crop the prompt.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The model lost its original general knowledge or capabilities when being trained heavily on a new, specific dataset.", isCorrect: true, explanation: "Correct. Modifying too many weights during fine-tuning can overwrite core capabilities." }
    ]
  },
  {
    id: "q54",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "What is an advantage of pre-training a Foundation Model from scratch?",
    options: [
      { id: "a", text: "It is the cheapest method of customizing an AI.", isCorrect: false, explanation: "Incorrect. It is the most expensive method." },
      { id: "b", text: "It requires very little data compared to RAG.", isCorrect: false, explanation: "Incorrect. It requires massive volumes of data." },
      { id: "c", text: "It allows deep customization of language, domain, and structural understanding specific to an industry's raw data.", isCorrect: true, explanation: "Correct. Although highly expensive, pre-training gives you full control over the model's fundamental world view and vocabulary (e.g., BloombergGPT)." },
      { id: "d", text: "It is a fast process typically completed in hours.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q55",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "A company implements RAG using a vector database. Which step determines how effectively a user's question compares against the stored document embeddings?",
    options: [
      { id: "a", text: "The dimension of the vector embedding model used to encode the query.", isCorrect: true, explanation: "Correct. The query must be embedded using the same embedding model as the documents so their meaning can be mathematically compared." },
      { id: "b", text: "The temperature parameter of the LLM generator.", isCorrect: false, explanation: "Incorrect. The generator does not perform the retrieval." },
      { id: "c", text: "The specific system prompt used.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The BLEU score.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  // Domain 4: Guidelines for Responsible AI
  {
    id: "q56",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "If an AI generates copyrighted code without attribution, which Responsible AI principle is primarily being challenged?",
    options: [
      { id: "a", text: "Privacy", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Intellectual Property / Legal Compliance", isCorrect: true, explanation: "Correct. Generation of copyrighted material creates IP and legal risks." },
      { id: "c", text: "Explainability", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Safety", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q57",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "What is 'Toxicity' in the context of LLMs?",
    options: [
      { id: "a", text: "The computational overhead of running the model.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Generated content containing hate speech, harassment, or abusive language.", isCorrect: true, explanation: "Correct. Toxicity filters are a key component of AI safety." },
      { id: "c", text: "The tendency of the model to output non-deterministic responses.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "The loss of gradient during backpropagation.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q58",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "A generative AI creates highly realistic images of a politician saying something they never actually said. What is this called?",
    options: [
      { id: "a", text: "Deepfake", isCorrect: true, explanation: "Correct. Deepfakes are hyper-realistic AI-generated media designed to deceive." },
      { id: "b", text: "Prompt Injection", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Model Inversion", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Data Poisoning", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q59",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "Why should developers scrub Personally Identifiable Information (PII) before using data to fine-tune an LLM?",
    options: [
      { id: "a", text: "To improve the model's BLEU score.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "Because LLMs can memorize training data and inadvertently output private information to random users.", isCorrect: true, explanation: "Correct. LLMs pose severe privacy risks if trained on unsecured PII." },
      { id: "c", text: "To expand the context window.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Because PII prevents the attention mechanism from working.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q60",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "Amazon SageMaker Clarify helps with which of the following tasks?",
    options: [
      { id: "a", text: "Detecting bias and explaining model predictions.", isCorrect: true, explanation: "Correct. Clarify gives visibility into potential biases and calculates feature importance." },
      { id: "b", text: "Routing traffic to multiple endpoints.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Extracting text from PDFs.", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Creating vector databases.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  // Domain 5: Security, Compliance & Governance
  {
    id: "q61",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "A company wants to detect fraudulent activities like fake accounts or credit card fraud by analyzing the relationships between IP addresses, user IDs, and transactions. Which fully managed AWS AI database service handles complex relationship graphs?",
    options: [
      { id: "a", text: "Amazon DynamoDB", isCorrect: false, explanation: "Incorrect. DynamoDB is a NoSQL KV database, not optimized for deep relational graphs." },
      { id: "b", text: "Amazon Neptune", isCorrect: true, explanation: "Correct. Amazon Neptune is a managed graph database highly optimized for fraud detection networks." },
      { id: "c", text: "Amazon Q", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "AWS Glue", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q62",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which AWS service is specifically designed to use machine learning to detect anomalies in application logs and predict pending equipment failure based on sensor data?",
    options: [
      { id: "a", text: "Amazon Lookout for Metrics / Lookout for Equipment", isCorrect: true, explanation: "Correct. The 'Lookout' family uses ML specifically for automated anomaly detection in industrial and business metrics." },
      { id: "b", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "Amazon Personalize", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "AWS CloudTrail", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q63",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which AWS AI service allows developers to add image and video analysis (like face detection or object labeling) to their applications without building custom ML models?",
    options: [
      { id: "a", text: "Amazon Textract", isCorrect: false, explanation: "Incorrect. Textract is for document text extraction." },
      { id: "b", text: "Amazon Rekognition", isCorrect: true, explanation: "Correct. Rekognition provides pre-trained image and video analysis APIs." },
      { id: "c", text: "Amazon Comprehend", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Amazon Polly", isCorrect: false, explanation: "Incorrect. Polly is text-to-speech." }
    ]
  },
  {
    id: "q64",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "In the context of Amazon Bedrock, how is customer privacy maintained when fine-tuning a base foundation model?",
    options: [
      { id: "a", text: "The base model is permanently overridden for all AWS customers.", isCorrect: false, explanation: "Incorrect." },
      { id: "b", text: "AWS stores the data locally on the user's laptop.", isCorrect: false, explanation: "Incorrect." },
      { id: "c", text: "AWS creates a private, isolated copy of the model for the customer, ensuring data is never shared back to the base model providers.", isCorrect: true, explanation: "Correct. Data privacy in Bedrock guarantees your private training data stays strictly inside your VPC environment." },
      { id: "d", text: "Privacy cannot be maintained during fine-tuning.", isCorrect: false, explanation: "Incorrect." }
    ]
  },
  {
    id: "q65",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "Which AWS service converts text into lifelike speech?",
    options: [
      { id: "a", text: "Amazon Transcribe", isCorrect: false, explanation: "Incorrect. Transcribe converts speech to text." },
      { id: "b", text: "Amazon Lex", isCorrect: false, explanation: "Incorrect. Lex builds chatbots." },
      { id: "c", text: "Amazon Translate", isCorrect: false, explanation: "Incorrect." },
      { id: "d", text: "Amazon Polly", isCorrect: true, explanation: "Correct. Polly is the AWS text-to-speech (TTS) service." }
    ]
  }
];
