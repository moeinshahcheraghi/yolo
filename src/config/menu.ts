import type {MenuInterface} from 'types/resturant';

const menu: MenuInterface[] = [
  {
    category: {
      id: 'hotCoffee',
      name: 'قهوه گرم',
      image: '/images/category/hotCoffee.png'
    },
    products: [
      {
        name: 'اسپرسو عربیکا‍',
        price: 35000,
        description: '٪۳۰ عربیکا کلمبیا ۷۰٪ + روبوستا ساحل عاج',
        image: '/images/product/cafe.png'
      },
      {
        name: 'اسپرسو روبوستا',
        price: 35000,
        description: '٪۷۰ عربیکا کلمبیا ۳۰٪ + روبوستا ساحل عاج',
        image: '/images/product/cafe.png'
      },
      {
        name: 'آمریکانو',
        price: 50000,
        description: 'اسپرسو + آب جوش',
        image: '/images/product/cafe.png'
      },
      {
        name: 'کاپوچینو',
        price: 55000,
        description: 'اسپرسو + ۲۲۰ میلی لیتر شیر پر چرب'
      },
      {
        name: 'لاته',
        price: 65000,
        description: 'اسپرسو + ۳۶۰ میلی لیتر شیر پر چرب'
      },
      {
        name: 'لاته ماکیاتو',
        price: 75000,
        description: 'اسپرسو + ۳۵۰ میلی لیتر شیر پر چرب + طعم دهنده دلخواه'
      },
      {
        name: 'موکا',
        price: 75000,
        description: 'اسپرسو + ۳۵۰ میلی لیتر شیر پر چرب + سس شکلات'
      },
      {
        name: 'اسپرسو ماکیاتو',
        price: 50000,
        description: 'اسپرسو + یک لکه فوم شیر '
      },
      {
        name: 'کورتادو',
        price: 50000,
        description: 'اسپرسو + ۴۰۰ میلی لیتر شیر پر چرب'
      },
      {
        name: 'کن پانا',
        price: 40000,
        description: 'اسپرسو + خامه'
      },
      {
        name: 'هات چاکلت',
        price: 75000,
        description: ''
      },
      {
        name: 'ماسالا',
        price: 75000,
        description: ''
      },
      {
        name: 'وایت چاکلت',
        price: 75000,
        description: ''
      },
      {
        name: 'قهوه دمی',
        price: 75000,
        description: 'قهوه تک'
      }
    ]
  },
  {
    category: {
      id: 'coldCoffee',
      name: 'قهوه سرد',
      image: '/images/category/coldCoffee.png'
    },
    products: [
      {
        name: 'آیس آمریکانو',
        price: 50000,
        description: 'اسپرسو + آب سرد'
      },
      {
        name: 'آیس لاته',
        price: 65000,
        description: ' اسپرسو + ۳۶۰ میلی لیتر شیر پر چرب + یخ',
        image: '/images/product/cafe.png'
      },
      {
        name: 'آیس موکیاتو',
        price: 75000,
        description: ''
      },
      {
        name: 'آیس موکا',
        price: 75000,
        description: 'اسپرسو + ۳۵۰ میلی لیتر شیر پر چرب + سس شکلات + یخ'
      },
      {
        name: 'کلد برو',
        price: 50000,
        description: 'قهوه سرد دم به روش چکه ای '
      }
    ]
  },
  {
    category: {
      id: 'herbalTea',
      name: 'دمنوش',
      image: '/images/category/herbalTea.png'
    },
    products: [
      {
        name: 'دمنوش رویال جسمین',
        price: 45000,
        description: 'چای سبز + گل یاس'
      },
      {
        name: 'دمنوش اپل پارادایس',
        price: 45000,
        description: 'سیب + به + دارچین'
      },
      {
        name: 'دمنوش کویین بری',
        price: 75000,
        description: 'کرن بری + رزشک + گل سرخ'
      }
    ]
  },
  {
    category: {
      id: 'moktele',
      name: 'ماکتیل',
      image: '/images/category/moktele.png'
    },
    products: [
      {
        name: 'یوبو',
        price: 75000,
        description: 'آناناس + پرتغال + پرتغال آبی استوایی + کربن فعال'
      },
      {
        name: 'تراپیکال',
        price: 75000,
        description: 'انبه + پشن فروت + زنجیل + لیمو '
      },
      {
        name: 'visperad',
        price: 80000,
        description: 'آناناس + پرتغال + گرانادین'
      }
    ]
  },
  {
    category: {
      id: 'smoothie',
      name: 'اسموتی',
      image: '/images/category/smoothie.png'
    },
    products: [
      {
        name: 'منگولایف',
        price: 80000,
        description: 'انبه + هلو + پشن نردت + لیمو'
      },
      {
        name: 'سور چری',
        price: 80000,
        description: 'آلبالو + زرشک + شاه توت + انار '
      }
    ]
  },
  {
    category: {
      id: 'shake',
      name: 'شیک',
      image: '/images/category/shake.png'
    },
    products: [
      {
        name: 'شیک وانیل',
        price: 85000,
        description: ''
      },
      {
        name: 'شیک کارامل اسپرسو',
        price: 95000,
        description: ''
      },
      {
        name: 'شیک نوتلا',
        price: 105000,
        description: ''
      },
      {
        name: 'شیک لوتوس',
        price: 115000,
        description: ''
      },
      {
        name: 'شیک بادام زمینی',
        price: 100000,
        description: ''
      },
      {
        name: 'شیک شکلات',
        price: 95000,
        description: ''
      }
    ]
  },
  {
    category: {
      id: 'cake',
      name: 'کیک',
      image: '/images/category/cake.png'
    },
    products: [
      {
        name: 'کیک هویج',
        price: 70000,
        description: ''
      },
      {
        name: 'کیک شکلاتی',
        price: 65000,
        description: ''
      },
      {
        name: 'چیز کیک',
        price: 65000,
        description: ''
      }
    ]
  }
];
Object.freeze(menu);
export default menu;
