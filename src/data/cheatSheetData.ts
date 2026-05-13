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

### 2.4 Agentic AI & Workflows

Moving beyond zero-shot prompt-response, Agentic AI introduces autonomy and multi-step complex reasoning workflows.

*   **AI Agents:** LLMs equipped with access to external tools (APIs, databases, calculators). The LLM uses a reasoning loop (like ReAct) to decide *which* tool to use, generate parameters for the tool, observe the response, and decide the next step.
*   **Workflow Orchestration:** Managing the state and execution sequence of multi-agent systems. Agents can communicate in multi-agent patterns (e.g., supervisor-worker, peer-to-peer).
*   **Memory Management:** Agents maintain short-term (session) and long-term (user preference) memory across conversations.
*   **Model Context Protocol (MCP):** An emerging open standard that allows developers to connect AI assistants to data sources (files, databases, APIs) predictably without writing custom integrations for every single AI model.

### 2.5 GenAI Risks and Liabilities

*   **Hallucinations:** When an LLM confidently generates false, fictional, or nonsensical information. (Mitigated largely by RAG and grounding).
*   **Nondeterminism:** Asking the same model the exact same prompt twice will rarely yield two identical outputs (unlike a SQL query).
*   **Toxicity & Bias:** Generating offensive or unfairly biased content due to biases present in the scraping of the public internet used for pre-training.
*   **Intellectual Property (IP) Infringement:** Models outputting exact copies of copyrighted material they were trained on, or using styles of living artists.
*   **Prompt Injection / Hijacking:** A security vulnerability where a user crafts a malicious input that overrides the developer's hidden system prompt instructions.

### 2.6 The AWS GenAI Ecosystem

*   **Amazon Bedrock:** Unified API for top Foundation Models (Anthropic Claude, Meta Llama, Amazon Nova/Titan, AI21, Cohere, Mistral). Supports serverless inference.
*   **Amazon Q:** Generative AI assistant tailored for developers (IDE) and business use cases (Enterprise Q&A).
*   **SageMaker JumpStart:** Provides pre-trained, open-source models, giving you full control over the infrastructure.
*   **Agent Builders:** Tools like Amazon Bedrock AgentCore, Kiro, and Strands Agents simplify building complex autonomous workflows with embedded Identity and Policy checks.
*   **AWS Transform:** Service to modernize and refactor codebases using generative AI.
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
*   **Prompt Caching:** Technique used to store intermediate processing layers of large common prompts to save costs and reduce latency on subsequent calls.
*   **Prompt Management:** AWS offers Bedrock Prompt Management to track template versions, environments, and rollbacks across teams.

### 3.2 Retrieval-Augmented Generation (RAG) Architecture

RAG is arguably the most important architectural pattern in enterprise GenAI. It bridges the gap between an LLM's frozen training data and a company's private, live data without fine-tuning.

**The RAG Ingestion Pipeline:**
1.  Extract text from private documents (PDFs, Confluence, Jira).
2.  **Chunking:** Split the text into smaller overlapping chunks (e.g., 500 tokens).
3.  **Embedding:** Pass each chunk through an Embedding Model (e.g., Amazon Titan Embeddings) to convert text to vectors.
4.  **Vector Database:** Store the vectors in a specialized Database (e.g., Amazon OpenSearch, Aurora PostgreSQL with pgvector, Amazon Neptune).
*   **Bedrock Knowledge Bases:** A fully managed RAG service on AWS that automates the ingestion, chunking, embedding, and vector storage pipelines.

**The RAG Retrieval Pipeline:**
1.  User submits a query ("What is our Q3 return policy?").
2.  The query is passed to the Embedding Model to create a vector.
3.  **Semantic Search:** The Vector DB performs a similarity search (using Cosine Similarity or K-Nearest Neighbors) to find the top $K$ chunks closest to the query vector.
4.  **Augmentation:** The original text of those relevant chunks is injected into the LLM prompt as context.
5.  **Generation:** The LLM reads the context and answers the user's question accurately.

### 3.3 Model Customization Methods (Cost Trade-offs)

From lowest cost/effort to highest cost/effort:

1.  **Prompt Engineering / In-Context Learning:** Lowest cost, highest ROI. No changes to model weights.
2.  **RAG:** Managed retrieval of external context. Slightly more complex architecture, but no model training required.
3.  **Model Distillation:** Training a smaller, less expensive "student" model to mimic the outputs of a massive, expensive "teacher" model.
4.  **Instruction Fine-Tuning:** Teaching a base model to behave like a chatbot or follow a specific rigid formatting guideline (e.g., always output XML).
5.  **Domain Adaptation (Transfer Learning):** Fine-tuning the model on a massive corpus of highly specialized industry text (e.g., medical journals) so it learns domain vocabulary.
6.  **PEFT / LoRA:** Fine-tuning technique that freezes the majority of original weights and trains a small "adapter." Massive compute savings.
7.  **Continuous Pre-training / Pre-training from Scratch:** Millions of dollars. Requires massive GPU clusters (Amazon EC2 P4/P5).

### 3.4 Multi-Modal Foundation Models & Selection Criteria

*   **Modality:** The format of data (Text, Image, Audio, Video). Vision Models (VLM) can "understand" images alongside text.
*   **Selection Criteria:** When choosing an FM, balance cost, latency, multi-lingual support, model size context window length, and ease of customization.

### 3.5 Evaluating LLM Performance

Evaluating generative output is notoriously difficult because there is no single "correct" string.

*   **ROUGE:** Used primarily for evaluating **Summarization**. Analyzes n-gram overlap.
*   **BLEU:** Used primarily for evaluating **Language Translation**.
*   **BERTScore:** Computes similarity using contextual embeddings rather than exact word matches.
*   **LLM-as-a-Judge:** Using a highly capable model like Claude Opus to grade cheaper models based on a rubric.
*   **Human-in-the-Loop (HITL) & RLHF:** Using human feedback to evaluate "Helpfulness" and align models. Bedrock Model Evaluation supports automated datasets and human-led workflows.
`
  },
  {
    id: "domain-4",
    title: "Domain 4: Guidelines for Responsible AI",
    weight: "14%",
    content: `
### 4.1 Pillars of Responsible AI

AWS defines Responsible AI across specific dimensions:

*   **Fairness:** Models should treat all subgroups equitably. Avoid algorithmic bias leading to discriminatory outcomes.
*   **Explainability (Interpretability):** Understanding *why* an AI model made a specific prediction.
    *   *Transparent Models:* Linear Regression, Decision Trees. Easy to explain.
    *   *Black-box Models:* Deep Neural Networks, LLMs. Difficult to explain.
*   **Robustness:** The model must maintain performance under stress, edge cases, and unexpected adversarial inputs.
*   **Privacy & Security:** Ensuring training data is protected and that models do not leak Personally Identifiable Information (PII).
*   **Safety:** The model should not cause physical or psychological harm or recommend dangerous actions.
*   **Transparency:** Providing stakeholders with information about the model's capabilities, limitations, and how to use it safely.
*   **Environmental Sustainability:** Selecting energy-efficient instances (e.g., AWS Inferentia or Trainium chips) to minimize carbon footprints and reducing unnecessary model pre-training.

### 4.2 Bias, Variance, & Data Characteristics

*   **Bias in ML:** Represents an inaccuracy, often favoring one outcome.
    *   *Historical Bias:* The training data reflects pre-existing human societal biases.
    *   *Representation Bias:* The training dataset lacks diversity and does not reflect the population.
    *   *Measurement Bias:* Errors introduced through faulty data collection tools.
*   **Bias vs. Variance Tradeoff:**
    *   *High Bias (Underfitting):* Model too simple, misses patterns.
    *   *High Variance (Overfitting):* Model too complex, memorizes noise.
*   **Quality Data Constraints:** Training datasets must be inclusive, diverse, highly curated, and balanced to avoid disparities.

### 4.3 Tools for Responsible AI on AWS

1.  **Amazon SageMaker Clarify:** Primary tool for Bias and Explainability.
    *   Detects bias in training datasets *before* training and in predictions *after* training.
    *   Provides Feature Importance graphs (e.g., SHAP values).
2.  **Amazon Bedrock Guardrails:** Security/safety feature for GenAI applications blocking harmful content, PII, and custom denied topics.
3.  **Amazon SageMaker Model Cards:** A central document that acts as a "nutrition label" detailing objective information, risk rating, performance metrics, and data lineage for governance transparency.
4.  **Amazon Augmented AI (Amazon A2I):** Implements a Human-in-the-Loop workflow when a model lacks confidence.
`
  },
  {
    id: "domain-5",
    title: "Domain 5: Security, Compliance & Governance",
    weight: "14%",
    content: `
### 5.1 The AWS Shared Responsibility Model (for AI/ML)

AWS handles the "Security OF the Cloud," while the Customer handles "Security IN the Cloud."

*   **AWS Responsibilities:** Securing the physical data centers, the hypervisors, and the underlying managed infrastructure compute instances powering services like Amazon Bedrock. AWS guarantees that customer prompt data is completely isolated and **never** used to train base models or shared with third-party providers.
*   **Customer Responsibilities:** Configuring IAM permissions, encryption in S3 (Encryption at Rest) and over TLS (Encryption in Transit), implementing Bedrock Guardrails, validating outputs, and ensuring regulatory compliance.

### 5.2 IAM and Network Security Strategies

*   **Least Privilege:** Ensuring IAM users, roles, and ML instances have the absolute minimum permissions required.
*   **AgentCore Identity and Policy:** Specifically restricts the autonomous actions an AI Agent can take on behalf of a user.
*   **AWS PrivateLink / VPC Endpoints:** By default, AWS service APIs communicate over the public internet. VPC Endpoints route traffic over the Amazon backbone network, eliminating public internet exposure.

### 5.3 Core Governance and Compliance Services

*   **AWS CloudTrail:** Logs every single API call made within the AWS account (e.g., "Who invoked Bedrock at 2:00 PM?"). Core service for auditing.
*   **AWS Config:** Continuously monitors and records the configuration state of your AWS resources against internal guidelines.
*   **AWS Audit Manager:** Heavily automates the process of gathering evidence for external auditors mapping to specific compliance frameworks (GDPR, HIPAA).
*   **AWS Artifact:** Portal where customers can download on-demand AWS security/compliance reports and sign Business Associate Addendums (BAAs).
*   **Amazon Macie:** ML-powered service to discover, classify, and protect sensitive PII living inside Amazon S3 buckets.
*   **Amazon Inspector:** Vulnerability management service that continually scans AWS workloads for software vulnerabilities.
*   **AWS Trusted Advisor:** Provides real-time guidance to provision resources following AWS best practices (Cost Optimization, Security, Fault Tolerance).

### 5.4 Mapping Use-Cases to AWS AI Services (Crucial Cheat Sheet)

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
| Unified API to access industry-leading Foundation Models | **Amazon Bedrock** |
| IDE Coding Assistant & Enterprise Q&A conversational AI | **Amazon Q** |
| End-to-end platform for building, training, and deploying custom models | **Amazon SageMaker AI** |
| No-code visual interface for business analysts to build ML models | **Amazon SageMaker Canvas** |

### 5.5 Anti-Patterns & Exam Distractors

*   **"We need a recommendation engine..." -> Avoid building from scratch.** The correct answer is usually \`Amazon Personalize\`. Answers suggesting manual complex algorithms in SageMaker are usually distractors for the practitioner level.
*   **"We need high accuracy on traditional tabular data..." -> Avoid LLMs.** Generative AI models are massive, slow, and expensive. Use standard Machine Learning algorithms (XGBoost, Random Forests) via \`SageMaker AI\` for tabular data or regression tasks.
*   **"We need to protect PII in S3..." -> Use Macie, not Guardrails.** Bedrock Guardrails protects prompt text in real-time. Amazon Macie scans S3 buckets asynchronously for sensitive data.
`
  }
];
