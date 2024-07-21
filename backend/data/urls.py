from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import * 

router = DefaultRouter()
router.register('supermarketsales',SuperMarketSalesViewset, basename='supermarketsales')
router.register('branchedata',BrancheDataViewset, basename='branchedata')
urlpatterns = router.urls