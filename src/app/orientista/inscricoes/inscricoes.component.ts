import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.component.html',
  styleUrls: ['./inscricoes.component.css']
})
export class InscricoesComponent implements OnInit {
  eventos;
  submete = false;
  selectedEvento;
  imagem;
  modal;
    defaltHost = 'http://localhost/Orientek/sync';

  // defaltHost='http://localhost/Orientek/sync';
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    M.AutoInit();
    const modalElem = document.getElementById('modal1');
    this.modal = M.Modal.getInstance(modalElem);
    const token = localStorage.getItem('token');
    this.http.get(this.defaltHost + '/api/corredor/eventos.php', {
      headers: {
        'Authorization': token
      }
    }).subscribe((res: any) => {
      this.eventos = res;
    });
  }

  showFile(ev: any) {
    const reader = new FileReader();
    reader.onload = function () {
      const output: any = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(ev.target.files[0]);
    this.imagem = ev.target.files[0];
  }

  sendFile() {
    const token = localStorage.getItem('token');
    const formData: FormData = new FormData();
    formData.append('file', this.imagem, this.imagem.name);
    formData.append('evento', this.selectedEvento.idEvento);
    this.http.post(this.defaltHost + '/api/corredor/eventos.php', formData, {
      headers: {
        'Authorization': token
      }, responseType: 'text'
    }).subscribe((response: any) => {
      if (response.ok) {
        M.toast({html: 'Comprovante enviado'});
        this.modal.close();
      }
    });
  }

  selectEvento(evento) {
    this.selectedEvento = evento;
  }
}
