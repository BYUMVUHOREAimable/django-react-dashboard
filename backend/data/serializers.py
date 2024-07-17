from rest_framework import serializers
from .models import *

class SuperMarketSalesSerializer(serializers.ModelSerializer): 
    gender = serializers.SlugRelatedField(
        queryset=Gender.objects.all(), 
        slug_field='name'
    )

    country = serializers.SlugRelatedField(
        queryset=Country.objects.all(), 
        slug_field='name'
    )

    customertype = serializers.SlugRelatedField(
        queryset=CustomerType.objects.all(), 
        slug_field='name'
    )

    branche = serializers.SlugRelatedField(
        queryset=Branche.objects.all(), 
        slug_field='name'
    )

    class Meta: 
        model = SuperMarketSales
        fields = ('id', 'unit_price', 'quantity', 'date', 'country', 'gender', 'customertype', 'branche', 'productline', 'payment' )
