import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "felipe";
  dataNascimento = "1997/09/03";
  urlImagem = "/assets/home-img1.png";

  mostrarDataNascimento() {
    alert(`A data de nascimento de ${this.nome} é: ${this.dataNascimento}`)
  }
}
