---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: About Me
      username: admin

  - block: experience
    id: experience
    content:
      title: Professional Experience
      date_format: Jan 2006
      items:
        - title: PhD Researcher
          company: University of Cambridge — van der Schaar Lab
          company_url: 'https://www.vanderschaar-lab.com'
          location: Cambridge, United Kingdom
          date_start: '2023-04-01'
          date_end: ''
          description: |2-
            - Researching reasoning, Bayesian experimental design, and optimisation in the context of large language models.
            - Supervised by Prof. Mihaela van der Schaar with support from the W.D. Armstrong Trust Fund studentship.
        - title: Machine Learning Engineer
          company: ALeRCE – Automatic Learning for the Rapid Classification of Events
          company_url: 'https://alerce.science'
          location: Santiago, Chile
          date_start: '2022-02-01'
          date_end: '2023-04-01'
          description: |2-
            - Deployed production-grade ML models on Kubernetes to classify LSST astronomical alerts in real time.
            - Built distributed PySpark pipelines to curate over 30 million light-curve observations across catalogues.
            - Co-led the ELAsTiCC challenge entry, delivering a Transformer-based model accepted to Astronomy & Astrophysics.
        - title: Research Intern
          company: Harvard University — Institute for Applied Computational Science
          company_url: 'https://iacs.seas.harvard.edu'
          location: Cambridge, MA, USA
          date_start: '2019-01-01'
          date_end: '2019-08-01'
          description: |2-
            - Proposed MPCC, a GAN–VAE hybrid clustering framework published at ECCV 2020.
        - title: Research Assistant
          company: University of Chile — Laboratory of Computational Intelligence
          company_url: 'https://www.dii.uchile.cl'
          location: Santiago, Chile
          date_start: '2016-03-01'
          date_end: '2023-12-01'
          description: |2-
            - Developed VAE-based clustering for astronomical transient detection (IJCNN 2018).
            - Integrated normalising flows into variational embeddings to improve ELBO by at least 10%.
            - Achieved fully supervised performance in semi-supervised settings via Gaussian processes using 10% labelled data.
    design:
      columns: '2'

  - block: collection
    id: recent
    content:
      title: Recent Publications
      filters:
        folders:
          - articles
        featured_only: true
    design:
      columns: '2'
      view: citation
---
