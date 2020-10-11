import image from './assets/mersedes.jpg'
import {TitleBlock, TextBlock, ColumnBlock, ImageBlock} from './classes/block'
const text = 'На JavaScript можно создавать очень много'
export const model = [
    new TitleBlock( 'Конструктор сайтов на чистом javaScript', {
        tag: 'h2',
        styles: {
            'margin-top': '10px',
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align':'center',
            padding:'1.5rem'
        }
    }),
   new TextBlock( text, {
       tag: 'p',
       styles: {
           'margin-top': '10px',
           padding:'1.5rem',
           'background-color': 'blue',

       },
       stylesP: {
           color: '#fff',
           'font-size': '2rem',
           'text-align': 'center'
       }
   }),
  new ColumnBlock( [
      'Приложение на чистом javaScript без использования сторонних библиотек',
      'Приложение придерживается принципа SOLID',
      'С использованием Parcel ',
  ],{
      tag: 'div',
      styles: {
          'margin-top': '10px',
          'text-align': 'center',
          padding:'1.5rem',
          'border': '1px solid #ccc',


      }
  }),
   new ImageBlock( image, {
       styles: {
           'margin-top': '10px',
           width: '100%'
       }
   }),

];