import { IFoodItem } from './IFoodItem';

export interface ICurrentFoodItem extends IFoodItem {
  choosed: boolean;
}
