// Массив кодов стран
// const scratchCountryCodes = [
//   "IDN", "MYS", "IND", "RUS", "FRA", "TUR", "ISR", "GBR", "ITA", "CYP", "DEU", "UKR", "BLR", "BEL",
//   "NLD", "GRC", "ESP", "BGR", "AUT", "TUN", "PHL", "KAZ", "KHM", "VNM", "LUX", "CHE", "ROU", "MDA",
//   "POL", "SVK", "CZE", "HUN", "HRV", "SVN", "BIH", "MNE", "SRB", "SRBKV", "ALB", "MKD", "LBY", "TCD",
//   "SDN", "EGY", "SAU", "YEM", "SOMLN", "SOM", "ETH", "ERI", "DJI", "IRQ", "SYR", "JOR", "LBN", "PSE",
//   "GEO", "ARM", "AZE", "IRN", "TKM", "UZB", "AFG", "TJK", "KGZ", "CHN", "MNG", "THA", "LAO", "MMR",
//   "BGD", "BTN", "NPL", "PAK", "OMN", "ARE", "QAT", "BHR", "KWT", "LKA", "TWN", "JPN", "KOR", "PRK",
//   "NOR", "SWE", "FIN", "EST", "LVA", "LTU", "DNK", "IRL", "PRT", "ISL", "GRL", "MLI", "MRT", "ESH",
//   "MAR", "DZA", "NER", "NGA", "CMR", "CAF", "COG", "GAB", "GNQ", "COD", "AGO", "ZMB", "TZA", "KEN",
//   "UGA", "SSD", "BDI", "RWA", "MOZ", "MWI", "ZWE", "BWA", "ZAF", "LSO", "SWZ", "NAM", "GHA", "BEN",
//   "TGO", "BFA", "CIV", "LBR", "GIN", "SLE", "GNB", "SEN", "GMB", "ESPCI", "PRTMD", "ESPBI", "PRTAZ",
//   "CPV", "CAN", "USA", "MEX", "BRA", "ARG", "CHL", "URY", "PRY", "BOL", "PER", "COL", "ECU", "PAN",
//   "CRI", "NIC", "HND", "SLV", "GTM", "BLZ", "CUB", "JAM", "HTI", "DOM", "BHS", "TCA", "PRI", "GLP",
//   "ATG", "KNA", "MSR", "NLDSI", "BLM", "SXM", "MAF", "AIA", "NLDSA", "VIR", "VGB", "VEN", "GUY",
//   "SUR", "GUF", "TTO", "BRB", "VCT", "GRD", "LCA", "MTQ", "DMA", "FLK", "MDG", "REU", "MUS", "SJM",
//   "AUS", "PNG", "SLB", "NCL", "VUT", "NZL", "FJI", "WSM", "ASM", "NIU", "TON", "TKL", "WLF", "TUV",
//   "MHL", "FSM", "ECUGI", "ATA", "FRO", "ISO", "JER", "GUE", "AND", "VAT", "SMR", "NOCYP", "MDATN",
//   "LIE", "MLT", "MCO", "ALA", "NORJM", "GIB", "COM", "STP", "SYC", "ESPCA", "MYT", "ESPME", "SHN",
//   "GEOAB", "GEOSO", "ABW", "BMU", "BES", "CYM", "CUW", "SPM", "MDV", "IOT", "COK", "PYF"
// ];


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
  {
    "name": "Albania",
    "continent": "Europe",
    "iso2": "AL",
    "iso3": "ALB",
  },
  {
    "name": "Estonia",
    "continent": "Europe",
    "iso2": "EE",
    "iso3": "EST",
  },
  {
    "name": "Finland",
    "continent": "Europe",
    "iso2": "FI",
    "iso3": "FIN"
  },
  {
    "name": "Russia",
    "continent": "Europe",
    "iso2": "RU",
    "iso3": "RUS"
  },
  {
    "name": "Sweden",
    "continent": "Europe",
    "iso2": "SE",
    "iso3": "SWE"
  },
  {
    "name": "Ukraine",
    "continent": "Europe",
    "iso2": "UA",
    "iso3": "UKR"
  },
  {
    "name": "Algeria",
    "continent": "Africa",
    "iso2": "DZ",
    "iso3": "DZA",
  },
  {
    "name": "Angola",
    "continent": "Africa",

    "iso2": "AO",
    "iso3": "AGO"
  },
  {
    "name": "Afghanistan",
    "continent": "South Asia",

    "iso2": "AF",
    "iso3": "AFG"
  },
  {
    "name": "Andorra",
    "continent": "Europe",

    "iso2": "AD",
    "iso3": "AND"
  },
  {
    "name": "Antigua and Barbuda",
    "continent": "Central America",

    "iso2": "AG",
    "iso3": "ATG"
  },
  {
    "name": "Argentina",
    "continent": "South America",

    "iso2": "AR",
    "iso3": "ARG"
  },
  {
    "name": "Armenia",
    "continent": "Middle East",

    "iso2": "AM",
    "iso3": "ARM"
  },
  {
    "name": "Australia",
    "continent": "Oceania",

    "iso2": "AU",
    "iso3": "AUS"
  },
  {
    "name": "Austria",
    "continent": "Europe",

    "iso2": "AT",
    "iso3": "AUT"
  },
  {
    "name": "Azerbaijan",
    "continent": "Middle East",

    "iso2": "AZ",
    "iso3": "AZE"
  },
  {
    "name": "Bahamas",
    "continent": "Central America",

    "iso2": "BS",
    "iso3": "BHS"
  },
  {
    "name": "Bahrain",
    "continent": "Middle East",

    "iso2": "BH",
    "iso3": "BHR"
  },
  {
    "name": "Bangladesh",
    "continent": "South Asia",

    "iso2": "BD",
    "iso3": "BGD"
  },
  {
    "name": "Barbados",
    "continent": "Central America",

    "iso2": "BB",
    "iso3": "BRB"
  },
  {
    "name": "Belarus",
    "continent": "Europe",

    "iso2": "BY",
    "iso3": "BLR"
  },
  {
    "name": "Belgium",
    "continent": "Europe",

    "iso2": "BE",
    "iso3": "BEL"
  },
  {
    "name": "Belize",
    "continent": "Central America",

    "iso2": "BZ",
    "iso3": "BLZ"
  },
  {
    "name": "Benin",
    "continent": "Africa",

    "iso2": "BJ",
    "iso3": "BEN"
  },
  {
    "name": "Bhutan",
    "continent": "South Asia",

    "iso2": "BT",
    "iso3": "BTN"
  },
  {
    "name": "Bolivia",
    "continent": "South America",

    "iso2": "BO",
    "iso3": "BOL"
  },
  {
    "name": "Bosnia and Herzegovina",
    "continent": "Europe",

    "iso2": "BA",
    "iso3": "BIH"
  },
  {
    "name": "Botswana",
    "continent": "Africa",

    "iso2": "BW",
    "iso3": "BWA"
  },
  {
    "name": "Brazil",
    "continent": "South America",

    "iso2": "BR",
    "iso3": "BRA"
  },
  {
    "name": "Brunei",
    "continent": "East & Southeast Asia",

    "iso2": "BN",
    "iso3": "BRN"
  },
  {
    "name": "Bulgaria",
    "continent": "Europe",

    "iso2": "BG",
    "iso3": "BGR"
  },
  {
    "name": "Burkina Faso",
    "continent": "Africa",

    "iso2": "BF",
    "iso3": "BFA"
  },
  {
    "name": "Burundi",
    "continent": "Africa",

    "iso2": "BI",
    "iso3": "BDI"
  },
  {
    "name": "Cambodia",
    "continent": "East & Southeast Asia",

    "iso2": "KH",
    "iso3": "KHM"
  },
  {
    "name": "Cameroon",
    "continent": "Africa",

    "iso2": "CM",
    "iso3": "CMR"
  },
  {
    "name": "Canada",
    "continent": "North America",

    "iso2": "CA",
    "iso3": "CAN"
  },
  {
    "name": "Cape Verde",
    "continent": "Africa",

    "iso2": "CV",
    "iso3": "CPV"
  },
  {
    "name": "Central African Republic",
    "continent": "Africa",

    "iso2": "CF",
    "iso3": "CAF"
  },
  {
    "name": "Chad",
    "continent": "Africa",

    "iso2": "TD",
    "iso3": "TCD"
  },
  {
    "name": "Chile",
    "continent": "South America",

    "iso2": "CL",
    "iso3": "CHL"
  },
  {
    "name": "China",
    "continent": "East & Southeast Asia",

    "iso2": "CN",
    "iso3": "CHN"
  },
  {
    "name": "Colombia",
    "continent": "South America",

    "iso2": "CO",
    "iso3": "COL"
  },
  {
    "name": "Comoros",
    "continent": "Africa",

    "iso2": "KM",
    "iso3": "COM"
  },
  {
    "name": "Costa Rica",
    "continent": "Central America",

    "iso2": "CR",
    "iso3": "CRI"
  },
  {
    "name": "Croatia",
    "continent": "Europe",

    "iso2": "HR",
    "iso3": "HRV"
  },
  {
    "name": "Cuba",
    "continent": "Central America",

    "iso2": "CU",
    "iso3": "CUB"
  },
  {
    "name": "Cyprus",
    "continent": "Europe",

    "iso2": "CY",
    "iso3": "CYP"
  },
  {
    "name": "Czech Republic",
    "continent": "Europe",

    "iso2": "CZ",
    "iso3": "CZE"
  },
  {
    "name": "Democratic Republic of the Congo",
    "continent": "Africa",

    "iso2": "CD",
    "iso3": "COD"
  },
  {
    "name": "Denmark",
    "continent": "Europe",

    "iso2": "DK",
    "iso3": "DNK"
  },
  {
    "name": "Djibouti",
    "continent": "Africa",

    "iso2": "DJ",
    "iso3": "DJI"
  },
  {
    "name": "Dominica",
    "continent": "Central America",

    "iso2": "DM",
    "iso3": "DMA"
  },
  {
    "name": "Dominican Republic",
    "continent": "Central America",

    "iso2": "DO",
    "iso3": "DOM"
  },
  {
    "name": "Ecuador",
    "continent": "South America",

    "iso2": "EC",
    "iso3": "ECU"
  },
  {
    "name": "Egypt",
    "continent": "Africa",

    "iso2": "EG",
    "iso3": "EGY"
  },
  {
    "name": "El Salvador",
    "continent": "Central America",

    "iso2": "SV",
    "iso3": "SLV"
  },
  {
    "name": "Equatorial Guinea",
    "continent": "Africa",

    "iso2": "GQ",
    "iso3": "GNQ"
  },
  {
    "name": "Eritrea",
    "continent": "Africa",

    "iso2": "ER",
    "iso3": "ERI"
  },
  {
    "name": "Eswatini",
    "continent": "Africa",

    "iso2": "SZ",
    "iso3": "SWZ"
  },
  {
    "name": "Ethiopia",
    "continent": "Africa",

    "iso2": "ET",
    "iso3": "ETH"
  },
  {
    "name": "Fiji",
    "continent": "Oceania",

    "iso2": "FJ",
    "iso3": "FJI"
  },
  {
    "name": "France",
    "continent": "Europe",

    "iso2": "FR",
    "iso3": "FRA"
  },
  {
    "name": "Gabon",
    "continent": "Africa",

    "iso2": "GA",
    "iso3": "GAB"
  },
  {
    "name": "Georgia",
    "continent": "Middle East",

    "iso2": "GE",
    "iso3": "GEO"
  },
  {
    "name": "Gambia",
    "continent": "Africa",

    "iso2": "GM",
    "iso3": "GMB"
  },
  {
    "name": "Germany",
    "continent": "Europe",

    "iso2": "DE",
    "iso3": "DEU"
  },
  {
    "name": "Ghana",
    "continent": "Africa",

    "iso2": "GH",
    "iso3": "GHA"
  },
  {
    "name": "Greece",
    "continent": "Europe",

    "iso2": "GR",
    "iso3": "GRC"
  },
  {
    "name": "Grenada",
    "continent": "Central America",

    "iso2": "GD",
    "iso3": "GRD"
  },
  {
    "name": "Guatemala",
    "continent": "Central America",

    "iso2": "GT",
    "iso3": "GTM"
  },
  {
    "name": "Guinea",
    "continent": "Africa",

    "iso2": "GN",
    "iso3": "GIN"
  },
  {
    "name": "Guinea-Bissau",
    "continent": "Africa",

    "iso2": "GW",
    "iso3": "GNB"
  },
  {
    "name": "Guyana",
    "continent": "South America",

    "iso2": "GY",
    "iso3": "GUY"
  },
  {
    "name": "Haiti",
    "continent": "Central America",

    "iso2": "HT",
    "iso3": "HTI"
  },
  {
    "name": "Honduras",
    "continent": "Central America",

    "iso2": "HN",
    "iso3": "HND"
  },
  {
    "name": "Hungary",
    "continent": "Europe",

    "iso2": "HU",
    "iso3": "HUN"
  },
  {
    "name": "Iceland",
    "continent": "Europe",

    "iso2": "IS",
    "iso3": "ISL"
  },
  {
    "name": "India",
    "continent": "South Asia",

    "iso2": "IN",
    "iso3": "IND"
  },
  {
    "name": "Indonesia",
    "continent": "East & Southeast Asia",

    "iso2": "ID",
    "iso3": "IDN"
  },
  {
    "name": "Iran",
    "continent": "Middle East",

    "iso2": "IR",
    "iso3": "IRN"
  },
  {
    "name": "Iraq",
    "continent": "Middle East",

    "iso2": "IQ",
    "iso3": "IRQ"
  },
  {
    "name": "Ireland",
    "continent": "Europe",

    "iso2": "IE",
    "iso3": "IRL"
  },
  {
    "name": "Israel",
    "continent": "Middle East",

    "iso2": "IL",
    "iso3": "ISR"
  },
  {
    "name": "Italy",
    "continent": "Europe",

    "iso2": "IT",
    "iso3": "ITA"
  },
  {
    "name": "Ivory Coast",
    "continent": "Africa",

    "iso2": "CI",
    "iso3": "CIV"
  },
  {
    "name": "Jamaica",
    "continent": "Central America",

    "iso2": "JM",
    "iso3": "JAM"
  },
  {
    "name": "Japan",
    "continent": "East & Southeast Asia",

    "iso2": "JP",
    "iso3": "JPN"
  },
  {
    "name": "Jordan",
    "continent": "Middle East",

    "iso2": "JO",
    "iso3": "JOR"
  },
  {
    "name": "Kazakhstan",
    "continent": "Central Asia",

    "iso2": "KZ",
    "iso3": "KAZ"
  },
  {
    "name": "Kenya",
    "continent": "Africa",

    "iso2": "KE",
    "iso3": "KEN"
  },
  {
    "name": "Kiribati",
    "continent": "Oceania",

    "iso2": "KI",
    "iso3": "KIR"
  },
  {
    "name": "Kuwait",
    "continent": "Middle East",

    "iso2": "KW",
    "iso3": "KWT"
  },
  {
    "name": "Kyrgyzstan",
    "continent": "Central Asia",

    "iso2": "KG",
    "iso3": "KGZ"
  },
  {
    "name": "Laos",
    "continent": "East & Southeast Asia",

    "iso2": "LA",
    "iso3": "LAO"
  },
  {
    "name": "Latvia",
    "continent": "Europe",

    "iso2": "LV",
    "iso3": "LVA"
  },
  {
    "name": "Lebanon",
    "continent": "Middle East",

    "iso2": "LB",
    "iso3": "LBN"
  },
  {
    "name": "Lesotho",
    "continent": "Africa",

    "iso2": "LS",
    "iso3": "LSO"
  },
  {
    "name": "Liberia",
    "continent": "Africa",

    "iso2": "LR",
    "iso3": "LBR"
  },
  {
    "name": "Libya",
    "continent": "Africa",

    "iso2": "LY",
    "iso3": "LBY"
  },
  {
    "name": "Liechtenstein",
    "continent": "Europe",

    "iso2": "LI",
    "iso3": "LIE"
  },
  {
    "name": "Lithuania",
    "continent": "Europe",

    "iso2": "LT",
    "iso3": "LTU"
  },
  {
    "name": "Luxembourg",
    "continent": "Europe",

    "iso2": "LU",
    "iso3": "LUX"
  },
  {
    "name": "Madagascar",
    "continent": "Africa",

    "iso2": "MG",
    "iso3": "MDG"
  },
  {
    "name": "Malawi",
    "continent": "Africa",

    "iso2": "MW",
    "iso3": "MWI"
  },
  {
    "name": "Malaysia",
    "continent": "East & Southeast Asia",

    "iso2": "MY",
    "iso3": "MYS"
  },
  {
    "name": "Maldives",
    "continent": "South Asia",

    "iso2": "MV",
    "iso3": "MDV"
  },
  {
    "name": "Mali",
    "continent": "Africa",

    "iso2": "ML",
    "iso3": "MLI"
  },
  {
    "name": "Malta",
    "continent": "Europe",

    "iso2": "MT",
    "iso3": "MLT"
  },
  {
    "name": "Marshall Islands",
    "continent": "Oceania",

    "iso2": "MH",
    "iso3": "MHL"
  },
  {
    "name": "Mauritania",
    "continent": "Africa",

    "iso2": "MR",
    "iso3": "MRT"
  },
  {
    "name": "Mauritius",
    "continent": "Africa",

    "iso2": "MU",
    "iso3": "MUS"
  },
  {
    "name": "Mexico",
    "continent": "North America",

    "iso2": "MX",
    "iso3": "MEX"
  },
  {
    "name": "Micronesia",
    "continent": "Oceania",

    "iso2": "FM",
    "iso3": "FSM"
  },
  {
    "name": "Moldova",
    "continent": "Europe",

    "iso2": "MD",
    "iso3": "MDA"
  },
  {
    "name": "Monaco",
    "continent": "Europe",

    "iso2": "MC",
    "iso3": "MCO"
  },
  {
    "name": "Mongolia",
    "continent": "East & Southeast Asia",

    "iso2": "MN",
    "iso3": "MNG"
  },
  {
    "name": "Montenegro",
    "continent": "Europe",

    "iso2": "ME",
    "iso3": "MNE"
  },
  {
    "name": "Morocco",
    "continent": "Africa",

    "iso2": "MA",
    "iso3": "MAR"
  },
  {
    "name": "Mozambique",
    "continent": "Africa",

    "iso2": "MZ",
    "iso3": "MOZ"
  },
  {
    "name": "Myanmar",
    "continent": "East & Southeast Asia",

    "iso2": "MM",
    "iso3": "MMR"
  },
  {
    "name": "Namibia",
    "continent": "Africa",

    "iso2": "NA",
    "iso3": "NAM"
  },
  {
    "name": "Nauru",
    "continent": "Oceania",

    "iso2": "NR",
    "iso3": "NRU"
  },
  {
    "name": "Nepal",
    "continent": "South Asia",

    "iso2": "NP",
    "iso3": "NPL"
  },
  {
    "name": "Netherlands",
    "continent": "Europe",

    "iso2": "NL",
    "iso3": "NLD"
  },
  {
    "name": "New Zealand",
    "continent": "Oceania",

    "iso2": "NZ",
    "iso3": "NZL"
  },
  {
    "name": "Nicaragua",
    "continent": "Central America",

    "iso2": "NI",
    "iso3": "NIC"
  },
  {
    "name": "Niger",
    "continent": "Africa",

    "iso2": "NE",
    "iso3": "NER"
  },
  {
    "name": "Nigeria",
    "continent": "Africa",

    "iso2": "NG",
    "iso3": "NGA"
  },
  {
    "name": "North Korea",
    "continent": "East & Southeast Asia",

    "iso2": "KP",
    "iso3": "PRK"
  },
  {
    "name": "North Macedonia",
    "continent": "Europe",

    "iso2": "MK",
    "iso3": "MKD"
  },
  {
    "name": "Norway",
    "continent": "Europe",

    "iso2": "NO",
    "iso3": "NOR"
  },
  {
    "name": "Oman",
    "continent": "Middle East",

    "iso2": "OM",
    "iso3": "OMN"
  },
  {
    "name": "Pakistan",
    "continent": "South Asia",

    "iso2": "PK",
    "iso3": "PAK"
  },
  {
    "name": "Palau",
    "continent": "Oceania",

    "iso2": "PW",
    "iso3": "PLW"
  },
  {
    "name": "Panama",
    "continent": "Central America",

    "iso2": "PA",
    "iso3": "PAN"
  },
  {
    "name": "Palestine",
    "continent": "Middle East",

    "iso2": "PS",
    "iso3": "PSE"
  },
  {
    "name": "Papua New Guinea",
    "continent": "Oceania",

    "iso2": "PG",
    "iso3": "PNG"
  },
  {
    "name": "Paraguay",
    "continent": "South America",

    "iso2": "PY",
    "iso3": "PRY"
  },
  {
    "name": "Peru",
    "continent": "South America",

    "iso2": "PE",
    "iso3": "PER"
  },
  {
    "name": "Philippines",
    "continent": "East & Southeast Asia",

    "iso2": "PH",
    "iso3": "PHL"
  },
  {
    "name": "Poland",
    "continent": "Europe",

    "iso2": "PL",
    "iso3": "POL"
  },
  {
    "name": "Portugal",
    "continent": "Europe",

    "iso2": "PT",
    "iso3": "PRT"
  },
  {
    "name": "Qatar",
    "continent": "Middle East",

    "iso2": "QA",
    "iso3": "QAT"
  },
  {
    "name": "Republic of Congo",
    "continent": "Africa",

    "iso2": "CG",
    "iso3": "COG"
  },
  {
    "name": "Romania",
    "continent": "Europe",

    "iso2": "RO",
    "iso3": "ROU"
  },
  {
    "name": "Rwanda",
    "continent": "Africa",

    "iso2": "RW",
    "iso3": "RWA"
  },
  {
    "name": "Saint Kitts and Nevis",
    "continent": "Central America",

    "iso2": "KN",
    "iso3": "KNA"
  },
  {
    "name": "Saint Lucia",
    "continent": "Central America",

    "iso2": "LC",
    "iso3": "LCA"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "continent": "Central America",

    "iso2": "VC",
    "iso3": "VCT"
  },
  {
    "name": "Samoa",
    "continent": "Oceania",

    "iso2": "WS",
    "iso3": "WSM"
  },
  {
    "name": "San Marino",
    "continent": "Europe",

    "iso2": "SM",
    "iso3": "SMR"
  },
  {
    "name": "Sao Tome and Principe",
    "continent": "Africa",

    "iso2": "ST",
    "iso3": "STP"
  },
  {
    "name": "Saudi Arabia",
    "continent": "Middle East",

    "iso2": "SA",
    "iso3": "SAU"
  },
  {
    "name": "Senegal",
    "continent": "Africa",

    "iso2": "SN",
    "iso3": "SEN"
  },
  {
    "name": "Serbia",
    "continent": "Europe",

    "iso2": "RS",
    "iso3": "SRB"
  },
  {
    "name": "Seychelles",
    "continent": "Africa",

    "iso2": "SC",
    "iso3": "SYC"
  },
  {
    "name": "Sierra Leone",
    "continent": "Africa",

    "iso2": "SL",
    "iso3": "SLE"
  },
  {
    "name": "Singapore",
    "continent": "East & Southeast Asia",

    "iso2": "SG",
    "iso3": "SGP"
  },
  {
    "name": "Slovakia",
    "continent": "Europe",

    "iso2": "SK",
    "iso3": "SVK"
  },
  {
    "name": "Slovenia",
    "continent": "Europe",

    "iso2": "SI",
    "iso3": "SVN"
  },
  {
    "name": "Solomon Islands",
    "continent": "Oceania",

    "iso2": "SB",
    "iso3": "SLB"
  },
  {
    "name": "Somalia",
    "continent": "Africa",

    "iso2": "SO",
    "iso3": "SOM"
  },
  {
    "name": "South Africa",
    "continent": "Africa",

    "iso2": "ZA",
    "iso3": "ZAF"
  },
  {
    "name": "South Korea",
    "continent": "East & Southeast Asia",

    "iso2": "KR",
    "iso3": "KOR"
  },
  {
    "name": "South Sudan",
    "continent": "Africa",

    "iso2": "SS",
    "iso3": "SSD"
  },
  {
    "name": "Spain",
    "continent": "Europe",

    "iso2": "ES",
    "iso3": "ESP"
  },
  {
    "name": "Sri Lanka",
    "continent": "South Asia",

    "iso2": "LK",
    "iso3": "LKA"
  },
  {
    "name": "Sudan",
    "continent": "Africa",

    "iso2": "SD",
    "iso3": "SDN"
  },
  {
    "name": "Suriname",
    "continent": "South America",

    "iso2": "SR",
    "iso3": "SUR"
  },
  {
    "name": "Switzerland",
    "continent": "Europe",

    "iso2": "CH",
    "iso3": "CHE"
  },
  {
    "name": "Syria",
    "continent": "Middle East",

    "iso2": "SY",
    "iso3": "SYR"
  },
  {
    "name": "Tajikistan",
    "continent": "Central Asia",

    "iso2": "TJ",
    "iso3": "TJK"
  },
  {
    "name": "Tanzania",
    "continent": "Africa",

    "iso2": "TZ",
    "iso3": "TZA"
  },
  {
    "name": "Thailand",
    "continent": "East & Southeast Asia",

    "iso2": "TH",
    "iso3": "THA"
  },
  {
    "name": "Timor-Leste",
    "continent": "East & Southeast Asia",

    "iso2": "TL",
    "iso3": "TLS"
  },
  {
    "name": "Togo",
    "continent": "Africa",

    "iso2": "TG",
    "iso3": "TGO"
  },
  {
    "name": "Tonga",
    "continent": "Oceania",

    "iso2": "TO",
    "iso3": "TON"
  },
  {
    "name": "Trinidad and Tobago",
    "continent": "Central America",

    "iso2": "TT",
    "iso3": "TTO"
  },
  {
    "name": "Tunisia",
    "continent": "Africa",

    "iso2": "TN",
    "iso3": "TUN"
  },
  {
    "name": "Turkey",
    "continent": "Middle East",

    "iso2": "TR",
    "iso3": "TUR"
  },
  {
    "name": "Turkmenistan",
    "continent": "Central Asia",

    "iso2": "TM",
    "iso3": "TKM"
  },
  {
    "name": "Tuvalu",
    "continent": "Oceania",

    "iso2": "TV",
    "iso3": "TUV"
  },
  {
    "name": "Uganda",
    "continent": "Africa",

    "iso2": "UG",
    "iso3": "UGA"
  },
  {
    "name": "United Arab Emirates",
    "continent": "Middle East",

    "iso2": "AE",
    "iso3": "ARE"
  },
  {
    "name": "United Kingdom",
    "continent": "Europe",

    "iso2": "GB",
    "iso3": "GBR"
  },
  {
    "name": "United States",
    "continent": "North America",

    "iso2": "US",
    "iso3": "USA"
  },
  {
    "name": "Uruguay",
    "continent": "South America",

    "iso2": "UY",
    "iso3": "URY"
  },
  {
    "name": "Uzbekistan",
    "continent": "Central Asia",

    "iso2": "UZ",
    "iso3": "UZB"
  },
  {
    "name": "Vanuatu",
    "continent": "Oceania",

    "iso2": "VU",
    "iso3": "VUT"
  },
  {
    "name": "Vatican City",
    "continent": "Europe",

    "iso2": "VA",
    "iso3": "VAT"
  },
  {
    "name": "Venezuela",
    "continent": "South America",

    "iso2": "VE",
    "iso3": "VEN"
  },
  {
    "name": "Vietnam",
    "continent": "East & Southeast Asia",

    "iso2": "VN",
    "iso3": "VNM"
  },
  {
    "name": "Yemen",
    "continent": "Middle East",

    "iso2": "YE",
    "iso3": "YEM"
  },
  {
    "name": "Zambia",
    "continent": "Africa",

    "iso2": "ZM",
    "iso3": "ZMB"
  },
  {
    "name": "Zimbabwe",
    "continent": "Africa",

    "iso2": "ZW",
    "iso3": "ZWE"
  }
] as const

export default territories