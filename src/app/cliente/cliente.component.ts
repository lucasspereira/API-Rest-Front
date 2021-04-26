import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../Model/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente()
  listaCliente: Cliente[]
  telefoneCliente: string
  idCliente: number


  constructor(
    private clienteService: ClienteService,
    private router: Router,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.findAllClientes()

    // this.idCliente = this.route.snapshot.params['id']
    // this.findByIdCliente(this.idCliente)

  }

  findByIdCliente(id: number) {
    this.clienteService.getByIdCliente(id).subscribe((resp: Cliente) => {
      this.cliente = resp
    })
  }

  findByTelefone() {
    if (this.telefoneCliente == '') {
      this.findAllClientes()
    } else {
      this.clienteService.getByTelefone(this.telefoneCliente).subscribe((resp: Cliente[]) => {
        this.listaCliente = resp
      })
    }
  }

  cadastrar() {
    this.clienteService.postCliente(this.cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
      alert('Cliente cadastrado com sucesso!')
      this.findAllClientes()
      this.cliente = new Cliente()
    })
  }

  findAllClientes() {
    this.clienteService.getAllCliente().subscribe((resp: Cliente[]) => {
      this.listaCliente = resp
    })
  }

  atualizar() {
    this.cliente.id = this.idCliente
    this.clienteService.putCliente(this.cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
      alert('Cliente atualizado com sucesso!')
      this.findAllClientes()
      this.router.navigate(['/cliente'])
    })
  }

  deletarCliente() {
    this.clienteService.deleteCliente(this.idCliente).subscribe(() => {
      alert('Cliente apagado com sucesso!')
      this.router.navigate(['/cliente'])
      this.findAllClientes()

    })

  }




  setId(id: number) {
    this.idCliente = id
  }

}

