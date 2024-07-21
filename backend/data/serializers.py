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


class BrancheDataSerializer(serializers.Serializer): 
    id = serializers.IntegerField(source='branche')
    label = serializers.CharField(source= 'branche__name')
    value = serializers.IntegerField(source='quantity')
    percentage = serializers.DecimalField(max_digits=10, decimal_places=2)


