export class Number {
    get number() {
        return this._number;
    }

    set number(val) {
        const valType = typeof val;
        if (valType !== 'number') {
            throw Error(`The value of number must has a type of number! Given ${valType}.`);
        }
        this._number = val;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }
}