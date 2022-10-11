(function () {
    Array.prototype.last = function () {
        return this[this.length -1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n)
    }

    Array.prototype.take = function (n) {
        if (n < 0) {
            n = 0;
        }else if (n > this.length) {
            n = this.length
        }
        let result = []
        for (let i = 0; i < n; i++) {
            result.push(this[i])     
        }
        return result
    }

    Array.prototype.sum = function () {
        let sum = 0
        for (let i = 0; i < this.length; i++) {
            sum += this[i]      
        }
        return sum
    }

    Array.prototype.avarage = function () {
        return this.sum / this.length;
    }
})();