import { MenuItem } from '../types/menu';
import { vegMenu, nonVegMenu } from '../../src/data/menuData';

export const getAllMenuItems = (): MenuItem[] => {
  return [...vegMenu, ...nonVegMenu];
};

export const getMenuByCategory = (category: 'veg' | 'non-veg'): MenuItem[] => {
  return category === 'veg' ? vegMenu : nonVegMenu;
};

export const getMenuItem = (id: string): MenuItem | undefined => {
  return getAllMenuItems().find(item => item.id === id);
};