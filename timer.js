/**
 * Keeps track of the maximum, minimum and average iteraion times of a loop.
 */
export default class Timer {

    constructor() {
        this.iterations = 0;
        this.averageTime = 0;
        this.maxTime = 0;
        this.minTime = Infinity;
        this.startTime = 0;
    }

    /**
     * Call this method immedeately before the firs loop iteration.
     */
    start() {
        this.startTime = window.performance.now();
    }

    /**
     * Calling this method marks the end of an iteration.
     */
    iteration() {
        const now = window.performance.now();
        const delta = now - this.startTime;

        this.iterations++;
        this.maxTime = Math.max(this.maxTime, delta);
        this.minTime = Math.min(this.minTime, delta);
        this.averageTime = ((this.iterations - 1) * this.averageTime + delta) / this.iterations;
        this.startTime = window.performance.now();
    }

    /**
     * Retrieve all collected time statistics.
     * @returns {{average: number, min: number, max: number}}
     */
    get results() {
        return {
            max: this.maxTime,
            min: this.minTime,
            average: this.averageTime,
        }
    }
}