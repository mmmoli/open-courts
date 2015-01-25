from django.db import models

# Create your models here.
class Court(models.Model):
    """Location of an open court."""
    pass

    def __unicode__(self):
        return 'court'