---
title: 'Active Task Disambiguation with Large Language Models'

authors:
  - admin
  - Katarzyna Kobalczyk
  - Tennison Liu
  - Mihaela van der Schaar

author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2025-05-01T00:00:00Z'
publishDate: '2025-05-01T00:00:00Z'

publication_types: ['1']

publication: 13th International Conference on Learning Representations
publication_short: In *ICLR 2025 Spotlight*

abstract: |
  Ambiguously specified tasks are pervasive in real-world interactions, yet large language models (LLMs) often respond
  without clarifying missing information. We formalise task ambiguity and cast task resolution as Bayesian experimental
  design, enabling LLM agents to pose clarifying questions that maximise expected information gain. Our active task
  disambiguation framework improves solution quality across ambiguity benchmarks and highlights the importance of
  explicit reasoning about the space of viable task specifications.

summary: Active task disambiguation casts clarifying-question selection as Bayesian experimental design, enabling LLM agents to resolve ambiguous tasks more effectively.

tags: [Large Language Models, Bayesian Experimental Design, Active Learning]

featured: true

links:
  - name: OpenReview
    url: 'https://openreview.net/forum?id=JAMxRSXLFz'
  - name: arXiv
    url: 'https://arxiv.org/abs/2502.04485'
  - name: PDF
    url: 'publications/articles/active_task_disambiguation/paper.pdf'
  - name: Code
    url: 'https://github.com/nicolas-astorga/active-task-disambiguation'

image:
  caption: ''
  focal_point: ''
  preview_only: true
---
Active task disambiguation empowers LLM agents to request targeted clarifications before solving a user query. By
formalising task ambiguity and framing the interaction as Bayesian experimental design, the method selects questions
that most efficiently reduce uncertainty, leading to higher quality responses across ambiguity benchmarks.
