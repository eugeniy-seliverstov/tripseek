const territories = [
  {
    "name": "Algeria",
    "code": "DZA",
    "continent": "Africa"
  },
  {
    "name": "Angola",
    "code": "AGO",
    "continent": "Africa"
  },
  {
    "name": "Benin",
    "code": "BEN",
    "continent": "Africa"
  },
  {
    "name": "Botswana",
    "code": "BWA",
    "continent": "Africa"
  },
  {
    "name": "Burkina Faso",
    "code": "BFA",
    "continent": "Africa"
  },
  {
    "name": "Burundi",
    "code": "BDI",
    "continent": "Africa"
  },
  {
    "name": "Cameroon",
    "code": "CMR",
    "continent": "Africa"
  },
  {
    "name": "Cape Verde",
    "code": "CPV",
    "continent": "Africa"
  },
  {
    "name": "Central African Republic",
    "code": "CAF",
    "continent": "Africa"
  },
  {
    "name": "Chad",
    "code": "TCD",
    "continent": "Africa"
  },
  {
    "name": "Comoros",
    "code": "COM",
    "continent": "Africa"
  },
  {
    "name": "Democratic Republic of the Congo",
    "code": "COD",
    "continent": "Africa"
  },
  {
    "name": "Djibouti",
    "code": "DJI",
    "continent": "Africa"
  },
  {
    "name": "Egypt",
    "code": "EGY",
    "continent": "Africa"
  },
  {
    "name": "Equatorial Guinea",
    "code": "GNQ",
    "continent": "Africa"
  },
  {
    "name": "Eritrea",
    "code": "ERI",
    "continent": "Africa"
  },
  {
    "name": "Eswatini",
    "code": "SWZ",
    "continent": "Africa"
  },
  {
    "name": "Ethiopia",
    "code": "ETH",
    "continent": "Africa"
  },
  {
    "name": "Gabon",
    "code": "GAB",
    "continent": "Africa"
  },
  {
    "name": "Gambia",
    "code": "GMB",
    "continent": "Africa"
  },
  {
    "name": "Ghana",
    "code": "GHA",
    "continent": "Africa"
  },
  {
    "name": "Guinea",
    "code": "GIN",
    "continent": "Africa"
  },
  {
    "name": "Guinea-Bissau",
    "code": "GNB",
    "continent": "Africa"
  },
  {
    "name": "Ivory Coast",
    "code": "CIV",
    "continent": "Africa"
  },
  {
    "name": "Kenya",
    "code": "KEN",
    "continent": "Africa"
  },
  {
    "name": "Lesotho",
    "code": "LSO",
    "continent": "Africa"
  },
  {
    "name": "Liberia",
    "code": "LBR",
    "continent": "Africa"
  },
  {
    "name": "Libya",
    "code": "LBY",
    "continent": "Africa"
  },
  {
    "name": "Madagascar",
    "code": "MDG",
    "continent": "Africa"
  },
  {
    "name": "Malawi",
    "code": "MWI",
    "continent": "Africa"
  },
  {
    "name": "Mali",
    "code": "MLI",
    "continent": "Africa"
  },
  {
    "name": "Mauritania",
    "code": "MRT",
    "continent": "Africa"
  },
  {
    "name": "Mauritius",
    "code": "MUS",
    "continent": "Africa"
  },
  {
    "name": "Morocco",
    "code": "MAR",
    "continent": "Africa"
  },
  {
    "name": "Mozambique",
    "code": "MOZ",
    "continent": "Africa"
  },
  {
    "name": "Namibia",
    "code": "NAM",
    "continent": "Africa"
  },
  {
    "name": "Niger",
    "code": "NER",
    "continent": "Africa"
  },
  {
    "name": "Nigeria",
    "code": "NGA",
    "continent": "Africa"
  },
  {
    "name": "Republic of Congo",
    "code": "COG",
    "continent": "Africa"
  },
  {
    "name": "Rwanda",
    "code": "RWA",
    "continent": "Africa"
  },
  {
    "name": "Sao Tome and Principe",
    "code": "STP",
    "continent": "Africa"
  },
  {
    "name": "Senegal",
    "code": "SEN",
    "continent": "Africa"
  },
  {
    "name": "Seychelles",
    "code": "SYC",
    "continent": "Africa"
  },
  {
    "name": "Sierra Leone",
    "code": "SLE",
    "continent": "Africa"
  },
  {
    "name": "Somalia",
    "code": "SOM",
    "continent": "Africa"
  },
  {
    "name": "South Africa",
    "code": "ZAF",
    "continent": "Africa"
  },
  {
    "name": "South Sudan",
    "code": "SSD",
    "continent": "Africa"
  },
  {
    "name": "Sudan",
    "code": "SDN",
    "continent": "Africa"
  },
  {
    "name": "Tanzania",
    "code": "TZA",
    "continent": "Africa"
  },
  {
    "name": "Togo",
    "code": "TGO",
    "continent": "Africa"
  },
  {
    "name": "Tunisia",
    "code": "TUN",
    "continent": "Africa"
  },
  {
    "name": "Uganda",
    "code": "UGA",
    "continent": "Africa"
  },
  {
    "name": "Zambia",
    "code": "ZMB",
    "continent": "Africa"
  },
  {
    "name": "Zimbabwe",
    "code": "ZWE",
    "continent": "Africa"
  },
  {
    "name": "Ceuta",
    "code": "ESPCA",
    "continent": "Africa",
    "other": true
  },
  {
    "name": "Mayotte",
    "code": "MYT",
    "continent": "Africa",
    "other": true
  },
  {
    "name": "Melilla",
    "code": "ESPME",
    "continent": "Africa",
    "other": true
  },
  {
    "name": "Réunion",
    "code": "REU",
    "continent": "Africa",
    "other": true
  },
  {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "code": "SHN",
    "continent": "Africa",
    "other": true
  },
  {
    "name": "Somaliland",
    "code": "SOMLN",
    "continent": "Africa",
    "disputed": true
  },
  {
    "name": "Western Sahara",
    "code": "ESH",
    "continent": "Africa",
    "disputed": true
  },
  {
    "name": "Antarctica",
    "code": "ATA",
    "continent": "Antarctica",
    "other": true
  },
  {
    "name": "Fr. S. Antarctic Lands",
    "code": "ATF",
    "continent": "Antarctica",
    "other": true
  },
  {
    "name": "Antigua and Barbuda",
    "code": "ATG",
    "continent": "Central America"
  },
  {
    "name": "Bahamas",
    "code": "BHS",
    "continent": "Central America"
  },
  {
    "name": "Barbados",
    "code": "BRB",
    "continent": "Central America"
  },
  {
    "name": "Belize",
    "code": "BLZ",
    "continent": "Central America"
  },
  {
    "name": "Costa Rica",
    "code": "CRI",
    "continent": "Central America"
  },
  {
    "name": "Cuba",
    "code": "CUB",
    "continent": "Central America"
  },
  {
    "name": "Dominica",
    "code": "DMA",
    "continent": "Central America"
  },
  {
    "name": "Dominican Republic",
    "code": "DOM",
    "continent": "Central America"
  },
  {
    "name": "El Salvador",
    "code": "SLV",
    "continent": "Central America"
  },
  {
    "name": "Grenada",
    "code": "GRD",
    "continent": "Central America"
  },
  {
    "name": "Guatemala",
    "code": "GTM",
    "continent": "Central America"
  },
  {
    "name": "Haiti",
    "code": "HTI",
    "continent": "Central America"
  },
  {
    "name": "Honduras",
    "code": "HND",
    "continent": "Central America"
  },
  {
    "name": "Jamaica",
    "code": "JAM",
    "continent": "Central America"
  },
  {
    "name": "Nicaragua",
    "code": "NIC",
    "continent": "Central America"
  },
  {
    "name": "Panama",
    "code": "PAN",
    "continent": "Central America"
  },
  {
    "name": "Saint Kitts and Nevis",
    "code": "KNA",
    "continent": "Central America"
  },
  {
    "name": "Saint Lucia",
    "code": "LCA",
    "continent": "Central America"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "code": "VCT",
    "continent": "Central America"
  },
  {
    "name": "Trinidad and Tobago",
    "code": "TTO",
    "continent": "Central America"
  },
  {
    "name": "Angullia",
    "code": "AIA",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Aruba",
    "code": "ABW",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Bermuda",
    "code": "BMU",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Bonaire",
    "code": "BES",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "British Virgin Islands",
    "code": "VGB",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Cayman Islands",
    "code": "CYM",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Curaçao",
    "code": "CUW",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Guadeloupe",
    "code": "GLP",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Martinique",
    "code": "MTQ",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Montserrat",
    "code": "MSR",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Puerto Rico",
    "code": "PRI",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Saba",
    "code": "NLDSA",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Saint Barthélemy",
    "code": "BLM",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Saint Martin",
    "code": "MAF",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Sint Eustatius",
    "code": "NLDSI",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Sint Maarten",
    "code": "SXM",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Turks and Caicos Islands",
    "code": "TCA",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "United States Virgin Islands",
    "code": "VIR",
    "continent": "Central America",
    "other": true
  },
  {
    "name": "Kazakhstan",
    "code": "KAZ",
    "continent": "Central Asia"
  },
  {
    "name": "Kyrgyzstan",
    "code": "KGZ",
    "continent": "Central Asia"
  },
  {
    "name": "Tajikistan",
    "code": "TJK",
    "continent": "Central Asia"
  },
  {
    "name": "Turkmenistan",
    "code": "TKM",
    "continent": "Central Asia"
  },
  {
    "name": "Uzbekistan",
    "code": "UZB",
    "continent": "Central Asia"
  },
  {
    "name": "Brunei",
    "code": "BRN",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Cambodia",
    "code": "KHM",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "China",
    "code": "CHN",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Indonesia",
    "code": "IDN",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Japan",
    "code": "JPN",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Laos",
    "code": "LAO",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Malaysia",
    "code": "MYS",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Mongolia",
    "code": "MNG",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Myanmar",
    "code": "MMR",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "North Korea",
    "code": "PRK",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Philippines",
    "code": "PHL",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Singapore",
    "code": "SGP",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "South Korea",
    "code": "KOR",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Thailand",
    "code": "THA",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Timor-Leste",
    "code": "TLS",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Vietnam",
    "code": "VNM",
    "continent": "East & Southeast Asia"
  },
  {
    "name": "Christmas Island",
    "code": "CXR",
    "continent": "East & Southeast Asia",
    "other": true
  },
  {
    "name": "Cocos (Keeling) Islands",
    "code": "CCK",
    "continent": "East & Southeast Asia",
    "other": true
  },
  {
    "name": "Hong Kong",
    "code": "HKG",
    "continent": "East & Southeast Asia",
    "other": true
  },
  {
    "name": "Macau",
    "code": "MAC",
    "continent": "East & Southeast Asia",
    "other": true
  },
  {
    "name": "Taiwan",
    "code": "TWN",
    "continent": "East & Southeast Asia",
    "disputed": true
  },
  {
    "name": "Albania",
    "code": "ALB",
    "continent": "Europe"
  },
  {
    "name": "Andorra",
    "code": "AND",
    "continent": "Europe"
  },
  {
    "name": "Austria",
    "code": "AUT",
    "continent": "Europe"
  },
  {
    "name": "Belarus",
    "code": "BLR",
    "continent": "Europe"
  },
  {
    "name": "Belgium",
    "code": "BEL",
    "continent": "Europe"
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "BIH",
    "continent": "Europe"
  },
  {
    "name": "Bulgaria",
    "code": "BGR",
    "continent": "Europe"
  },
  {
    "name": "Croatia",
    "code": "HRV",
    "continent": "Europe"
  },
  {
    "name": "Cyprus",
    "code": "CYP",
    "continent": "Europe"
  },
  {
    "name": "Czech Republic",
    "code": "CZE",
    "continent": "Europe"
  },
  {
    "name": "Denmark",
    "code": "DNK",
    "continent": "Europe"
  },
  {
    "name": "Estonia",
    "code": "EST",
    "continent": "Europe"
  },
  {
    "name": "Finland",
    "code": "FIN",
    "continent": "Europe"
  },
  {
    "name": "France",
    "code": "FRA",
    "continent": "Europe"
  },
  {
    "name": "Germany",
    "code": "DEU",
    "continent": "Europe"
  },
  {
    "name": "Greece",
    "code": "GRC",
    "continent": "Europe"
  },
  {
    "name": "Hungary",
    "code": "HUN",
    "continent": "Europe"
  },
  {
    "name": "Iceland",
    "code": "ISL",
    "continent": "Europe"
  },
  {
    "name": "Ireland",
    "code": "IRL",
    "continent": "Europe"
  },
  {
    "name": "Italy",
    "code": "ITA",
    "continent": "Europe"
  },
  {
    "name": "Latvia",
    "code": "LVA",
    "continent": "Europe"
  },
  {
    "name": "Liechtenstein",
    "code": "LIE",
    "continent": "Europe"
  },
  {
    "name": "Lithuania",
    "code": "LTU",
    "continent": "Europe"
  },
  {
    "name": "Luxembourg",
    "code": "LUX",
    "continent": "Europe"
  },
  {
    "name": "Malta",
    "code": "MLT",
    "continent": "Europe"
  },
  {
    "name": "Moldova",
    "code": "MDA",
    "continent": "Europe"
  },
  {
    "name": "Monaco",
    "code": "MCO",
    "continent": "Europe"
  },
  {
    "name": "Montenegro",
    "code": "MNE",
    "continent": "Europe"
  },
  {
    "name": "Netherlands",
    "code": "NLD",
    "continent": "Europe"
  },
  {
    "name": "North Macedonia",
    "code": "MKD",
    "continent": "Europe"
  },
  {
    "name": "Norway",
    "code": "NOR",
    "continent": "Europe"
  },
  {
    "name": "Poland",
    "code": "POL",
    "continent": "Europe"
  },
  {
    "name": "Portugal",
    "code": "PRT",
    "continent": "Europe"
  },
  {
    "name": "Romania",
    "code": "ROU",
    "continent": "Europe"
  },
  {
    "name": "Russia",
    "code": "RUS",
    "continent": "Europe"
  },
  {
    "name": "San Marino",
    "code": "SMR",
    "continent": "Europe"
  },
  {
    "name": "Serbia",
    "code": "SRB",
    "continent": "Europe"
  },
  {
    "name": "Slovakia",
    "code": "SVK",
    "continent": "Europe"
  },
  {
    "name": "Slovenia",
    "code": "SVN",
    "continent": "Europe"
  },
  {
    "name": "Spain",
    "code": "ESP",
    "continent": "Europe"
  },
  {
    "name": "Sweden",
    "code": "SWE",
    "continent": "Europe"
  },
  {
    "name": "Switzerland",
    "code": "CHE",
    "continent": "Europe"
  },
  {
    "name": "Ukraine",
    "code": "UKR",
    "continent": "Europe"
  },
  {
    "name": "United Kingdom",
    "code": "GBR",
    "continent": "Europe"
  },
  {
    "name": "Vatican City",
    "code": "VAT",
    "continent": "Europe"
  },
  {
    "name": "Azores",
    "code": "PRTAZ",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Balearic Islands",
    "code": "ESPBI",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Canary Islands",
    "code": "ESPCI",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Faroe Islands",
    "code": "FRO",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Gibraltar",
    "code": "GIB",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Guernsey",
    "code": "GUE",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Isle of Man",
    "code": "ISO",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Jan Mayen",
    "code": "NORJM",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Jersey",
    "code": "JER",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Madeira",
    "code": "PRTMD",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Svalbard",
    "code": "SJM",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Åland Islands",
    "code": "ALA",
    "continent": "Europe",
    "other": true
  },
  {
    "name": "Kosovo",
    "code": "SRBKV",
    "continent": "Europe",
    "disputed": true
  },
  {
    "name": "Northern Cyprus",
    "code": "NOCYP",
    "continent": "Europe",
    "disputed": true
  },
  {
    "name": "Transnistria",
    "code": "MDATN",
    "continent": "Europe",
    "disputed": true
  },
  {
    "name": "Armenia",
    "code": "ARM",
    "continent": "Middle East"
  },
  {
    "name": "Azerbaijan",
    "code": "AZE",
    "continent": "Middle East"
  },
  {
    "name": "Bahrain",
    "code": "BHR",
    "continent": "Middle East"
  },
  {
    "name": "Georgia",
    "code": "GEO",
    "continent": "Middle East"
  },
  {
    "name": "Iran",
    "code": "IRN",
    "continent": "Middle East"
  },
  {
    "name": "Iraq",
    "code": "IRQ",
    "continent": "Middle East"
  },
  {
    "name": "Israel",
    "code": "ISR",
    "continent": "Middle East"
  },
  {
    "name": "Jordan",
    "code": "JOR",
    "continent": "Middle East"
  },
  {
    "name": "Kuwait",
    "code": "KWT",
    "continent": "Middle East"
  },
  {
    "name": "Lebanon",
    "code": "LBN",
    "continent": "Middle East"
  },
  {
    "name": "Oman",
    "code": "OMN",
    "continent": "Middle East"
  },
  {
    "name": "Palestine",
    "code": "PSE",
    "continent": "Middle East"
  },
  {
    "name": "Qatar",
    "code": "QAT",
    "continent": "Middle East"
  },
  {
    "name": "Saudi Arabia",
    "code": "SAU",
    "continent": "Middle East"
  },
  {
    "name": "Syria",
    "code": "SYR",
    "continent": "Middle East"
  },
  {
    "name": "Turkey",
    "code": "TUR",
    "continent": "Middle East"
  },
  {
    "name": "United Arab Emirates",
    "code": "ARE",
    "continent": "Middle East"
  },
  {
    "name": "Yemen",
    "code": "YEM",
    "continent": "Middle East"
  },
  {
    "name": "Abkhazia",
    "code": "GEOAB",
    "continent": "Middle East",
    "disputed": true
  },
  {
    "name": "South Ossetia",
    "code": "GEOSO",
    "continent": "Middle East",
    "disputed": true
  },
  {
    "name": "Canada",
    "code": "CAN",
    "continent": "North America"
  },
  {
    "name": "Mexico",
    "code": "MEX",
    "continent": "North America"
  },
  {
    "name": "United States",
    "code": "USA",
    "continent": "North America"
  },
  {
    "name": "Greenland",
    "code": "GRL",
    "continent": "North America",
    "other": true
  },
  {
    "name": "Saint Pierre and Miquelo",
    "code": "SPM",
    "continent": "North America",
    "other": true
  },
  {
    "name": "Australia",
    "code": "AUS",
    "continent": "Oceania"
  },
  {
    "name": "Fiji",
    "code": "FJI",
    "continent": "Oceania"
  },
  {
    "name": "Kiribati",
    "code": "KIR",
    "continent": "Oceania"
  },
  {
    "name": "Marshall Islands",
    "code": "MHL",
    "continent": "Oceania"
  },
  {
    "name": "Micronesia",
    "code": "FSM",
    "continent": "Oceania"
  },
  {
    "name": "Nauru",
    "code": "NRU",
    "continent": "Oceania"
  },
  {
    "name": "New Zealand",
    "code": "NZL",
    "continent": "Oceania"
  },
  {
    "name": "Palau",
    "code": "PLW",
    "continent": "Oceania"
  },
  {
    "name": "Papua New Guinea",
    "code": "PNG",
    "continent": "Oceania"
  },
  {
    "name": "Samoa",
    "code": "WSM",
    "continent": "Oceania"
  },
  {
    "name": "Solomon Islands",
    "code": "SLB",
    "continent": "Oceania"
  },
  {
    "name": "Tonga",
    "code": "TON",
    "continent": "Oceania"
  },
  {
    "name": "Tuvalu",
    "code": "TUV",
    "continent": "Oceania"
  },
  {
    "name": "Vanuatu",
    "code": "VUT",
    "continent": "Oceania"
  },
  {
    "name": "American Samoa",
    "code": "ASM",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Cook Islands",
    "code": "COK",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "French Polynesia",
    "code": "PYF",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Guam",
    "code": "GUM",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "New Caledonia",
    "code": "NCL",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Niue",
    "code": "NIU",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Norfolk Island",
    "code": "NFK",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Northern Mariana Islands",
    "code": "USANI",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Pitcairn Islands",
    "code": "PCN",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Tokelau",
    "code": "TKL",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Wallis and Futuna",
    "code": "WLF",
    "continent": "Oceania",
    "other": true
  },
  {
    "name": "Argentina",
    "code": "ARG",
    "continent": "South America"
  },
  {
    "name": "Bolivia",
    "code": "BOL",
    "continent": "South America"
  },
  {
    "name": "Brazil",
    "code": "BRA",
    "continent": "South America"
  },
  {
    "name": "Chile",
    "code": "CHL",
    "continent": "South America"
  },
  {
    "name": "Colombia",
    "code": "COL",
    "continent": "South America"
  },
  {
    "name": "Ecuador",
    "code": "ECU",
    "continent": "South America"
  },
  {
    "name": "Guyana",
    "code": "GUY",
    "continent": "South America"
  },
  {
    "name": "Paraguay",
    "code": "PRY",
    "continent": "South America"
  },
  {
    "name": "Peru",
    "code": "PER",
    "continent": "South America"
  },
  {
    "name": "Suriname",
    "code": "SUR",
    "continent": "South America"
  },
  {
    "name": "Uruguay",
    "code": "URY",
    "continent": "South America"
  },
  {
    "name": "Venezuela",
    "code": "VEN",
    "continent": "South America"
  },
  {
    "name": "Falkland Islands",
    "code": "FLK",
    "continent": "South America",
    "other": true
  },
  {
    "name": "French Guiana",
    "code": "GUF",
    "continent": "South America",
    "other": true
  },
  {
    "name": "Galapagos Islands",
    "code": "ECUGI",
    "continent": "South America",
    "other": true
  },
  {
    "name": "Afghanistan",
    "code": "AFG",
    "continent": "South Asia"
  },
  {
    "name": "Bangladesh",
    "code": "BGD",
    "continent": "South Asia"
  },
  {
    "name": "Bhutan",
    "code": "BTN",
    "continent": "South Asia"
  },
  {
    "name": "India",
    "code": "IND",
    "continent": "South Asia"
  },
  {
    "name": "Maldives",
    "code": "MDV",
    "continent": "South Asia"
  },
  {
    "name": "Nepal",
    "code": "NPL",
    "continent": "South Asia"
  },
  {
    "name": "Pakistan",
    "code": "PAK",
    "continent": "South Asia"
  },
  {
    "name": "Sri Lanka",
    "code": "LKA",
    "continent": "South Asia"
  },
  {
    "name": "British Indian Ocean Territory",
    "code": "IOT",
    "continent": "South Asia",
    "other": true
  }
] as const

export default territories