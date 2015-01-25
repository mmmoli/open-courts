from django.db import models
from django_google_maps import fields as map_fields

# Create your models here.
class Court(models.Model):
    """Location of an open court."""
    
    BASKETBALL = 'BA'
    TENNIS = 'TE'
    COURT_TYPE_CHOICES = (
        (BASKETBALL, 'Basketball'),
        (TENNIS, 'Tennis'),
    )

    court_type = models.CharField(
        max_length=2,
        choices=COURT_TYPE_CHOICES,
        default=BASKETBALL
    )

    address = map_fields.AddressField(max_length=200)
    geolocation = map_fields.GeoLocationField(max_length=100) 

    def __unicode__(self):
        return 'Court'
