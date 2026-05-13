export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SubTopic {
  title: string;
  content: string;
}

export interface Topic {
  id: string;
  title: string;
  subtopics: SubTopic[];
  quiz: QuizQuestion[];
}

export interface Domain {
  id: string;
  title: string;
  weight: string;
  description: string;
  topics: Topic[];
}

export const courseData: Domain[] = [
  {
    id: "domain-1",
    title: "Domain 1: Fundamentals of AI and ML",
    weight: "20%",
    description: "Understand basic AI/ML concepts, practical use cases, and the AI/ML development lifecycle.",
    topics: [
      {
        id: "d1-t1",
        title: "Basic AI Concepts and Terminologies",
        subtopics: [
          {
            title: "Core Definitions",
            content: "• **AI (Artificial Intelligence)**: Systems that can perform tasks typically requiring human intelligence.\n• **ML (Machine Learning)**: A subset of AI algorithms that learn from data without explicit programming.\n• **Deep Learning**: A subset of ML utilizing multi-layered artificial neural networks.\n• **Generative AI (GenAI)**: Advanced AI that creates new, original content (text, images, audio, code).\n• **Agentic AI**: AI systems or agents that can autonomously execute complex, multi-step tasks by interacting with external tools and APIs."
          },
          {
            title: "Data and Learning Types",
            content: "• **Data Types**: Labeled/unlabeled, tabular, time-series, image, text, structured/unstructured.\n• **Supervised Learning**: Model trained on labeled data predicting labels/values.\n• **Unsupervised Learning**: Model trained on unlabeled data finding patterns (e.g., clustering).\n• **Reinforcement Learning**: Agent learns to make decisions to maximize rewards through trial and error."
          },
          {
            title: "Inferencing",
            content: "Inferencing is using a trained model to make predictions. Types include:\n• **Batch**: Processing large volumes of data offline.\n• **Real-time**: Synchronous predictions with low latency.\n• **Asynchronous**: Requests are queued and processed later.\n• **Serverless**: Inferencing infrastructure scales automatically without server management."
          }
        ],
        quiz: [
          {
            question: "Which type of AI system can autonomously execute complex, multi-step tasks using external tools?",
            options: ["Generative AI", "Agentic AI", "Predictive AI", "Unsupervised ML"],
            correctAnswer: 1,
            explanation: "Agentic AI refers to systems structured as agents that can reason, plan, and invoke tools to achieve complex goals autonomously."
          }
        ]
      },
      {
        id: "d1-t2",
        title: "Practical Use Cases for AI",
        subtopics: [
          {
            title: "Choosing the Right Technology",
            content: "Assess whether traditional ML or Foundation Models (FMs) are appropriate based on regulatory concerns, explainability needs, and cost. Traditional ML is often better for structured tabular data, while FMs excel at unstructured text/image generation."
          },
          {
            title: "AWS Managed AI/ML Services",
            content: "AWS offers purpose-built services:\n• **Amazon SageMaker AI**: Build, train, and deploy ML models.\n• **Amazon Transcribe**: Speech-to-text.\n• **Amazon Translate**: Language translation.\n• **Amazon Comprehend**: Natural language processing (NLP) for text analysis.\n• **Amazon Lex**: Conversational chatbots.\n• **Amazon Polly**: Text-to-speech."
          }
        ],
        quiz: [
          {
            question: "Which AWS service is specifically designed for text-to-speech conversion?",
            options: ["Amazon Lex", "Amazon Transcribe", "Amazon Polly", "Amazon Comprehend"],
            correctAnswer: 2,
            explanation: "Amazon Polly is an AWS service that turns text into lifelike speech."
          }
        ]
      },
      {
        id: "d1-t3",
        title: "AI/ML Development Lifecycle",
        subtopics: [
          {
            title: "MLOps and Pipeline",
            content: "The AI/ML lifecycle includes data collection, data preparation (EDA, feature engineering), model training, evaluation, deployment, and monitoring. MLOps ensures these are repeatable, scalable processes, managing technical debt and model re-training."
          },
          {
            title: "Model and Business Metrics",
            content: "• **Model Metrics**: Accuracy, Precision, Recall, F1 score.\n• **Business Metrics**: Cost per user, development cost, ROI, customer feedback."
          }
        ],
        quiz: [
          {
            question: "Which metric is considered a business outcome metric rather than a technical model metric?",
            options: ["F1 Score", "Precision", "Return on Investment (ROI)", "Recall"],
            correctAnswer: 2,
            explanation: "ROI is a business metric evaluating the financial benefit of the ML model, whereas F1 score, precision, and recall are technical model performance metrics."
          }
        ]
      }
    ]
  },
  {
    id: "domain-2",
    title: "Domain 2: Fundamentals of GenAI",
    weight: "24%",
    description: "Concepts of Generative AI, Foundation Models, capabilities, limitations, and AWS GenAI infrastructure.",
    topics: [
      {
        id: "d2-t1",
        title: "Basic Concepts of GenAI",
        subtopics: [
          {
            title: "Foundational GenAI Concepts",
            content: "• **Tokens & Chunking**: Tokens are basic units of data processed by LLMs. Chunking is breaking large texts into smaller pieces for context limits.\n• **Embeddings & Vectors**: Representations of data in a high-dimensional vector space capturing semantic meaning.\n• **Transformer-based LLMs**: Neural network architecture powering modern text models.\n• **Diffusion Models**: Generate high-quality images from text prompts."
          },
          {
            title: "Token-Based Pricing",
            content: "GenAI inference costs are typically calculated based on token counts (input tokens and output tokens). Longer prompts or larger generated outputs directly impact operational costs and latency."
          },
          {
            title: "Agentic AI Concepts",
            content: "• **Multi-Agent Systems**: Multiple AI agents collaborating to solve complex tasks.\n• **Model Context Protocol (MCP)**: An open standard connecting agents to external systems, standardizing tool usage and memory management."
          }
        ],
        quiz: [
          {
            question: "What is the primary factor that dictates the cost of inference for most managed Foundation Models?",
            options: ["Hours of server uptime", "Number of input and output tokens", "Number of users", "Size of the training dataset"],
            correctAnswer: 1,
            explanation: "Token-based pricing charges per 1,000 or 1,000,000 input and output tokens processed during inference."
          }
        ]
      },
      {
        id: "d2-t2",
        title: "Capabilities and Limitations",
        subtopics: [
          {
            title: "Advantages and Disadvantages",
            content: "• **Advantages**: High adaptability, strong conversational capabilities, rapid content generation.\n• **Disadvantages**: Hallucinations (generating false information), lack of interpretability, inaccuracies, nondeterminism (different answers for the same prompt)."
          },
          {
            title: "Model Selection Factors",
            content: "When selecting GenAI models consider: Model type/modality, performance, cost, latency, token limits, compliance/safety features, and model complexity."
          }
        ],
        quiz: [
          {
            question: "Which of the following is a known limitation of Generative AI models?",
            options: ["They can only process numerical tabular data", "They always produce deterministic, identical outputs for the same prompt", "They can confidently generate plausible but completely false information (hallucinations)", "They require strict explicit programming rules for every task"],
            correctAnswer: 2,
            explanation: "Hallucinations—where the model generates false or nonsensical information presented as fact—are a major limitation of current GenAI."
          }
        ]
      },
      {
        id: "d2-t3",
        title: "AWS GenAI Infrastructure",
        subtopics: [
          {
            title: "AWS GenAI Services",
            content: "• **Amazon Bedrock**: Unified API to access top FMs (Anthropic, Meta, Amazon Titan, etc.).\n• **Amazon SageMaker JumpStart**: Access to pre-trained, open-source models for deployment.\n• **Amazon Q**: Enterprise GenAI assistant.\n• **Agentic and Builder Tools**: Kiro, Strands Agents, Amazon Bedrock AgentCore for building autonomous workflows."
          }
        ],
        quiz: [
          {
            question: "Which AWS service provides a single API to access foundation models from multiple leading AI companies like Anthropic and Meta?",
            options: ["Amazon SageMaker JumpStart", "Amazon Bedrock", "AWS Transform", "Amazon Comprehend"],
            correctAnswer: 1,
            explanation: "Amazon Bedrock is a fully managed service that makes foundation models from leading AI startups and Amazon available via an API."
          }
        ]
      }
    ]
  },
  {
    id: "domain-3",
    title: "Domain 3: Applications of Foundation Models",
    weight: "28%",
    description: "Design considerations, prompt engineering, customization, training, and evaluation methods.",
    topics: [
      {
        id: "d3-t1",
        title: "Design Considerations for FMs",
        subtopics: [
          {
            title: "Model Customization Tradeoffs",
            content: "• **In-context Learning (Prompting)**: Lowest cost, highest agility. No model weights updated.\n• **RAG (Retrieval-Augmented Generation)**: Injects external, up-to-date knowledge dynamically. Highly effective for enterprise accuracy without retraining.\n• **Fine-Tuning**: Updates model weights for specific domain styles/formats. Moderate cost.\n• **Pre-training**: Training a foundation model from scratch. Exceptionally high cost and time.\n• **Model Distillation**: Transferring knowledge from a large model to a smaller, more efficient one."
          },
          {
            title: "Vector Databases for RAG",
            content: "AWS services for vector embeddings include Amazon OpenSearch Service, Amazon Aurora, Amazon Neptune, and Amazon RDS for PostgreSQL (via pgvector)."
          }
        ],
        quiz: [
          {
            question: "Which approach is most cost-effective for giving an LLM access to your company's latest proprietary PDF documents?",
            options: ["Pre-training a new model from scratch", "Fine-tuning the model on the PDFs", "Retrieval-Augmented Generation (RAG)", "Model Distillation"],
            correctAnswer: 2,
            explanation: "RAG retrieves relevant external contexts and injects them into the prompt, ensuring factual, up-to-date responses without the high cost of retraining model weights."
          }
        ]
      },
      {
        id: "d3-t2",
        title: "Prompt Engineering Techniques",
        subtopics: [
          {
            title: "Techniques and Management",
            content: "• **Zero-shot**: Asking the model without examples.\n• **Few-shot**: Providing a few examples in the prompt to guide formatting.\n• **Chain-of-Thought**: Instructing the model to 'think step-by-step', significantly improving reasoning.\n• **Amazon Bedrock Prompt Management**: Used for managing, versioning, and deploying prompts systematically."
          },
          {
            title: "Risks",
            content: "Prompt injection, jailbreaking (bypassing safety guards), and prompt exposure (leaking system instructions)."
          }
        ],
        quiz: [
          {
            question: "Adding 'Let's think step by step' to a prompt is an example of which technique?",
            options: ["Zero-shot prompting", "Few-shot prompting", "Chain-of-Thought prompting", "Model distillation"],
            correctAnswer: 2,
            explanation: "Chain-of-Thought prompting encourages the model to break down complex reasoning processes step-by-step."
          }
        ]
      },
      {
        id: "d3-t3",
        title: "Training and Fine-Tuning Process",
        subtopics: [
          {
            title: "Fine-Tuning Approaches",
            content: "• **Instruction Tuning**: Teaching the model to follow commands and chat formats.\n• **Domain Adaptation / Continued Pre-training**: Exposing the model to vast amounts of specialized text (e.g., medical or legal corpora).\n• **RLHF (Reinforcement Learning from Human Feedback)**: Using human ratings to train a reward model that aligns the AI outputs with human preferences."
          }
        ],
        quiz: [
          {
            question: "Which technique utilizes human ratings to align an AI model's behavior with human preferences and safety guidelines?",
            options: ["Continuous Pre-training", "Transfer Learning", "RLHF (Reinforcement Learning from Human Feedback)", "Prompt Chunking"],
            correctAnswer: 2,
            explanation: "RLHF relies on human evaluators to rank responses, training a reward model that guides the LLM toward safer, more helpful behaviors."
          }
        ]
      },
      {
        id: "d3-t4",
        title: "Methods to Evaluate FM Performance",
        subtopics: [
          {
            title: "Metrics and Tools",
            content: "• **ROUGE**: Evaluates summarization by comparing n-gram overlap with reference texts.\n• **BLEU**: Measures translation quality against human references.\n• **BERTScore**: Uses pre-trained contextual embeddings to evaluate semantic similarity.\n• **LLM-as-a-judge**: Using a powerful LLM to evaluate the outputs of another model.\n• **Amazon Bedrock Model Evaluation**: Facilitates both automated evaluation and human-in-the-loop workflows."
          }
        ],
        quiz: [
          {
            question: "Which evaluation metric is most commonly used to score the quality of text summarization models based on n-gram overlap?",
            options: ["BLEU", "ROUGE", "F1 Score", "LLM-as-a-judge"],
            correctAnswer: 1,
            explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is the standard metric used for assessing text summarization tasks."
          }
        ]
      }
    ]
  },
  {
    id: "domain-4",
    title: "Domain 4: Guidelines for Responsible AI",
    weight: "14%",
    description: "Ethical considerations, bias, fairness, transparency, and explainable AI.",
    topics: [
      {
        id: "d4-t1",
        title: "Development of Responsible AI Systems",
        subtopics: [
          {
            title: "Principles and Risks",
            content: "• **Core Features**: Bias prevention, fairness, inclusivity, robustness, safety, veracity.\n• **Legal/Business Risks**: Intellectual property infringement, generating toxic/biased content, loss of trust, hallucinations.\n• **Amazon Bedrock Guardrails**: Implement safeguards tailored to your application requirements, independently filtering undesirable inputs and model outputs."
          }
        ],
        quiz: [
          {
            question: "Which AWS feature can be used to explicitly define denied topics and filter harmful content generated by Foundation Models across different FM providers?",
            options: ["Amazon Macie", "Amazon Bedrock Guardrails", "AWS Trusted Advisor", "Amazon GuardDuty"],
            correctAnswer: 1,
            explanation: "Amazon Bedrock Guardrails allows you to implement policies that filter out harmful content, PII, and off-topic interactions across various FMs."
          }
        ]
      },
      {
        id: "d4-t2",
        title: "Transparent and Explainable Models",
        subtopics: [
          {
            title: "Tools for Transparency",
            content: "• **Amazon SageMaker Model Cards**: Centralized repository for documenting model details, intended use, risk ratings, and performance metrics.\n• **Amazon SageMaker Clarify**: Provides bias detection and explainability (e.g., feature importance mechanisms) across the ML lifecycle.\n• Interpreting models often involves navigating a tradeoff between advanced model capability (like deep learning black boxes) and system transparency."
          }
        ],
        quiz: [
          {
            question: "Which AWS tool provides a standardized way to document model intended use, risk ratings, and performance metrics for governance and transparency?",
            options: ["AWS CloudTrail", "AWS Config", "Amazon SageMaker Model Cards", "AWS Audit Manager"],
            correctAnswer: 2,
            explanation: "SageMaker Model Cards provide a centralized location to document critical model metadata, aiding transparency and governance."
          }
        ]
      }
    ]
  },
  {
    id: "domain-5",
    title: "Domain 5: Security, Compliance, and Governance",
    weight: "14%",
    description: "Securing AI infrastructure, managing data privacy, and governance compliance.",
    topics: [
      {
        id: "d5-t1",
        title: "Securing AI Systems",
        subtopics: [
          {
            title: "Data and Application Security",
            content: "• **Data Privacy**: Customer data used in Amazon Bedrock is not used to train base AWS models.\n• **Protection Tools**: Apply IAM, AWS KMS for encryption, AWS PrivateLink for private network boundaries, and Amazon Macie for discovering PII in S3.\n• **AgentCore Identity & Policy**: Manage identity, authentication, and execution policies within autonomous AI agents.\n• **RAG Grounding**: Combat hallucinations by securely anchoring outputs to verified enterprise data via Retrieval Augmented Generation."
          }
        ],
        quiz: [
          {
            question: "Which AWS service utilizes machine learning and pattern matching to discover and protect sensitive data (like PII) in Amazon S3?",
            options: ["Amazon Inspector", "AWS PrivateLink", "Amazon Macie", "AWS Secrets Manager"],
            correctAnswer: 2,
            explanation: "Amazon Macie automatically discovers, classifies, and protects sensitive data, such as Personally Identifiable Information (PII) stored in S3."
          }
        ]
      },
      {
        id: "d5-t2",
        title: "Governance and Compliance Regulations",
        subtopics: [
          {
            title: "AWS Governance Tools",
            content: "• **AWS Audit Manager**: Automate evidence collection for audit and compliance.\n• **AWS Artifact**: Access AWS compliance reports and security documents.\n• **AWS CloudTrail**: Used for logging and auditing API activity across AWS.\n• **AWS Config**: Assess and monitor configurations of AWS resources."
          }
        ],
        quiz: [
          {
            question: "If an AI engineering team needs to prove compliance with external regulatory standards by automating evidence collection regarding resource usage, which service should they use?",
            options: ["AWS Artifact", "AWS Trusted Advisor", "AWS Audit Manager", "Amazon Inspector"],
            correctAnswer: 2,
            explanation: "AWS Audit Manager continually audits your AWS usage to simplify how you assess risk and compliance with regulations and industry standards."
          }
        ]
      }
    ]
  }
];
