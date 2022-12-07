/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort(sortFunction);

    for (let index = 0; index < intervals.length - 1; index++) {
        const element1 = intervals[index];
        const element2 = intervals[index + 1];
        //remove any overlapping intervals (merge overlapping intervals if necessary).
        if (isIntersectingElements(element1, element2)) {
            intervals[index] = mergeElements(element1, element2);
            intervals.splice(index + 1, 1);
            index--;
        }
    }
    return intervals;
};

function isIntersectingElements(e1, e2) {
    if (
        (e1[0] <= e2[0] && e1[1] >= e2[0]) ||
        (e2[0] <= e1[0] && e2[1] >= e1[0]) ||
        (e1[1] <= e2[1] && e1[0] >= e2[1]) ||
        (e2[1] <= e1[1] && e2[0] >= e1[1])
    )
        return true;
}

function mergeElements(e1, e2) {
    e1[0] = Math.min(e1[0], e2[0]);
    e1[1] = Math.max(e1[1], e2[1]);

    return e1;
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}