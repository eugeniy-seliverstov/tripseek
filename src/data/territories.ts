const territories = [
  // Europe
  // Africa
  // Middle East
  // North America
  // Central America
  // South America
  // Oceania
  // East and Southeast Asia
  // Central Asia
  // South Asia
  // Antarctica
  {
    "name": "Albania",
    "continent": "Europe",
    "iso3": "ALB",
  },
  {
    "name": "Estonia",
    "continent": "Europe",
    "iso3": "EST",
  },
  {
    "name": "Finland",
    "continent": "Europe",
    "iso3": "FIN"
  },
  {
    "name": "Russia",
    "continent": "Europe",
    "iso3": "RUS"
  },
  {
    "name": "Sweden",
    "continent": "Europe",
    "iso3": "SWE"
  },
  {
    "name": "Ukraine",
    "continent": "Europe",
    "iso3": "UKR"
  },
  {
    "name": "Algeria",
    "continent": "Africa",
    "iso3": "DZA",
  },
  {
    "name": "Angola",
    "continent": "Africa",
    "iso3": "AGO"
  },
  {
    "name": "Afghanistan",
    "continent": "South Asia",
    "iso3": "AFG"
  },
  {
    "name": "Andorra",
    "continent": "Europe",
    "iso3": "AND"
  },
  {
    "name": "Antigua and Barbuda",
    "continent": "Central America",
    "iso3": "ATG"
  },
  {
    "name": "Argentina",
    "continent": "South America",
    "iso3": "ARG"
  },
  {
    "name": "Armenia",
    "continent": "Middle East",
    "iso3": "ARM"
  },
  {
    "name": "Australia",
    "continent": "Oceania",
    "iso3": "AUS"
  },
  {
    "name": "Austria",
    "continent": "Europe",
    "iso3": "AUT"
  },
  {
    "name": "Azerbaijan",
    "continent": "Middle East",
    "iso3": "AZE"
  },
  {
    "name": "Bahamas",
    "continent": "Central America",
    "iso3": "BHS"
  },
  {
    "name": "Bahrain",
    "continent": "Middle East",
    "iso3": "BHR"
  },
  {
    "name": "Bangladesh",
    "continent": "South Asia",
    "iso3": "BGD"
  },
  {
    "name": "Barbados",
    "continent": "Central America",
    "iso3": "BRB"
  },
  {
    "name": "Belarus",
    "continent": "Europe",
    "iso3": "BLR"
  },
  {
    "name": "Belgium",
    "continent": "Europe",
    "iso3": "BEL"
  },
  {
    "name": "Belize",
    "continent": "Central America",
    "iso3": "BLZ"
  },
  {
    "name": "Benin",
    "continent": "Africa",
    "iso3": "BEN"
  },
  {
    "name": "Bhutan",
    "continent": "South Asia",
    "iso3": "BTN"
  },
  {
    "name": "Bolivia",
    "continent": "South America",
    "iso3": "BOL"
  },
  {
    "name": "Bosnia and Herzegovina",
    "continent": "Europe",
    "iso3": "BIH"
  },
  {
    "name": "Botswana",
    "continent": "Africa",
    "iso3": "BWA"
  },
  {
    "name": "Brazil",
    "continent": "South America",
    "iso3": "BRA"
  },
  {
    "name": "Brunei",
    "continent": "East & Southeast Asia",
    "iso3": "BRN"
  },
  {
    "name": "Bulgaria",
    "continent": "Europe",
    "iso3": "BGR"
  },
  {
    "name": "Burkina Faso",
    "continent": "Africa",
    "iso3": "BFA"
  },
  {
    "name": "Burundi",
    "continent": "Africa",
    "iso3": "BDI"
  },
  {
    "name": "Cambodia",
    "continent": "East & Southeast Asia",
    "iso3": "KHM"
  },
  {
    "name": "Cameroon",
    "continent": "Africa",
    "iso3": "CMR"
  },
  {
    "name": "Canada",
    "continent": "North America",
    "iso3": "CAN"
  },
  {
    "name": "Cape Verde",
    "continent": "Africa",
    "iso3": "CPV"
  },
  {
    "name": "Central African Republic",
    "continent": "Africa",
    "iso3": "CAF"
  },
  {
    "name": "Chad",
    "continent": "Africa",
    "iso3": "TCD"
  },
  {
    "name": "Chile",
    "continent": "South America",
    "iso3": "CHL"
  },
  {
    "name": "China",
    "continent": "East & Southeast Asia",
    "iso3": "CHN"
  },
  {
    "name": "Colombia",
    "continent": "South America",
    "iso3": "COL"
  },
  {
    "name": "Comoros",
    "continent": "Africa",
    "iso3": "COM"
  },
  {
    "name": "Costa Rica",
    "continent": "Central America",
    "iso3": "CRI"
  },
  {
    "name": "Croatia",
    "continent": "Europe",
    "iso3": "HRV"
  },
  {
    "name": "Cuba",
    "continent": "Central America",
    "iso3": "CUB"
  },
  {
    "name": "Cyprus",
    "continent": "Europe",
    "iso3": "CYP"
  },
  {
    "name": "Czech Republic",
    "continent": "Europe",
    "iso3": "CZE"
  },
  {
    "name": "Democratic Republic of the Congo",
    "continent": "Africa",
    "iso3": "COD"
  },
  {
    "name": "Denmark",
    "continent": "Europe",
    "iso3": "DNK"
  },
  {
    "name": "Djibouti",
    "continent": "Africa",
    "iso3": "DJI"
  },
  {
    "name": "Dominica",
    "continent": "Central America",
    "iso3": "DMA"
  },
  {
    "name": "Dominican Republic",
    "continent": "Central America",
    "iso3": "DOM"
  },
  {
    "name": "Ecuador",
    "continent": "South America",
    "iso3": "ECU"
  },
  {
    "name": "Egypt",
    "continent": "Africa",
    "iso3": "EGY"
  },
  {
    "name": "El Salvador",
    "continent": "Central America",
    "iso3": "SLV"
  },
  {
    "name": "Equatorial Guinea",
    "continent": "Africa",
    "iso3": "GNQ"
  },
  {
    "name": "Eritrea",
    "continent": "Africa",
    "iso3": "ERI"
  },
  {
    "name": "Eswatini",
    "continent": "Africa",
    "iso3": "SWZ"
  },
  {
    "name": "Ethiopia",
    "continent": "Africa",
    "iso3": "ETH"
  },
  {
    "name": "Fiji",
    "continent": "Oceania",
    "iso3": "FJI"
  },
  {
    "name": "France",
    "continent": "Europe",
    "iso3": "FRA"
  },
  {
    "name": "Gabon",
    "continent": "Africa",
    "iso3": "GAB"
  },
  {
    "name": "Georgia",
    "continent": "Middle East",
    "iso3": "GEO"
  },
  {
    "name": "Gambia",
    "continent": "Africa",
    "iso3": "GMB"
  },
  {
    "name": "Germany",
    "continent": "Europe",
    "iso3": "DEU"
  },
  {
    "name": "Ghana",
    "continent": "Africa",
    "iso3": "GHA"
  },
  {
    "name": "Greece",
    "continent": "Europe",
    "iso3": "GRC"
  },
  {
    "name": "Grenada",
    "continent": "Central America",
    "iso3": "GRD"
  },
  {
    "name": "Guatemala",
    "continent": "Central America",
    "iso3": "GTM"
  },
  {
    "name": "Guinea",
    "continent": "Africa",
    "iso3": "GIN"
  },
  {
    "name": "Guinea-Bissau",
    "continent": "Africa",
    "iso3": "GNB"
  },
  {
    "name": "Guyana",
    "continent": "South America",
    "iso3": "GUY"
  },
  {
    "name": "Haiti",
    "continent": "Central America",
    "iso3": "HTI"
  },
  {
    "name": "Honduras",
    "continent": "Central America",
    "iso3": "HND"
  },
  {
    "name": "Hungary",
    "continent": "Europe",
    "iso3": "HUN"
  },
  {
    "name": "Iceland",
    "continent": "Europe",
    "iso3": "ISL"
  },
  {
    "name": "India",
    "continent": "South Asia",
    "iso3": "IND"
  },
  {
    "name": "Indonesia",
    "continent": "East & Southeast Asia",
    "iso3": "IDN"
  },
  {
    "name": "Iran",
    "continent": "Middle East",
    "iso3": "IRN"
  },
  {
    "name": "Iraq",
    "continent": "Middle East",
    "iso3": "IRQ"
  },
  {
    "name": "Ireland",
    "continent": "Europe",
    "iso3": "IRL"
  },
  {
    "name": "Israel",
    "continent": "Middle East",
    "iso3": "ISR"
  },
  {
    "name": "Italy",
    "continent": "Europe",
    "iso3": "ITA"
  },
  {
    "name": "Ivory Coast",
    "continent": "Africa",
    "iso3": "CIV"
  },
  {
    "name": "Jamaica",
    "continent": "Central America",
    "iso3": "JAM"
  },
  {
    "name": "Japan",
    "continent": "East & Southeast Asia",
    "iso3": "JPN"
  },
  {
    "name": "Jordan",
    "continent": "Middle East",
    "iso3": "JOR"
  },
  {
    "name": "Kazakhstan",
    "continent": "Central Asia",
    "iso3": "KAZ"
  },
  {
    "name": "Kenya",
    "continent": "Africa",
    "iso3": "KEN"
  },
  {
    "name": "Kiribati",
    "continent": "Oceania",
    "iso3": "KIR"
  },
  {
    "name": "Kuwait",
    "continent": "Middle East",
    "iso3": "KWT"
  },
  {
    "name": "Kyrgyzstan",
    "continent": "Central Asia",
    "iso3": "KGZ"
  },
  {
    "name": "Laos",
    "continent": "East & Southeast Asia",
    "iso3": "LAO"
  },
  {
    "name": "Latvia",
    "continent": "Europe",
    "iso3": "LVA"
  },
  {
    "name": "Lebanon",
    "continent": "Middle East",
    "iso3": "LBN"
  },
  {
    "name": "Lesotho",
    "continent": "Africa",
    "iso3": "LSO"
  },
  {
    "name": "Liberia",
    "continent": "Africa",
    "iso3": "LBR"
  },
  {
    "name": "Libya",
    "continent": "Africa",
    "iso3": "LBY"
  },
  {
    "name": "Liechtenstein",
    "continent": "Europe",
    "iso3": "LIE"
  },
  {
    "name": "Lithuania",
    "continent": "Europe",
    "iso3": "LTU"
  },
  {
    "name": "Luxembourg",
    "continent": "Europe",
    "iso3": "LUX"
  },
  {
    "name": "Madagascar",
    "continent": "Africa",
    "iso3": "MDG"
  },
  {
    "name": "Malawi",
    "continent": "Africa",
    "iso3": "MWI"
  },
  {
    "name": "Malaysia",
    "continent": "East & Southeast Asia",
    "iso3": "MYS"
  },
  {
    "name": "Maldives",
    "continent": "South Asia",
    "iso3": "MDV"
  },
  {
    "name": "Mali",
    "continent": "Africa",
    "iso3": "MLI"
  },
  {
    "name": "Malta",
    "continent": "Europe",
    "iso3": "MLT"
  },
  {
    "name": "Marshall Islands",
    "continent": "Oceania",
    "iso3": "MHL"
  },
  {
    "name": "Mauritania",
    "continent": "Africa",
    "iso3": "MRT"
  },
  {
    "name": "Mauritius",
    "continent": "Africa",
    "iso3": "MUS"
  },
  {
    "name": "Mexico",
    "continent": "North America",
    "iso3": "MEX"
  },
  {
    "name": "Micronesia",
    "continent": "Oceania",
    "iso3": "FSM"
  },
  {
    "name": "Moldova",
    "continent": "Europe",
    "iso3": "MDA"
  },
  {
    "name": "Monaco",
    "continent": "Europe",
    "iso3": "MCO"
  },
  {
    "name": "Mongolia",
    "continent": "East & Southeast Asia",
    "iso3": "MNG"
  },
  {
    "name": "Montenegro",
    "continent": "Europe",
    "iso3": "MNE"
  },
  {
    "name": "Morocco",
    "continent": "Africa",
    "iso3": "MAR"
  },
  {
    "name": "Mozambique",
    "continent": "Africa",
    "iso3": "MOZ"
  },
  {
    "name": "Myanmar",
    "continent": "East & Southeast Asia",
    "iso3": "MMR"
  },
  {
    "name": "Namibia",
    "continent": "Africa",
    "iso3": "NAM"
  },
  {
    "name": "Nauru",
    "continent": "Oceania",
    "iso3": "NRU"
  },
  {
    "name": "Nepal",
    "continent": "South Asia",
    "iso3": "NPL"
  },
  {
    "name": "Netherlands",
    "continent": "Europe",
    "iso3": "NLD"
  },
  {
    "name": "New Zealand",
    "continent": "Oceania",
    "iso3": "NZL"
  },
  {
    "name": "Nicaragua",
    "continent": "Central America",
    "iso3": "NIC"
  },
  {
    "name": "Niger",
    "continent": "Africa",
    "iso3": "NER"
  },
  {
    "name": "Nigeria",
    "continent": "Africa",
    "iso3": "NGA"
  },
  {
    "name": "North Korea",
    "continent": "East & Southeast Asia",
    "iso3": "PRK"
  },
  {
    "name": "North Macedonia",
    "continent": "Europe",
    "iso3": "MKD"
  },
  {
    "name": "Norway",
    "continent": "Europe",
    "iso3": "NOR"
  },
  {
    "name": "Oman",
    "continent": "Middle East",
    "iso3": "OMN"
  },
  {
    "name": "Pakistan",
    "continent": "South Asia",
    "iso3": "PAK"
  },
  {
    "name": "Palau",
    "continent": "Oceania",
    "iso3": "PLW"
  },
  {
    "name": "Panama",
    "continent": "Central America",
    "iso3": "PAN"
  },
  {
    "name": "Palestine",
    "continent": "Middle East",
    "iso3": "PSE"
  },
  {
    "name": "Papua New Guinea",
    "continent": "Oceania",
    "iso3": "PNG"
  },
  {
    "name": "Paraguay",
    "continent": "South America",
    "iso3": "PRY"
  },
  {
    "name": "Peru",
    "continent": "South America",
    "iso3": "PER"
  },
  {
    "name": "Philippines",
    "continent": "East & Southeast Asia",
    "iso3": "PHL"
  },
  {
    "name": "Poland",
    "continent": "Europe",
    "iso3": "POL"
  },
  {
    "name": "Portugal",
    "continent": "Europe",
    "iso3": "PRT"
  },
  {
    "name": "Qatar",
    "continent": "Middle East",
    "iso3": "QAT"
  },
  {
    "name": "Republic of Congo",
    "continent": "Africa",
    "iso3": "COG"
  },
  {
    "name": "Romania",
    "continent": "Europe",
    "iso3": "ROU"
  },
  {
    "name": "Rwanda",
    "continent": "Africa",
    "iso3": "RWA"
  },
  {
    "name": "Saint Kitts and Nevis",
    "continent": "Central America",
    "iso3": "KNA"
  },
  {
    "name": "Saint Lucia",
    "continent": "Central America",
    "iso3": "LCA"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "continent": "Central America",
    "iso3": "VCT"
  },
  {
    "name": "Samoa",
    "continent": "Oceania",
    "iso3": "WSM"
  },
  {
    "name": "San Marino",
    "continent": "Europe",
    "iso3": "SMR"
  },
  {
    "name": "Sao Tome and Principe",
    "continent": "Africa",
    "iso3": "STP"
  },
  {
    "name": "Saudi Arabia",
    "continent": "Middle East",
    "iso3": "SAU"
  },
  {
    "name": "Senegal",
    "continent": "Africa",
    "iso3": "SEN"
  },
  {
    "name": "Serbia",
    "continent": "Europe",
    "iso3": "SRB"
  },
  {
    "name": "Seychelles",
    "continent": "Africa",
    "iso3": "SYC"
  },
  {
    "name": "Sierra Leone",
    "continent": "Africa",
    "iso3": "SLE"
  },
  {
    "name": "Singapore",
    "continent": "East & Southeast Asia",
    "iso3": "SGP"
  },
  {
    "name": "Slovakia",
    "continent": "Europe",
    "iso3": "SVK"
  },
  {
    "name": "Slovenia",
    "continent": "Europe",
    "iso3": "SVN"
  },
  {
    "name": "Solomon Islands",
    "continent": "Oceania",
    "iso3": "SLB"
  },
  {
    "name": "Somalia",
    "continent": "Africa",
    "iso3": "SOM"
  },
  {
    "name": "South Africa",
    "continent": "Africa",
    "iso3": "ZAF"
  },
  {
    "name": "South Korea",
    "continent": "East & Southeast Asia",
    "iso3": "KOR"
  },
  {
    "name": "South Sudan",
    "continent": "Africa",
    "iso3": "SSD"
  },
  {
    "name": "Spain",
    "continent": "Europe",
    "iso3": "ESP"
  },
  {
    "name": "Sri Lanka",
    "continent": "South Asia",
    "iso3": "LKA"
  },
  {
    "name": "Sudan",
    "continent": "Africa",
    "iso3": "SDN"
  },
  {
    "name": "Suriname",
    "continent": "South America",
    "iso3": "SUR"
  },
  {
    "name": "Switzerland",
    "continent": "Europe",
    "iso3": "CHE"
  },
  {
    "name": "Syria",
    "continent": "Middle East",
    "iso3": "SYR"
  },
  {
    "name": "Tajikistan",
    "continent": "Central Asia",
    "iso3": "TJK"
  },
  {
    "name": "Tanzania",
    "continent": "Africa",
    "iso3": "TZA"
  },
  {
    "name": "Thailand",
    "continent": "East & Southeast Asia",
    "iso3": "THA"
  },
  {
    "name": "Timor-Leste",
    "continent": "East & Southeast Asia",
    "iso3": "TLS"
  },
  {
    "name": "Togo",
    "continent": "Africa",
    "iso3": "TGO"
  },
  {
    "name": "Tonga",
    "continent": "Oceania",
    "iso3": "TON"
  },
  {
    "name": "Trinidad and Tobago",
    "continent": "Central America",
    "iso3": "TTO"
  },
  {
    "name": "Tunisia",
    "continent": "Africa",
    "iso3": "TUN"
  },
  {
    "name": "Turkey",
    "continent": "Middle East",
    "iso3": "TUR"
  },
  {
    "name": "Turkmenistan",
    "continent": "Central Asia",
    "iso3": "TKM"
  },
  {
    "name": "Tuvalu",
    "continent": "Oceania",
    "iso3": "TUV"
  },
  {
    "name": "Uganda",
    "continent": "Africa",
    "iso3": "UGA"
  },
  {
    "name": "United Arab Emirates",
    "continent": "Middle East",
    "iso3": "ARE"
  },
  {
    "name": "United Kingdom",
    "continent": "Europe",
    "iso3": "GBR"
  },
  {
    "name": "United States",
    "continent": "North America",
    "iso3": "USA"
  },
  {
    "name": "Uruguay",
    "continent": "South America",
    "iso3": "URY"
  },
  {
    "name": "Uzbekistan",
    "continent": "Central Asia",
    "iso3": "UZB"
  },
  {
    "name": "Vanuatu",
    "continent": "Oceania",
    "iso3": "VUT"
  },
  {
    "name": "Vatican City",
    "continent": "Europe",
    "iso3": "VAT"
  },
  {
    "name": "Venezuela",
    "continent": "South America",
    "iso3": "VEN"
  },
  {
    "name": "Vietnam",
    "continent": "East & Southeast Asia",
    "iso3": "VNM"
  },
  {
    "name": "Yemen",
    "continent": "Middle East",
    "iso3": "YEM"
  },
  {
    "name": "Zambia",
    "continent": "Africa",
    "iso3": "ZMB"
  },
  {
    "name": "Zimbabwe",
    "continent": "Africa",
    "iso3": "ZWE"
  },
  {
    "name": "British Indian Ocean Territory",
    "continent": "South Asia",
    "iso3": "IOT",
    "other": true
  },
  {
    "name": "Antarctica",
    "continent": "Antarctica",
    "iso3": "ATA",
    "other": true
  },
  {
    "name": "Taiwan",
    "continent": "East & Southeast Asia",
    "iso3": "TWN",
    "disputed": true
  },
  {
    "name": "Hong Kong",
    "continent": "East & Southeast Asia",
    "iso3": "HKG",
    "other": true
  },
  {
    "name": "Macau",
    "continent": "East & Southeast Asia",
    "iso3": "MAC",
    "other": true
  },
  {
    "name": "Christmas Island",
    "continent": "East & Southeast Asia",
    "iso3": "CXR",
    "other": true
  },
  {
    "name": "Cocos (Keeling) Islands",
    "continent": "East & Southeast Asia",
    "iso3": "CCK",
    "other": true
  },
  {
    "name": "American Samoa",
    "continent": "Oceania",
    "iso3": "ASM",
    "other": true
  },
  {
    "name": "Cook Islands",
    "continent": "Oceania",
    "iso3": "COK",
    "other": true
  },
  {
    "name": "French Polynesia",
    "continent": "Oceania",
    "iso3": "PYF",
    "other": true
  },
  {
    "name": "Guam",
    "continent": "Oceania",
    "iso3": "GUM",
    "other": true
  },
  {
    "name": "New Caledonia",
    "continent": "Oceania",
    "iso3": "NCL",
    "other": true
  },
  {
    "name": "Niue",
    "continent": "Oceania",
    "iso3": "NIU",
    "other": true
  },
  {
    "name": "Norfolk Island",
    "continent": "Oceania",
    "iso3": "NFK",
    "other": true
  },
  {
    "name": "Northern Mariana Islands",
    "continent": "Oceania",
    "iso3": "USANI",
    "other": true
  },
  {
    "name": "Pitcairn Islands",
    "continent": "Oceania",
    "iso3": "PCN",
    "other": true
  },
  {
    "name": "Tokelau",
    "continent": "Oceania",
    "iso3": "TKL",
    "other": true
  },
  {
    "name": "Wallis and Futuna",
    "continent": "Oceania",
    "iso3": "WLF",
    "other": true
  },
  {
    "name": "Falkland Islands",
    "continent": "South America",
    "iso3": "FLK",
    "other": true
  },
  {
    "name": "French Guiana",
    "continent": "South America",
    "iso3": "GUF",
    "other": true
  },
  {
    "name": "Galapagos Islands",
    "continent": "South America",
    "iso3": "ECUGI",
    "other": true
  },
  {
    "name": "Angullia",
    "continent": "Central America",
    "iso3": "AIA",
    "other": true
  },
  {
    "name": "Aruba",
    "continent": "Central America",
    "iso3": "ABW",
    "other": true
  },
  {
    "name": "Bermuda",
    "continent": "Central America",
    "iso3": "BMU",
    "other": true
  },
  {
    "name": "Bonaire",
    "continent": "Central America",
    "iso3": "BES",
    "other": true
  },
  {
    "name": "British Virgin Islands",
    "continent": "Central America",
    "iso3": "VGB",
    "other": true
  },
  {
    "name": "Cayman Islands",
    "continent": "Central America",
    "iso3": "CYM",
    "other": true
  },
  {
    "name": "Curaçao",
    "continent": "Central America",
    "iso3": "CUW",
    "other": true
  },
  {
    "name": "Guadeloupe",
    "continent": "Central America",
    "iso3": "GLP",
    "other": true
  },
  {
    "name": "Martinique",
    "continent": "Central America",
    "iso3": "MTQ",
    "other": true
  },
  {
    "name": "Montserrat",
    "continent": "Central America",
    "iso3": "MSR",
    "other": true
  },
  {
    "name": "Puerto Rico",
    "continent": "Central America",
    "iso3": "PRI",
    "other": true
  },
  {
    "name": "Saba",
    "continent": "Central America",
    "iso3": "NLDSA",
    "other": true
  },
  {
    "name": "Saint Barthélemy",
    "continent": "Central America",
    "iso3": "BLM",
    "other": true
  },
  {
    "name": "Saint Martin",
    "continent": "Central America",
    "iso3": "MAF",
    "other": true
  },
  {
    "name": "Sint Eustatius",
    "continent": "Central America",
    "iso3": "NLDSI",
    "other": true
  },
  {
    "name": "Sint Maarten",
    "continent": "Central America",
    "iso3": "SXM",
    "other": true
  },
  {
    "name": "Turks and Caicos Islands",
    "continent": "Central America",
    "iso3": "TCA",
    "other": true
  },
  {
    "name": "United States Virgin Islands",
    "continent": "Central America",
    "iso3": "VIR",
    "other": true
  },
  {
    "name": "Greenland",
    "continent": "North America",
    "iso3": "GRL",
    "other": true
  },
  {
    "name": "Saint Pierre and Miquelo",
    "continent": "North America",
    "iso3": "SPM",
    "other": true
  },
  {
    "name": "Ceuta",
    "continent": "Africa",
    "iso3": "ESPCA",
    "other": true
  },
  {
    "name": "Mayotte",
    "continent": "Africa",
    "iso3": "MYT",
    "other": true
  },
  {
    "name": "Melilla",
    "continent": "Africa",
    "iso3": "ESPME",
    "other": true
  },
  {
    "name": "Réunion",
    "continent": "Africa",
    "iso3": "REU",
    "other": true
  },
  {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "continent": "Africa",
    "iso3": "SHN",
    "other": true
  },
  {
    "name": "Somaliland",
    "continent": "Africa",
    "iso3": "SOMLN",
    "disputed": true
  },
  {
    "name": "Western Sahara",
    "continent": "Africa",
    "iso3": "ESH",
    "disputed": true
  },
  {
    "name": "Azores",
    "continent": "Europe",
    "iso3": "PRTAZ",
    "other": true
  },
  {
    "name": "Balearic Islands",
    "continent": "Europe",
    "iso3": "ESPBI",
    "other": true
  },
  {
    "name": "Canary Islands",
    "continent": "Europe",
    "iso3": "ESPCI",
    "other": true
  },
  {
    "name": "Faroe Islands",
    "continent": "Europe",
    "iso3": "FRO",
    "other": true
  },
  {
    "name": "Gibraltar",
    "continent": "Europe",
    "iso3": "GIB",
    "other": true
  },
  {
    "name": "Guernsey",
    "continent": "Europe",
    "iso3": "GUE",
    "other": true
  },
  {
    "name": "Isle of Man",
    "continent": "Europe",
    "iso3": "ISO",
    "other": true
  },
  {
    "name": "Jan Mayen",
    "continent": "Europe",
    "iso3": "NORJM",
    "other": true
  },
  {
    "name": "Jersey",
    "continent": "Europe",
    "iso3": "JER",
    "other": true
  },
  {
    "name": "Madeira",
    "continent": "Europe",
    "iso3": "PRTMD",
    "other": true
  },
  {
    "name": "Svalbard",
    "continent": "Europe",
    "iso3": "SJM",
    "other": true
  },
  {
    "name": "Åland Islands",
    "continent": "Europe",
    "iso3": "ALA",
    "other": true
  },
  {
    "name": "Kosovo",
    "continent": "Europe",
    "iso3": "SRBKV",
    "disputed": true
  },
  {
    "name": "Northern Cyprus",
    "continent": "Europe",
    "iso3": "NOCYP",
    "disputed": true
  },
  {
    "name": "Transnistria",
    "continent": "Europe",
    "iso3": "MDATN",
    "disputed": true
  },
  {
    "name": "Abkhazia",
    "continent": "Middle East",
    "iso3": "GEOAB",
    "disputed": true
  },
  {
    "name": "South Ossetia",
    "continent": "Middle East",
    "iso3": "GEOSO",
    "disputed": true
  },
] as const

export default territories