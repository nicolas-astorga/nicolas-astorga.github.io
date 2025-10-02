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

  # Highlighted publications (featured only) — fixed filters + sort
  - block: collection
    id: highlighted
    content:
      title: Publications (Highlighted)
      filters:
        url: './publications/articles/'
        featured_only: true
      sort_by: 'publish_date'
      sort_ascending: false
    design:
      columns: '2'
      view: article

  # Publications (All) — restored citation view (clean & concise; icons hidden via CSS)
  - block: collection
    id: publications
    content:
      title: Publications (All)
      filters:
        url: './publications/articles/'
        featured_only: false
      sort_by: 'publish_date'
      sort_ascending: false
    design:
      columns: '1'
      view: citation

  # Optional quick breakdown (keep or delete)
  - block: markdown
    id: publications-breakdown
    content:
      title: Publications — Quick Breakdown
      text: |-
        **Conferences — First author**
        - **Astorga, N.**\*, Liu, T.\*, Xiao, Y., & van der Schaar, M. (2025). *Auto‑formulation of Mathematical Optimisation Models Using Large Language Models*. **ICML 2025**. *Equal contribution.*
        - **Astorga, N.**\*, Kobalczyk, K.\*, Liu, T., & van der Schaar, M. (2025). *Active Task Disambiguation with Large Language Models*. **ICLR 2025 (Spotlight)**. *Equal contribution.*
        - **Astorga, N.**, Liu, T., Seedat, N., & van der Schaar, M. (2024). *Active Learning with LLMs for Partially Observed and Cost‑Aware Scenarios*. **NeurIPS 2024**.
        - **Astorga, N.**\*, Liu, T.\*, Seedat, N., & van der Schaar, M. (2024). *Large Language Models to Enhance Bayesian Optimisation*. **ICLR 2024**. *Equal contribution.*
        - **Astorga, N.**, Huijse, P., Protopapas, P., & Estévez, P. (2020). *MPCC: Matching Priors and Conditionals for Clustering*. **ECCV 2020**, Glasgow.
        - **Astorga, N.**, Huijse, P., Estévez, P. A., & Förster, F. (2018). *Clustering of Astronomical Transient Candidates Using Deep Variational Embedding*. **IJCNN 2018**, Rio de Janeiro.

        **Conferences — Second author**
        - Ruhrberg, S., **Astorga, N.**, & van der Schaar, M. (2025). *Timely Clinical Diagnosis through Active Test Selection*. **NeurIPS 2025**.
        - Amad, H., **Astorga, N.**, & van der Schaar, J.-M. (2025). *Continuously Updating Digital Twins Using Large Language Models*. **AISTATS 2025**.
        - Piskorz, J., **Astorga, N.**, Berrevoets, J., & van der Schaar, M. (2025). *Active Feature Acquisition for Personalised Treatment Assignment*. **ICML 2025**.

        **Journals**
        - Cabrera‑Vives, G., Moreno‑Cartagena, D., **Astorga, N.**, Reyes‑Jainaga, I., *et al.* (2024). *ATAT: Astronomical Transformer for Time Series and Tabular Data*. **Astronomy & Astrophysics**.
        - Pérez‑Carrasco, M., Cabrera‑Vives, G., Hernández‑García, L., Förster, F., **Astorga, N.**, *et al.* (2023). *Alert Classification for the ALeRCE Broker System: The Anomaly Detector*. **The Astronomical Journal**.
        - Förster, F., Cabrera‑Vives, G., Castillo‑Navarrete, E., Estévez, P. A., **Astorga, N.**, *et al.* (2021). *The Automatic Learning for the Rapid Classification of Events (ALeRCE) Alert Broker*. **The Astronomical Journal**.
        - Modarres, C., **Astorga, N.**, Droguett, E., & Meruane, V. (2018). *Convolutional Neural Networks for Automated Damage Recognition and Damage Type Identification*. **Structural Control and Health Monitoring**.

        **Workshop**
        - Sun, H., Pouplin, T., **Astorga, N.**, Liu, T., & van der Schaar, M. (2024). *Improving LLM Generation with Inverse and Forward Alignment: Reward Modelling, Prompting, Fine‑Tuning, and Inference‑Time Optimisation*. **NeurIPS 2024 Workshop on System‑2 Reasoning at Scale**.

  # Experience (stays after Publications)
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
