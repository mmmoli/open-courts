from django.contrib import admin

from .models import Court

class CourtAdmin(admin.ModelAdmin):
    pass

admin.site.register(Court, CourtAdmin)