from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, template_name='index.html')


def about(request):
    return render(request, template_name='about.html')


def contact(request):
    return render(request, template_name='contact.html')


def products(request):
    return render(request, template_name='products.html')


def product_detail(request):
    return render(request, template_name='product_detail.html')


def add_product(request):
    return render(request, template_name='add-product.html')






