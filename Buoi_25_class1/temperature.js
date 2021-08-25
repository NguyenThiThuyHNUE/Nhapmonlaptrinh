class Temperature {
    celsius;
    constructor(celsius) {
        this.celsius = celsius;
    }

    fahrenheit() {
        return 9/5 * this.celsius + 32;
    }

    kelvins() {
        return this.celsius + 273,15
    }
}