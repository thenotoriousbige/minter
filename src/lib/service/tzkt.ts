import axios from 'axios';
import { Config } from '../system';

export async function getBigMapKeys(config: Config, id: number) {
  const uri = `${config.tzkt.api}/v1/bigmaps/${id}/keys`;
  const response = await axios.get(uri);
  return response.data;
}

export async function getContract(config: Config, address: string) {
  const uri = `${config.tzkt.api}/v1/contracts/${address}`;
  const response = await axios.get(uri);
  return response.data;
}

export async function getContractBigMapKeys(
  config: Config,
  address: string,
  name: string
) {
  const uri = `${config.tzkt.api}/v1/contracts/${address}/bigmaps/${name}/keys`;
  const response = await axios.get(uri);
  return response.data;
}

export async function getContractStorage(config: Config, address: string) {
  const uri = `${config.tzkt.api}/v1/contracts/${address}/storage`;
  const response = await axios.get(uri);
  return response.data;
}

export async function getAccountContracts(config: Config, address: string) {
  const uri = `${config.tzkt.api}/v1/accounts/${address}/contracts`;
  const response = await axios.get(uri);
  return response.data;
}

export class TzKt {
  config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  getBigMapKeys(id: number) {
    return getBigMapKeys(this.config, id);
  }

  getContract(address: string) {
    return getContract(this.config, address);
  }

  getContractBigMapKeys(address: string, name: string) {
    return getContractBigMapKeys(this.config, address, name);
  }

  getContractStorage(address: string) {
    return getContractStorage(this.config, address);
  }

  getAccountContracts(address: string) {
    return getAccountContracts(this.config, address);
  }
}