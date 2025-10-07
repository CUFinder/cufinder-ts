import { CarV2Params, CarV2Response } from '../../shared/types';
import { BaseService } from '../base';

/**
 * CAR - Company Revenue Finder API (V2)
 * Returns revenue information for a company
 */
export declare class CarV2 extends BaseService {
  getRevenue(params: CarV2Params): Promise<CarV2Response>;
}
