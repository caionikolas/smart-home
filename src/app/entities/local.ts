import { randomUUID } from 'node:crypto';

interface localProps {
  nome: string;
  descricao: string;
}

export class Local {
  private _id: string;
  private props: localProps;
  constructor(props: localProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }
}
