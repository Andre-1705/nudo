import sweter from '@/assets/sweter.png';
import camiseta from '@/assets/camiseta.png';
import camiseta1 from '@/assets/camiseta1.png';
import pantalon from '@/assets/pantalon.png';
import pollera from '@/assets/pollera.png';
import vestido from '@/assets/vestido.png';

export const products = [
  {
    id: 1,
    name: 'Sweter de lana suave',
    image: sweter,
    price: 4500,
    category: 'Abrigo',
    aspectRatio: 1/1,
    maxWidth: '300px',
  },
  {
    id: 2,
    name: 'Camiseta de algodón Pima',
    image: camiseta,
    price: 3200,
    category: 'Remera',
    aspectRatio: 1/1,
    maxWidth: '300px',

  },
  {
    id: 3,
    name: 'Camiseta básica unisex',
    image: camiseta1,
    price: 2800,
    category: 'Remera',
    aspectRatio: 1/1,
    maxWidth: '300px', 
  },
  {
    id: 4,
    name: 'Pantalón de mezclilla',
    image: pantalon,
    price: 5200,
    category: 'Pantalón',
    aspectRatio: 1/1,
    maxWidth: '300px',
  },
  {
    id: 5,
    name: 'Pollera de seda plisada',
    image: pollera,
    price: 6100,
    category: 'Pollera',
    aspectRatio: 1/1,
    maxWidth: '300px',
  },
  {
    id: 6,
    name: 'Vestido veraniego ligero',
    image: vestido,
    price: 5800,
    category: 'Vestido',
    aspectRatio: 1/1,
    maxWidth: '300px',
  },
];