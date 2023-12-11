import type {ResturantInterface} from 'types/resturant';

const information: ResturantInterface = {
  name: 'کافه يــولــو',
  description: ' You only live once. Welcome to Yolo Coffee ',
  phone: '09911050903',
  location: {
    latitude: 35.7398102,
    longitude: 51.5391716,
    address: 'تهرانپارس , فلکه ی سوم ,خیابان مظقری , بین ۱۸۸ و ۱۸۶ کافه یولو'
  },
  shiftsWork: [
    {
      day: 'شنبه',
      time: {
        start: '07:00',
        end: '23:00'
      }
    },
    {
      day: 'یک‌شنبه',
      time: {
        start: '07:00',
        end: '23:00'
      }
    },
    {
      day: 'دوشنبه',
      time: {
        start: '07:00',
        end: '23:00'
      }
    },
    {
      day: 'سه‌شنبه',
      time: {
        start: '07:00',
        end: '23:00'
      }
    },
    {
      day: 'چهارشنبه',
      time: {
        start: '07:00',
        end: '23:00'
      }
    },
    {
      day: 'پنج‌شنبه',
      time: {
        start: '07:00',
        end: '23:00'
      }
    }
  ]
};

Object.freeze(information);
export default information;
