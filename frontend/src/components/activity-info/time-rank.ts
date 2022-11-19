export function getTimeRank(time: number): number {
  if (time < 0.1) {
    return 0;
  } else if (time < 0.5) {
    return 1;
  } else if (time < 1) {
    return 2;
  } else {
    return 3;
  }
}
