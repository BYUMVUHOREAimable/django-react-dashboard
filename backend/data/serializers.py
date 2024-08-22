from rest_framework import serializers
from .models import *
import calendar

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


class GenderDataSerializer(serializers.Serializer): 
    id = serializers.IntegerField(source='gender')
    label = serializers.CharField(source= 'gender__name')
    value = serializers.IntegerField(source='quantity')


class ProductBrancheDataSerializer(serializers.Serializer): 
    productline__name = serializers.CharField()
    quantityBrancheA = serializers.IntegerField()
    quantityBrancheB = serializers.IntegerField()
    quantityBrancheC = serializers.IntegerField()


class CountryDataSerializer(serializers.Serializer):
    date__month = serializers.CharField()
    quantityNetherlands = serializers.IntegerField()
    quantityGermany = serializers.IntegerField()
    quantityFrance = serializers.IntegerField()
    month_name = serializers.SerializerMethodField()

    def get_month_name(self,obj):
        return calendar.month_name[obj['date__month']]
