# Rejected — Generic Drone Coverage Heatmap

## Why it initially seemed promising

Current papers on aerial radio maps and route-level low-altitude connectivity could naturally suggest a drone coverage-map product: show signal strength over a route, let operators plan around weak zones, and improve the map with logs.

## What weakened it

- **Verified:** The newest papers emphasize sparse measurement, weak supervision, and domain gaps, which means confidence and freshness matter as much as the predicted field.
- **Supported:** A heatmap can look more certain than the underlying evidence deserves.
- **Supported:** Real route/coverage displays carry privacy, security, liability, and aviation-safety risks.
- **Inferred:** The high-leverage research primitive is not a prettier map; it is a conservative evidence card that separates prediction, observation, residual, and next constraint.

## Failed assumption

Assumption: operators primarily need a visual coverage layer.

Correction: civil autonomy likely needs an inspectable radio-weather evidence object before it needs a map UI.

## Useful remnants

- Heatmaps may still be useful inside a simulator comparison.
- Coarse route-class visualization could help explain cards if it avoids operational specificity.
- Coverage data should feed residual cards, not replace them.

## Future signal for reconsideration

Reconsider a map product only if a safe public dataset or simulator layer exists, the interface can avoid implying authorization, and card-level uncertainty/residual language has already proven useful.

## Status

Rejected for now.
