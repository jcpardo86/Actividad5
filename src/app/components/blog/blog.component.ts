import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrNoticias: INoticia[] = [
    {
      'titulo': "Noticia1",
      'imagen': "assets/img/imagen1.svg",
      'texto' : "Exercitation cupidatat amet non reprehenderit consectetur deserunt magna irure dolore. Ullamco deserunt et sunt deserunt mollit Lorem ullamco minim do et. Id quis deserunt qui quis cupidatat labore consequat aliquip adipisicing.",
      'fecha': "01/01/2024"
    },
    {
      'titulo': "Noticia2",
      'imagen': "assets/img/imagen2.svg",
      'texto' : "Fugiat pariatur aute excepteur culpa officia non tempor esse duis velit. Aliqua officia in labore id veniam commodo eu sunt nostrud eiusmod. Fugiat excepteur commodo et adipisicing ex commodo. Et magna reprehenderit officia ea fugiat aliquip esse anim elit.",
      'fecha': "02/02/2024"
    },
    {
      'titulo': "Noticia2",
      'imagen': "assets/img/imagen2.svg",
      'texto' : "Fugiat pariatur aute excepteur culpa officia non tempor esse duis velit. Aliqua officia in labore id veniam commodo eu sunt nostrud eiusmod. Fugiat excepteur commodo et adipisicing ex commodo. Et magna reprehenderit officia ea fugiat aliquip esse anim elit.",
      'fecha': "02/02/2024"
    }
  ]
 //{'titulo','imagen','texto','fecha'}]
  newNoticia: any = {'titulo':'','imagen':'','texto':'','fecha':''}
  guardarNoticia(){
    this.arrNoticias.push(this.newNoticia);
    this.newNoticia ={
      'titulo':'',
      'imagen':'',
      'texto':'',
      'fecha':''
    }
    console.log(this.arrNoticias)
  }

  cargarNoticias(): string {
    let html=``;
    this.arrNoticias.forEach(element => {
    html+= `
    <div class="container my-5">
  <div class="row">
    <div class="col-md-8">
      <div class="card mb-3">
        <img src="${element.imagen}" class="card-img-top" alt="${element.titulo}"/>
        <div class="card-body">
          <h2 class="card-title">${element.titulo}</h2>
          <p class="card-text">${element.texto}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${element.fecha}</small>
        </div>
      </div>
    </div>
  </div>
</div>
    `
    })
    return html
  }


}
