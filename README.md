# Online Magazin - Django E-commerce Project

Bu loyiha Django frameworkida yaratilgan onlayn magazin web ilovasi hisoblanadi.

## Texnologiyalar

- Python 3.13.7
- Django 5.2.8
- SQLite3
- HTML5
- CSS3

## O'rnatish

1. Loyihani kompyuteringizga yuklab oling:
```bash
git clone https://github.com/yourusername/magazin_template.git
cd magazin_template
```

2. Virtual muhit yarating va faollashtiring:
```bash
python -m venv venv
# Windows uchun
venv\Scripts\activate
# Linux/Mac uchun
source venv/bin/activate
```

3. Kerakli kutubxonalarni o'rnating:
```bash
pip install -r requirements.txt
```

4. Ma'lumotlar bazasini yarating:
```bash
python manage.py migrate
```

5. Django development serverni ishga tushiring:
```bash
python manage.py runserver
```

## Loyiha Tuzilishi

```
magazin_template/
│
├── app/                    # Asosiy ilova
│   ├── migrations/        # Migratsiya fayllari
│   ├── __init__.py
│   ├── admin.py          # Admin panel sozlamalari
│   ├── apps.py           # Ilova sozlamalari
│   ├── models.py         # Ma'lumotlar bazasi modellari
│   ├── tests.py          # Test fayllar
│   └── views.py          # Ko'rinishlar
│
├── magazin/               # Loyiha sozlamalari
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py       # Asosiy sozlamalar
│   ├── urls.py           # URL yo'naltiruvchi
│   └── wsgi.py
│
├── static/               # Statik fayllar
│   ├── style.css        # CSS uslublar
│   └── script.js        # JavaScript fayl
│
├── templates/            # HTML shablonlar
│   ├── about.html       # Biz haqimizda
│   ├── add-product.html # Mahsulot qo'shish
│   ├── contact.html     # Aloqa
│   ├── index.html       # Bosh sahifa
│   ├── products.html    # Mahsulotlar ro'yxati
│   └── product_detail.html # Mahsulot tafsilotlari
│
├── manage.py            # Django boshqaruv scripti
├── requirements.txt     # Kerakli Python kutubxonalari
└── README.md           # Loyiha haqida ma'lumot
```

## Funksionallik

- Mahsulotlar ro'yxatini ko'rish
- Mahsulot tafsilotlarini ko'rish
- Yangi mahsulot qo'shish
- Biz haqimizda sahifasi
- Aloqa sahifasi

## URL Manzillari

- `/` - Bosh sahifa
- `/products/` - Mahsulotlar ro'yxati
- `/products/<id>/` - Mahsulot tafsilotlari
- `/products/add/` - Yangi mahsulot qo'shish
- `/about/` - Biz haqimizda
- `/contact/` - Aloqa

## Ishlab Chiquvchi

Ushbu loyiha [Sizning Ismingiz] tomonidan yaratilgan.

## Litsenziya

Bu loyiha MIT litsenziyasi ostida tarqatiladi.
