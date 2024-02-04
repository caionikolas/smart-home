import { Ambient } from '@app/entities/ambient';
import { AmbientRepository } from '@app/repositorios/ambient-repository';
import { Injectable } from '@nestjs/common';

interface addAmbientRequest {
  nome: string;
  descricao: string;
}

interface addAmbientResponse {
  ambient: Ambient;
}

@Injectable()
export class AddAmbient {
  constructor(private ambientRepository: AmbientRepository) {}

  async execute(request: addAmbientRequest): Promise<addAmbientResponse> {
    const { nome, descricao } = request;

    const ambient = new Ambient({
      nome,
      descricao,
    });

    await this.ambientRepository.create(ambient);

    return {
      ambient,
    };
  }
}
