from django.db import models

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
    latitude = models.FloatField(null=True)
    longitude = models.FloatField(null=True)

    def __unicode__(self):
        return 'court'