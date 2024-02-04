import { IsNotEmpty, Length } from 'class-validator';

export class CreateAmbient {
  @IsNotEmpty()
  @Length(2, 100)
  nome: string;
  @Length(0, 100)
  descricao: string;
}
