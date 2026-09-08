/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length <= 1) return 0;

    let minBuy = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minBuy) {
            minBuy = prices[i]
        } else if (prices[i] - minBuy > maxProfit) {
            maxProfit = prices[i] - minBuy
        }
    }
    return maxProfit;
};


// ----- brute force approach -----
var maxProfit2 = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > profit) profit = prices[j] - prices[i];
        }
    }
    return profit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));

// single pointer + val store pattern