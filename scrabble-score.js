// export function calculateScrabbleScore(word) {
//     const letterScores = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
//     ];
//     for(let i = 0; i<letterScores.length ; i++)
//     { if (word === letterScores[D]||letterScores[G]){
//         return 2}
//     else if(word===letterScores[B]||letterScores[C]||letterScores[M]||letterScores[P]){
//     return 3} }}
    
//     if (word = 'A'||'E'||'I'||'L'||'N'||'O'||'R'||'S'||'T'||'U' ){
//         return 1
//     }
//     else if (word === 'D'||'G' ){
//         return 2
//     }
//   else if (word=== 'B'||'C'||'M'||'P' ){
//     return 3
// }
// else if (word=== 'F'||'H'||'V'||'W' ){
//     return 4
// }
// else if (word=== 'K' ){
//     return 5
// }
// else if (word=== 'J'||'X' ){
//     return 8
// }
// else if (word=== 'Q'||'Z' ){
//     return 10
// }
// else return 0






// | Letter | Score |
// | ------ | ----- |
// | A      | 1     |
// | B      | 3     |
// | C      | 3     |
// | D      | 2     |
// | E      | 1     |
// | F      | 4     |
// | G      | 2     |
// | H      | 4     |
// | I      | 1     |
// | J      | 8     |
// | K      | 5     |
// | L      | 1     |
// | M      | 3     |
// | N      | 1     |
// | O      | 1     |
// | P      | 3     |
// | Q      | 10    |
// | R      | 1     |
// | S      | 1     |
// | T      | 1     |
// | U      | 1     |
// | V      | 4     |
// | W      | 4     |
// | X      | 8     |
// | Y      | 4     |
// | Z      | 10    |


export function calculateScrabbleScore(word) {
    const letterScores = {
        A: 1, E: 1, I: 1, L: 1, N: 1, O: 1, R: 1, S: 1, T: 1, U: 1,
        D: 2, G: 2,
        B: 3, C: 3, M: 3, P: 3,
        F: 4, H: 4, V: 4, W: 4, Y: 4,
        K: 5,
        J: 8, X: 8,
        Q: 10, Z: 10
    };

    let score = 0;

    

    for (let top of word) {
        if (letterScores[top]) {
            score = letterScores[top];
        }
    }

    return score;
}
