// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)
// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.
// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
// Ornek: hello
// h
// he
// hel
// hell
// hello
// hell
// hel
// he
// h

// 4. toLocaleDateString(); ->arashdir









     ////.....TASK-1////  
        
// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)


  function tarix() {
    let vaxt = new Date();
    let dateString = vaxt.toString();
    let reng = randomColor();
    console.log("%c" + dateString, "color:" + reng);
  }
  function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = "rgb(" + r + "," + g + "," + b + ")";
    return color;

  }

  setInterval(tarix, 1000);
  



//.....TASK-2.....////

// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.

let telebeler = [
        {
            ad: "Rahima",
            soyad: "Zamanova",
            hobisi: ["telefona baxmaq", "film izlemek", "seyahet"],

        },
        {
            ad: "Murvat",
            soyad: "Zamanova",
            hobisi: ["masin surmek", "yatmaq", "gezmek"],

         
        },
        {
            ad: "Sefiqe ",
            soyad: "Zamanli",
            hobisi: ["telefona baxmaq", "film izlemek", "seyahet"],

        }
];


let Ad = prompt("Telebe adi daxil edin:");


let telebem = null;
for (let i = 0; i < telebeler.length; i++) {
    if (telebeler[i].ad === Ad) {
        telebem = telebeler[i];
        break;
    }
}

if (telebem !== null) {
    console.log("Telebe tapildi!!!!");
    console.log("Adı: " + telebem.ad);
    console.log("Soyadi: " + telebem.soyad);
    console.log("Hobisi: " + telebem.hobisi);
} 
else {
    console.log("Telebe tapilmadi.");
}




//.....TASK-3.....////

// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
// Ornek: hello
// h
// he
// hel
// hell
// hello
// hell
// hel
// he
// h

let soz = prompt("Bir soz yazin:");

for (let j = 0; j < soz.length; j++) {
    console.log(soz.substring(0, j + 1));
}
for (let i = 0; i < soz.length; i++) {
    console.log(soz.substring(0, soz.length - i));
}




// 4. toLocaleDateString(); ->arashdir
// toLocaleDateString() Date obyektinin yerli tarix və vaxt məlumatından istifadə edərək sətirin tarix hissəsini çevirmək üçün JavaScript-də istifadə edilən üsuldur. Bu üsul tarixi müəyyən bir yerlinin tarix formatına uyğun olaraq formatlayır.toLocaleDateString() metodu default olaraq brauzerin yerli parametrlərindən istifadə edərək tarixi formatlayır. Bununla belə, siz isteğe bağlı olaraq konkret dil və ya region üçün tarix formatını təyin edə bilərsiniz.

//  ......FUNKSİYASİ.....//
//Basa dusdum//
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event.toLocaleDateString('de-DE', options));

console.log(event.toLocaleDateString('ar-EG', options));

console.log(event.toLocaleDateString(undefined, options));

