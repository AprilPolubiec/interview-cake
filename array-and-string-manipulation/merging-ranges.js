/**
 * Write a function mergeRanges() that takes an array of multiple
 * meeting time ranges and returns an array of condensed ranges.
 */

// SOLUTION 1: O(nlogn)
const mergeRanges = (meeting_times) => {
  // NOTE: this is a mutating function - may want to deep copy instead
  meeting_times.sort(
    // O nlogn
    (a, b) => a.startTime - b.startTime
  );
  var merged_ranges = [meeting_times[0]]; // O(n)

  for (let i = 0; i < meeting_times.length; ++i) {
    // O(n)
    const { startTime, endTime } = meeting_times[i];
    const last_merged = merged_ranges[merged_ranges.length - 1];
    if (startTime > last_merged.endTime) {
      merged_ranges.push(meeting_times[i]);
    } else if (endTime >= last_merged.endTime) {
      last_merged.endTime = endTime;
    }
  }

  return merged_ranges;
};

console.log(
  mergeRanges([
    { startTime: 1, endTime: 3 },
    { startTime: 2, endTime: 4 },
  ])
);
/**
 * EXPECT:
 *   [{ startTime: 1, endTime: 4 }]
 */

console.log(
  mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ])
);
/**
 * Expect:
 * [
 * { startTime: 0, endTime: 1 },
 * { startTime: 3, endTime: 8 },
 * { startTime: 9, endTime: 12 },
 * ]
 */

console.log(
  mergeRanges([
    { startTime: 1, endTime: 2 },
    { startTime: 2, endTime: 3 },
  ])
);
/**
 * Expect:
 * [
 * { startTime: 1, endTime: 3 },
 * ]
 */

console.log(
  mergeRanges([
    { startTime: 1, endTime: 5 },
    { startTime: 2, endTime: 3 },
  ])
);
/**
 * Expect:
 * [
 * { startTime: 1, endTime: 5 },
 * ]
 */
