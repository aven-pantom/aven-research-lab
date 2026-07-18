# Sources — Cadence: Sovereign Training Data Foundry

Every source below was selected for one of four evidentiary roles: dataset documentation, provenance/lineage standards, versioned data infrastructure, or governance pressure. Claims are marked as Verified when directly supported by the source; Inferred when derived from combining sources.

## Source map

| Layer | Source | Role in hypothesis |
|---|---|---|
| Dataset documentation | Datasheets for Datasets; Data Cards | Establish that dataset quality is not only file storage; it is lifecycle documentation, intended use, collection context, and stakeholder-readable accountability. |
| Model reporting | Model Cards | Shows the same documentation pattern around deployed models; Cadence extends this upstream to training-data versions and approval gates. |
| Provenance semantics | W3C PROV; DCAT 3 | Gives vocabulary for entities, activities, agents, catalogs, datasets, and distributions. Useful for an interoperable metadata spine. |
| Pipeline lineage | OpenLineage | Shows that job/run/dataset lineage already exists for data pipelines, but not as a human-gated training-set release product. |
| Dataset packaging | MLCommons Croissant | Gives a machine-readable metadata format for ML datasets; Cadence should export to, not replace, these standards. |
| Versioned data | DVC; lakeFS | Existing tools prove versioned data operations are feasible; their gap is review-native dataset governance for model-training readiness. |
| Governance pressure | NIST AI RMF | Establishes risk-management language and need for governable AI lifecycle processes. |
| Programmatic supervision | Snorkel | Supports the idea that weak labels, labeling functions, and dataset construction pipelines can be first-class versioned artifacts. |
| Content provenance adjacency | C2PA | Provides precedent for cryptographic assertions/manifests around generated media; Cadence can adapt the same spirit to training-set manifests. |

## Sources

### 1. Datasheets for Datasets

- **Author/org:** Timnit Gebru, Jamie Morgenstern, Briana Vecchione, Jennifer Wortman Vaughan, Hanna Wallach, Hal Daumé III, Kate Crawford
- **Year:** 2018 preprint; CACM version noted by arXiv as 2021
- **Link:** https://arxiv.org/abs/1803.09010
- **Source type:** Peer-reviewed / research paper
- **Contribution:** Verified: argues for standardized dataset documentation covering motivation, composition, collection process, recommended uses, and other operating characteristics. This is the strongest conceptual predecessor for Cadence’s release manifest.
- **Reliability notes:** High. Widely cited foundational paper; arXiv API returned title, authors, and summary during this session.
- **Brief quotation or finding:** The arXiv summary states: “The machine learning community currently has no standardized process for documenting datasets,” and proposes that “every dataset be accompanied with a datasheet.”

### 2. Data Cards: Purposeful and Transparent Dataset Documentation for Responsible AI

- **Author/org:** Pushkarna et al. / Google Research and collaborators
- **Year:** 2022
- **Link:** https://arxiv.org/abs/2204.01075
- **Source type:** Research paper / industry deployment report
- **Contribution:** Verified: frames dataset documentation as a user-centric product with consistency and comparability across dataset lifecycle stakeholders. Cadence borrows this product lens but adds versioning, approval gates, and training-readiness tests.
- **Reliability notes:** High-medium. Research paper with real deployment lessons; arXiv API returned summary during this session.
- **Brief quotation or finding:** The summary says documentation “must be treated as a user-centric product in and of itself” and reports lessons from deploying “over 20 Data Cards.”

### 3. Model Cards for Model Reporting

- **Author/org:** Margaret Mitchell, Simone Wu, Andrew Zaldivar, Parker Barnes, Lucy Vasserman, Ben Hutchinson, Elena Spitzer, Inioluwa Deborah Raji, Timnit Gebru
- **Year:** 2019
- **Link:** https://arxiv.org/abs/1810.03993
- **Source type:** Research paper
- **Contribution:** Verified: establishes structured reporting for trained models, including intended use and benchmarked evaluation. Cadence’s analogous unit is the dataset release, not the model release.
- **Reliability notes:** High. Foundational model transparency paper; arXiv API returned title and summary during this session.
- **Brief quotation or finding:** The summary describes “short documents accompanying trained machine learning models” with evaluation across relevant conditions and disclosure of intended use.

### 4. W3C PROV Overview

- **Author/org:** W3C Provenance Working Group
- **Year:** 2013
- **Link:** https://www.w3.org/TR/prov-overview/
- **Source type:** Web standard overview
- **Contribution:** Verified: provides a formal provenance model around entities, activities, and agents. Cadence can map dataset items, transformations, human approvals, and model-training exports into PROV-compatible records.
- **Reliability notes:** High. W3C recommendation family; page fetched during this session.
- **Brief quotation or finding:** Finding: PROV is explicitly a provenance standard suite. It gives Cadence an interoperability path instead of inventing all metadata semantics privately.

### 5. Data Catalog Vocabulary (DCAT) Version 3

- **Author/org:** W3C Dataset Exchange Working Group
- **Year:** 2024 recommendation
- **Link:** https://www.w3.org/TR/vocab-dcat-3/
- **Source type:** Web standard
- **Contribution:** Verified: vocabulary for catalogs, datasets, data services, distributions, and related metadata. Cadence should export public/shareable dataset-package metadata through DCAT/Croissant rather than locking data into a proprietary schema.
- **Reliability notes:** High. W3C standard page fetched during this session.
- **Brief quotation or finding:** Finding: DCAT is designed for dataset catalogs and exchange; Cadence’s internal release registry should produce DCAT-compatible catalog records.

### 6. OpenLineage Documentation

- **Author/org:** OpenLineage project
- **Year:** Active project; docs page fetched 2026-07-18
- **Link:** https://openlineage.io/docs/
- **Source type:** Open-source documentation / lineage standard
- **Contribution:** Verified: OpenLineage defines runtime lineage concepts for datasets and jobs. Cadence can ingest OpenLineage events but must add product-level semantics: review state, human responsibility, eval outcomes, and release contracts.
- **Reliability notes:** Medium-high. Official documentation fetched; dynamic docs limited direct text extraction.
- **Brief quotation or finding:** Finding: docs identify OpenLineage as a documentation site for lineage; useful as a pipeline event source, insufficient alone as training-set governance.

### 7. MLCommons Croissant

- **Author/org:** MLCommons
- **Year:** Public project active by 2024–2026
- **Link:** https://github.com/mlcommons/croissant
- **Source type:** Open-source repository / dataset metadata format
- **Contribution:** Verified: establishes an ML dataset metadata format. Cadence should treat Croissant export as a bridge for dataset consumers, not as the whole control plane.
- **Reliability notes:** Medium-high. Official GitHub repository page fetched during this session; exact repository internals were not deeply audited.
- **Brief quotation or finding:** Finding: Croissant is positioned by MLCommons as metadata for ML datasets; Cadence can generate Croissant descriptors from approved releases.

### 8. DVC .dvc Files Documentation

- **Author/org:** Iterative / DVC
- **Year:** Active docs page fetched 2026-07-18
- **Link:** https://dvc.org/doc/user-guide/project-structure/dvc-files
- **Source type:** Product documentation
- **Contribution:** Verified: DVC provides Git-like data/model artifact versioning and pointer files. Cadence should not rebuild low-level content addressing unless necessary; it can integrate with DVC-like storage semantics.
- **Reliability notes:** High for DVC behavior; official docs page fetched.
- **Brief quotation or finding:** The page metadata describes DVC as an “Open-source version control system for Data Science and Machine Learning projects” with a “Git-like experience to organize your data, models, and experiments.”

### 9. lakeFS Documentation

- **Author/org:** lakeFS
- **Year:** Active docs page fetched 2026-07-18
- **Link:** https://docs.lakefs.io/
- **Source type:** Product documentation
- **Contribution:** Verified: shows branch/commit-like data-lake operations are feasible at object-store scale. Cadence can borrow the branch/release metaphor but focus on curation and AI-readiness gates rather than general data-lake management.
- **Reliability notes:** High for lakeFS product framing; official docs page fetched.
- **Brief quotation or finding:** The page metadata says lakeFS documentation helps users “deliver resilience and manageability to data lakes.”

### 10. NIST AI Risk Management Framework

- **Author/org:** National Institute of Standards and Technology
- **Year:** 2023
- **Link:** https://www.nist.gov/itl/ai-risk-management-framework
- **Source type:** Government risk-management framework
- **Contribution:** Inferred from known official framework and URL, but live fetch returned 403 in this session. Cadence should align release evidence with governance/risk-management language because AI datasets are increasingly part of audit obligations.
- **Reliability notes:** High as an institution; fetch blocked by 403, so no direct quotation is used.
- **Brief quotation or finding:** Finding: official NIST AI RMF is a relevant governance frame; direct content should be re-fetched manually if exact language is needed.

### 11. Snorkel

- **Author/org:** Snorkel AI / Stanford-origin open-source project
- **Year:** Public project active by 2016–2026
- **Link:** https://github.com/snorkel-team/snorkel
- **Source type:** Open-source repository / research-derived tooling
- **Contribution:** Verified at repository-page level: programmatic labeling and weak supervision can be part of data creation. Cadence should version labeling functions, reviewer decisions, and conflict-resolution policies as artifacts alongside examples.
- **Reliability notes:** Medium-high. Official GitHub page fetched; deeper claims should cite Snorkel papers in a future pass.
- **Brief quotation or finding:** Finding: weak supervision makes dataset construction code-like; that supports Cadence’s claim that training data needs reviewable builds, not just folders of examples.

### 12. C2PA Technical Specification

- **Author/org:** Coalition for Content Provenance and Authenticity
- **Year:** Specification version 2.x active; page canonicalized to 2.4 during fetch
- **Link:** https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html
- **Source type:** Technical specification
- **Contribution:** Verified: provides a precedent for signed content manifests and assertions. Cadence can apply a similar manifest/assertion approach to dataset releases: what data is included, where it came from, who approved it, and what tests passed.
- **Reliability notes:** High. Official specification site fetched during this session.
- **Brief quotation or finding:** Finding: the fetched page title is “Content Credentials : C2PA Technical Specification”; Cadence can borrow the manifest mindset without conflating media authenticity with dataset quality.

## Source disagreement and gaps

- **Documentation vs execution gap:** Datasheets/Data Cards/Model Cards emphasize structured reporting; DVC/lakeFS/OpenLineage emphasize infrastructure operations. The gap is a product that binds both: approved, versioned, testable training-data releases.
- **Standards fragmentation:** PROV, DCAT, Croissant, OpenLineage, and C2PA each solve adjacent parts. None alone appears to be a sovereign training-data foundry. Cadence should interoperate with them rather than compete at the standard layer.
- **Governance source gap:** NIST AI RMF was not directly fetched because the page returned 403. Use NIST as directional governance context only until exact clauses are verified.
