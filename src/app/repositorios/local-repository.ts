import { Local } from '@app/entities/local';

export abstract class LocalRepository {
  abstract create(local: Local): Promise<void>;
}
