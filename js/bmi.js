'use strict';

const highBmi = 'Olen syönyt buffasta muidenkin ruuat ja jättänyt liikunnan. Jätä ruokaa muillekin ja lähde lenkille';

const normalBmi = 'Hyvä olet jättänyt ruokaa muillekin, myös liikunta kuuluu arkeesi riittävissä määrin';

const lowBmi = 'Mene buffaan ja syö se tyhjäksi. Painosi on normaalia matalampi';



//BOM

const age = 14;

const text = 'Moi, olen ' + age + ' ikäinen';
console.log(text);

const text2 = 'Moi olen yhä vuoden ${age} ikäinen';

window.console.log('moi, toimii');
console.log('taasko');

console.log(window.innerHeight);
console.log(window.innerWidth);

//hakee ekan minkä löytää
const analysis = document.querySelector('.analysis');
console.log(analysis);
console.log(analysis.innerHTML);
console.log(analysis.innerText);

//tietojen muokkaus
analysis.textContent = 'Tervehdys 😶‍🌫️';
analysis.textContent = normalBmi;



const allP = document.querySelectorAll('p');
console.log(allP);

//kaikki 
for (const p of allP) {
    console.log('P elementin korkeus');
    console.log(p.offsetHeight);

}

const btn = document.querySelector('button');

//eventit
// document.addEventListener('mitä kuunnellaan', mitä käsitellään(e) {});
btn.addEventListener('click', function(evt) {
    console.log(evt);
    //console.log(e.key);

//Yleensä kun UI:sta saadaan arvo, sen on lähtökohtaisesti string muotoinen
const weight = Number(document.getElementById('weight').value);
console.log(weight);

const height = Number(document.getElementById('height').value);
console.log(height);

if (!weight || !height) {
    analysis.textContent = 'Lisää numerot';
} else {
    bmilaskuri(weight, height);
};

});

function bmilaskuri(weight, height) {
    let bmi = (weight/((height*height)/10000));
    console.log(bmi);
    document.querySelector('.bmi-score').textContent = bmi;

    if(bmi < 19) {
       console.log('Alipaino');
       document.querySelector('.analysis').textContent = lowBmi;
       //document.querySelector('.bmi0-18.9').style.color = 'orange';
       document.querySelector('.bmi0-18.9').classList.add('lowBmi');
    } else if (bmi > 25) {
        console.log('Ylipaino');
        document.querySelector('.analysis').textContent = highBmi;
        //document.querySelector('.bmi25 <').style.color = 'orange';
        document.querySelector('.bmi25 < ').classList.add('highBmi');
    } else {
        console.log('Normaalipaino');
        document.querySelector('.analysis').textContent = normalBmi;
        document.querySelector('.bmi19-25').style.color = 'orange';
        document.querySelector('.bmi19-25').classList.add('normalBmi');
    };

}

function resetFuntion() {
    //täällä kannattaa resetoida
}

function myFunction() {
    console.log('Tämä on sisällä')

}

myFunction();

