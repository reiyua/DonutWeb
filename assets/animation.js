const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

let A =  0;
let B =  0;

function draw() {
    ctx.clearRect(0,  0, canvas.width, canvas.height);
    ctx.font = '10px monospace';
    ctx.fillStyle = 'white';

    for (let j =  0; j <  2 * Math.PI; j +=  0.07) {
        for (let i =  0; i <  2 * Math.PI; i +=  0.02) {
            let sini = Math.sin(i),
                cosj = Math.cos(j),
                sinA = Math.sin(A),
                sinj = Math.sin(j),
                cosA = Math.cos(A),
                cosj2 = cosj +  2,
                mess =  1 / (sini * cosj2 * sinA + sinj * cosA +  5),
                cosi = Math.cos(i),
                cosB = Math.cos(B),
                sinB = Math.sin(B),
                t = sini * cosj2 * cosA - sinj * sinA;

            let x =  40 +  30 * mess * (cosi * cosj2 * cosB - t * sinB),
                y =  12 +  15 * mess * (cosi * cosj2 * sinB + t * cosB);

            if (y >  0 && y <  60 && x >  0 && x <  80) {
                let o = Math.round(x +  80 * y);
                let N =  8 * ((sinj * sinA - sini * cosj * cosA) * cosB - sini * cosj * sinA - sinj * cosA - cosi * cosj * sinB);
                let charIndex = N >  0 ? N :  0;
                let charSet = ".,-~:;=!*#$@";
                let charToDraw = charSet[charIndex % charSet.length];
                ctx.fillText(charToDraw, x *  10, y *  10);
            }
        }
    }

    A +=  0.04;
    B +=  0.02;
    requestAnimationFrame(draw);
}

draw();