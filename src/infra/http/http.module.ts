import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AddAmbient } from '@app/use-cases/add-ambient';
import { AddDevice } from '@app/use-cases/add-device';
import { AddLocal } from '@app/use-cases/add-local';
import { AmbinetController } from './controllers/ambient.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AmbinetController],
  providers: [AddAmbient, AddDevice, AddLocal],
  exports: [AddAmbient, AddDevice, AddLocal],
})
export class HttpModule {}
