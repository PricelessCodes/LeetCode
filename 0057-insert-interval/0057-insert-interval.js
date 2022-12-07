/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    // if empty push newInterval
    if (intervals.length == 0) intervals.push(newInterval);

    let isInserted = false;
    for (let index = 0; index < intervals.length; index++) {
        let element1 = intervals[index];

        // insert newInterval
        if (!isInserted) {
            if (isIntersectingElements(element1, newInterval)) {
                intervals[index] = mergeElements(element1, newInterval);
                isInserted = true;
            } else if (newInterval[0] < element1[0]) {
                intervals.splice(index, 0, newInterval);
                isInserted = true;
            } else if (index === intervals.length - 1) {
                intervals.push(newInterval);
                isInserted = true;
            }
        }
        //remove any overlapping intervals (merge overlapping intervals if necessary).
        if (index < intervals.length - 1) {
            element1 = intervals[index];
            const element2 = intervals[index + 1];
            if (isIntersectingElements(element1, element2)) {
                intervals[index] = mergeElements(element1, element2);
                intervals.splice(index + 1, 1);
                index--;
            }
        }
    }
    return intervals;
};

function isIntersectingElements(e1, e2) {
    if (
        (e1[0] <= e2[0] && e1[1] >= e2[0]) ||
        (e2[0] <= e1[0] && e2[1] >= e1[0])
    )
        return true;
}

function mergeElements(e1, e2) {
    e1[0] = Math.min(e1[0], e2[0]);
    e1[1] = Math.max(e1[1], e2[1]);

    return e1;
}