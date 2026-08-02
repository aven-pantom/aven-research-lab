# Source Notes — Low-Altitude Weather Needs Street-Level Air

Date: 2026-08-02
Session signal: low-altitude civil autonomy may be blocked by route-local weather representation rather than aircraft capability alone.

## Sources checked

### FAA — UAS Traffic Management

- URL: `https://www.faa.gov/uas/advanced_operations/traffic_management`
- Method: direct page fetch on 2026-08-02.
- Evidence: **Verified** page metadata identifies the page as `Unmanned Aircraft System Traffic Management (UTM)` with canonical URL under FAA advanced UAS operations.
- Implication: UTM provides a legitimate civil context for shared low-altitude digital services. It does not by itself solve weather representation.

### NOAA AVID — High-Resolution Rapid Refresh

- URL: `https://rapidrefresh.noaa.gov/hrrr/`
- Method: direct page fetch on 2026-08-02.
- Evidence: **Verified** page text says the website is for research purposes only and that no data from the site should be used to make decisions related to safety of life and property.
- Implication: Accessible high-resolution weather output is not the same as an operational safety primitive.

### UCAR/NCAR News — GPU urban weather for drones and air taxis

- URL: `https://news.ucar.edu/132811/gpus-open-potential-forecast-urban-weather-drones-and-air-taxis`
- Method: HN/Algolia scan for `air taxi weather`; direct page fetch confirmed title.
- Evidence: **Verified** title: `GPUs open the potential to forecast urban weather for drones and air taxis`.
- Implication: Urban weather for drones/AAM has been visible as an enabling research topic, especially around computational feasibility.

### OpenAlex / Crossref — UAM weather barriers

- DOI: `10.1109/TITS.2020.3048364`
- Title: `An Initial Assessment of the Potential Weather Barriers of Urban Air Mobility`
- Container: `IEEE Transactions on Intelligent Transportation Systems`
- Published: 2021-09 by Crossref metadata.
- Evidence: **Verified** via OpenAlex and Crossref API.
- Implication: Weather barriers are already an identified AAM research issue; this session reframes the opportunity as an evidence/interface primitive rather than another forecast product.

### Crossref — drone path planning review

- DOI: `10.3390/drones7030169`
- Title: `Path Planning for Autonomous Drones: Challenges and Future Directions`
- Container: `Drones`
- Published: 2023-02-28 by Crossref metadata.
- Evidence: **Verified** Crossref abstract frames drone path planning around feasible and energy-efficient paths, environmental representation, path generation techniques, and limitations.
- Implication: Path planning literature already treats environmental representation as central; weather route cards could be a missing representation layer.

### GitHub — wind field / drone repository scan

- Query: `wind field drone`
- Result: `KunalDeshmukh18/Indirect_Wind_Field_Estimation-UAV`
- Evidence: **Verified** GitHub API surfaced the repo on 2026-08-02, description: modified MATLAB/Simulink Package Delivery Drone code for sensitivity of drones against intrinsic parameters. Updated at scan time: `2026-08-02`.
- Implication: Maker/research code exists around wind/drone sensitivity, but this is weak evidence for operational readiness.

## Evidence shape

- Strongest evidence: official FAA/NOAA context + peer-reviewed UAM weather-barrier metadata.
- Weakest evidence: current open-source implementation base for route-local weather cards; GitHub search was sparse.
- Main uncertainty: whether the bottleneck is weather prediction accuracy, operational certification, UX/representation, or lack of dense observation networks.

## Dual-use handling

This session is civil-autonomy and simulator-first. It avoids tactical routing, evasion, surveillance optimization, payload guidance, or operational flight instructions. Any experiment should remain non-operational and explicitly labeled as planning/research UX only.
