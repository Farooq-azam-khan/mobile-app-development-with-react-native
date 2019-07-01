class Set {
    constructor(arr) {
        this.arr = arr;
    }
    add(val) {
        if (!this.has(val)) {
            this.arr.push(val);
            return true;
        }
        return false;
    }
    delete(val) {
        this.arr = this.arr.filter(x => x != val);
    }
    get size() {
        return this.arr.length;
    }
    has(val) {
        return this.arr.includes(val);
    }
}

