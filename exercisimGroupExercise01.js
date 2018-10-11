var Decode = {
    'C':'G',
    'G':'C',
    'A':'U',
    'T':'A'
};

class DnaTranscriber {
    constructor (input) {
        this.input = input;
    }

    toRna (input) {
        let arr = input.split('');
        let output = '';
        for (let val of arr) {
            if (Decode[val] !== undefined) {
                output += Decode[val];
            } else {
                throw new Error ('Invalid input');
            }
        }
        return output;
    }
}

module.exports = DnaTranscriber;


// jasmine rna-transcription.spec.js