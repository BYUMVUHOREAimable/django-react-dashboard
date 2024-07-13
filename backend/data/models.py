from django.db import models

# Create your models here.

class Country(models.Model): 
    name = models.CharField(max_length=200)

class Gender(models.Model): 
    name = models.CharField(max_length=200)

class CustomerType(models.Model): 
    name = models.CharField(max_length=200)

class Branche(models.Model): 
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)

class ProductLine(models.Model): 
    name = models.CharField(max_length=200)

class Payment(models.Model): 
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=200)


class SuperMarketSales(models.Model): 
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    date = models.DateField()
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE)
    customertype = models.ForeignKey(CustomerType, on_delete=models.CASCADE)
    branche = models.ForeignKey(Branche, on_delete=models.CASCADE)
    productline = models.ForeignKey(ProductLine, on_delete=models.CASCADE)
    payment = models.ForeignKey(Payment, on_delete=models.CASCADE)