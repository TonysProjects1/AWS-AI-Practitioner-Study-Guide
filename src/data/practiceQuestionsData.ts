export interface PracticeOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface PracticeQuestion {
  id: string;
  domainId: string;
  domainName: string;
  question: string;
  options: PracticeOption[];
}

import { moreQuestions } from './moreQuestions';
import { moreQuestions2 } from './moreQuestions2';
import { moreQuestions3 } from './moreQuestions3';
import { generatedQuestions } from './generatedQuestions';

export const practiceQuestionsData: PracticeQuestion[] = [
  // Domain 1
  {
    id: "q1",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "A data scientist is investigating a model that performs exceptionally well on the training data but very poorly on the unseen test data. Which of the following is the MOST likely cause?",
    options: [
      { id: "a", text: "Underfitting (High Bias)", isCorrect: false, explanation: "Incorrect. Underfitting means the model is too simple and performs poorly on BOTH the training and test data." },
      { id: "b", text: "Overfitting (High Variance)", isCorrect: true, explanation: "Correct. Overfitting occurs when a model is too complex and 'memorizes' the training data, including noise, causing it to fail on new, unseen data." },
      { id: "c", text: "Data Drift", isCorrect: false, explanation: "Incorrect. Data drift occurs when the distribution of incoming real-world data changes over time, long after the initial test split evaluation." },
      { id: "d", text: "Concept Drift", isCorrect: false, explanation: "Incorrect. Concept drift occurs when the underlying relationship between inputs and the target variable changes over time." }
    ]
  },
  {
    id: "q2",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "A startup is building a fraud detection model to identify fraudulent credit card transactions. Fraudulent transactions account for only 0.05% of the dataset. Which evaluation metric should they prioritize to evaluate the model's effectiveness?",
    options: [
      { id: "a", text: "Accuracy", isCorrect: false, explanation: "Incorrect. Accuracy is highly misleading for imbalanced datasets because a model predicting 'Not Fraud' 100% of the time would still be 99.95% accurate but completely useless." },
      { id: "b", text: "Root Mean Square Error (RMSE)", isCorrect: false, explanation: "Incorrect. RMSE is an evaluation metric used for Regression tasks (predicting continuous numbers), not Classification tasks like fraud detection." },
      { id: "c", text: "Recall", isCorrect: true, explanation: "Correct. Recall (Sensitivity) measures the proportion of actual positives (fraud) that were correctly identified. In fraud detection, missing a fraudulent transaction (False Negative) is highly costly, so Recall is prioritized." },
      { id: "d", text: "K-Means", isCorrect: false, explanation: "Incorrect. K-Means is an unsupervised clustering algorithm, not an evaluation metric." }
    ]
  },
  {
    id: "q3",
    domainId: "domain-1",
    domainName: "Domain 1: Fundamentals of AI & ML",
    question: "Which data preprocessing technique should be used to convert a categorical column like 'Color' (containing 'Red', 'Green', 'Blue') into a format suitable for standard machine learning algorithms?",
    options: [
      { id: "a", text: "Normalization", isCorrect: false, explanation: "Incorrect. Normalization scales numeric data to a standard range (e.g., 0 to 1), it doesn't convert strings to numbers." },
      { id: "b", text: "Imputation", isCorrect: false, explanation: "Incorrect. Imputation is the process of filling in missing values (e.g., using mean or median)." },
      { id: "c", text: "One-Hot Encoding", isCorrect: true, explanation: "Correct. One-Hot Encoding converts categorical string data into multiple binary (0 or 1) numeric columns representing each category." },
      { id: "d", text: "Dimensionality Reduction", isCorrect: false, explanation: "Incorrect. Dimensionality reduction (like PCA) reduces the number of features, it does not encode strings." }
    ]
  },
  
  // Domain 2
  {
    id: "q4",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "Which component of the Transformer architecture is primarily responsible for allowing the model to quickly understand context by weighing the relationship of a specific word against all other words in a sentence?",
    options: [
      { id: "a", text: "The Feed-Forward Network", isCorrect: false, explanation: "Incorrect. The FFN processes the output of the attention layers but doesn't handle the relational context mapping itself." },
      { id: "b", text: "The Self-Attention Mechanism", isCorrect: true, explanation: "Correct. Self-attention allows the model to look at the surrounding text to derive contextual meaning (e.g., knowing 'it' refers to 'bank' and not 'river')." },
      { id: "c", text: "The Vector Database", isCorrect: false, explanation: "Incorrect. A Vector Database is an external storage system used in RAG architectures, not an internal component of a Transformer neural network." },
      { id: "d", text: "The Diffusion Layer", isCorrect: false, explanation: "Incorrect. Diffusion is an architecture used for generating images from noise, not a component inside text-based Transformers." }
    ]
  },
  {
    id: "q5",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "A developer is writing a prompt for a Large Language Model to extract specific JSON entities from a legal contract. The output must be highly deterministic and strictly follow the formatting rules without any creative deviation. Which parameter adjustment is most appropriate?",
    options: [
      { id: "a", text: "Increase the Temperature to 0.9", isCorrect: false, explanation: "Incorrect. Higher temperature increases randomness and creativity, making the output less deterministic." },
      { id: "b", text: "Decrease the Temperature to 0.1", isCorrect: true, explanation: "Correct. A low temperature makes the model's choices highly deterministic, predictable, and focused, which is ideal for rigid extraction tasks or coding." },
      { id: "c", text: "Increase Top-P to 1.0", isCorrect: false, explanation: "Incorrect. Increasing Top-P allows the model to select from a wider vocabulary of less probable words, reducing determinism." },
      { id: "d", text: "Decrease the Max Tokens to 50", isCorrect: false, explanation: "Incorrect. Max Tokens simply truncates the length of the response. It does not make the content itself more deterministic." }
    ]
  },
  {
    id: "q6",
    domainId: "domain-2",
    domainName: "Domain 2: Fundamentals of GenAI",
    question: "What is the primary function of an 'Embedding Model'?",
    options: [
      { id: "a", text: "To convert human-readable text into a dense mathematical vector of floating-point numbers.", isCorrect: true, explanation: "Correct. Embeddings capture the semantic meaning of text and map it into a high-dimensional vector space." },
      { id: "b", text: "To determine the absolute factual accuracy of another model's output.", isCorrect: false, explanation: "Incorrect. This describes an LLM-as-a-judge evaluation process, not an embedding model." },
      { id: "c", text: "To translate text from one language to another.", isCorrect: false, explanation: "Incorrect. While embeddings help the model understand meaning, translation requires an encoder-decoder architecture." },
      { id: "d", text: "To connect an AI Agent directly to a SQL database.", isCorrect: false, explanation: "Incorrect. Connecting agents to databases is handled through tools, APIs, or the Model Context Protocol (MCP), not embedding models." }
    ]
  },

  // Domain 3
  {
    id: "q7",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "A company wants to build an AI assistant that can accurately answer questions about their proprietary, internal HR policies. They want to minimize costs and avoid retraining the underlying foundation model. Which architecture should they choose?",
    options: [
      { id: "a", text: "Continuous Pre-training", isCorrect: false, explanation: "Incorrect. Pre-training from scratch costs millions of dollars and requires massive compute, which directly violates the requirement to minimize costs." },
      { id: "b", text: "Parameter-Efficient Fine-Tuning (PEFT)", isCorrect: false, explanation: "Incorrect. While cheaper than full fine-tuning, PEFT still updates model weights and is generally focused on teaching a model a new tone or style, not ingesting massive amounts of factual knowledge." },
      { id: "c", text: "Retrieval-Augmented Generation (RAG)", isCorrect: true, explanation: "Correct. RAG fetches relevant internal documents from a vector database and injects them into the prompt. It provides accurate, grounded answers on private data with zero model retraining costs." },
      { id: "d", text: "Zero-Shot Prompting", isCorrect: false, explanation: "Incorrect. Zero-shot prompting relies only on the model's public training data, so it will hallucinate or fail when asked about private internal HR policies." }
    ]
  },
  {
    id: "q8",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "A developer notices that their LLM is consistently struggling with a complex math problem. To fix this, they append the phrase 'Let's think step by step' to the end of the prompt. Which prompt engineering technique are they using?",
    options: [
      { id: "a", text: "Few-Shot Prompting", isCorrect: false, explanation: "Incorrect. Few-shot involves providing multiple complete examples of the input and output format. The developer only added an instruction." },
      { id: "b", text: "Negative Prompting", isCorrect: false, explanation: "Incorrect. Negative prompting involves telling the model what NOT to do (e.g., 'Do not use bullet points')." },
      { id: "c", text: "Chain-of-Thought (CoT) Prompting", isCorrect: true, explanation: "Correct. Chain-of-Thought forces the model to output its intermediate reasoning steps before arriving at the final answer, significantly reducing logic errors." },
      { id: "d", text: "Prompt Caching", isCorrect: false, explanation: "Incorrect. Caching is an infrastructure feature to save compute costs on identical prompts; it doesn't change the model's reasoning capabilities." }
    ]
  },
  {
    id: "q9",
    domainId: "domain-3",
    domainName: "Domain 3: Applications of Foundation Models",
    question: "Which model evaluation metric is heavily focused on measuring the n-gram overlap between a machine-generated text summary and a human-written reference summary?",
    options: [
      { id: "a", text: "BLEU", isCorrect: false, explanation: "Incorrect. While BLEU measures n-gram overlap, it is primarily optimized and used for evaluating Language Translation tasks, not Summarization." },
      { id: "b", text: "ROUGE", isCorrect: true, explanation: "Correct. ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is the standard metric used to evaluate Summarization tasks." },
      { id: "c", text: "BERTScore", isCorrect: false, explanation: "Incorrect. BERTScore uses contextual embeddings to measure semantic similarity, specifically avoiding exact n-gram overlap penalties." },
      { id: "d", text: "Root Mean Square Error (RMSE)", isCorrect: false, explanation: "Incorrect. RMSE is used for Regression models predicting continuous numbers, not for evaluating text generation." }
    ]
  },

  // Domain 4
  {
    id: "q10",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "Which pillar of Responsible AI is concerned with ensuring an AI model treats all demographic subgroups equitably and avoids discriminatory outcomes?",
    options: [
      { id: "a", text: "Explainability", isCorrect: false, explanation: "Incorrect. Explainability deals with understanding the 'why' behind a model's prediction." },
      { id: "b", text: "Robustness", isCorrect: false, explanation: "Incorrect. Robustness ensures the model maintains performance under stress and adversarial inputs." },
      { id: "c", text: "Fairness", isCorrect: true, explanation: "Correct. Fairness ensures that models do not replicate societal biases or discriminate against specific subgroups." },
      { id: "d", text: "Transparency", isCorrect: false, explanation: "Incorrect. Transparency provides stakeholders with documentation (like Model Cards) regarding the model's capabilities and limits." }
    ]
  },
  {
    id: "q11",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "A data scientist realizes their facial recognition model correctly identifies individuals with lighter skin tones but severely fails to recognize individuals with darker skin tones. What type of bias does this represent?",
    options: [
      { id: "a", text: "Measurement Bias", isCorrect: false, explanation: "Incorrect. Measurement bias relates to faulty data collection tools or systematic human errors during labeling." },
      { id: "b", text: "Representation Bias", isCorrect: true, explanation: "Correct. The training dataset lacked diversity and did not accurately reflect the population the model is serving in the real world." },
      { id: "c", text: "Historical Bias", isCorrect: false, explanation: "Incorrect. Historical bias occurs when perfect demographic data correctly reflects pre-existing societal inequalities or historical discrimination." },
      { id: "d", text: "High Variance", isCorrect: false, explanation: "Incorrect. High variance is a statistical overfitting problem, not a demographic bias classification." }
    ]
  },
  {
    id: "q12",
    domainId: "domain-4",
    domainName: "Domain 4: Guidelines for Responsible AI",
    question: "Which AWS service allows you to actively block harmful content, deny specific topics, and dynamically redact PII from an LLM's prompts and responses in real-time?",
    options: [
      { id: "a", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect. Macie performs asynchronous scanning of static S3 buckets for PII, not real-time filtering of LLM inference traffic." },
      { id: "b", text: "Amazon Bedrock Guardrails", isCorrect: true, explanation: "Correct. Guardrails sits between the user and the Foundation Model, enforcing real-time safety, privacy, and content filters." },
      { id: "c", text: "Amazon SageMaker Clarify", isCorrect: false, explanation: "Incorrect. Clarify detects bias in training data and provides explainability metrics. It does not actively block inline traffic." },
      { id: "d", text: "AWS Config", isCorrect: false, explanation: "Incorrect. AWS Config evaluates resource configurations against compliance rules." }
    ]
  },

  // Domain 5
  {
    id: "q13",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "According to the AWS Shared Responsibility Model for AI/ML, which of the following is strictly a Customer responsibility?",
    options: [
      { id: "a", text: "Securing the physical data centers hosting Amazon Bedrock.", isCorrect: false, explanation: "Incorrect. Global infrastructure security is explicitly AWS's responsibility ('Security OF the Cloud')." },
      { id: "b", text: "Updating the underlying hypervisors running Amazon SageMaker instances.", isCorrect: false, explanation: "Incorrect. Patching managed ML compute infrastructure is managed by AWS." },
      { id: "c", text: "Ensuring customer prompts are not used to train AWS base foundation models.", isCorrect: false, explanation: "Incorrect. This is an explicit privacy guarantee governed by AWS. AWS never trains base models on customer prompts." },
      { id: "d", text: "Configuring KMS keys to encrypt model training data at rest in Amazon S3.", isCorrect: true, explanation: "Correct. The customer is entirely responsible for 'Security IN the Cloud', including data encryption, IAM policies, and VPC configuration." }
    ]
  },
  {
    id: "q14",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "An enterprise needs to ensure that all API traffic sent to Amazon Bedrock never leaves the private Amazon backbone network to avoid public internet exposure. Which feature should they implement?",
    options: [
      { id: "a", text: "AWS CloudTrail", isCorrect: false, explanation: "Incorrect. CloudTrail is used for auditing API calls, not routing network traffic." },
      { id: "b", text: "AWS PrivateLink / VPC Endpoints", isCorrect: true, explanation: "Correct. VPC Endpoints privately connect your Virtual Private Cloud to supported AWS services without requiring a public internet gateway." },
      { id: "c", text: "Amazon Macie", isCorrect: false, explanation: "Incorrect. Macie is for data discovery and protection in S3, not network routing." },
      { id: "d", text: "Bedrock Guardrails", isCorrect: false, explanation: "Incorrect. Guardrails filters prompt content; it does not secure the underlying networking paths." }
    ]
  },
  {
    id: "q15",
    domainId: "domain-5",
    domainName: "Domain 5: Security, Compliance & Governance",
    question: "A company wants to build a recommendation engine for their e-commerce storefront without managing infrastructure or writing custom matrix factorization algorithms. Which AWS service should they choose?",
    options: [
      { id: "a", text: "Amazon SageMaker AI", isCorrect: false, explanation: "Incorrect. SageMaker involves setting up, training, and deploying custom models from scratch, which violates the requirement to avoid writing custom algorithms." },
      { id: "b", text: "Amazon Comprehend", isCorrect: false, explanation: "Incorrect. Comprehend is used for Natural Language Processing task like sentiment analysis and entity extraction." },
      { id: "c", text: "Amazon Personalize", isCorrect: true, explanation: "Correct. Amazon Personalize is a fully managed service that allows developers to easily build custom product/content recommendation engines." },
      { id: "d", text: "Amazon Kendra", isCorrect: false, explanation: "Incorrect. Kendra is a managed enterprise search engine, not a recommendation engine." }
    ]
  },
  ...moreQuestions,
  ...moreQuestions2,
  ...moreQuestions3,
  ...generatedQuestions
];
