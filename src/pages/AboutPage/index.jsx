import React from 'react';
import './style.css';

const AboutPage = () => {
  return (
    <>
      <div className="about__container">
        <p>
          Chceš být chytrý, empatický, mít skvělou slovní zásobu a oslňovat své
          okolí svými znalostmi? Válet v češtině a psát bez hrubek? Prožít
          nějaký skvělý příběh dávno před tím, než ho tvoji spolužáci uvidí v
          kinech? Věděl jsi, že tohle všechno můžeš mít, když budeš číst knížky?
          A co je nejlepší, užiješ si při tom navíc spoustu zábavy!
        </p>
        <p>
          Svět knih je plný úžasných příběhů, mouder a zajímavostí. Můžeš prožít
          nekonečně dobrodružství, řešit zapeklité záhady, smát se vtipnému
          vyprávění. Díky knížkám je snadné podívat se na různá místa na Zemi i
          ve vesmíru nebo dokonce cestovat v čase. Vyzkoušíš si, jaké je to být
          princeznou, statečným hrdinou, drakem nebo třeba nějakým zvířetem.
          Tvoje postava bude někdy smutná, někdy veselá, občas bude odvážná a
          občas se bude bát, bude překonávat různé překážky a radovat se z
          jejich překonání. Zkušenosti z prožitých příběhů se ti pak můžou hodit
          při řešení nejrůznějších situací v životě.
        </p>
        <p>
          Knížka je skvělý kamarád. Můžeš ji nosit všude s sebou - do vlaku, do
          čekárny, pod stan... Nepotřebuješ wi-fi a nikdy se ti nevybije. Když
          si najdeš v okolí městskou knihovnu, můžeš si navíc vybírat z
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
    </>
  );
};

export default AboutPage;
