"""All prices live here. Dollars. These are STARTING PLACEHOLDERS: check ~5 local competitors, then edit."""

VEHICLES = {
    "car": "Car (sedan / coupe)",
    "small_suv": "Small SUV / crossover",
    "truck": "Truck",
    "large_suv": "Large SUV / van",
}

# Dirtiness: multiplier applied to the package price (not add-ons).
CONDITIONS = {
    "light": {"label": "Lightly dirty", "mult": 1.0, "desc": "Regular upkeep. Dust, light dirt, tidy interior."},
    "moderate": {"label": "Moderately dirty", "mult": 1.2, "desc": "Months of buildup, crumbs, light stains, some pet hair."},
    "heavy": {"label": "Very dirty", "mult": 1.4, "desc": "Heavy mud, deep stains, lots of pet hair or sand, neglected."},
}

# Package ids stay the same (express / full / premium); only the display names changed.
PACKAGES = {  # individuals
    "express": {
        "name": "Renewal", "tag": "Quick upkeep",
        "includes": ["Hand wash and dry", "Wheels and tires cleaned", "Interior vacuum", "Dash, doors and console wipe-down", "Windows inside and out"],
        "prices": {"car": 120, "small_suv": 135, "truck": 150, "large_suv": 175}, "time": "about 1.5 hrs",
    },
    "full": {
        "name": "Revival", "tag": "Most popular", "popular": True,
        "includes": ["Everything in Renewal", "Clay bar and wax or sealant", "Deep interior clean (carpets, seats, vents, crevices)", "Leather or vinyl conditioned", "Tire shine and trim dressing"],
        "prices": {"car": 250, "small_suv": 280, "truck": 300, "large_suv": 350}, "time": "about 3 to 4 hrs",
    },
    "premium": {
        "name": "Restoration", "tag": "Maximum protection",
        "includes": ["Everything in Revival", "Paint correction (one-step polish)", "Ceramic coating for long-lasting gloss", "Headlight clean-up", "Engine bay cleaned and dressed"],
        "prices": {"car": 550, "small_suv": 620, "truck": 660, "large_suv": 760}, "time": "1 day",
    },
}

ADDONS = {
    "headlight": {"name": "Headlight restoration", "price": 90},
    "engine": {"name": "Engine bay cleaning", "price": 75},
    "pethair": {"name": "Heavy pet hair removal", "price": 60},
}
PREMIUM_INCLUDES = {"headlight", "engine"}  # already part of Restoration, not sold again with it

DEALER_PACKAGES = {  # per vehicle, invoiced
    "lot": {"name": "Lot Ready", "tag": "Fast turnaround",
            "includes": ["Exterior wash and dry", "Wheels and tires", "Interior vacuum", "Windows", "Quick wipe-down"],
            "prices": {"car": 100, "small_suv": 110, "truck": 120, "large_suv": 135}},
    "front": {"name": "Front Line", "tag": "Best for retail", "popular": True,
              "includes": ["Everything in Lot Ready", "Deep interior clean", "Seats and carpets shampooed as needed", "Clay and wax", "Tire shine and trim dressing"],
              "prices": {"car": 140, "small_suv": 155, "truck": 165, "large_suv": 185}},
    "showcase": {"name": "Showcase", "tag": "Hero cars",
                 "includes": ["Everything in Front Line", "Light machine polish", "Headlight clean-up", "Engine bay detail", "Photo-ready finish"],
                 "prices": {"car": 210, "small_suv": 230, "truck": 245, "large_suv": 270}},
}

# Monthly plan for INDIVIDUALS only (Turo hosts get fleet pricing instead). 5% below the regular rate.
_PLAN_REGULAR = {"car": 119, "small_suv": 129, "truck": 139, "large_suv": 159}
PLAN_DISCOUNT_PCT = 5
PLAN_TRIAL_DAYS = 30  # first monthly charge happens this many days after the required Revival
MEMBERSHIP = {
    "name": "Monthly Maintenance Plan",
    "includes": ["2 maintenance details per month", "Exterior hand wash, wheels, windows", "Interior vacuum and wipe-down", "Priority scheduling", "Cancel any time"],
    "regular_prices": _PLAN_REGULAR,
    "prices": {k: int(round(v * (100 - PLAN_DISCOUNT_PCT) / 100.0)) for k, v in _PLAN_REGULAR.items()},
    "discount_pct": PLAN_DISCOUNT_PCT,
    "requires": "full",  # the Revival
    "trial_days": PLAN_TRIAL_DAYS,
}

FLEET = {
    "turo": {
        "renewal": {"name": "Renewal", "price": 90, "fleet": 80, "fleet_min": 5,
                    "note": "Between-trip interior reset and exterior wash, one flat price per car. Fleet rate for 5 or more cars."},
        "revival": {"name": "Revival", "note": "A deep reset for cars that need more than a quick turnaround. Priced by vehicle size, the same as our Revival package."},
    },
    "rideshare": {"name": "Rideshare interior reset", "price": 75,
                  "note": "Deep interior clean so your ratings stay high. Add the Monthly Maintenance Plan to keep it that way."},
}

CITIES = ["Torrance", "Redondo Beach", "Hermosa Beach", "Manhattan Beach", "El Segundo",
          "Hawthorne", "Lawndale", "Gardena", "Inglewood", "Lennox", "Carson",
          "Los Angeles", "Westchester", "Palos Verdes"]


def r5(x):
    return int(round(x / 5.0) * 5)


def package_price(pkg, vehicle, condition):
    return r5(PACKAGES[pkg]["prices"][vehicle] * CONDITIONS[condition]["mult"])


def quote(pkg, vehicle, condition, addons):
    lines = []
    p = package_price(pkg, vehicle, condition)
    lines.append((f"{PACKAGES[pkg]['name']} - {VEHICLES[vehicle]} ({CONDITIONS[condition]['label'].lower()})", p))
    for a in addons:
        if a in ADDONS and not (pkg == "premium" and a in PREMIUM_INCLUDES):
            lines.append((ADDONS[a]["name"], ADDONS[a]["price"]))
    return lines


def public_data():
    return {"vehicles": VEHICLES, "conditions": CONDITIONS, "packages": PACKAGES, "addons": ADDONS,
            "premium_includes": sorted(PREMIUM_INCLUDES), "membership": MEMBERSHIP}
