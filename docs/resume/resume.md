# Dongyoun Jeon

**Backend / Systems Engineer**  
Berlin, Germany

- Email: joeylife94@gmail.com
- LinkedIn: https://www.linkedin.com/in/dongyoun-jeon
- GitHub: https://github.com/joeylife94

---

## Summary

Backend / Systems Engineer with 4.8 years of experience building and improving production-critical systems in enterprise and public-sector environments.

My core background is in Java/Spring-based backend services, authentication and SSO, distributed consistency, performance optimization, and legacy modernization. I focus on turning operational complexity into maintainable systems with clearer boundaries, stronger reliability, and safer handoff.

I also build AI-assisted systems with a backend-first mindset, treating LLM features as structured workflow components rather than isolated demos.

---

## Core Strengths

- Production-critical backend systems
- Authentication, SSO, and secure interaction flows
- Distributed consistency and constraint-aware architecture
- Legacy modernization and incremental system improvement
- Performance optimization and operational stability
- AI-assisted workflow integration for real systems

---

## Experience

### Widetns — Full-Stack / Backend Engineer
*Enterprise software vendor; partner of LG CNS & LG Electronics*  
**02/2021 – 05/2025 · Seoul, South Korea**

Worked on enterprise platforms with strong requirements around availability, data consistency, and secure authentication.

- Contributed to the gradual migration of a monolithic platform into modular Spring Boot–based services
- Designed and implemented a Saga-style consistency mechanism under infrastructure constraints using a database-backed transactional event log and worker model
- Supported a large-scale Oracle → MySQL migration involving millions of records while preserving service continuity
- Contributed to an OAuth 2.0–based SSO system using Java, Quarkus, and Keycloak
- Improved performance and stability, including reducing API latency by around 30% through service separation and architectural restructuring

### Egistech — Backend Developer
*Public-sector digital systems modernization*  
**06/2025 – 10/2025 · Seoul, South Korea**

Worked on modernization and stabilization of public-facing systems with a focus on maintainability and performance.

- Improved a critical authentication/session path by resolving DB connection pool bottlenecks, increasing concurrent capacity from around 100 to 2,000+
- Refactored large stored procedure logic into maintainable application-layer code using MyBatis
- Applied AI-assisted analysis to accelerate legacy migration work while preserving functional correctness
- Standardized API definitions with OpenAPI/Swagger to reduce integration risk and improve collaboration
- Improved production readiness and observability for core services

---

## Selected Projects

### TerraNeuron
**Event-Driven Smart-Farm AI Platform**

Built an event-driven microservices platform for smart-farm analytics, where anomaly events trigger an AI “brain” workflow.

- Implemented a RAG pipeline with PDF ingestion, chunking, embeddings, and persistent vector search
- Integrated LLM recommendations into backend event flows rather than manual chat-style usage
- Designed the system around real service integration and operational response

**Tech:** Java 17, Spring Boot, Python/FastAPI, Kafka, Docker Compose, Chroma, HuggingFace Embeddings, OpenAI API, Ollama

### Asgard
**Hybrid LLM Analysis & Orchestration Platform**

Designed a backend-oriented AI platform for routing and orchestrating LLM-based analysis workloads.

- Supported both local LLM and cloud LLM execution paths depending on runtime constraints
- Built Python-based LLM clients with retry handling, streaming support, and usage extraction
- Added experiment and usage tracking with MLflow
- Focused on reliability, cost awareness, and clean backend integration

**Tech:** Java 17, Spring Boot, Python, Kafka, Docker, AWS Bedrock, Ollama, MLflow

### Papyr.us
**AI-Assisted Real-Time Collaboration Wiki**

Built a real-time collaboration wiki with AI-assisted writing and knowledge workflows.

- Implemented CRDT-based concurrent editing for multi-user collaboration
- Added AI-assisted features including writing help, summarization, task extraction, and contextual search
- Designed backend prompt composition using existing pages, tasks, and documents as structured context
- Integrated AI features into actual user workflows instead of stand-alone demos

**Tech:** React, TypeScript, Node.js/Express, PostgreSQL, Socket.IO, Yjs, OpenAI API

---

## Technical Focus

### Backend & APIs
Java 17, Spring Boot 3.x, Spring Cloud, Quarkus, JPA/Hibernate, REST APIs

### Authentication & Security
OAuth 2.0, JWT, Keycloak, SSO

### Data & Distributed Systems
PostgreSQL, Oracle, Redis, Elasticsearch, Apache Kafka

### Infrastructure & DevOps
AWS, Docker, Kubernetes, GitHub Actions, Prometheus, Grafana

### Frontend Integration
JavaScript, Freemarker, React

---

## Education

### B.S. Computer Science & Statistics
Korea National Open University  
**02/2025**