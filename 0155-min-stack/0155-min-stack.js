
var MinStack = function() {
    stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return stack[stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...stack)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */