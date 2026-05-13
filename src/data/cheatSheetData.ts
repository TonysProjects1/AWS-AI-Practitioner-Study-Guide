export const cheatSheetData = [
  {
    id: "domain-1",
    title: "Domain 1: Fundamentals of AI & ML",
    weight: "20%",
    content: `
### 1.1 AI, ML, and Deep Learning Demystified

Understanding the exact boundaries between AI, ML, and Deep Learning is crucial for the exam.

*   **Artificial Intelligence (AI):** The broadest concept. Any technique that enables computers to mimic human intelligence using logic, if-then rules, decision trees, or machine learning.
*   **Machine Learning (ML):** A subset of AI. It uses statistical techniques to give computer systems the ability to "learn" with data without being explicitly programmed.
*   **Deep Learning (DL):** A subset of ML composed of algorithms that permit software to train itself to perform tasks via multi-layered Artificial Neural Networks (ANNs).

### 1.2 Data Types & Formats

ML models require specific data formats. You must know how to classify data:
*   **Structured Data:** Highly organized, tabular data (SQL databases, CSV, Excel). Ideal for traditional ML algorithms (XGBoost, Random Forests).
*   **Unstructured Data:** Data with no predefined data model (raw text, emails, PDFs, images, video, audio). This requires Deep Learning or Foundation Models to process.
*   **Semi-Structured Data:** Contains semantic tags/markers separating elements (JSON, XML).
*   **Time-Series Data:** A sequence of data points indexed in time order (stock prices, server metrics, IoT sensor data). Used for forecasting.

### 1.3 Machine Learning Paradigms

1.  **Supervised Learning:** The model is trained on a *labeled* dataset (the "answer" is provided during training).
    *   *Regression:* Predicting a continuous numerical value (e.g., house price, temperature). Algorithms: Linear Regression.
    *   *Classification:* Predicting a discrete category/class (e.g., Spam vs. Not Spam, Fraud vs. Legitimate). Algorithms: Logistic Regression, Support Vector Machines (SVM).
2.  **Unsupervised Learning:** The model is trained on an *unlabeled* dataset and must find hidden patterns or structures.
    *   *Clustering:* Grouping similar data points together (e.g., customer segmentation). Algorithm: K-Means.
    *   *Dimensionality Reduction:* Reducing the number of input variables while retaining core information. Algorithm: Principal Component Analysis (PCA).
3.  **Reinforcement Learning (RL):** An "agent" learns to make decisions by performing actions in an "environment" to maximize cumulative "rewards". Used in robotics, game playing, and autonomous vehicles.

### 1.4 The Machine Learning Lifecycle (MLOps)

The exam tests your understanding of the end-to-end pipeline:

1.  **Business Problem Formatting:** Formulating the goal.
2.  **Data Collection & Integration:** Gathering data from data lakes (Amazon S3) or databases (Amazon RDS, Redshift).
3.  **Exploratory Data Analysis (EDA):** Visualizing data to find outliers, correlations, and distributions.
4.  **Data Pre-processing & Feature Engineering:**
    *   *Imputation:* Handling missing values (mean, median, mode).
    *   *One-Hot Encoding:* Converting categorical string data into binary numeric columns.
    *   *Normalization/Scaling:* Standardizing the range of independent variables.
5.  **Model Training:** Feeding data into the algorithm. Data is split into *Training* (usually 80%), *Validation* (10%), and *Test* (10%) sets.
6.  **Hyperparameter Tuning:** Adjusting external configurations (Learning Rate, Batch Size, Epochs) before training to optimize model architecture. Do not confuse with "parameters" (which are internal weights learned by the model).
7.  **Model Evaluation:** Testing against the holdout Test set to ensure it generalizes well to unseen data.
8.  **Model Deployment:** Hosting the model (e.g., as a REST API behind an endpoint) for inferencing.
9.  **Monitoring:** Watching for *Data Drift* (distribution of incoming data changes over time) and *Model Drift* / *Concept Drift* (the target to be predicted changes).

### 1.5 Evaluation Metrics (Crucial Exam Topic)

You must know which metric to look at based on the business problem.

*   **Accuracy:** (True Positives + True Negatives) / Total. *Warning: Misleading for highly imbalanced datasets (e.g., 99% legitimate, 1% fraud).*
*   **Precision (Quality):** True Positives / (True Positives + False Positives). Out of all the items the model *claimed* were positive, how many actually were? Use when the cost of a False Positive is high (e.g., spam filter).
*   **Recall / Sensitivity (Quantity):** True Positives / (True Positives + False Negatives). Out of all the *actual* positive items, how many did the model find? Use when the cost of a False Negative is high (e.g., cancer detection, fraud detection).
*   **F1-Score:** The harmonic mean of Precision and Recall. Use when you need a balance between the two on an imbalanced dataset.
*   **RMSE (Root Mean Square Error):** Used for Regression. Measures the average difference between values predicted by a model and the actual values.

### 1.6 Resolving Model Fit Issues

*   **Underfitting (High Bias):** The model is too simple and cannot learn the underlying relationship. It performs poorly on both training and test data. *Solution: Add more features, use a more complex model, increase training time.*
*   **Overfitting (High Variance):** The model is too complex and essentially "memorizes" the training data, including noise. It performs exceptionally well on training data but terribly on unseen test data. *Solution: Get more training data, remove features, use Regularization (L1/L2, Dropout), Stop training earlier (Early Stopping).*
`
  },
  {
    id: "domain-2",
    title: "Domain 2: Fundamentals of GenAI",
    weight: "24%",
    content: `
### 2.1 The Transformer Architecture

Generative AI shifted drastically with the invention of the Transformer architecture ("Attention is All You Need", 2017).

*   **Self-Attention Mechanism:** Allows the model to look at other words in the input phrase to understand context and relationships (e.g., understanding that "it" refers to the "bank" and not the "river").
*   **Encoders:** Good for understanding and analyzing text (e.g., Sentiment analysis, classification). Example: BERT.
*   **Decoders:** Good for generating text (predicting the next word). Example: GPT (Generative Pre-trained Transformer).
*   **Encoder-Decoder:** Good for translation, summarization. Example: T5.

### 2.2 Core GenAI Mechanics

*   **Tokens:** LLMs do not read "words"; they read "tokens." A token is a chunk of characters (usually ~4 characters or 0.75 words in English). "Apple" might be 1 token, but "Unbelievable" might be split into "Un", "believ", "able".
*   **Embeddings / Vector Space:** The mathematical representation of words. An embedding model converts a token into a dense vector (an array of hundreds or thousands of floating-point numbers). Words with similar semantic meanings will be physically closer together in the high-dimensional Vector Space.
*   **Context Window:** The maximum number of tokens an LLM can process in a single prompt (input + output). Exceeding this causes errors or "forgetting."
*   **Diffusion Models:** Used for Image Generation (e.g., Stable Diffusion, Amazon Titan Image Generator). They work by taking an image, gradually adding Gaussian noise until it's static, and training a neural network to reverse the process (denoise) conditioned on a text prompt.

### 2.3 LLM Parameters vs Hyperparameters

In GenAI inference, you can adjust parameters to alter the model's behavior:

*   **Temperature:** Controls randomness/creativity.
    *   *Low (e.g., 0.1 - 0.3):* Deterministic, focused, highly repetitive. Best for coding, math, exact extraction.
    *   *High (e.g., 0.8 - 1.0):* Creative, diverse, unpredictable. Best for brainstorming, creative writing.
*   **Top-P (Nucleus Sampling):** The model considers the results of the tokens with Top-P probability mass. If Top-P is 0.9, the model only considers the smallest set of words whose cumulative probability exceeds 90%.
*   **Top-K:** The model restricts its selection to the top *K* most likely next tokens.
*   **Max Tokens (Length):** Hard limit on the maximum number of tokens the model can generate in the response to prevent runaway costs or infinite loops.

### 2.4 Agentic AI

Moving beyond zero-shot prompt-response, Agentic AI introduces autonomy.

*   **AI Agents:** LLMs equipped with access to external tools (APIs, databases, calculators). The LLM uses logic (often via ReAct patterns) to decide *which* tool to use, generate parameters for the tool, observe the response, and decide the next step.
*   **Model Context Protocol (MCP):** An emerging open standard that allows developers to connect AI assistants to data sources (files, databases, APIs) without writing custom integrations for every single AI model.

### 2.5 GenAI Risks and Liabilities

*   **Hallucinations:** When an LLM confidently generates false, fictional, or nonsensical information. (Mitigated largely by RAG).
*   **Nondeterminism:** Asking the same model the exact same prompt twice will likely yield two differently phrased answers (unlike a SQL query).
*   **Toxicity & Bias:** Generating offensive or unfairly biased content due to biases present in the scraping of the public internet used for pre-training.
*   **Intellectual Property (IP) Infringement:** Models outputting exact copies of copyrighted material they were trained on, or using styles of living artists.
*   **Prompt Injection:** A security vulnerability where a user crafts a malicious input that overrides the developer's hidden system prompt instructions.
`
  },
  {
    id: "domain-3",
    title: "Domain 3: Applications of Foundation Models",
    weight: "28%",
    content: `
### 3.1 Prompt Engineering Mastery

Prompt Engineering is the most cost-effective way to guide Foundation Models.

*   **Zero-Shot:** Asking the model to perform a task without providing any examples.
*   **Few-Shot:** Providing 1 to 5 examples of the desired input/output format within the prompt itself to "teach" the model the format before asking it to perform the task.
*   **Chain-of-Thought (CoT):** Appending "Let's think step by step" to the prompt. This forces the LLM to output its intermediate reasoning, dramatically reducing math and logic errors.
*   **Negative Prompting:** Explicitly telling the model what *not* to include (e.g., "Generate a summary. Do not include any bullet points."). Used frequently in image generation (e.g., "ugly, extra fingers, blurry").

### 3.2 Retrieval-Augmented Generation (RAG) Architecture

RAG is arguably the most important architectural pattern in enterprise GenAI. It bridges the gap between an LLM's frozen training data and a company's private, live data without fine-tuning.

**The RAG Ingestion Pipeline:**
1.  Extract text from private documents (PDFs, Confluence, Jira).
2.  **Chunking:** Split the text into smaller overlapping chunks (e.g., 500 tokens).
3.  **Embedding:** Pass each chunk through an Embedding Model (e.g., Amazon Titan Embeddings) to convert text to vectors.
4.  **Vector Database:** Store the vectors in a specialized Database (e.g., Amazon OpenSearch, Aurora PostgreSQL with pgvector, Amazon Neptune).

**The RAG Retrieval Pipeline:**
1.  User submits a query ("What is our Q3 return policy?").
2.  The query is passed to the Embedding Model to create a vector.
3.  **Semantic Search:** The Vector DB performs a similarity search (using Cosine Similarity or K-Nearest Neighbors) to find the top $K$ chunks closest to the query vector.
4.  **Augmentation:** The original text of those relevant chunks is injected into the LLM prompt as context.
5.  **Generation:** The LLM reads the context and answers the user's question accurately.

### 3.3 Model Customization Methods (Cost Trade-offs)

From lowest cost to highest cost:

1.  **Prompt Engineering / RAG:** Lowest cost, highest ROI. No changes to model weights.
2.  **Instruction Fine-Tuning:** Teaching a base model to behave like a chatbot or follow a specific rigid formatting guideline (e.g., always output XML).
3.  **Domain Adaptation (Transfer Learning):** Fine-tuning the model on a massive corpus of highly specialized industry text (e.g., millions of legal contracts or medical journals) so it learns the vocabulary of that domain.
4.  **PEFT (Parameter-Efficient Fine-Tuning) / LoRA:** A fine-tuning technique that freezes the majority of the LLM's original weights and only trains a very small, lightweight "adapter" layer. Massive cost and compute savings compared to full fine-tuning.
5.  **Continuous Pre-training / Pre-training from Scratch:** Millions of dollars. Requires massive GPU clusters (Amazon EC2 P4/P5 instances) and petabytes of data.

### 3.4 Multi-Modal Foundation Models

Modern models are no longer just text.
*   **Modality:** The format of data (Text, Image, Audio, Video).
*   **Vision Models (VLM):** An LLM that can receive an image as input alongside text and "understand" the image (e.g., Anthropic Claude 3 Sonnet).
*   **TTS / STT:** Text-to-Speech and Speech-to-Text.

### 3.5 Evaluating LLM Performance

Evaluating generative output is notoriously difficult because there is no single "correct" string.

*   **ROUGE (Recall-Oriented Understudy for Gisting Evaluation):** Used primarily for evaluating **Summarization**. It measures the overlap of n-grams (phrases) between the machine-generated summary and a human-written reference summary.
*   **BLEU (Bilingual Evaluation Understudy):** Used primarily for evaluating **Language Translation**. It evaluates how similar the machine translation is to professional human translations.
*   **BERTScore:** Computes similarity using contextual embeddings rather than exact word matches. It recognizes that "huge" and "giant" mean the same thing, whereas ROUGE/BLEU might penalize the mismatch.
*   **LLM-as-a-Judge:** Using a highly capable (and expensive) model like Claude 3 Opus to grade the outputs of a cheaper, smaller model based on a rubric.
*   **Human-in-the-Loop (HITL):** Using human reviewers for ultimate ground-truth evaluation, specifically to evaluate "Helpfulness" and "Harmlessness."
`
  },
  {
    id: "domain-4",
    title: "Domain 4: Guidelines for Responsible AI",
    weight: "14%",
    content: `
### 4.1 Pillars of Responsible AI

AWS defines Responsible AI across specific dimensions:

*   **Fairness:** Models should treat all subgroups equitably. Avoid algorithmic bias leading to discriminatory outcomes (e.g., loan approvals denying specific demographics).
*   **Explainability:** Also known as Interpretability. Understanding *why* an AI model made a specific prediction.
    *   *Transparent Models:* Linear Regression, Decision Trees. Easy to explain.
    *   *Black-box Models:* Deep Neural Networks, LLMs. Difficult to explain. Highly regulated industries often require explainable models.
*   **Robustness:** The model must maintain performance under stress, edge cases, and unexpected adversarial inputs.
*   **Privacy & Security:** Ensuring training data is protected and that models do not leak Personally Identifiable Information (PII) during inferencing.
*   **Safety:** The model should not cause physical or psychological harm or recommend dangerous actions.
*   **Transparency:** Providing stakeholders with information about the model's capabilities, limitations, and how to use it safely (via Model Cards).

### 4.2 Bias in Machine Learning

Bias represents an inaccuracy in the model's predictions, often favoring one outcome or demographic over another.

*   **Historical Bias:** The training data reflects pre-existing human societal biases.
*   **Representation Bias:** The training dataset does not accurately reflect the population the model will serve in the real world (e.g., an autonomous vehicle trained only in sunny weather crashing in snow).
*   **Measurement Bias:** Errors introduced through faulty data collection tools or inherently flawed labeling processes.

### 4.3 Tools for Responsible AI on AWS

1.  **Amazon SageMaker Clarify:** This is the primary tool for Bias and Explainability.
    *   Detects bias in the training dataset *before* training.
    *   Detects bias in the model predictions *after* training.
    *   Provides Feature Importance graphs (e.g., SHAP values) showing exactly which data column contributed most to a specific decision.
2.  **Amazon Bedrock Guardrails:** A crucial security and safety feature for GenAI applications.
    *   It sits between the user and the Foundation Model.
    *   It can block User Inputs (Prompts) and Model Outputs (Responses).
    *   **Content Filters:** Blocks hate, violence, sexual content.
    *   **Denied Topics:** Blocks the model from discussing competitors or providing medical advice.
    *   **PII Redaction:** Strips SSNs, emails, and phone numbers out of the model's generated response before the user sees it.
    *   **Word Filters:** Custom lists of forbidden words (e.g., profanity, secret project code names).
3.  **Amazon SageMaker Model Cards:** A central document (a "nutrition label" for the model) that details objective information about the model, its intended use cases, risk rating, performance metrics, and limitations to ensure governance transparency.
4.  **Amazon Augmented AI (Amazon A2I):** Implements a Human-in-the-Loop workflow. If a model's confidence score drops below a specific threshold (e.g., a scanned document is blurry), A2I routes the task to a human worker to review and approve manually.
`
  },
  {
    id: "domain-5",
    title: "Domain 5: Security, Compliance & Governance",
    weight: "14%",
    content: `
### 5.1 The AWS Shared Responsibility Model (for AI/ML)

AWS handles the "Security OF the Cloud," while the Customer handles "Security IN the Cloud."

*   **AWS Responsibilities:** Securing the physical data centers, the hypervisors, and the underlying managed infrastructure compute instances powering services like Amazon Bedrock and SageMaker. For Bedrock, AWS guarantees that customer prompt data and fine-tuning data are kept completely isolated within the customer's VPC boundaries and are **never** used to train Amazon's base models or shared with third-party model providers (Anthropic, Meta).
*   **Customer Responsibilities:** Configuring IAM permissions, selecting KMS keys to encrypt training data in S3 (Encryption at Rest) and securing data over TLS (Encryption in Transit), implementing Bedrock Guardrails, reviewing Model output for hallucinations, and ensuring regulatory compliance.

### 5.2 IAM and Network Security Strategies

*   **Least Privilege:** Ensuring IAM users, roles, and ML instances have the absolute minimum permissions required. A SageMaker training job should only have read access to the specific S3 bucket holding its training data, nothing else.
*   **AWS PrivateLink / VPC Endpoints:** By default, AWS service APIs communicate over the public internet. By configuring a VPC Endpoint (powered by PrivateLink), traffic between your VPC and Amazon Bedrock (or SageMaker) never leaves the Amazon backbone network, eliminating exposure to the public internet. *This is critical for enterprise security compliance.*

### 5.3 Core Governance and Compliance Services

The exam frequently tests your ability to match the right auditing/governance service to an enterprise requirement.

*   **AWS CloudTrail:** Logs every single API call made within the AWS account. If you need to answer "Who invoked the Bedrock Model API at 2:00 PM?", use CloudTrail. It is the core service for security investigations and auditing.
*   **AWS Config:** Continuously monitors and records the configuration state of your AWS resources. It evaluates whether your resources comply with internal guidelines.
*   **AWS Audit Manager:** Continuously maps your AWS usage to specific compliance frameworks (like GDPR, HIPAA, SOC 2) and heavily automates the process of gathering evidence for external auditors.
*   **AWS Artifact:** A self-service portal where customers can download on-demand AWS security and compliance reports (e.g., SOC reports, PCI reports) and sign Business Associate Addendums (BAAs).
*   **Amazon Macie:** An ML-powered security service specifically designed to discover, classify, and protect sensitive data (such as Personally Identifiable Information - PII) living inside Amazon S3 buckets.

### 5.4 Mapping Use-Cases to AWS AI Services (Crucial Cheat Sheet)

If the exam asks you to perform a specific task without managing infrastructure, pick the correct high-level AI service:

| Business Need / Use Case | AWS Service |
| :--- | :--- |
| Create a conversational Virtual Agent / Chatbot | **Amazon Lex** |
| Extract text, handwriting, and data from scanned PDFs/forms | **Amazon Textract** |
| Convert speech/audio files into written text | **Amazon Transcribe** |
| Convert written text into lifelike speech/audio | **Amazon Polly** |
| Analyze text for sentiment (Positive/Negative), entities, or key phrases | **Amazon Comprehend** |
| Translate text from one language to another | **Amazon Translate** |
| Add image and video analysis (object/face detection, moderation) | **Amazon Rekognition** |
| Build an enterprise search engine (RAG backend) over internal docs | **Amazon Kendra** |
| Provide highly customized product or music recommendations | **Amazon Personalize** |
| Unified API to access industry-leading Foundation Models (Anthropic, Meta) | **Amazon Bedrock** |
| IDE Coding Assistant & Enterprise Q&A conversational AI | **Amazon Q** |
| End-to-end platform for building, training, and deploying custom models | **Amazon SageMaker** |
| No-code visual interface for business analysts to build ML models | **Amazon SageMaker Canvas** |

### 5.5 Anti-Patterns & Exam Distractors

When taking the exam, watch out for these common traps:

*   **"We need a recommendation engine..." -> Avoid building from scratch.** The correct answer is usually \`Amazon Personalize\`. Answers suggesting "Write a collaborative filtering matrix factorization algorithm using SageMaker notebooks" are technically possible but incorrect for a *Practitioner*. Use the managed service.
*   **"We need high accuracy on traditional tabular data..." -> Avoid LLMs.** Generative AI and Foundation models are massive, slow, and expensive. If the task is predicting a number (regression) or categorizing a binary flag based on an Excel spreadsheet, standard Machine Learning algorithms (XGBoost, Random Forests) via \`SageMaker\` are significantly more appropriate and cost-effective than using an LLM.
*   **"We need to protect PII in S3..." -> Use Macie, not Guardrails.** Bedrock Guardrails protects prompt text in real-time. Amazon Macie scans S3 buckets asynchronously for sensitive data.
`
  }
];
