import { Ambient } from '@app/entities/ambient';

export abstract class AmbientRepository {
  abstract create(ambient: Ambient): Promise<void>;
}
