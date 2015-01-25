from haystack import indexes

from .models import Court


class CourtIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True)

    # location = indexes.LocationField()

    def get_model(self):
        return Court

    # def prepare_location(self, obj):
    #     return "%s,%s" % (obj.latitude, obj.longitude)