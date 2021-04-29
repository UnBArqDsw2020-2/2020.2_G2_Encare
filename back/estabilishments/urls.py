from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EstabilishmentViewSet

router = DefaultRouter()
router.register(r'estabilishments', EstabilishmentViewSet, basename='estabilishment')
urlpatterns = router.urls

# urlpatterns = [
#     path('', API.get_all, name="estabilishments"),
#     path('create', API.create, name="estabilishment"),
# ]