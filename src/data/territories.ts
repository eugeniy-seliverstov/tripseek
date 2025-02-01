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
    "code": "ALB",
  },
  {
    "name": "Estonia",
    "continent": "Europe",
    "code": "EST",
  },
  {
    "name": "Finland",
    "continent": "Europe",
    "code": "FIN"
  },
  {
    "name": "Russia",
    "continent": "Europe",
    "code": "RUS"
  },
  {
    "name": "Sweden",
    "continent": "Europe",
    "code": "SWE"
  },
  {
    "name": "Ukraine",
    "continent": "Europe",
    "code": "UKR"
  },
  {
    "name": "Algeria",
    "continent": "Africa",
    "code": "DZA",
  },
  {
    "name": "Angola",
    "continent": "Africa",
    "code": "AGO"
  },
  {
    "name": "Afghanistan",
    "continent": "South Asia",
    "code": "AFG"
  },
  {
    "name": "Andorra",
    "continent": "Europe",
    "code": "AND"
  },
  {
    "name": "Antigua and Barbuda",
    "continent": "Central America",
    "code": "ATG"
  },
  {
    "name": "Argentina",
    "continent": "South America",
    "code": "ARG"
  },
  {
    "name": "Armenia",
    "continent": "Middle East",
    "code": "ARM"
  },
  {
    "name": "Australia",
    "continent": "Oceania",
    "code": "AUS"
  },
  {
    "name": "Austria",
    "continent": "Europe",
    "code": "AUT"
  },
  {
    "name": "Azerbaijan",
    "continent": "Middle East",
    "code": "AZE"
  },
  {
    "name": "Bahamas",
    "continent": "Central America",
    "code": "BHS"
  },
  {
    "name": "Bahrain",
    "continent": "Middle East",
    "code": "BHR"
  },
  {
    "name": "Bangladesh",
    "continent": "South Asia",
    "code": "BGD"
  },
  {
    "name": "Barbados",
    "continent": "Central America",
    "code": "BRB"
  },
  {
    "name": "Belarus",
    "continent": "Europe",
    "code": "BLR"
  },
  {
    "name": "Belgium",
    "continent": "Europe",
    "code": "BEL"
  },
  {
    "name": "Belize",
    "continent": "Central America",
    "code": "BLZ"
  },
  {
    "name": "Benin",
    "continent": "Africa",
    "code": "BEN"
  },
  {
    "name": "Bhutan",
    "continent": "South Asia",
    "code": "BTN"
  },
  {
    "name": "Bolivia",
    "continent": "South America",
    "code": "BOL"
  },
  {
    "name": "Bosnia and Herzegovina",
    "continent": "Europe",
    "code": "BIH"
  },
  {
    "name": "Botswana",
    "continent": "Africa",
    "code": "BWA"
  },
  {
    "name": "Brazil",
    "continent": "South America",
    "code": "BRA"
  },
  {
    "name": "Brunei",
    "continent": "East & Southeast Asia",
    "code": "BRN"
  },
  {
    "name": "Bulgaria",
    "continent": "Europe",
    "code": "BGR"
  },
  {
    "name": "Burkina Faso",
    "continent": "Africa",
    "code": "BFA"
  },
  {
    "name": "Burundi",
    "continent": "Africa",
    "code": "BDI"
  },
  {
    "name": "Cambodia",
    "continent": "East & Southeast Asia",
    "code": "KHM"
  },
  {
    "name": "Cameroon",
    "continent": "Africa",
    "code": "CMR"
  },
  {
    "name": "Canada",
    "continent": "North America",
    "code": "CAN"
  },
  {
    "name": "Cape Verde",
    "continent": "Africa",
    "code": "CPV"
  },
  {
    "name": "Central African Republic",
    "continent": "Africa",
    "code": "CAF"
  },
  {
    "name": "Chad",
    "continent": "Africa",
    "code": "TCD"
  },
  {
    "name": "Chile",
    "continent": "South America",
    "code": "CHL"
  },
  {
    "name": "China",
    "continent": "East & Southeast Asia",
    "code": "CHN"
  },
  {
    "name": "Colombia",
    "continent": "South America",
    "code": "COL"
  },
  {
    "name": "Comoros",
    "continent": "Africa",
    "code": "COM"
  },
  {
    "name": "Costa Rica",
    "continent": "Central America",
    "code": "CRI"
  },
  {
    "name": "Croatia",
    "continent": "Europe",
    "code": "HRV"
  },
  {
    "name": "Cuba",
    "continent": "Central America",
    "code": "CUB"
  },
  {
    "name": "Cyprus",
    "continent": "Europe",
    "code": "CYP"
  },
  {
    "name": "Czech Republic",
    "continent": "Europe",
    "code": "CZE"
  },
  {
    "name": "Democratic Republic of the Congo",
    "continent": "Africa",
    "code": "COD"
  },
  {
    "name": "Denmark",
    "continent": "Europe",
    "code": "DNK"
  },
  {
    "name": "Djibouti",
    "continent": "Africa",
    "code": "DJI"
  },
  {
    "name": "Dominica",
    "continent": "Central America",
    "code": "DMA"
  },
  {
    "name": "Dominican Republic",
    "continent": "Central America",
    "code": "DOM"
  },
  {
    "name": "Ecuador",
    "continent": "South America",
    "code": "ECU"
  },
  {
    "name": "Egypt",
    "continent": "Africa",
    "code": "EGY"
  },
  {
    "name": "El Salvador",
    "continent": "Central America",
    "code": "SLV"
  },
  {
    "name": "Equatorial Guinea",
    "continent": "Africa",
    "code": "GNQ"
  },
  {
    "name": "Eritrea",
    "continent": "Africa",
    "code": "ERI"
  },
  {
    "name": "Eswatini",
    "continent": "Africa",
    "code": "SWZ"
  },
  {
    "name": "Ethiopia",
    "continent": "Africa",
    "code": "ETH"
  },
  {
    "name": "Fiji",
    "continent": "Oceania",
    "code": "FJI"
  },
  {
    "name": "France",
    "continent": "Europe",
    "code": "FRA"
  },
  {
    "name": "Gabon",
    "continent": "Africa",
    "code": "GAB"
  },
  {
    "name": "Georgia",
    "continent": "Middle East",
    "code": "GEO"
  },
  {
    "name": "Gambia",
    "continent": "Africa",
    "code": "GMB"
  },
  {
    "name": "Germany",
    "continent": "Europe",
    "code": "DEU"
  },
  {
    "name": "Ghana",
    "continent": "Africa",
    "code": "GHA"
  },
  {
    "name": "Greece",
    "continent": "Europe",
    "code": "GRC"
  },
  {
    "name": "Grenada",
    "continent": "Central America",
    "code": "GRD"
  },
  {
    "name": "Guatemala",
    "continent": "Central America",
    "code": "GTM"
  },
  {
    "name": "Guinea",
    "continent": "Africa",
    "code": "GIN"
  },
  {
    "name": "Guinea-Bissau",
    "continent": "Africa",
    "code": "GNB"
  },
  {
    "name": "Guyana",
    "continent": "South America",
    "code": "GUY"
  },
  {
    "name": "Haiti",
    "continent": "Central America",
    "code": "HTI"
  },
  {
    "name": "Honduras",
    "continent": "Central America",
    "code": "HND"
  },
  {
    "name": "Hungary",
    "continent": "Europe",
    "code": "HUN"
  },
  {
    "name": "Iceland",
    "continent": "Europe",
    "code": "ISL"
  },
  {
    "name": "India",
    "continent": "South Asia",
    "code": "IND"
  },
  {
    "name": "Indonesia",
    "continent": "East & Southeast Asia",
    "code": "IDN"
  },
  {
    "name": "Iran",
    "continent": "Middle East",
    "code": "IRN"
  },
  {
    "name": "Iraq",
    "continent": "Middle East",
    "code": "IRQ"
  },
  {
    "name": "Ireland",
    "continent": "Europe",
    "code": "IRL"
  },
  {
    "name": "Israel",
    "continent": "Middle East",
    "code": "ISR"
  },
  {
    "name": "Italy",
    "continent": "Europe",
    "code": "ITA"
  },
  {
    "name": "Ivory Coast",
    "continent": "Africa",
    "code": "CIV"
  },
  {
    "name": "Jamaica",
    "continent": "Central America",
    "code": "JAM"
  },
  {
    "name": "Japan",
    "continent": "East & Southeast Asia",
    "code": "JPN"
  },
  {
    "name": "Jordan",
    "continent": "Middle East",
    "code": "JOR"
  },
  {
    "name": "Kazakhstan",
    "continent": "Central Asia",
    "code": "KAZ"
  },
  {
    "name": "Kenya",
    "continent": "Africa",
    "code": "KEN"
  },
  {
    "name": "Kiribati",
    "continent": "Oceania",
    "code": "KIR"
  },
  {
    "name": "Kuwait",
    "continent": "Middle East",
    "code": "KWT"
  },
  {
    "name": "Kyrgyzstan",
    "continent": "Central Asia",
    "code": "KGZ"
  },
  {
    "name": "Laos",
    "continent": "East & Southeast Asia",
    "code": "LAO"
  },
  {
    "name": "Latvia",
    "continent": "Europe",
    "code": "LVA"
  },
  {
    "name": "Lebanon",
    "continent": "Middle East",
    "code": "LBN"
  },
  {
    "name": "Lesotho",
    "continent": "Africa",
    "code": "LSO"
  },
  {
    "name": "Liberia",
    "continent": "Africa",
    "code": "LBR"
  },
  {
    "name": "Libya",
    "continent": "Africa",
    "code": "LBY"
  },
  {
    "name": "Liechtenstein",
    "continent": "Europe",
    "code": "LIE"
  },
  {
    "name": "Lithuania",
    "continent": "Europe",
    "code": "LTU"
  },
  {
    "name": "Luxembourg",
    "continent": "Europe",
    "code": "LUX"
  },
  {
    "name": "Madagascar",
    "continent": "Africa",
    "code": "MDG"
  },
  {
    "name": "Malawi",
    "continent": "Africa",
    "code": "MWI"
  },
  {
    "name": "Malaysia",
    "continent": "East & Southeast Asia",
    "code": "MYS"
  },
  {
    "name": "Maldives",
    "continent": "South Asia",
    "code": "MDV"
  },
  {
    "name": "Mali",
    "continent": "Africa",
    "code": "MLI"
  },
  {
    "name": "Malta",
    "continent": "Europe",
    "code": "MLT"
  },
  {
    "name": "Marshall Islands",
    "continent": "Oceania",
    "code": "MHL"
  },
  {
    "name": "Mauritania",
    "continent": "Africa",
    "code": "MRT"
  },
  {
    "name": "Mauritius",
    "continent": "Africa",
    "code": "MUS"
  },
  {
    "name": "Mexico",
    "continent": "North America",
    "code": "MEX"
  },
  {
    "name": "Micronesia",
    "continent": "Oceania",
    "code": "FSM"
  },
  {
    "name": "Moldova",
    "continent": "Europe",
    "code": "MDA"
  },
  {
    "name": "Monaco",
    "continent": "Europe",
    "code": "MCO"
  },
  {
    "name": "Mongolia",
    "continent": "East & Southeast Asia",
    "code": "MNG"
  },
  {
    "name": "Montenegro",
    "continent": "Europe",
    "code": "MNE"
  },
  {
    "name": "Morocco",
    "continent": "Africa",
    "code": "MAR"
  },
  {
    "name": "Mozambique",
    "continent": "Africa",
    "code": "MOZ"
  },
  {
    "name": "Myanmar",
    "continent": "East & Southeast Asia",
    "code": "MMR"
  },
  {
    "name": "Namibia",
    "continent": "Africa",
    "code": "NAM"
  },
  {
    "name": "Nauru",
    "continent": "Oceania",
    "code": "NRU"
  },
  {
    "name": "Nepal",
    "continent": "South Asia",
    "code": "NPL"
  },
  {
    "name": "Netherlands",
    "continent": "Europe",
    "code": "NLD"
  },
  {
    "name": "New Zealand",
    "continent": "Oceania",
    "code": "NZL"
  },
  {
    "name": "Nicaragua",
    "continent": "Central America",
    "code": "NIC"
  },
  {
    "name": "Niger",
    "continent": "Africa",
    "code": "NER"
  },
  {
    "name": "Nigeria",
    "continent": "Africa",
    "code": "NGA"
  },
  {
    "name": "North Korea",
    "continent": "East & Southeast Asia",
    "code": "PRK"
  },
  {
    "name": "North Macedonia",
    "continent": "Europe",
    "code": "MKD"
  },
  {
    "name": "Norway",
    "continent": "Europe",
    "code": "NOR"
  },
  {
    "name": "Oman",
    "continent": "Middle East",
    "code": "OMN"
  },
  {
    "name": "Pakistan",
    "continent": "South Asia",
    "code": "PAK"
  },
  {
    "name": "Palau",
    "continent": "Oceania",
    "code": "PLW"
  },
  {
    "name": "Panama",
    "continent": "Central America",
    "code": "PAN"
  },
  {
    "name": "Palestine",
    "continent": "Middle East",
    "code": "PSE"
  },
  {
    "name": "Papua New Guinea",
    "continent": "Oceania",
    "code": "PNG"
  },
  {
    "name": "Paraguay",
    "continent": "South America",
    "code": "PRY"
  },
  {
    "name": "Peru",
    "continent": "South America",
    "code": "PER"
  },
  {
    "name": "Philippines",
    "continent": "East & Southeast Asia",
    "code": "PHL"
  },
  {
    "name": "Poland",
    "continent": "Europe",
    "code": "POL"
  },
  {
    "name": "Portugal",
    "continent": "Europe",
    "code": "PRT"
  },
  {
    "name": "Qatar",
    "continent": "Middle East",
    "code": "QAT"
  },
  {
    "name": "Republic of Congo",
    "continent": "Africa",
    "code": "COG"
  },
  {
    "name": "Romania",
    "continent": "Europe",
    "code": "ROU"
  },
  {
    "name": "Rwanda",
    "continent": "Africa",
    "code": "RWA"
  },
  {
    "name": "Saint Kitts and Nevis",
    "continent": "Central America",
    "code": "KNA"
  },
  {
    "name": "Saint Lucia",
    "continent": "Central America",
    "code": "LCA"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "continent": "Central America",
    "code": "VCT"
  },
  {
    "name": "Samoa",
    "continent": "Oceania",
    "code": "WSM"
  },
  {
    "name": "San Marino",
    "continent": "Europe",
    "code": "SMR"
  },
  {
    "name": "Sao Tome and Principe",
    "continent": "Africa",
    "code": "STP"
  },
  {
    "name": "Saudi Arabia",
    "continent": "Middle East",
    "code": "SAU"
  },
  {
    "name": "Senegal",
    "continent": "Africa",
    "code": "SEN"
  },
  {
    "name": "Serbia",
    "continent": "Europe",
    "code": "SRB"
  },
  {
    "name": "Seychelles",
    "continent": "Africa",
    "code": "SYC"
  },
  {
    "name": "Sierra Leone",
    "continent": "Africa",
    "code": "SLE"
  },
  {
    "name": "Singapore",
    "continent": "East & Southeast Asia",
    "code": "SGP"
  },
  {
    "name": "Slovakia",
    "continent": "Europe",
    "code": "SVK"
  },
  {
    "name": "Slovenia",
    "continent": "Europe",
    "code": "SVN"
  },
  {
    "name": "Solomon Islands",
    "continent": "Oceania",
    "code": "SLB"
  },
  {
    "name": "Somalia",
    "continent": "Africa",
    "code": "SOM"
  },
  {
    "name": "South Africa",
    "continent": "Africa",
    "code": "ZAF"
  },
  {
    "name": "South Korea",
    "continent": "East & Southeast Asia",
    "code": "KOR"
  },
  {
    "name": "South Sudan",
    "continent": "Africa",
    "code": "SSD"
  },
  {
    "name": "Spain",
    "continent": "Europe",
    "code": "ESP"
  },
  {
    "name": "Sri Lanka",
    "continent": "South Asia",
    "code": "LKA"
  },
  {
    "name": "Sudan",
    "continent": "Africa",
    "code": "SDN"
  },
  {
    "name": "Suriname",
    "continent": "South America",
    "code": "SUR"
  },
  {
    "name": "Switzerland",
    "continent": "Europe",
    "code": "CHE"
  },
  {
    "name": "Syria",
    "continent": "Middle East",
    "code": "SYR"
  },
  {
    "name": "Tajikistan",
    "continent": "Central Asia",
    "code": "TJK"
  },
  {
    "name": "Tanzania",
    "continent": "Africa",
    "code": "TZA"
  },
  {
    "name": "Thailand",
    "continent": "East & Southeast Asia",
    "code": "THA"
  },
  {
    "name": "Timor-Leste",
    "continent": "East & Southeast Asia",
    "code": "TLS"
  },
  {
    "name": "Togo",
    "continent": "Africa",
    "code": "TGO"
  },
  {
    "name": "Tonga",
    "continent": "Oceania",
    "code": "TON"
  },
  {
    "name": "Trinidad and Tobago",
    "continent": "Central America",
    "code": "TTO"
  },
  {
    "name": "Tunisia",
    "continent": "Africa",
    "code": "TUN"
  },
  {
    "name": "Turkey",
    "continent": "Middle East",
    "code": "TUR"
  },
  {
    "name": "Turkmenistan",
    "continent": "Central Asia",
    "code": "TKM"
  },
  {
    "name": "Tuvalu",
    "continent": "Oceania",
    "code": "TUV"
  },
  {
    "name": "Uganda",
    "continent": "Africa",
    "code": "UGA"
  },
  {
    "name": "United Arab Emirates",
    "continent": "Middle East",
    "code": "ARE"
  },
  {
    "name": "United Kingdom",
    "continent": "Europe",
    "code": "GBR"
  },
  {
    "name": "United States",
    "continent": "North America",
    "code": "USA"
  },
  {
    "name": "Uruguay",
    "continent": "South America",
    "code": "URY"
  },
  {
    "name": "Uzbekistan",
    "continent": "Central Asia",
    "code": "UZB"
  },
  {
    "name": "Vanuatu",
    "continent": "Oceania",
    "code": "VUT"
  },
  {
    "name": "Vatican City",
    "continent": "Europe",
    "code": "VAT"
  },
  {
    "name": "Venezuela",
    "continent": "South America",
    "code": "VEN"
  },
  {
    "name": "Vietnam",
    "continent": "East & Southeast Asia",
    "code": "VNM"
  },
  {
    "name": "Yemen",
    "continent": "Middle East",
    "code": "YEM"
  },
  {
    "name": "Zambia",
    "continent": "Africa",
    "code": "ZMB"
  },
  {
    "name": "Zimbabwe",
    "continent": "Africa",
    "code": "ZWE"
  },
  {
    "name": "British Indian Ocean Territory",
    "continent": "South Asia",
    "code": "IOT",
    "other": true
  },
  {
    "name": "Antarctica",
    "continent": "Antarctica",
    "code": "ATA",
    "other": true
  },
  {
    "name": "Fr. S. Antarctic Lands",
    "continent": "Antarctica",
    "code": "ATF",
    "other": true
  },
  {
    "name": "Taiwan",
    "continent": "East & Southeast Asia",
    "code": "TWN",
    "disputed": true
  },
  {
    "name": "Hong Kong",
    "continent": "East & Southeast Asia",
    "code": "HKG",
    "other": true
  },
  {
    "name": "Macau",
    "continent": "East & Southeast Asia",
    "code": "MAC",
    "other": true
  },
  {
    "name": "Christmas Island",
    "continent": "East & Southeast Asia",
    "code": "CXR",
    "other": true
  },
  {
    "name": "Cocos (Keeling) Islands",
    "continent": "East & Southeast Asia",
    "code": "CCK",
    "other": true
  },
  {
    "name": "American Samoa",
    "continent": "Oceania",
    "code": "ASM",
    "other": true
  },
  {
    "name": "Cook Islands",
    "continent": "Oceania",
    "code": "COK",
    "other": true
  },
  {
    "name": "French Polynesia",
    "continent": "Oceania",
    "code": "PYF",
    "other": true
  },
  {
    "name": "Guam",
    "continent": "Oceania",
    "code": "GUM",
    "other": true
  },
  {
    "name": "New Caledonia",
    "continent": "Oceania",
    "code": "NCL",
    "other": true
  },
  {
    "name": "Niue",
    "continent": "Oceania",
    "code": "NIU",
    "other": true
  },
  {
    "name": "Norfolk Island",
    "continent": "Oceania",
    "code": "NFK",
    "other": true
  },
  {
    "name": "Northern Mariana Islands",
    "continent": "Oceania",
    "code": "USANI",
    "other": true
  },
  {
    "name": "Pitcairn Islands",
    "continent": "Oceania",
    "code": "PCN",
    "other": true
  },
  {
    "name": "Tokelau",
    "continent": "Oceania",
    "code": "TKL",
    "other": true
  },
  {
    "name": "Wallis and Futuna",
    "continent": "Oceania",
    "code": "WLF",
    "other": true
  },
  {
    "name": "Falkland Islands",
    "continent": "South America",
    "code": "FLK",
    "other": true
  },
  {
    "name": "French Guiana",
    "continent": "South America",
    "code": "GUF",
    "other": true
  },
  {
    "name": "Galapagos Islands",
    "continent": "South America",
    "code": "ECUGI",
    "other": true
  },
  {
    "name": "Angullia",
    "continent": "Central America",
    "code": "AIA",
    "other": true
  },
  {
    "name": "Aruba",
    "continent": "Central America",
    "code": "ABW",
    "other": true
  },
  {
    "name": "Bermuda",
    "continent": "Central America",
    "code": "BMU",
    "other": true
  },
  {
    "name": "Bonaire",
    "continent": "Central America",
    "code": "BES",
    "other": true
  },
  {
    "name": "British Virgin Islands",
    "continent": "Central America",
    "code": "VGB",
    "other": true
  },
  {
    "name": "Cayman Islands",
    "continent": "Central America",
    "code": "CYM",
    "other": true
  },
  {
    "name": "Curaçao",
    "continent": "Central America",
    "code": "CUW",
    "other": true
  },
  {
    "name": "Guadeloupe",
    "continent": "Central America",
    "code": "GLP",
    "other": true
  },
  {
    "name": "Martinique",
    "continent": "Central America",
    "code": "MTQ",
    "other": true
  },
  {
    "name": "Montserrat",
    "continent": "Central America",
    "code": "MSR",
    "other": true
  },
  {
    "name": "Puerto Rico",
    "continent": "Central America",
    "code": "PRI",
    "other": true
  },
  {
    "name": "Saba",
    "continent": "Central America",
    "code": "NLDSA",
    "other": true
  },
  {
    "name": "Saint Barthélemy",
    "continent": "Central America",
    "code": "BLM",
    "other": true
  },
  {
    "name": "Saint Martin",
    "continent": "Central America",
    "code": "MAF",
    "other": true
  },
  {
    "name": "Sint Eustatius",
    "continent": "Central America",
    "code": "NLDSI",
    "other": true
  },
  {
    "name": "Sint Maarten",
    "continent": "Central America",
    "code": "SXM",
    "other": true
  },
  {
    "name": "Turks and Caicos Islands",
    "continent": "Central America",
    "code": "TCA",
    "other": true
  },
  {
    "name": "United States Virgin Islands",
    "continent": "Central America",
    "code": "VIR",
    "other": true
  },
  {
    "name": "Greenland",
    "continent": "North America",
    "code": "GRL",
    "other": true
  },
  {
    "name": "Saint Pierre and Miquelo",
    "continent": "North America",
    "code": "SPM",
    "other": true
  },
  {
    "name": "Ceuta",
    "continent": "Africa",
    "code": "ESPCA",
    "other": true
  },
  {
    "name": "Mayotte",
    "continent": "Africa",
    "code": "MYT",
    "other": true
  },
  {
    "name": "Melilla",
    "continent": "Africa",
    "code": "ESPME",
    "other": true
  },
  {
    "name": "Réunion",
    "continent": "Africa",
    "code": "REU",
    "other": true
  },
  {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "continent": "Africa",
    "code": "SHN",
    "other": true
  },
  {
    "name": "Somaliland",
    "continent": "Africa",
    "code": "SOMLN",
    "disputed": true
  },
  {
    "name": "Western Sahara",
    "continent": "Africa",
    "code": "ESH",
    "disputed": true
  },
  {
    "name": "Azores",
    "continent": "Europe",
    "code": "PRTAZ",
    "other": true
  },
  {
    "name": "Balearic Islands",
    "continent": "Europe",
    "code": "ESPBI",
    "other": true
  },
  {
    "name": "Canary Islands",
    "continent": "Europe",
    "code": "ESPCI",
    "other": true
  },
  {
    "name": "Faroe Islands",
    "continent": "Europe",
    "code": "FRO",
    "other": true
  },
  {
    "name": "Gibraltar",
    "continent": "Europe",
    "code": "GIB",
    "other": true
  },
  {
    "name": "Guernsey",
    "continent": "Europe",
    "code": "GUE",
    "other": true
  },
  {
    "name": "Isle of Man",
    "continent": "Europe",
    "code": "ISO",
    "other": true
  },
  {
    "name": "Jan Mayen",
    "continent": "Europe",
    "code": "NORJM",
    "other": true
  },
  {
    "name": "Jersey",
    "continent": "Europe",
    "code": "JER",
    "other": true
  },
  {
    "name": "Madeira",
    "continent": "Europe",
    "code": "PRTMD",
    "other": true
  },
  {
    "name": "Svalbard",
    "continent": "Europe",
    "code": "SJM",
    "other": true
  },
  {
    "name": "Åland Islands",
    "continent": "Europe",
    "code": "ALA",
    "other": true
  },
  {
    "name": "Kosovo",
    "continent": "Europe",
    "code": "SRBKV",
    "disputed": true
  },
  {
    "name": "Northern Cyprus",
    "continent": "Europe",
    "code": "NOCYP",
    "disputed": true
  },
  {
    "name": "Transnistria",
    "continent": "Europe",
    "code": "MDATN",
    "disputed": true
  },
  {
    "name": "Abkhazia",
    "continent": "Middle East",
    "code": "GEOAB",
    "disputed": true
  },
  {
    "name": "South Ossetia",
    "continent": "Middle East",
    "code": "GEOSO",
    "disputed": true
  },
] as const

export default territories