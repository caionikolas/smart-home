import { Ambient } from '@app/entities/ambient';

export class PrismaAmbientMapper {
  static toPrisma(ambient: Ambient) {
    return {
      id: ambient.id,
      nome: ambient.nome,
      descricao: ambient.descricao,
    };
  }
}
