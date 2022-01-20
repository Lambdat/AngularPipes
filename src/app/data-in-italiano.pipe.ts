import { Pipe, PipeTransform } from '@angular/core';

//questo + il decorator di questa classe che specifica che stiamo lavornado su un pipi
@Pipe({
  name: 'dataInItaliano' //questo è il nome del nostro pipe
})
export class DataInItalianoPipe implements PipeTransform {


  //  value= valore che vogliamo trasformare, di tipo Date e restituire un qualsiasi tipo di valore
  transform(value: Date): any {

      let giorno = value.getUTCDate();
    
      console.log(giorno);

      let mese : number | string= value.getUTCMonth();

      console.log(mese); // Parte da 0 Gennaio

      let anno = value.getUTCFullYear();

      switch(mese){
        case 0:{
            mese = "Gennaio";
        }
        break;
        case 1:{
          mese = "Febbraio";
        }
        break;
        case 2:{
          mese = "Marzo";
        }
        break;
        case 3:{
          mese = "Aprile";
        }
        break;
        case 4:{
          mese = "Maggio";
        }
        break;
        case 5:{
          mese = "Giugno";
        }
        break;
        case 6:{
          mese = "Luglio";
        }
        break;
        case 7:{
          mese = "Agosto";
        }
        break;
        case 8:{
          mese = "Settembre";
        }
        break;
        case 9:{
          mese = "Ottobre";
        }
        break;
        case 10:{
          mese = "Novembre";
        }
        break;
        case 11:{
          mese = "Dicembre";
        }
        break;
      }

      return `${giorno} ${mese} ${anno}`;
  }

}
