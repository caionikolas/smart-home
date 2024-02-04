import { Controller, Body, Post } from '@nestjs/common';
import { CreateAmbient } from '../dtos/create-ambient';
import { AddAmbient } from '@app/use-cases/add-ambient';
import { AmbientViewModel } from '../view-models/ambient-view-model';

@Controller('ambiente')
export class AmbinetController {
  constructor(private addAmbient: AddAmbient) {}

  @Post()
  async create(@Body() body: CreateAmbient) {
    const { nome, descricao } = body;

    const { ambient } = await this.addAmbient.execute({
      nome,
      descricao,
    });

    return {
      ambient: AmbientViewModel.toHTTP(ambient),
    };
  }
}
