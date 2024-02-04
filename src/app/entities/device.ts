import { randomUUID } from 'node:crypto';

interface devicesProps {
  nome: string;
  descricao: string;
  online: boolean;
  ligado: boolean;
}

export class Device {
  private _id: string;
  private props: devicesProps;
  constructor(props: devicesProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }
}
