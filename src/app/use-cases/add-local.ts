import { Local } from '@app/entities/local';
import { LocalRepository } from '@app/repositorios/local-repository';
import { Injectable } from '@nestjs/common';

interface AddLocalRequest {
  nome: string;
  descricao: string;
}

interface AddLocalResponse {
  local: Local;
}

@Injectable()
export class AddLocal {
  constructor(private localRepository: LocalRepository) {}

  async execute(request: AddLocalRequest): Promise<AddLocalResponse> {
    const { nome, descricao } = request;

    const local = new Local({
      nome,
      descricao,
    });

    await this.localRepository.create(local);

    return {
      local,
    };
  }
}
