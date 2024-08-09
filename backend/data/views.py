from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import * 
from .models import * 
from rest_framework.response import Response
from django.db.models import Sum, F, Func, Value, FloatField, IntegerField, Case, When
from django.db.models.functions import Cast

class SuperMarketSalesViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = SuperMarketSalesSerializer

    def list(self, request): 
        queryset = SuperMarketSales.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class BrancheDataViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = BrancheDataSerializer

    def list(self, request): 
        total_sum = SuperMarketSales.objects.aggregate(total_quantity=Sum('quantity'))
        total_quantity_value = total_sum['total_quantity']

        queryset = SuperMarketSales.objects.values('branche', 'branche__name')\
                   .annotate(quantity=Sum('quantity'))\
                   .annotate(percentage=Func(
                      (Cast(F('quantity'), FloatField())/ total_quantity_value) * 100,
                      Value(2), 
                      function='ROUND', 
                      output_field=FloatField()
                   ))
                 
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    

class GenderDataViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = GenderDataSerializer

    def list(self, request): 
        queryset = SuperMarketSales.objects.values('gender', 'gender__name')\
                   .annotate(quantity=Sum('quantity'))
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class ProductBrancheViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = ProductBrancheDataSerializer

    def list(self, request): 
        queryset = SuperMarketSales.objects.values('productline__name')\
                   .annotate(quantityBrancheA=Sum(
                       Case(
                           When(branche__name="A", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityBrancheB=Sum(
                       Case(
                           When(branche__name="B", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityBrancheC=Sum(
                       Case(
                           When(branche__name="C", then='quantity'),
                           default=0, 
                           output_field=IntegerField()
                       )
                   ))
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class CountryDataViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = SuperMarketSales.objects.all()
    serializer_class = CountryDataSerializer

    def list(self, request): 
        queryset = SuperMarketSales.objects.values('country__name','date')\
                   .annotate(quantity=Sum('quantity'))

        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)