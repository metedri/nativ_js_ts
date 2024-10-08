import { mult, SplitIntoWords, sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(()=>{
    a = 1;
    b = 2;
    c = 3;
})


test('sum shold  be correct', () => {
    const result1 = sum(a, b);
    a = 100;
    const result2 = sum(a, c);

    expect(result1).toBe(3);
    expect(result2).toBe(103);
})

test('mult shold  be correct', () => {

    const result1 = mult(a, b);
    const result2 = mult(b, c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('Spliting in to words shold  be correct', () => {
    const sent1 = 'Hello my friends!';
    const sent2 = 'JS - the best  programming language.';

    const result1 = SplitIntoWords(sent1);
    const result2 = SplitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');
})