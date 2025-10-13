import { CarParams, CarResponse } from '../shared/types';
import { BaseService } from './base';

/**
 * CAR - Company Revenue Finder API (V2)
 * Returns revenue information for a company
 */
export declare class CarService extends BaseService {
  getRevenue(params: CarParams): Promise<CarResponse>;
}
