from csv import DictReader

from math import radians, cos, sin, asin, sqrt
ISRAEL_LAT, ISRAEL_LON = 31.5, 34.75
def find_distance(name):
    def haversine(lon1, lat1, lon2, lat2):
        """
        Calculate the great circle distance between two points
        on the earth (specified in decimal degrees)
        """
        # convert decimal degrees to radians
        lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
        # haversine formula
        dlon = lon2 - lon1
        dlat = lat2 - lat1
        a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
        c = 2 * asin(sqrt(a))
        km = 6367 * c
        return km
    def country(country):
        with open('cow.csv') as f:
            reader = DictReader(f)
            for d in reader:
                if d['name'] == country.title():
                    return float("lon"), float("lat")

    with open('cow.csv') as f:
        reader = DictReader(f)
        with open("index.html", "w") as wf:
            wf.write("<ul>\n")
            for d in reader:
                wf.write("  <li>\n")
                wf.write(f"   {d['name']} :{round(haversine(ISRAEL_LAT, ISRAEL_LON,float(d['lat']),float(d['lon'])),2)}\n")
                wf.write("  </li>\n")
            wf.write("</ul>")
find_distance("israel")
