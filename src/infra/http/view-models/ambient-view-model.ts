import { Ambient } from '@app/entities/ambient';

export class AmbientViewModel {
  static toHTTP(ambient: Ambient) {
    return {
      id: ambient.id,
      nome: ambient.nome,
      descricao: ambient.descricao,
    };
  }
}
