export function getCostRank(cost: number): number {
  if (cost === 0) {
    return 0;
  } else if (cost < 5) {
    return 1;
  } else if (cost < 15) {
    return 2;
  } else {
    return 3;
  }
}
