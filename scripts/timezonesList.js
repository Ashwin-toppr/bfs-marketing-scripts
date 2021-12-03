const TIMEZONE_DATA = {
  "pacific/niue": {
    zoneAbbr: "Niue Time",
    desc: "(GMT-11:00) Niue Time",
  },
  "pacific/pago_pago": {
    zoneAbbr: "Samoa Standard Time",
    shortName: "SST",
    desc: "(GMT-11:00) Samoa Standard Time",
  },
  "pacific/rarotonga": {
    zoneAbbr: "Cook Islands Standard Time",
    desc: "(GMT-10:00) Cook Islands Standard Time",
  },
  "pacific/honolulu": {
    zoneAbbr: "Hawaii-Aleutian Standard Time",
    shortName: "HST",
    desc: "(GMT-10:00) Hawaii-Aleutian Standard Time",
  },
  "america/adak": {
    zoneAbbr: "Hawaii-Aleutian Time",
    shortName: "HDT",
    desc: "(GMT-10:00) Hawaii-Aleutian Time",
  },
  "pacific/tahiti": {
    zoneAbbr: "Tahiti Time",
    desc: "(GMT-10:00) Tahiti Time",
  },
  "pacific/marquesas": {
    zoneAbbr: "Marquesas Time",
    desc: "(GMT-09:30) Marquesas Time",
  },
  "america/anchorage": {
    zoneAbbr: "Alaska Time - Anchorage",
    shortName: "AKDT",
    desc: "(GMT-09:00) Alaska Time - Anchorage",
  },
  "america/juneau": {
    zoneAbbr: "Alaska Time - Juneau",
    shortName: "AKDT",
    desc: "(GMT-09:00) Alaska Time - Juneau",
  },
  "america/metlakatla": {
    zoneAbbr: "Alaska Time - Metlakatla",
    shortName: "AKDT",
    desc: "(GMT-09:00) Alaska Time - Metlakatla",
  },
  "america/nome": {
    zoneAbbr: "Alaska Time - Nome",
    shortName: "AKDT",
    desc: "(GMT-09:00) Alaska Time - Nome",
  },
  "america/sitka": {
    zoneAbbr: "Alaska Time - Sitka",
    shortName: "AKDT",
    desc: "(GMT-09:00) Alaska Time - Sitka",
  },
  "america/yakutat": {
    zoneAbbr: "Alaska Time - Yakutat",
    shortName: "AKDT",
    desc: "(GMT-09:00) Alaska Time - Yakutat",
  },
  "pacific/gambier": {
    zoneAbbr: "Gambier Time",
    desc: "(GMT-09:00) Gambier Time",
  },
  "america/dawson": {
    zoneAbbr: "Pacific Time - Dawson",
    shortName: "MST",
    desc: "(GMT-08:00) Pacific Time - Dawson",
  },
  "america/los_angeles": {
    zoneAbbr: "Pacific Time - Los Angeles",
    shortName: "PDT",
    desc: "(GMT-08:00) Pacific Time - Los Angeles",
  },
  "america/tijuana": {
    zoneAbbr: "Pacific Time - Tijuana",
    shortName: "PDT",
    desc: "(GMT-08:00) Pacific Time - Tijuana",
  },
  "america/vancouver": {
    zoneAbbr: "Pacific Time - Vancouver",
    shortName: "PDT",
    desc: "(GMT-08:00) Pacific Time - Vancouver",
  },
  "america/whitehorse": {
    zoneAbbr: "Pacific Time - Whitehorse",
    shortName: "MST",
    desc: "(GMT-08:00) Pacific Time - Whitehorse",
  },
  "pacific/pitcairn": {
    zoneAbbr: "Pitcairn Time",
    desc: "(GMT-08:00) Pitcairn Time",
  },
  "america/hermosillo": {
    zoneAbbr: "Mexican Pacific Standard Time",
    shortName: "MST",
    desc: "(GMT-07:00) Mexican Pacific Standard Time",
  },
  "america/chihuahua": {
    zoneAbbr: "Mexican Pacific Time - Chihuahua",
    shortName: "MST",
    desc: "(GMT-07:00) Mexican Pacific Time - Chihuahua",
  },
  "america/mazatlan": {
    zoneAbbr: "Mexican Pacific Time - Mazatlan",
    shortName: "MST",
    desc: "(GMT-07:00) Mexican Pacific Time - Mazatlan",
  },
  "america/creston": {
    zoneAbbr: "Mountain Standard Time - Creston",
    shortName: "MST",
    desc: "(GMT-07:00) Mountain Standard Time - Creston",
  },
  "america/dawson_creek": {
    zoneAbbr: "Mountain Standard Time - Dawson Creek",
    shortName: "MST",
    desc: "(GMT-07:00) Mountain Standard Time - Dawson Creek",
  },
  "america/fort_nelson": {
    zoneAbbr: "Mountain Standard Time - Fort Nelson",
    shortName: "MST",
    desc: "(GMT-07:00) Mountain Standard Time - Fort Nelson",
  },
  "america/phoenix": {
    zoneAbbr: "Mountain Standard Time - Phoenix",
    shortName: "MST",
    desc: "(GMT-07:00) Mountain Standard Time - Phoenix",
  },
  "america/boise": {
    zoneAbbr: "Mountain Time - Boise",
    shortName: "MDT",
    desc: "(GMT-07:00) Mountain Time - Boise",
  },
  "america/cambridge_bay": {
    zoneAbbr: "Mountain Time - Cambridge Bay",
    shortName: "MDT",
    desc: "(GMT-07:00) Mountain Time - Cambridge Bay",
  },
  "america/denver": {
    zoneAbbr: "Mountain Time - Denver",
    shortName: "MDT",
    desc: "(GMT-07:00) Mountain Time - Denver",
  },
  "america/edmonton": {
    zoneAbbr: "Mountain Time - Edmonton",
    shortName: "MDT",
    desc: "(GMT-07:00) Mountain Time - Edmonton",
  },
  "america/inuvik": {
    zoneAbbr: "Mountain Time - Inuvik",
    shortName: "MDT",
    desc: "(GMT-07:00) Mountain Time - Inuvik",
  },
  "america/ojinaga": {
    zoneAbbr: "Mountain Time - Ojinaga",
    shortName: "MDT",
    desc: "(GMT-07:00) Mountain Time - Ojinaga",
  },
  "america/yellowknife": {
    zoneAbbr: "Mountain Time - Yellowknife",
    shortName: "MDT",
    desc: "(GMT-07:00) Mountain Time - Yellowknife",
  },
  "america/belize": {
    zoneAbbr: "Central Standard Time - Belize",
    shortName: "CST",
    desc: "(GMT-06:00) Central Standard Time - Belize",
  },
  "america/costa_rica": {
    zoneAbbr: "Central Standard Time - Costa Rica",
    shortName: "CST",
    desc: "(GMT-06:00) Central Standard Time - Costa Rica",
  },
  "america/el_salvador": {
    zoneAbbr: "Central Standard Time - El Salvador",
    shortName: "CST",
    desc: "(GMT-06:00) Central Standard Time - El Salvador",
  },
  "america/guatemala": {
    zoneAbbr: "Central Standard Time - Guatemala",
    shortName: "CST",
    desc: "(GMT-06:00) Central Standard Time - Guatemala",
  },
  "america/managua": {
    zoneAbbr: "Central Standard Time - Managua",
    shortName: "CST",
    desc: "(GMT-06:00) Central Standard Time - Managua",
  },
  "america/regina": {
    zoneAbbr: "Central Standard Time - Regina",
    shortName: "CST",
    desc: "(GMT-06:00) Central Standard Time - Regina",
  },
  "america/swift_current": {
    zoneAbbr: "Central Standard Time - Swift Current",
    shortName: "CST",
    desc: "(GMT-06:00) Central Standard Time - Swift Current",
  },
  "america/tegucigalpa": {
    zoneAbbr: "Central Standard Time - Tegucigalpa",
    shortName: "CST",
    desc: "(GMT-06:00) Central Standard Time - Tegucigalpa",
  },
  "america/bahia_banderas": {
    zoneAbbr: "Central Time - Bahia Banderas",
    shortName: "CST",
    desc: "(GMT-06:00) Central Time - Bahia Banderas",
  },
  "america/north_dakota/beulah": {
    zoneAbbr: "Central Time - Beulah, North Dakota",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Beulah, North Dakota",
  },
  "america/north_dakota/center": {
    zoneAbbr: "Central Time - Center, North Dakota",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Center, North Dakota",
  },
  "america/chicago": {
    zoneAbbr: "Central Time - Chicago",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Chicago",
  },
  "america/indiana/knox": {
    zoneAbbr: "Central Time - Knox, Indiana",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Knox, Indiana",
  },
  "america/matamoros": {
    zoneAbbr: "Central Time - Matamoros",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Matamoros",
  },
  "america/menominee": {
    zoneAbbr: "Central Time - Menominee",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Menominee",
  },
  "america/merida": {
    zoneAbbr: "Central Time - Merida",
    shortName: "CST",
    desc: "(GMT-06:00) Central Time - Merida",
  },
  "america/mexico_city": {
    zoneAbbr: "Central Time - Mexico City",
    shortName: "CST",
    desc: "(GMT-06:00) Central Time - Mexico City",
  },
  "america/monterrey": {
    zoneAbbr: "Central Time - Monterrey",
    shortName: "CST",
    desc: "(GMT-06:00) Central Time - Monterrey",
  },
  "america/north_dakota/new_salem": {
    zoneAbbr: "Central Time - New Salem, North Dakota",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - New Salem, North Dakota",
  },
  "america/rainy_river": {
    zoneAbbr: "Central Time - Rainy River",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Rainy River",
  },
  "america/rankin_inlet": {
    zoneAbbr: "Central Time - Rankin Inlet",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Rankin Inlet",
  },
  "america/resolute": {
    zoneAbbr: "Central Time - Resolute",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Resolute",
  },
  "america/indiana/tell_city": {
    zoneAbbr: "Central Time - Tell City, Indiana",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Tell City, Indiana",
  },
  "america/winnipeg": {
    zoneAbbr: "Central Time - Winnipeg",
    shortName: "CDT",
    desc: "(GMT-06:00) Central Time - Winnipeg",
  },
  "pacific/galapagos": {
    zoneAbbr: "Galapagos Time",
    desc: "(GMT-06:00) Galapagos Time",
  },
  "america/eirunepe": {
    zoneAbbr: "Acre Standard Time - Eirunepe",
    desc: "(GMT-05:00) Acre Standard Time - Eirunepe",
  },
  "america/rio_branco": {
    zoneAbbr: "Acre Standard Time - Rio Branco",
    desc: "(GMT-05:00) Acre Standard Time - Rio Branco",
  },
  "america/bogota": {
    zoneAbbr: "Colombia Standard Time",
    desc: "(GMT-05:00) Colombia Standard Time",
  },
  "america/havana": {
    zoneAbbr: "Cuba Time",
    shortName: "CDT",
    desc: "(GMT-05:00) Cuba Time",
  },
  "pacific/easter": {
    zoneAbbr: "Easter Island Time",
    desc: "(GMT-05:00) Easter Island Time",
  },
  "america/atikokan": {
    zoneAbbr: "Eastern Standard Time - Atikokan",
    shortName: "EST",
    desc: "(GMT-05:00) Eastern Standard Time - Atikokan",
  },
  "america/cancun": {
    zoneAbbr: "Eastern Standard Time - Cancun",
    shortName: "EST",
    desc: "(GMT-05:00) Eastern Standard Time - Cancun",
  },
  "america/jamaica": {
    zoneAbbr: "Eastern Standard Time - Jamaica",
    shortName: "EST",
    desc: "(GMT-05:00) Eastern Standard Time - Jamaica",
  },
  "america/panama": {
    zoneAbbr: "Eastern Standard Time - Panama",
    shortName: "EST",
    desc: "(GMT-05:00) Eastern Standard Time - Panama",
  },
  "america/detroit": {
    zoneAbbr: "Eastern Time - Detroit",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Detroit",
  },
  "america/grand_turk": {
    zoneAbbr: "Eastern Time - Grand Turk",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Grand Turk",
  },
  "america/indiana/indianapolis": {
    zoneAbbr: "Eastern Time - Indianapolis",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Indianapolis",
  },
  "america/iqaluit": {
    zoneAbbr: "Eastern Time - Iqaluit",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Iqaluit",
  },
  "america/kentucky/louisville": {
    zoneAbbr: "Eastern Time - Louisville",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Louisville",
  },
  "america/indiana/marengo": {
    zoneAbbr: "Eastern Time - Marengo, Indiana",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Marengo, Indiana",
  },
  "america/kentucky/monticello": {
    zoneAbbr: "Eastern Time - Monticello, Kentucky",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Monticello, Kentucky",
  },
  "america/nassau": {
    zoneAbbr: "Eastern Time - Nassau",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Nassau",
  },
  "america/new_york": {
    zoneAbbr: "Eastern Time - New York",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - New York",
  },
  "america/nipigon": {
    zoneAbbr: "Eastern Time - Nipigon",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Nipigon",
  },
  "america/pangnirtung": {
    zoneAbbr: "Eastern Time - Pangnirtung",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Pangnirtung",
  },
  "america/indiana/petersburg": {
    zoneAbbr: "Eastern Time - Petersburg, Indiana",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Petersburg, Indiana",
  },
  "america/port-au-prince": {
    zoneAbbr: "Eastern Time - Port-au-Prince",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Port-au-Prince",
  },
  "america/thunder_bay": {
    zoneAbbr: "Eastern Time - Thunder Bay",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Thunder Bay",
  },
  "america/toronto": {
    zoneAbbr: "Eastern Time - Toronto",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Toronto",
  },
  "america/indiana/vevay": {
    zoneAbbr: "Eastern Time - Vevay, Indiana",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Vevay, Indiana",
  },
  "america/indiana/vincennes": {
    zoneAbbr: "Eastern Time - Vincennes, Indiana",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Vincennes, Indiana",
  },
  "america/indiana/winamac": {
    zoneAbbr: "Eastern Time - Winamac, Indiana",
    shortName: "EDT",
    desc: "(GMT-05:00) Eastern Time - Winamac, Indiana",
  },
  "america/guayaquil": {
    zoneAbbr: "Ecuador Time",
    desc: "(GMT-05:00) Ecuador Time",
  },
  "america/lima": {
    zoneAbbr: "Peru Standard Time",
    desc: "(GMT-05:00) Peru Standard Time",
  },
  "america/boa_vista": {
    zoneAbbr: "Amazon Standard Time - Boa Vista",
    desc: "(GMT-04:00) Amazon Standard Time - Boa Vista",
  },
  "america/campo_grande": {
    zoneAbbr: "Amazon Standard Time - Campo Grande",
    desc: "(GMT-04:00) Amazon Standard Time - Campo Grande",
  },
  "america/cuiaba": {
    zoneAbbr: "Amazon Standard Time - Cuiaba",
    desc: "(GMT-04:00) Amazon Standard Time - Cuiaba",
  },
  "america/manaus": {
    zoneAbbr: "Amazon Standard Time - Manaus",
    desc: "(GMT-04:00) Amazon Standard Time - Manaus",
  },
  "america/porto_velho": {
    zoneAbbr: "Amazon Standard Time - Porto Velho",
    desc: "(GMT-04:00) Amazon Standard Time - Porto Velho",
  },
  "america/barbados": {
    zoneAbbr: "Atlantic Standard Time - Barbados",
    shortName: "AST",
    desc: "(GMT-04:00) Atlantic Standard Time - Barbados",
  },
  "america/blanc-sablon": {
    zoneAbbr: "Atlantic Standard Time - Blanc-Sablon",
    shortName: "AST",
    desc: "(GMT-04:00) Atlantic Standard Time - Blanc-Sablon",
  },
  "america/curacao": {
    zoneAbbr: "Atlantic Standard Time - Curaçao",
    shortName: "AST",
    desc: "(GMT-04:00) Atlantic Standard Time - Curaçao",
  },
  "america/martinique": {
    zoneAbbr: "Atlantic Standard Time - Martinique",
    shortName: "AST",
    desc: "(GMT-04:00) Atlantic Standard Time - Martinique",
  },
  "america/port_of_spain": {
    zoneAbbr: "Atlantic Standard Time - Port of Spain",
    shortName: "AST",
    desc: "(GMT-04:00) Atlantic Standard Time - Port of Spain",
  },
  "america/puerto_rico": {
    zoneAbbr: "Atlantic Standard Time - Puerto Rico",
    shortName: "AST",
    desc: "(GMT-04:00) Atlantic Standard Time - Puerto Rico",
  },
  "america/santo_domingo": {
    zoneAbbr: "Atlantic Standard Time - Santo Domingo",
    shortName: "AST",
    desc: "(GMT-04:00) Atlantic Standard Time - Santo Domingo",
  },
  "atlantic/bermuda": {
    zoneAbbr: "Atlantic Time - Bermuda",
    shortName: "ADT",
    desc: "(GMT-04:00) Atlantic Time - Bermuda",
  },
  "america/glace_bay": {
    zoneAbbr: "Atlantic Time - Glace Bay",
    shortName: "ADT",
    desc: "(GMT-04:00) Atlantic Time - Glace Bay",
  },
  "america/goose_bay": {
    zoneAbbr: "Atlantic Time - Goose Bay",
    shortName: "ADT",
    desc: "(GMT-04:00) Atlantic Time - Goose Bay",
  },
  "america/halifax": {
    zoneAbbr: "Atlantic Time - Halifax",
    shortName: "ADT",
    desc: "(GMT-04:00) Atlantic Time - Halifax",
  },
  "america/moncton": {
    zoneAbbr: "Atlantic Time - Moncton",
    shortName: "ADT",
    desc: "(GMT-04:00) Atlantic Time - Moncton",
  },
  "america/thule": {
    zoneAbbr: "Atlantic Time - Thule",
    shortName: "ADT",
    desc: "(GMT-04:00) Atlantic Time - Thule",
  },
  "america/la_paz": {
    zoneAbbr: "Bolivia Time",
    desc: "(GMT-04:00) Bolivia Time",
  },
  "america/guyana": {
    zoneAbbr: "Guyana Time",
    desc: "(GMT-04:00) Guyana Time",
  },
  "america/caracas": {
    zoneAbbr: "Venezuela Time",
    desc: "(GMT-04:00) Venezuela Time",
  },
  "america/st_johns": {
    zoneAbbr: "Newfoundland Time",
    shortName: "NDT",
    desc: "(GMT-03:30) Newfoundland Time",
  },
  "america/argentina/buenos_aires": {
    zoneAbbr: "Argentina Standard Time - Buenos Aires",
    desc: "(GMT-03:00) Argentina Standard Time - Buenos Aires",
  },
  "america/argentina/catamarca": {
    zoneAbbr: "Argentina Standard Time - Catamarca",
    desc: "(GMT-03:00) Argentina Standard Time - Catamarca",
  },
  "america/argentina/cordoba": {
    zoneAbbr: "Argentina Standard Time - Cordoba",
    desc: "(GMT-03:00) Argentina Standard Time - Cordoba",
  },
  "america/argentina/jujuy": {
    zoneAbbr: "Argentina Standard Time - Jujuy",
    desc: "(GMT-03:00) Argentina Standard Time - Jujuy",
  },
  "america/argentina/la_rioja": {
    zoneAbbr: "Argentina Standard Time - La Rioja",
    desc: "(GMT-03:00) Argentina Standard Time - La Rioja",
  },
  "america/argentina/mendoza": {
    zoneAbbr: "Argentina Standard Time - Mendoza",
    desc: "(GMT-03:00) Argentina Standard Time - Mendoza",
  },
  "america/argentina/rio_gallegos": {
    zoneAbbr: "Argentina Standard Time - Rio Gallegos",
    desc: "(GMT-03:00) Argentina Standard Time - Rio Gallegos",
  },
  "america/argentina/salta": {
    zoneAbbr: "Argentina Standard Time - Salta",
    desc: "(GMT-03:00) Argentina Standard Time - Salta",
  },
  "america/argentina/san_juan": {
    zoneAbbr: "Argentina Standard Time - San Juan",
    desc: "(GMT-03:00) Argentina Standard Time - San Juan",
  },
  "america/argentina/tucuman": {
    zoneAbbr: "Argentina Standard Time - Tucuman",
    desc: "(GMT-03:00) Argentina Standard Time - Tucuman",
  },
  "america/argentina/ushuaia": {
    zoneAbbr: "Argentina Standard Time - Ushuaia",
    desc: "(GMT-03:00) Argentina Standard Time - Ushuaia",
  },
  "america/araguaina": {
    zoneAbbr: "Brasilia Standard Time - Araguaina",
    desc: "(GMT-03:00) Brasilia Standard Time - Araguaina",
  },
  "america/bahia": {
    zoneAbbr: "Brasilia Standard Time - Bahia",
    desc: "(GMT-03:00) Brasilia Standard Time - Bahia",
  },
  "america/belem": {
    zoneAbbr: "Brasilia Standard Time - Belem",
    desc: "(GMT-03:00) Brasilia Standard Time - Belem",
  },
  "america/fortaleza": {
    zoneAbbr: "Brasilia Standard Time - Fortaleza",
    desc: "(GMT-03:00) Brasilia Standard Time - Fortaleza",
  },
  "america/maceio": {
    zoneAbbr: "Brasilia Standard Time - Maceio",
    desc: "(GMT-03:00) Brasilia Standard Time - Maceio",
  },
  "america/recife": {
    zoneAbbr: "Brasilia Standard Time - Recife",
    desc: "(GMT-03:00) Brasilia Standard Time - Recife",
  },
  "america/santarem": {
    zoneAbbr: "Brasilia Standard Time - Santarem",
    desc: "(GMT-03:00) Brasilia Standard Time - Santarem",
  },
  "america/sao_paulo": {
    zoneAbbr: "Brasilia Standard Time - Sao Paulo",
    desc: "(GMT-03:00) Brasilia Standard Time - Sao Paulo",
  },
  "america/santiago": {
    zoneAbbr: "Chile Time",
    desc: "(GMT-03:00) Chile Time",
  },
  "atlantic/stanley": {
    zoneAbbr: "Falkland Islands Standard Time",
    desc: "(GMT-03:00) Falkland Islands Standard Time",
  },
  "america/cayenne": {
    zoneAbbr: "French Guiana Time",
    desc: "(GMT-03:00) French Guiana Time",
  },
  "antarctica/palmer": {
    zoneAbbr: "Palmer Time",
    desc: "(GMT-03:00) Palmer Time",
  },
  "america/asuncion": {
    zoneAbbr: "Paraguay Time",
    desc: "(GMT-03:00) Paraguay Time",
  },
  "america/punta_arenas": {
    zoneAbbr: "Punta Arenas Time",
    desc: "(GMT-03:00) Punta Arenas Time",
  },
  "antarctica/rothera": {
    zoneAbbr: "Rothera Time",
    desc: "(GMT-03:00) Rothera Time",
  },
  "america/miquelon": {
    zoneAbbr: "St. Pierre & Miquelon Time",
    desc: "(GMT-03:00) St. Pierre & Miquelon Time",
  },
  "america/paramaribo": {
    zoneAbbr: "Suriname Time",
    desc: "(GMT-03:00) Suriname Time",
  },
  "america/montevideo": {
    zoneAbbr: "Uruguay Standard Time",
    desc: "(GMT-03:00) Uruguay Standard Time",
  },
  "america/godthab": {
    zoneAbbr: "West Greenland Time",
    desc: "(GMT-03:00) West Greenland Time",
  },
  "america/argentina/san_luis": {
    zoneAbbr: "Western Argentina Standard Time",
    desc: "(GMT-03:00) Western Argentina Standard Time",
  },
  "america/noronha": {
    zoneAbbr: "Fernando de Noronha Standard Time",
    desc: "(GMT-02:00) Fernando de Noronha Standard Time",
  },
  "atlantic/south_georgia": {
    zoneAbbr: "South Georgia Time",
    desc: "(GMT-02:00) South Georgia Time",
  },
  "atlantic/azores": {
    zoneAbbr: "Azores Time",
    desc: "(GMT-01:00) Azores Time",
  },
  "atlantic/cape_verde": {
    zoneAbbr: "Cape Verde Standard Time",
    desc: "(GMT-01:00) Cape Verde Standard Time",
  },
  "america/scoresbysund": {
    zoneAbbr: "East Greenland Time",
    desc: "(GMT-01:00) East Greenland Time",
  },
  utc: {
    zoneAbbr: "Coordinated Universal Time",
    shortName: "UTC",
    desc: "(GMT+00:00) Coordinated Universal Time",
  },
  "etc/gmt": {
    zoneAbbr: "Greenwich Mean Time",
    shortName: "GMT",
    desc: "(GMT+00:00) Greenwich Mean Time",
  },
  "africa/abidjan": {
    zoneAbbr: "Greenwich Mean Time - Abidjan",
    shortName: "GMT",
    desc: "(GMT+00:00) Greenwich Mean Time - Abidjan",
  },
  "africa/accra": {
    zoneAbbr: "Greenwich Mean Time - Accra",
    shortName: "GMT",
    desc: "(GMT+00:00) Greenwich Mean Time - Accra",
  },
  "africa/bissau": {
    zoneAbbr: "Greenwich Mean Time - Bissau",
    shortName: "GMT",
    desc: "(GMT+00:00) Greenwich Mean Time - Bissau",
  },
  "america/danmarkshavn": {
    zoneAbbr: "Greenwich Mean Time - Danmarkshavn",
    shortName: "GMT",
    desc: "(GMT+00:00) Greenwich Mean Time - Danmarkshavn",
  },
  "africa/monrovia": {
    zoneAbbr: "Greenwich Mean Time - Monrovia",
    shortName: "GMT",
    desc: "(GMT+00:00) Greenwich Mean Time - Monrovia",
  },
  "atlantic/reykjavik": {
    zoneAbbr: "Greenwich Mean Time - Reykjavik",
    shortName: "GMT",
    desc: "(GMT+00:00) Greenwich Mean Time - Reykjavik",
  },
  "africa/sao_tome": {
    zoneAbbr: "Greenwich Mean Time - São Tomé",
    shortName: "GMT",
    desc: "(GMT+00:00) Greenwich Mean Time - São Tomé",
  },
  "europe/dublin": {
    zoneAbbr: "Ireland Time",
    shortName: "GMT",
    desc: "(GMT+00:00) Ireland Time",
  },
  "antarctica/troll": {
    zoneAbbr: "Troll Time",
    desc: "(GMT+00:00) Troll Time",
  },
  "europe/london": {
    zoneAbbr: "United Kingdom Time",
    shortName: "GMT",
    desc: "(GMT+00:00) United Kingdom Time",
  },
  "atlantic/canary": {
    zoneAbbr: "Western European Time - Canary",
    shortName: "WET",
    desc: "(GMT+00:00) Western European Time - Canary",
  },
  "atlantic/faroe": {
    zoneAbbr: "Western European Time - Faroe",
    shortName: "WET",
    desc: "(GMT+00:00) Western European Time - Faroe",
  },
  "europe/lisbon": {
    zoneAbbr: "Western European Time - Lisbon",
    shortName: "WET",
    desc: "(GMT+00:00) Western European Time - Lisbon",
  },
  "atlantic/madeira": {
    zoneAbbr: "Western European Time - Madeira",
    shortName: "WET",
    desc: "(GMT+00:00) Western European Time - Madeira",
  },
  "africa/algiers": {
    zoneAbbr: "Central European Standard Time - Algiers",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Standard Time - Algiers",
  },
  "africa/tunis": {
    zoneAbbr: "Central European Standard Time - Tunis",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Standard Time - Tunis",
  },
  "europe/amsterdam": {
    zoneAbbr: "Central European Time - Amsterdam",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Amsterdam",
  },
  "europe/andorra": {
    zoneAbbr: "Central European Time - Andorra",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Andorra",
  },
  "europe/belgrade": {
    zoneAbbr: "Central European Time - Belgrade",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Belgrade",
  },
  "europe/berlin": {
    zoneAbbr: "Central European Time - Berlin",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Berlin",
  },
  "europe/brussels": {
    zoneAbbr: "Central European Time - Brussels",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Brussels",
  },
  "europe/budapest": {
    zoneAbbr: "Central European Time - Budapest",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Budapest",
  },
  "africa/ceuta": {
    zoneAbbr: "Central European Time - Ceuta",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Ceuta",
  },
  "europe/copenhagen": {
    zoneAbbr: "Central European Time - Copenhagen",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Copenhagen",
  },
  "europe/gibraltar": {
    zoneAbbr: "Central European Time - Gibraltar",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Gibraltar",
  },
  "europe/luxembourg": {
    zoneAbbr: "Central European Time - Luxembourg",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Luxembourg",
  },
  "europe/madrid": {
    zoneAbbr: "Central European Time - Madrid",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Madrid",
  },
  "europe/malta": {
    zoneAbbr: "Central European Time - Malta",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Malta",
  },
  "europe/monaco": {
    zoneAbbr: "Central European Time - Monaco",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Monaco",
  },
  "europe/oslo": {
    zoneAbbr: "Central European Time - Oslo",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Oslo",
  },
  "europe/paris": {
    zoneAbbr: "Central European Time - Paris",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Paris",
  },
  "europe/prague": {
    zoneAbbr: "Central European Time - Prague",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Prague",
  },
  "europe/rome": {
    zoneAbbr: "Central European Time - Rome",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Rome",
  },
  "europe/stockholm": {
    zoneAbbr: "Central European Time - Stockholm",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Stockholm",
  },
  "europe/tirane": {
    zoneAbbr: "Central European Time - Tirane",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Tirane",
  },
  "europe/vienna": {
    zoneAbbr: "Central European Time - Vienna",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Vienna",
  },
  "europe/warsaw": {
    zoneAbbr: "Central European Time - Warsaw",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Warsaw",
  },
  "europe/zurich": {
    zoneAbbr: "Central European Time - Zurich",
    shortName: "CET",
    desc: "(GMT+01:00) Central European Time - Zurich",
  },
  "africa/casablanca": {
    zoneAbbr: "Morocco Time",
    desc: "(GMT+01:00) Morocco Time",
  },
  "africa/lagos": {
    zoneAbbr: "West Africa Standard Time - Lagos",
    shortName: "WAT",
    desc: "(GMT+01:00) West Africa Standard Time - Lagos",
  },
  "africa/ndjamena": {
    zoneAbbr: "West Africa Standard Time - Ndjamena",
    shortName: "WAT",
    desc: "(GMT+01:00) West Africa Standard Time - Ndjamena",
  },
  "africa/el_aaiun": {
    zoneAbbr: "Western Sahara Time",
    desc: "(GMT+01:00) Western Sahara Time",
  },
  "africa/khartoum": {
    zoneAbbr: "Central Africa Time - Khartoum",
    shortName: "CAT",
    desc: "(GMT+02:00) Central Africa Time - Khartoum",
  },
  "africa/maputo": {
    zoneAbbr: "Central Africa Time - Maputo",
    shortName: "CAT",
    desc: "(GMT+02:00) Central Africa Time - Maputo",
  },
  "africa/windhoek": {
    zoneAbbr: "Central Africa Time - Windhoek",
    shortName: "CAT",
    desc: "(GMT+02:00) Central Africa Time - Windhoek",
  },
  "africa/cairo": {
    zoneAbbr: "Eastern European Standard Time - Cairo",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Standard Time - Cairo",
  },
  "africa/harare": {
    zoneAbbr: "Eastern European Standard Time - Harare",
    shortName: "CAT",
    desc: "(GMT+02:00) Eastern European Standard Time - Harare",
  },
  "europe/kaliningrad": {
    zoneAbbr: "Eastern European Standard Time - Kaliningrad",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Standard Time - Kaliningrad",
  },
  "africa/tripoli": {
    zoneAbbr: "Eastern European Standard Time - Tripoli",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Standard Time - Tripoli",
  },
  "asia/amman": {
    zoneAbbr: "Eastern European Time - Amman",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Amman",
  },
  "europe/athens": {
    zoneAbbr: "Eastern European Time - Athens",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Athens",
  },
  "asia/beirut": {
    zoneAbbr: "Eastern European Time - Beirut",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Beirut",
  },
  "europe/bucharest": {
    zoneAbbr: "Eastern European Time - Bucharest",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Bucharest",
  },
  "europe/chisinau": {
    zoneAbbr: "Eastern European Time - Chisinau",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Chisinau",
  },
  "asia/damascus": {
    zoneAbbr: "Eastern European Time - Damascus",
    shortName: "EEST",
    desc: "(GMT+02:00) Eastern European Time - Damascus",
  },
  "asia/gaza": {
    zoneAbbr: "Eastern European Time - Gaza",
    shortName: "EEST",
    desc: "(GMT+02:00) Eastern European Time - Gaza",
  },
  "asia/hebron": {
    zoneAbbr: "Eastern European Time - Hebron",
    shortName: "EEST",
    desc: "(GMT+02:00) Eastern European Time - Hebron",
  },
  "europe/helsinki": {
    zoneAbbr: "Eastern European Time - Helsinki",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Helsinki",
  },
  "europe/kiev": {
    zoneAbbr: "Eastern European Time - Kiev",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Kiev",
  },
  "asia/nicosia": {
    zoneAbbr: "Eastern European Time - Nicosia",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Nicosia",
  },
  "europe/riga": {
    zoneAbbr: "Eastern European Time - Riga",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Riga",
  },
  "europe/sofia": {
    zoneAbbr: "Eastern European Time - Sofia",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Sofia",
  },
  "europe/tallinn": {
    zoneAbbr: "Eastern European Time - Tallinn",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Tallinn",
  },
  "europe/uzhgorod": {
    zoneAbbr: "Eastern European Time - Uzhhorod",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Uzhhorod",
  },
  "europe/vilnius": {
    zoneAbbr: "Eastern European Time - Vilnius",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Vilnius",
  },
  "europe/zaporozhye": {
    zoneAbbr: "Eastern European Time - Zaporozhye",
    shortName: "EET",
    desc: "(GMT+02:00) Eastern European Time - Zaporozhye",
  },
  "asia/famagusta": {
    zoneAbbr: "Famagusta Time",
    shortName: "EET",
    desc: "(GMT+02:00) Famagusta Time",
  },
  "asia/jerusalem": {
    zoneAbbr: "Israel Time",
    shortName: "IST",
    desc: "(GMT+02:00) Israel Time",
  },
  "africa/johannesburg": {
    zoneAbbr: "South Africa Standard Time",
    hortName: "SAST",
    desc: "(GMT+02:00) South Africa Standard Time",
  },
  "asia/baghdad": {
    zoneAbbr: "Arabian Standard Time - Baghdad",
    desc: "(GMT+03:00) Arabian Standard Time - Baghdad",
  },
  "asia/qatar": {
    zoneAbbr: "Arabian Standard Time - Qatar",
    desc: "(GMT+03:00) Arabian Standard Time - Qatar",
  },
  "asia/riyadh": {
    zoneAbbr: "Arabian Standard Time - Riyadh",
    desc: "(GMT+03:00) Arabian Standard Time - Riyadh",
  },
  "africa/juba": {
    zoneAbbr: "East Africa Time - Juba",
    shortName: "EAT",
    desc: "(GMT+03:00) East Africa Time - Juba",
  },
  "africa/nairobi": {
    zoneAbbr: "East Africa Time - Nairobi",
    shortName: "EAT",
    desc: "(GMT+03:00) East Africa Time - Nairobi",
  },
  "europe/kirov": {
    zoneAbbr: "Kirov Time",
    desc: "(GMT+03:00) Kirov Time",
  },
  "europe/minsk": {
    zoneAbbr: "Moscow Standard Time - Minsk",
    desc: "(GMT+03:00) Moscow Standard Time - Minsk",
  },
  "europe/moscow": {
    zoneAbbr: "Moscow Standard Time - Moscow",
    shortName: "MSK",
    desc: "(GMT+03:00) Moscow Standard Time - Moscow",
  },
  "europe/simferopol": {
    zoneAbbr: "Moscow Standard Time - Simferopol",
    shortName: "MSK",
    desc: "(GMT+03:00) Moscow Standard Time - Simferopol",
  },
  "antarctica/syowa": {
    zoneAbbr: "Syowa Time",
    desc: "(GMT+03:00) Syowa Time",
  },
  "europe/istanbul": {
    zoneAbbr: "Turkey Time",
    desc: "(GMT+03:00) Turkey Time",
  },
  "asia/tehran": {
    zoneAbbr: "Iran Time",
    desc: "(GMT+03:30) Iran Time",
  },
  "asia/yerevan": {
    zoneAbbr: "Armenia Standard Time",
    desc: "(GMT+04:00) Armenia Standard Time",
  },
  "europe/astrakhan": {
    zoneAbbr: "Astrakhan Time",
    desc: "(GMT+04:00) Astrakhan Time",
  },
  "asia/baku": {
    zoneAbbr: "Azerbaijan Standard Time",
    desc: "(GMT+04:00) Azerbaijan Standard Time",
  },
  "asia/tbilisi": {
    zoneAbbr: "Georgia Standard Time",
    desc: "(GMT+04:00) Georgia Standard Time",
  },
  "asia/dubai": {
    zoneAbbr: "Gulf Standard Time",
    desc: "(GMT+04:00) Gulf Standard Time",
  },
  "indian/mauritius": {
    zoneAbbr: "Mauritius Standard Time",
    desc: "(GMT+04:00) Mauritius Standard Time",
  },
  "indian/reunion": {
    zoneAbbr: "Réunion Time",
    desc: "(GMT+04:00) Réunion Time",
  },
  "europe/samara": {
    zoneAbbr: "Samara Standard Time",
    desc: "(GMT+04:00) Samara Standard Time",
  },
  "europe/saratov": {
    zoneAbbr: "Saratov Time",
    desc: "(GMT+04:00) Saratov Time",
  },
  "indian/mahe": {
    zoneAbbr: "Seychelles Time",
    desc: "(GMT+04:00) Seychelles Time",
  },
  "europe/ulyanovsk": {
    zoneAbbr: "Ulyanovsk Time",
    desc: "(GMT+04:00) Ulyanovsk Time",
  },
  "europe/volgograd": {
    zoneAbbr: "Volgograd Standard Time",
    desc: "(GMT+04:00) Volgograd Standard Time",
  },
  "asia/kabul": {
    zoneAbbr: "Afghanistan Time",
    desc: "(GMT+04:30) Afghanistan Time",
  },
  "indian/kerguelen": {
    zoneAbbr: "French Southern & Antarctic Time",
    desc: "(GMT+05:00) French Southern & Antarctic Time",
  },
  "indian/maldives": {
    zoneAbbr: "Maldives Time",
    desc: "(GMT+05:00) Maldives Time",
  },
  "antarctica/mawson": {
    zoneAbbr: "Mawson Time",
    desc: "(GMT+05:00) Mawson Time",
  },
  "asia/karachi": {
    zoneAbbr: "Pakistan Standard Time",
    shortName: "PKT",
    desc: "(GMT+05:00) Pakistan Standard Time",
  },
  "asia/dushanbe": {
    zoneAbbr: "Tajikistan Time",
    desc: "(GMT+05:00) Tajikistan Time",
  },
  "asia/ashgabat": {
    zoneAbbr: "Turkmenistan Standard Time",
    desc: "(GMT+05:00) Turkmenistan Standard Time",
  },
  "asia/samarkand": {
    zoneAbbr: "Uzbekistan Standard Time - Samarkand",
    desc: "(GMT+05:00) Uzbekistan Standard Time - Samarkand",
  },
  "asia/tashkent": {
    zoneAbbr: "Uzbekistan Standard Time - Tashkent",
    desc: "(GMT+05:00) Uzbekistan Standard Time - Tashkent",
  },
  "asia/aqtau": {
    zoneAbbr: "West Kazakhstan Time - Aqtau",
    desc: "(GMT+05:00) West Kazakhstan Time - Aqtau",
  },
  "asia/aqtobe": {
    zoneAbbr: "West Kazakhstan Time - Aqtobe",
    desc: "(GMT+05:00) West Kazakhstan Time - Aqtobe",
  },
  "asia/atyrau": {
    zoneAbbr: "West Kazakhstan Time - Atyrau",
    desc: "(GMT+05:00) West Kazakhstan Time - Atyrau",
  },
  "asia/oral": {
    zoneAbbr: "West Kazakhstan Time - Oral",
    desc: "(GMT+05:00) West Kazakhstan Time - Oral",
  },
  "asia/qyzylorda": {
    zoneAbbr: "West Kazakhstan Time - Qyzylorda",
    desc: "(GMT+05:00) West Kazakhstan Time - Qyzylorda",
  },
  "asia/yekaterinburg": {
    zoneAbbr: "Yekaterinburg Standard Time",
    desc: "(GMT+05:00) Yekaterinburg Standard Time",
  },
  "asia/colombo": {
    zoneAbbr: "India Standard Time - Colombo",
    desc: "(GMT+05:30) India Standard Time - Colombo",
  },
  "asia/calcutta": {
    zoneAbbr: "India Standard Time",
    shortName: "IST",
    desc: "(GMT+05:30) India Standard Time - Kolkata/Delhi/Mumbai/Chennai",
  },
  "asia/kathmandu": {
    zoneAbbr: "Nepal Time",
    desc: "(GMT+05:45) Nepal Time",
  },
  "asia/dhaka": {
    zoneAbbr: "Bangladesh Standard Time",
    desc: "(GMT+06:00) Bangladesh Standard Time",
  },
  "asia/thimphu": {
    zoneAbbr: "Bhutan Time",
    desc: "(GMT+06:00) Bhutan Time",
  },
  "asia/almaty": {
    zoneAbbr: "East Kazakhstan Time - Almaty",
    desc: "(GMT+06:00) East Kazakhstan Time - Almaty",
  },
  "asia/qostanay": {
    zoneAbbr: "East Kazakhstan Time - Kostanay",
    desc: "(GMT+06:00) East Kazakhstan Time - Kostanay",
  },
  "indian/chagos": {
    zoneAbbr: "Indian Ocean Time",
    desc: "(GMT+06:00) Indian Ocean Time",
  },
  "asia/bishkek": {
    zoneAbbr: "Kyrgyzstan Time",
    desc: "(GMT+06:00) Kyrgyzstan Time",
  },
  "asia/omsk": {
    zoneAbbr: "Omsk Standard Time",
    desc: "(GMT+06:00) Omsk Standard Time",
  },
  "asia/urumqi": {
    zoneAbbr: "Urumqi Time",
    desc: "(GMT+06:00) Urumqi Time",
  },
  "antarctica/vostok": {
    zoneAbbr: "Vostok Time",
    desc: "(GMT+06:00) Vostok Time",
  },
  "indian/cocos": {
    zoneAbbr: "Cocos Islands Time",
    desc: "(GMT+06:30) Cocos Islands Time",
  },
  "asia/yangon": {
    zoneAbbr: "Myanmar Time",
    desc: "(GMT+06:30) Myanmar Time",
  },
  "asia/barnaul": {
    zoneAbbr: "Barnaul Time",
    desc: "(GMT+07:00) Barnaul Time",
  },
  "indian/christmas": {
    zoneAbbr: "Christmas Island Time",
    desc: "(GMT+07:00) Christmas Island Time",
  },
  "antarctica/davis": {
    zoneAbbr: "Davis Time",
    desc: "(GMT+07:00) Davis Time",
  },
  "asia/hovd": {
    zoneAbbr: "Hovd Standard Time",
    desc: "(GMT+07:00) Hovd Standard Time",
  },
  "asia/bangkok": {
    zoneAbbr: "Indochina Time - Bangkok",
    desc: "(GMT+07:00) Indochina Time - Bangkok",
  },
  "asia/ho_chi_minh": {
    zoneAbbr: "Indochina Time - Ho Chi Minh City",
    desc: "(GMT+07:00) Indochina Time - Ho Chi Minh City",
  },
  "asia/krasnoyarsk": {
    zoneAbbr: "Krasnoyarsk Standard Time - Krasnoyarsk",
    desc: "(GMT+07:00) Krasnoyarsk Standard Time - Krasnoyarsk",
  },
  "asia/novokuznetsk": {
    zoneAbbr: "Krasnoyarsk Standard Time - Novokuznetsk",
    desc: "(GMT+07:00) Krasnoyarsk Standard Time - Novokuznetsk",
  },
  "asia/novosibirsk": {
    zoneAbbr: "Novosibirsk Standard Time",
    desc: "(GMT+07:00) Novosibirsk Standard Time",
  },
  "asia/tomsk": {
    zoneAbbr: "Tomsk Time",
    desc: "(GMT+07:00) Tomsk Time",
  },
  "asia/jakarta": {
    zoneAbbr: "Western Indonesia Time - Jakarta",
    shortName: "WIB",
    desc: "(GMT+07:00) Western Indonesia Time - Jakarta",
  },
  "asia/pontianak": {
    zoneAbbr: "Western Indonesia Time - Pontianak",
    shortName: "WIB",
    desc: "(GMT+07:00) Western Indonesia Time - Pontianak",
  },
  "antarctica/casey": {
    zoneAbbr: "Australian Western Standard Time - Casey",
    desc: "(GMT+08:00) Australian Western Standard Time - Casey",
  },
  "australia/perth": {
    zoneAbbr: "Australian Western Standard Time - Perth",
    shortName: "AWST",
    desc: "(GMT+08:00) Australian Western Standard Time - Perth",
  },
  "asia/brunei": {
    zoneAbbr: "Brunei Darussalam Time",
    desc: "(GMT+08:00) Brunei Darussalam Time",
  },
  "asia/makassar": {
    zoneAbbr: "Central Indonesia Time",
    shortName: "WITA",
    desc: "(GMT+08:00) Central Indonesia Time",
  },
  "asia/macau": {
    zoneAbbr: "China Standard Time - Macao",
    shortName: "CST",
    desc: "(GMT+08:00) China Standard Time - Macao",
  },
  "asia/shanghai": {
    zoneAbbr: "China Standard Time - Shanghai",
    shortName: "CST",
    desc: "(GMT+08:00) China Standard Time - Shanghai",
  },
  "asia/choibalsan": {
    zoneAbbr: "Choibalsan Standard Time",
    desc: "(GMT+08:00) Choibalsan Standard Time",
  },
  "asia/hong_kong": {
    zoneAbbr: "Hong Kong Standard Time",
    shortName: "HKT",
    desc: "(GMT+08:00) Hong Kong Standard Time",
  },
  "asia/irkutsk": {
    zoneAbbr: "Irkutsk Standard Time",
    desc: "(GMT+08:00) Irkutsk Standard Time",
  },
  "asia/kuala_lumpur": {
    zoneAbbr: "Malaysia Time - Kuala Lumpur",
    desc: "(GMT+08:00) Malaysia Time - Kuala Lumpur",
  },
  "asia/kuching": {
    zoneAbbr: "Malaysia Time - Kuching",
    desc: "(GMT+08:00) Malaysia Time - Kuching",
  },
  "asia/manila": {
    zoneAbbr: "Philippine Standard Time",
    shortName: "PST",
    desc: "(GMT+08:00) Philippine Standard Time",
  },
  "asia/singapore": {
    zoneAbbr: "Singapore Standard Time",
    desc: "(GMT+08:00) Singapore Standard Time",
  },
  "asia/taipei": {
    zoneAbbr: "Taipei Standard Time",
    shortName: "CST",
    desc: "(GMT+08:00) Taipei Standard Time",
  },
  "asia/ulaanbaatar": {
    zoneAbbr: "Ulaanbaatar Standard Time",
    desc: "(GMT+08:00) Ulaanbaatar Standard Time",
  },
  "australia/eucla": {
    zoneAbbr: "Australian Central Western Standard Time",
    desc: "(GMT+08:45) Australian Central Western Standard Time",
  },
  "asia/dili": {
    zoneAbbr: "East Timor Time",
    desc: "(GMT+09:00) East Timor Time",
  },
  "asia/jayapura": {
    zoneAbbr: "Eastern Indonesia Time",
    shortName: "WIT",
    desc: "(GMT+09:00) Eastern Indonesia Time",
  },
  "asia/tokyo": {
    zoneAbbr: "Japan Standard Time",
    shortName: "JST",
    desc: "(GMT+09:00) Japan Standard Time",
  },
  "asia/pyongyang": {
    zoneAbbr: "Korean Standard Time - Pyongyang",
    shortName: "KST",
    desc: "(GMT+09:00) Korean Standard Time - Pyongyang",
  },
  "asia/seoul": {
    zoneAbbr: "Korean Standard Time - Seoul",
    shortName: "KST",
    desc: "(GMT+09:00) Korean Standard Time - Seoul",
  },
  "pacific/palau": {
    zoneAbbr: "Palau Time",
    desc: "(GMT+09:00) Palau Time",
  },
  "asia/chita": {
    zoneAbbr: "Yakutsk Standard Time - Chita",
    desc: "(GMT+09:00) Yakutsk Standard Time - Chita",
  },
  "asia/khandyga": {
    zoneAbbr: "Yakutsk Standard Time - Khandyga",
    desc: "(GMT+09:00) Yakutsk Standard Time - Khandyga",
  },
  "asia/yakutsk": {
    zoneAbbr: "Yakutsk Standard Time - Yakutsk",
    desc: "(GMT+09:00) Yakutsk Standard Time - Yakutsk",
  },
  "australia/darwin": {
    zoneAbbr: "Australian Central Standard Time",
    shortName: "ACST",
    desc: "(GMT+09:30) Australian Central Standard Time",
  },
  "australia/brisbane": {
    zoneAbbr: "Australian Eastern Standard Time - Brisbane",
    shortName: "AEST",
    desc: "(GMT+10:00) Australian Eastern Standard Time - Brisbane",
  },
  "australia/lindeman": {
    zoneAbbr: "Australian Eastern Standard Time - Lindeman",
    shortName: "AEST",
    desc: "(GMT+10:00) Australian Eastern Standard Time - Lindeman",
  },
  "pacific/guam": {
    zoneAbbr: "Chamorro Standard Time",
    shortName: "ChST",
    desc: "(GMT+10:00) Chamorro Standard Time",
  },
  "pacific/chuuk": {
    zoneAbbr: "Chuuk Time",
    desc: "(GMT+10:00) Chuuk Time",
  },
  "antarctica/dumontdurville": {
    zoneAbbr: "Dumont-d’Urville Time",
    desc: "(GMT+10:00) Dumont-d’Urville Time",
  },
  "pacific/port_moresby": {
    zoneAbbr: "Papua New Guinea Time",
    desc: "(GMT+10:00) Papua New Guinea Time",
  },
  "asia/ust-nera": {
    zoneAbbr: "Vladivostok Standard Time - Ust-Nera",
    desc: "(GMT+10:00) Vladivostok Standard Time - Ust-Nera",
  },
  "asia/vladivostok": {
    zoneAbbr: "Vladivostok Standard Time - Vladivostok",
    desc: "(GMT+10:00) Vladivostok Standard Time - Vladivostok",
  },
  "australia/adelaide": {
    zoneAbbr: "Central Australia Time - Adelaide",
    shortName: "ACDT",
    desc: "(GMT+10:30) Central Australia Time - Adelaide",
  },
  "australia/broken_hill": {
    zoneAbbr: "Central Australia Time - Broken Hill",
    shortName: "ACDT",
    desc: "(GMT+10:30) Central Australia Time - Broken Hill",
  },
  "pacific/bougainville": {
    zoneAbbr: "Bougainville Time",
    desc: "(GMT+11:00) Bougainville Time",
  },
  "australia/currie": {
    zoneAbbr: "Eastern Australia Time - Currie",
    shortName: "AEDT",
    desc: "(GMT+11:00) Eastern Australia Time - Currie",
  },
  "australia/hobart": {
    zoneAbbr: "Eastern Australia Time - Hobart",
    shortName: "AEDT",
    desc: "(GMT+11:00) Eastern Australia Time - Hobart",
  },
  "australia/melbourne": {
    zoneAbbr: "Eastern Australia Time - Melbourne",
    shortName: "AEDT",
    desc: "(GMT+11:00) Eastern Australia Time - Melbourne",
  },
  "australia/sydney": {
    zoneAbbr: "Eastern Australia Time - Sydney",
    shortName: "AEDT",
    desc: "(GMT+11:00) Eastern Australia Time - Sydney",
  },
  "pacific/kosrae": {
    zoneAbbr: "Kosrae Time",
    desc: "(GMT+11:00) Kosrae Time",
  },
  "australia/lord_howe": {
    zoneAbbr: "Lord Howe Time",
    desc: "(GMT+11:00) Lord Howe Time",
  },
  "antarctica/macquarie": {
    zoneAbbr: "Macquarie Island Time",
    desc: "(GMT+11:00) Macquarie Island Time",
  },
  "asia/magadan": {
    zoneAbbr: "Magadan Standard Time",
    desc: "(GMT+11:00) Magadan Standard Time",
  },
  "pacific/noumea": {
    zoneAbbr: "New Caledonia Standard Time",
    desc: "(GMT+11:00) New Caledonia Standard Time",
  },
  "pacific/pohnpei": {
    zoneAbbr: "Ponape Time",
    desc: "(GMT+11:00) Ponape Time",
  },
  "asia/sakhalin": {
    zoneAbbr: "Sakhalin Standard Time",
    desc: "(GMT+11:00) Sakhalin Standard Time",
  },
  "pacific/guadalcanal": {
    zoneAbbr: "Solomon Islands Time",
    desc: "(GMT+11:00) Solomon Islands Time",
  },
  "asia/srednekolymsk": {
    zoneAbbr: "Srednekolymsk Time",
    desc: "(GMT+11:00) Srednekolymsk Time",
  },
  "pacific/efate": {
    zoneAbbr: "Vanuatu Standard Time",
    desc: "(GMT+11:00) Vanuatu Standard Time",
  },
  "asia/anadyr": {
    zoneAbbr: "Anadyr Standard Time",
    desc: "(GMT+12:00) Anadyr Standard Time",
  },
  "pacific/tarawa": {
    zoneAbbr: "Gilbert Islands Time",
    desc: "(GMT+12:00) Gilbert Islands Time",
  },
  "pacific/kwajalein": {
    zoneAbbr: "Marshall Islands Time - Kwajalein",
    desc: "(GMT+12:00) Marshall Islands Time - Kwajalein",
  },
  "pacific/majuro": {
    zoneAbbr: "Marshall Islands Time - Majuro",
    desc: "(GMT+12:00) Marshall Islands Time - Majuro",
  },
  "pacific/nauru": {
    zoneAbbr: "Nauru Time",
    desc: "(GMT+12:00) Nauru Time",
  },
  "pacific/norfolk": {
    zoneAbbr: "Norfolk Island Time",
    desc: "(GMT+12:00) Norfolk Island Time",
  },
  "asia/kamchatka": {
    zoneAbbr: "Petropavlovsk-Kamchatski Standard Time",
    desc: "(GMT+12:00) Petropavlovsk-Kamchatski Standard Time",
  },
  "pacific/funafuti": {
    zoneAbbr: "Tuvalu Time",
    desc: "(GMT+12:00) Tuvalu Time",
  },
  "pacific/wake": {
    zoneAbbr: "Wake Island Time",
    desc: "(GMT+12:00) Wake Island Time",
  },
  "pacific/wallis": {
    zoneAbbr: "Wallis & Futuna Time",
    desc: "(GMT+12:00) Wallis & Futuna Time",
  },
  "pacific/fiji": {
    zoneAbbr: "Fiji Time",
    desc: "(GMT+13:00) Fiji Time",
  },
  "pacific/auckland": {
    zoneAbbr: "New Zealand Time",
    shortName: "NZDT",
    desc: "(GMT+13:00) New Zealand Time",
  },
  "pacific/enderbury": {
    zoneAbbr: "Phoenix Islands Time",
    desc: "(GMT+13:00) Phoenix Islands Time",
  },
  "pacific/fakaofo": {
    zoneAbbr: "Tokelau Time",
    desc: "(GMT+13:00) Tokelau Time",
  },
  "pacific/tongatapu": {
    zoneAbbr: "Tonga Standard Time",
    desc: "(GMT+13:00) Tonga Standard Time",
  },
  "pacific/chatham": {
    zoneAbbr: "Chatham Time",
    desc: "(GMT+13:45) Chatham Time",
  },
  "pacific/apia": {
    zoneAbbr: "Apia Time",
    desc: "(GMT+14:00) Apia Time",
  },
  "pacific/kiritimati": {
    zoneAbbr: "Line Islands Time",
    desc: "(GMT+14:00) Line Islands Time",
  },
};

export default TIMEZONE_DATA;
