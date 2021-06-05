import React from 'react';
import './style.css';

const AboutPage = () => {
  return (
    <>
      <div className="about__container">
        <div className="about__project">
          <p>
            Chceš být chytrý, empatický, mít skvělou slovní zásobu a oslňovat
            své okolí svými znalostmi? Válet v češtině a psát bez hrubek? Prožít
            nějaký skvělý příběh dávno před tím, než ho tvoji spolužáci uvidí v
            kinech? Věděl jsi, že tohle všechno můžeš mít, když budeš číst
            knížky? A co je nejlepší, užiješ si při tom navíc spoustu zábavy!
          </p>
          <p>
            Svět knih je plný úžasných příběhů, mouder a zajímavostí. Můžeš
            prožít nekonečně dobrodružství, řešit zapeklité záhady, smát se
            vtipnému vyprávění. Díky knížkám je snadné podívat se na různá místa
            na Zemi i ve vesmíru nebo dokonce cestovat v čase. Vyzkoušíš si,
            jaké je to být princeznou, statečným hrdinou, drakem nebo třeba
            nějakým zvířetem. Tvoje postava bude někdy smutná, někdy veselá,
            občas bude odvážná a občas se bude bát, bude překonávat různé
            překážky a radovat se z jejich překonání. Zkušenosti z prožitých
            příběhů se ti pak můžou hodit při řešení nejrůznějších situací v
            životě.
          </p>
          <p>
            Knížka je skvělý kamarád. Můžeš ji nosit všude s sebou - do vlaku,
            do čekárny, pod stan... Nepotřebuješ wi-fi a nikdy se ti nevybije.
            Když si najdeš v okolí městskou knihovnu, můžeš si navíc vybírat z
            obrovského množství skvělých příběhů, a to prakticky zadarmo.
          </p>
          <p>Stačí si najít pohodlnou pozici na čtení a ponořit do příběhu.</p>
          <p className="about__paragraph--em">
            <em>A navíc...</em>
          </p>
          <p className="about__paragraph--strong">
            <em>...přečtenou knihou nakrm Stránkožrouta!</em>
          </p>
          <p>
            Stránkožrouti milují knihy, úplně nejvíc ty přečtené. Veď si poctivě
            záznamy o přečtených knihách a s každou přečtenou stránkou budou tví
            Stránkožrouti spokojenější a spokojenější.
          </p>
          <p className="about__paragraph--strong about__paragraph--left">
            Čtení knížek je rozhodně in!
          </p>
        </div>
        <h1 className="about__heading">Autorky projektu</h1>
        <div className="about__authors">
          <div className="about__author">
            <div className="about__imagecontainer">
              <img
                className="about__image"
                /* src="./img/IMG_4963.jpg" */
                alt="Foto Dana"
              />
            </div>
            <h2>Dana Musilová</h2>
            <p>
              Čtení je moje oblíbená činnost už od dětství, hrozně ráda chodím
              do knihoven a knihkupectví a miluji vůni knih. Svoje přečtené
              knížky si zapisuji velmi stručně do obyčejného sešítku A5. Mám
              sice zaznamenanou svoji historii četby, ale po čase už se v tom
              velmi špatně něco hledá. Navíc bych ocenila, kdybych si mohla
              občas poznamenat nějaké zajímavé myšlenky a moudra a mít je někde
              v přehledné formě při ruce.
            </p>
          </div>
          <div className="about__author">
            <img
              className="about__image"
              /* src="./img/petra.jpg"  */ alt="Foto Petra"
            />
            <h2>Petra Kejmarová</h2>
            <p>
              Mistr útěků z reality a věčný snílek. Knížky mi přináší do života
              radost už od prvních přečtených písmenek. Přesto jsem si čtenářský
              deník vedla vždy jen z povinnosti. Moc ráda bych projektem pomohla
              dětem nadchnout se z příbehů a objevovat nové světy fantazie. No a
              nebo alespoň jednoduše a zábavně splnit povinný zápis do
              čtenářského deníčku.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
