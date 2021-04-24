import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Model/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente
  listaCliente: Cliente[]
  telefoneCliente: string

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.findAllClientes()
  }

  findAllClientes() {
    this.clienteService.getAllCliente().subscribe((resp: Cliente[]) => {
      this.listaCliente = resp
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

}
