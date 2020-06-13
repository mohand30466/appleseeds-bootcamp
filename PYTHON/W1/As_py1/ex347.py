# company_flat2.py
import json
from pprint import pprint


def get_birthdays_for_day(people, month, day):
    for data in people:
       print(data)



def get_birthdays_for_month(people, month):
    # ---- YOUR CODE HERE -----------------
    pass
    # -------------------------------------


with open("company1.json") as f:
    all_employees = json.load(f)

dec8 = get_birthdays_for_day(all_employees, 12, 8)
print("Birthdays for December 8th:")
pprint(dec8)
assert len(dec8) == 1
assert dec8[0]['name'] == "Michael Brooks"
print("OK1")

dec = get_birthdays_for_month(all_employees, 12)
print("Birthdays for December:")
pprint(dec)
assert len(dec) == 7
print("OK2")

print("Done!")