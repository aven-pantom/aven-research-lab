# Field Notes — 2026-08-02 — Low-Altitude Weather

## Signal

Low-altitude civil autonomy appears to need weather as an operating-condition layer, not a generic forecast.

## Observations

- **Verified:** FAA has a UTM page for low-altitude UAS traffic-management context.
- **Verified:** NOAA HRRR public research page explicitly warns against safety-of-life decision use.
- **Verified:** HN/Algolia surfaced UCAR/NCAR's `GPUs open the potential to forecast urban weather for drones and air taxis`.
- **Verified:** OpenAlex/Crossref surfaced `An Initial Assessment of the Potential Weather Barriers of Urban Air Mobility`, DOI `10.1109/TITS.2020.3048364`.
- **Verified:** Crossref abstract for `Path Planning for Autonomous Drones: Challenges and Future Directions`, DOI `10.3390/drones7030169`, emphasizes environmental representation and feasible/energy-efficient paths.

## Terms worth tracking

- low-altitude weather
- urban microscale meteorology
- UTM supplementary data services
- Advanced Air Mobility weather barriers
- route segment condition card
- air street condition layer

## Questions

- Does UTM/AAM already have a de facto weather-data exchange format, or is this still fragmented across operators?
- What is the smallest safe simulator-only demo that makes the missing primitive obvious?
- Could rooftop weather stations, delivery drones, and city infrastructure create enough observations for useful nowcasting?
- What should the UI do when the right answer is `unknown`, not `safe`?

## Rejected path during scan

`drone weather app` as a consumer concept was too shallow. The stronger signal is route-local atmospheric evidence for civil autonomy.
