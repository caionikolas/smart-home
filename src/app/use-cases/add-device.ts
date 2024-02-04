import { Device } from '@app/entities/device';
import { DeviceRepository } from '@app/repositorios/device-repository';
import { Injectable } from '@nestjs/common';

interface AddDeviceRequest {
  nome: string;
  descricao: string;
  online: boolean;
  ligado: boolean;
}

interface AddDeviceResponse {
  device: Device;
}

@Injectable()
export class AddDevice {
  constructor(private deviceRepository: DeviceRepository) {}

  async execute(request: AddDeviceRequest): Promise<AddDeviceResponse> {
    const { nome, descricao, online, ligado } = request;

    const device = new Device({
      nome,
      descricao,
      online,
      ligado,
    });

    await this.deviceRepository.create(device);

    return {
      device,
    };
  }
}
