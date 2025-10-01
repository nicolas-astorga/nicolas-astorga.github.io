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
    content:
      title: Education
      date_format: Jan 2006
      items:
        - title: Ph.D. in Machine Learning
          company: University of Cambridge
          company_url: 'https://www.cam.ac.uk'
          location: Cambridge, United Kingdom
          date_start: '2023-04-01'
          description: |2-
            - Research focus: reasoning, Bayesian experimental design, and optimisation in the context of LLMs.
            - Supervisor: Prof. Mihaela van der Schaar · Expected graduation 2027.
            - Fully-funded W.D. Armstrong Trust Fund studentship.
        - title: Dual M.Sc. – Electrical Engineering; Computer Science
          company: University of Chile
          company_url: 'https://www.uchile.cl'
          location: Santiago, Chile
          date_start: '2020-01-01'
          date_end: '2023-12-31'
          description: |2-
            - EE thesis: *Generative-Inference Models — Theory and Applications*.
            - CS thesis: *Classification of Astronomical Objects*.
            - Coursework emphasis on generative models, variational inference, and information theory.
            - Ranked 1st of 22 in EE M.Sc.; ANID National Master's Scholarship awardee.
        - title: B.Sc. Three Major – Computer, Electrical & Mechanical Engineering
          company: University of Chile
          location: Santiago, Chile
          date_start: '2013-03-01'
          date_end: '2019-12-31'
          description: |2-
            - Outstanding student (top 7%).
        - title: Professional Engineer – Electrical Engineering
          company: University of Chile
          location: Santiago, Chile
          date_start: '2021-01-01'
          date_end: '2021-12-31'
          description: |2-
            - Professional accreditation enabling independent practice (top 10%).
    design:
      columns: '2'

  - block: experience
    content:
      title: Professional Experience
      date_format: Jan 2006
      items:
        - title: Machine Learning Engineer
          company: ALeRCE – Automatic Learning for the Rapid Classification of Events
          location: Santiago, Chile
          date_start: '2022-02-01'
          date_end: '2023-04-30'
          description: |2-
            - Deployed production-grade ML models with Kubernetes to classify LSST astronomical alerts in real time.
            - Built distributed PySpark pipelines curating over 30M light-curve observations from multiple catalogues.
            - Contributed to the ELAsTiCC challenge with a Transformer-based tabular and time-series model (A&A publication).
        - title: Research Intern
          company: Harvard University — Institute for Applied Computational Science
          location: Cambridge, MA, USA
          date_start: '2019-01-01'
          date_end: '2019-08-31'
          description: |2-
            - Proposed MPCC, a GAN–VAE hybrid clustering framework leveraging forward KL divergence (ECCV 2020).
        - title: Research Assistant
          company: University of Chile — Lab. of Computational Intelligence
          location: Santiago, Chile
          date_start: '2016-03-01'
          date_end: '2023-12-31'
          description: |2-
            - Developed VAE-based clustering for astronomical transient detection (IJCNN 2018).
            - Integrated normalising flows into variational embeddings, improving ELBO by ≥10%.
            - Achieved fully supervised performance in semi-supervised settings using Gaussian processes with 10% labelled data.
    design:
      columns: '2'

  - block: collection
    id: publications
    content:
      title: Selected Publications
      filters:
        folders:
          - articles
        featured_only: true
    design:
      columns: '2'
      view: citation

  - block: contact
    id: contact
    content:
      title: Contact
      email: nicolas.astorga@cam.ac.uk
      address:
        street: Department of Engineering, University of Cambridge
        city: Cambridge
        country: United Kingdom
      directions: van der Schaar Lab, Cambridge, UK
      autolink: false
    design:
      columns: '2'
---
