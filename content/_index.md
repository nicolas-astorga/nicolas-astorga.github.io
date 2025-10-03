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
      title: Publications (Highlighted)
      filters:
        url: './publications/articles/'
        featured_only: true
        exclude_future: false
      sort_by: 'publish_date'
      sort_ascending: false
    design:
      columns: '2'
      view: article

  # Publications (All) — curated content, styled like the concise "citation" list
  - block: markdown
    id: publications
    content:
      title: Publications (All)
      text: |
        <h4>Conferences — First author</h4>
        <ul class="pub-list">
          <li class="pub-list-item"><strong>N. Astorga</strong>*, T. Liu*, Y. Xiao, M. van der Schaar (2025). <em>Auto-formulation of Mathematical Optimisation Models Using Large Language Models</em>. <strong>ICML 2025</strong>. <em>*Equal contribution.</em></li>
          <li class="pub-list-item">K. Kobalczyk*, <strong>N. Astorga</strong>*, T. Liu, M. van der Schaar (2025). <em>Active Task Disambiguation with Large Language Models</em>. <strong>ICLR 2025 (Spotlight)</strong>. <em>*Equal contribution.</em></li>
          <li class="pub-list-item"><strong>N. Astorga</strong>, T. Liu, N. Seedat, M. van der Schaar (2024). <em>Active Learning with LLMs for Partially Observed and Cost-Aware Scenarios</em>. <strong>NeurIPS 2024</strong>.</li>
          <li class="pub-list-item">T. Liu*, <strong>N. Astorga</strong>*, N. Seedat, M. van der Schaar (2024). <em>Large Language Models to Enhance Bayesian Optimisation</em>. <strong>ICLR 2024</strong>. <em>*Equal contribution.</em></li>
          <li class="pub-list-item"><strong>N. Astorga</strong>, P. Huijse, P. Protopapas, P. Estévez (2020). <em>MPCC: Matching Priors and Conditionals for Clustering</em>. <strong>ECCV 2020</strong>, Glasgow.</li>
          <li class="pub-list-item"><strong>N. Astorga</strong>, P. Huijse, P. A. Estévez, F. Förster (2018). <em>Clustering of Astronomical Transient Candidates Using Deep Variational Embedding</em>. <strong>IJCNN 2018</strong>, Rio de Janeiro.</li>
        </ul>

        <h4>Conferences — Second author</h4>
        <ul class="pub-list">
          <li class="pub-list-item">S. Ruhrberg, <strong>N. Astorga</strong>, M. van der Schaar (2025). <em>Timely Clinical Diagnosis through Active Test Selection</em>. <strong>NeurIPS 2025</strong>.</li>
          <li class="pub-list-item">H. Amad, <strong>N. Astorga</strong>, J.-M. van der Schaar (2025). <em>Continuously Updating Digital Twins Using Large Language Models</em>. <strong>AISTATS 2025</strong>.</li>
          <li class="pub-list-item">J. Piskorz, <strong>N. Astorga</strong>, J. Berrevoets, M. van der Schaar (2025). <em>Active Feature Acquisition for Personalised Treatment Assignment</em>. <strong>ICML 2025</strong>.</li>
        </ul>

        <h4>Journals</h4>
        <ul class="pub-list">
          <li class="pub-list-item">G. Cabrera-Vives, D. Moreno-Cartagena, <strong>N. Astorga</strong>, I. Reyes-Jainaga, <em>et&nbsp;al.</em> (2024). <em>ATAT: Astronomical Transformer for Time Series and Tabular Data</em>. <strong>Astronomy &amp; Astrophysics</strong>.</li>
          <li class="pub-list-item">M. Pérez-Carrasco, G. Cabrera-Vives, L. Hernández-García, F. Förster, <strong>N. Astorga</strong>, <em>et&nbsp;al.</em> (2023). <em>Alert Classification for the ALeRCE Broker System: The Anomaly Detector</em>. <strong>The Astronomical Journal</strong>.</li>
          <li class="pub-list-item">F. Förster, G. Cabrera-Vives, E. Castillo-Navarrete, P. A. Estévez, <strong>N. Astorga</strong>, <em>et&nbsp;al.</em> (2021). <em>The Automatic Learning for the Rapid Classification of Events (ALeRCE) Alert Broker</em>. <strong>The Astronomical Journal</strong>.</li>
          <li class="pub-list-item">C. Modarres, <strong>N. Astorga</strong>, E. Droguett, V. Meruane (2018). <em>Convolutional Neural Networks for Automated Damage Recognition and Damage Type Identification</em>. <strong>Structural Control and Health Monitoring</strong>.</li>
        </ul>

        <h4>Workshop</h4>
        <ul class="pub-list">
          <li class="pub-list-item">H. Sun, T. Pouplin, <strong>N. Astorga</strong>, T. Liu, M. van der Schaar (2024). <em>Improving LLM Generation with Inverse and Forward Alignment: Reward Modelling, Prompting, Fine-Tuning, and Inference-Time Optimisation</em>. <strong>NeurIPS 2024 Workshop on System-2 Reasoning at Scale</strong>.</li>
        </ul>

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
