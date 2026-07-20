# Source Notes — AI Virtual Cell Perturbation Models

Date: 2026-07-20  
Session signal: single-cell perturbation prediction papers framing themselves as AI Virtual Cell work.

## Sources inspected

### OCOO-T : A SIMPLE AND SCALABLE VIRTUAL CELL MODEL FOR TRANSCRIPTIONAL PERTURBATION RESPONSE PREDICTION

- DOI: `10.64898/2026.06.08.731000`
- Authors listed by Crossref: Danning Jiang, Zheming An, Yalong Zhao, Lipeng Lai
- Date listed by Crossref: 2026-06-11
- URL: https://doi.org/10.64898/2026.06.08.731000
- **Verified:** Abstract says the work addresses predicting single-cell transcriptional responses to genetic, chemical, and cytokine perturbations.
- **Verified:** Abstract frames the problem as fundamental to computational biology and AI Virtual Cell modeling.
- **Verified:** Abstract claims OCOO-T uses a minimalist flow-matching-based model with a vanilla Transformer stack operating directly on continuous gene expression.
- **Interpretation:** The important signal is not only model simplicity. It is the attempt to make perturbation response into a scalable computational primitive.

### Spurious correlation inflates performance in single-cell perturbation prediction

- DOI: `10.64898/2026.05.07.723486`
- Authors listed by Crossref: Phillip B. Nicol, Shriya Shivakumar, Rafael A. Irizarry
- Date listed by Crossref: 2026-05-12
- URL: https://doi.org/10.64898/2026.05.07.723486
- **Verified:** Abstract argues that common correlation or cosine similarity metrics over differential expression can be systematically inflated by reusing the same control population.
- **Verified:** Abstract says non-informative methods can appear to perform well, especially with limited numbers of control cells.
- **Verified:** Abstract says a control-splitting procedure reduces performance previously attributed to biological signal.
- **Interpretation:** This is a major constraint on the “virtual cell” story. Evaluation can create the appearance of predictive biology.

### Elucidating the Design Space of Generative Models for Single-Cell Perturbation Prediction

- DOI: `10.64898/2026.06.15.732063`
- Authors listed by Crossref: Sanjukta Bhattacharya, Christian Gensbigler, Shaamil Karim, Jon Lees
- Date listed by Crossref: 2026-06-18
- URL: https://doi.org/10.64898/2026.06.15.732063
- **Verified:** Abstract contrasts next-token prediction in language with scRNA-seq counts, which have no natural gene ordering.
- **Verified:** Abstract introduces ExpressionVAE/eVAE with a discrete latent perturbation model using a finite-scalar-quantization bottleneck and perturbation-conditioned discrete prior.
- **Interpretation:** This points toward cell models needing their own computational grammar rather than inherited language sequence assumptions.

### Benchmarking a foundational cell model for post-perturbation RNAseq prediction

- DOI: `10.1101/2024.09.30.615843`
- Authors listed by Crossref: Gerold Csendes, Kristóf Z. Szalay, Bence Szalai
- Date listed by Crossref: 2024-10-01
- URL: https://doi.org/10.1101/2024.09.30.615843
- **Verified:** Abstract says perturbation data is sparser than baseline non-perturbed cellular data.
- **Verified:** Abstract says proper benchmarking remains unsolved.
- **Verified:** Abstract reports that a simple baseline — taking the mean of training examples — outperformed scGPT in their benchmark.
- **Interpretation:** The field may be over-crediting representation scale before it has stable intervention benchmarks.

### PertAdapt: Unlocking Single-Cell Foundation Models for Genetic Perturbation Prediction via Condition-Sensitive Adaptation

- DOI: `10.1101/2025.11.21.689655`
- Authors listed by Crossref: Ding Bai, Le Song, Eric P. Xing
- Date listed by Crossref: 2025-11-21
- URL: https://doi.org/10.1101/2025.11.21.689655
- **Verified:** Abstract says existing approaches insufficiently transfer pretrained knowledge and overlook imbalance between perturbation-sensitive and insensitive genes.
- **Verified:** Abstract proposes a perturbation adapter and adaptive loss with gene-similarity-masked attention.
- **Interpretation:** This supports the view that useful virtual-cell systems need condition-sensitive intervention machinery, not just generic cell embeddings.

## Integrity notes

- Sources were gathered through Crossref metadata/abstracts, not full-paper review.
- Claims above are restricted to metadata and abstract-level evidence unless explicitly marked as interpretation.
- No experimental results beyond those stated in abstracts were assumed.
