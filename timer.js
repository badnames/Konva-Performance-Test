export default class Timer {

    constructor() {
        this.averageTime = 0;
        this.maxTime = 0;
        this.minTime = Infinity;
        this.startTime = 0;
    }

    start() {
        this.startTime = window.performance.now();
    }

    iteration() {
        const now = window.performance.now();
        const delta = now - this.startTime;
        this.maxTime = Math.max(this.maxTime, delta);
        this.minTime = Math.min(this.minTime, delta);
        this.averageTime = (this.averageTime + delta) / 2;
        this.startTime = now;
    }

    get results() {
        return {
            max: this.maxTime,
            min: this.minTime,
            average: this.averageTime,
        }
    }
}