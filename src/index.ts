let tomb = [
    {
      "nev": "Maxi Ultra",
      "meret": "128"
    },
    {
      "nev": "Maxi Ultra S",
      "meret": "256"
    },
    {
      "nev": "Maxi Ultra X",
      "meret": "512"
    },
    {
      "nev": "Átlagos SD kártya",
      "meret": "128"
    },
    {
      "nev": "Átlagos SD kártya 2",
      "meret": "256"
    },
    {
      "nev": "Átlagos SD kártya 2.1",
      "meret": "256"
    },
    {
      "nev": "Átlagos SD kártya 2.1",
      "meret": "256"
    },
    {
      "nev": "Ólcsó microSD",
      "meret": "32"
    },
    {
      "nev": "Kevésbé olcsó microSD",
      "meret": "64"
    }
  ];
  

document.addEventListener('DOMContentLoaded',init);

function init(){
    document.getElementById('keres')?.addEventListener('change',()=>{
        let szulo = document.getElementById('row');
        let szoveg : string = (document.getElementById('keres') as HTMLElement).value; 
        let a = szoveg?.length;

        if(a>=3){
            for(let e of tomb){
                if(e.nev.includes(szoveg)){
                    let div = document.createElement("div");
                    div.classList.add("card,");
                    div.classList.add("col-md-4");
                    div.classList.add("col-sm-12");

                    let kep = document.createElement('img');
                    kep.src='/src/sd.png';
                    kep.classList.add("kep")

                    div.appendChild(kep);

                    let h4 = document.createElement("h4");
                    h4.textContent= e.nev;

                    div.appendChild(h4);

                    let p= document.createElement("p");
                    p.textContent = "Méret: " +e.meret;
                    
                    div.appendChild(p);
                    

                    szulo?.appendChild(div);
                }
            }
        }

        
    })
};

