import { randomUUID } from 'node:crypto';

interface ambientProps {
  nome: string;
  descricao: string;
}

export class Ambient {
  private _id: string;
  private props: ambientProps;
  constructor(props: ambientProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public set nome(nome: string) {
    this.nome = nome;
  }

  public get nome() {
    return this.nome;
  }

  public set descricao(descricao: string) {
    this.descricao = descricao;
  }

  public get descricao() {
    return this.descricao;
  }
}
