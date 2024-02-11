import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  //ARRAY DE NOTICIAS
  arrNoticias: INoticia[] = [
    {
      'titulo': "Noticia1",
      'imagen': "assets/img/imagen1.svg",
      'texto': "Exercitation cupidatat amet non reprehenderit consectetur deserunt magna irure dolore. Ullamco deserunt et sunt deserunt mollit Lorem ullamco minim do et. Id quis deserunt qui quis cupidatat labore consequat aliquip adipisicing.",
      'fecha': "01/01/2024"
    },
    {
      'titulo': "Noticia2",
      'imagen': "assets/img/imagen2.svg",
      'texto': "Fugiat pariatur aute excepteur culpa officia non tempor esse duis velit. Aliqua officia in labore id veniam commodo eu sunt nostrud eiusmod. Fugiat excepteur commodo et adipisicing ex commodo. Et magna reprehenderit officia ea fugiat aliquip esse anim elit.",
      'fecha': "02/02/2024"
    }
  ];

  newNoticia: any = { 'titulo': '', 'imagen': '', 'texto': '', 'fecha': '' };
  //VINCULADO A BOTON PARA QUE HAGA LA VERIFICACIÓN CUANDO SE PULSE
  seIntentoAgregar: boolean = false;

//GUARDAR NOTICIA
  guardarNoticia() {
    this.seIntentoAgregar = true; // Indicamos que se intentó agregar una noticia

    if (!this.newNoticia.titulo || !this.newNoticia.imagen || !this.newNoticia.texto || !this.newNoticia.fecha) {
      alert("Por favor, completa todos los campos del formulario.");
      return 
    }

    this.arrNoticias.unshift(this.newNoticia); // Utilizar unshift() para agregar la nueva noticia al principio del array
    this.newNoticia = {
      'titulo': '',
      'imagen': '',
      'texto': '',
      'fecha': ''
    };
    //VUELVO A DARLE EL VALOR FALSE PARA QUE NO SE QUEDE EN ROJO.
    this.seIntentoAgregar = false;
    console.log(this.arrNoticias);
  }

  get arrNoticiasGrupos(): INoticia[][] {
    const grupos = [];
    for (let i = 0; i < this.arrNoticias.length; i += 3) {
      grupos.push(this.arrNoticias.slice(i, i + 3));
    }
    return grupos;
  }

  defaultImagen = "assets/img/300x200.svg";

  cargarNoticias(): string {
    let html = '';

    const noticiaPrincipal = this.arrNoticias[0];
    const defaultImagen = this.defaultImagen;

    if (noticiaPrincipal) {
      const principalWidth = 200;
      const principalHeight = 100;

      html += `
        <div class="container my-5">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="card mb-3">
                <img src="${noticiaPrincipal.imagen || defaultImagen}" class="card-img-top" alt="${noticiaPrincipal.titulo}" style="max-width: ${principalWidth}px; max-height: ${principalHeight}px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">${noticiaPrincipal.titulo} <span class="badge bg-primary">NEW!</span></h5>
                  <p class="card-text">${noticiaPrincipal.texto}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">${noticiaPrincipal.fecha}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    html += `
      <div class="container my-5">
        <div class="row justify-content-center">
    `;

    for (const grupo of this.arrNoticiasGrupos) {
      const noticiasSinPrincipal = grupo.filter(noticia => noticia !== noticiaPrincipal);

      for (const noticia of noticiasSinPrincipal) {
        html += `
          <div class="col-md-4 mb-3">
            <div class="card h-100">
              <img src="${noticia.imagen || defaultImagen}" class="card-img-top" alt="${noticia.titulo}" style="min-width: 50px; min-height: 50px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title">${noticia.titulo}</h5>
                <p class="card-text">${noticia.texto}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">${noticia.fecha}</small>
              </div>
            </div>
          </div>
        `;
      }
    }

    html += `
        </div>
      </div>
    `;

    return html;
  }
}
