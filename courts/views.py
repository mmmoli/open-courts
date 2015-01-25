from .models import Court
from rest_framework import mixins
from rest_framework import viewsets
from serializers import CourtSerializer
from rest_framework.decorators import list_route

class CourtsViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    viewsets.GenericViewSet):
    queryset = Court.objects.all()
    serializer_class = CourtSerializer

    @list_route()
    def search(self, request):
        pass