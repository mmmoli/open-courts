from django.db import models
from django_google_maps import fields as map_fields

# Create your models here.
class Court(models.Model):
    """Location of a basketball court."""
    address = map_fields.AddressField(max_length=200)
    geolocation = map_fields.GeoLocationField(max_length=100)

    def __unicode__(self):
        return self.address