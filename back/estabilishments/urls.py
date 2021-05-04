# from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EstabilishmentViewSet

router = DefaultRouter()
router.register(r'estabilishments', EstabilishmentViewSet, basename='estabilishment')
urlpatterns = router.urls
