from django.contrib import admin

from django_google_maps.widgets import GoogleMapsAddressWidget
from django_google_maps.fields import AddressField

from .models import Court

class CourtAdmin(admin.ModelAdmin):
    formfield_overrides = {
        AddressField: {'widget': GoogleMapsAddressWidget},
    }

admin.site.register(Court, CourtAdmin)