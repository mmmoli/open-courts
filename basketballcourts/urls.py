from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'basketballcourts.views.home', name='home'),
    url(r'^courts/', include('courts.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
