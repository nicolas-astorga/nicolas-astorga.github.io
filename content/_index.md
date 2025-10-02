---
# Leave the homepage title empty to use the site title
title:
date: 2025-10-01
type: landing

sections:

  # Start with About Me
  - block: about.biography
    id: about
    content:
      title: About Me
      username: admin

  # Highlighted publications (featured only)
  - block: collection
    id: highlighted
    content:
      title: Highlighted Publications
      filters:
        url: './publications/articles/'
        featured_only: true
      sort_by: 'publish_date'
      sort_ascending: false
    design:
      columns: '2'
      view: article

  # Experience
  - block: experience
    content:
      title: Professional Experience
      date_format: Jan 2006
      items:
        - title: Machine Learning Engineer
          company: ALeRCE – Automatic Learning for the Rapid Classification of Events
          company_url: ''
          company_logo: alerce-logo
          location: Santiago, Chile
          date_start: '2022-02-01'
          date_end: '2023-04-01'
          description: |2-
            - Deployed production‑grade ML models via Kubernetes to classify LSST astronomical alerts in real time.
            - Built distributed PySpark pipelines to curate >30M light‑curve observations from multiple catalogues.
            - Collaborated in the ELAsTiCC challenge; proposed a Transformer‑based model for tabular/time‑series data; work accepted at *Astronomy & Astrophysics*.
        - title: Research Intern
          company: Harvard University — Institute for Applied Computational Science
          company_logo: harvard-iacs-logo
          location: Cambridge, MA, USA
          date_start: '2019-01-01'
          date_end: '2019-08-01'
          description: |2-
            - Proposed MPCC, a GAN–VAE hybrid clustering framework (ECCV 2020) leveraging forward KL divergence and extending BigGAN.
        - title: Research Assistant
          company: University of Chile — Lab. of Computational Intelligence
          company_logo: uchile-logo
          location: Santiago, Chile
          date_start: '2016-03-01'
          date_end: '2023-12-01'
          description: |2-
            - Developed a VAE‑based clustering method for astronomical transient detection (IJCNN 2018).
            - Integrated normalising flows into variational embeddings, improving ELBO by ≥10%.
            - Matched fully supervised performance using Gaussian processes in a semi‑supervised setting with only 10% labeled data.
    design:
      columns: '2'

  # Full publications list (concise)
  - block: collection
    id: publications
    content:
      title: Publications
      filters:
        url: './publications/articles/'
        featured_only: false
      sort_by: 'publish_date'
      sort_ascending: false
    design:
      columns: '1'
      view: citation

  # Contact
  - block: contact
    id: contact
    content:
      title: Contact
      email: nja46@cam.ac.uk
      address:
        street: Centre for Mathematical Sciences, Wilberforce Rd, Cambridge, CB3 0WA
      autolink: true
    design:
      columns: '2'
---
