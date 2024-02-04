import { Device } from '@app/entities/device';

export abstract class DeviceRepository {
  abstract create(device: Device): Promise<void>;
}
