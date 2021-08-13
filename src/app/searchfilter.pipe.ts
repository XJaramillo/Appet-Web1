import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(arreglo: any, texto: string, columna: string): any[] {
    if(texto==''){
      return arreglo;
    }
    if(columna=='telefono'){
      console.log(columna);
      texto= texto.toString().toLowerCase();
      return arreglo.filter(item =>{
        return item[columna].toString().toLowerCase().includes(texto);
      });
    }else{
      texto = texto.toLowerCase();
      return arreglo.filter(item =>{
      return item[columna].toLowerCase().includes(texto);
    });
    }
  }

}
