
from django.contrib import admin
from django.urls import path
from app.views import index, about, contact, products, product_detail, add_product
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('products/', products, name='products'),
    path('products/', product_detail, name='product_detail'),
    path('products/add/', add_product, name='add-product'),
]
