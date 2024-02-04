import { AmbientRepository } from '@app/repositorios/ambient-repository';
import { PrismaService } from '../prisma.service';
import { PrismaAmbientMapper } from '../mappers/prisma-ambient-mapper';
import { Ambient } from '@app/entities/ambient';
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaAmbientRepository implements AmbientRepository {
  constructor(private prisma: PrismaService) {}
  async create(ambient: Ambient): Promise<void> {
    const raw = PrismaAmbientMapper.toPrisma(ambient);

    await this.prisma.ambient.
  }
}
