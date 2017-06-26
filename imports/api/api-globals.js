export const APIGlobals = {
  // NOTES
  notes: `Current Rates are based on shipment of cargo that is suitably packed for international shipment by Ocean shipment.
Special attention is drawn to any Wood Packing Regulations applicable, failure to comply with these conditions: which can vary from Country to Country, could result in cargo being returned to origin at your expense.
All quotations are subject to carrier available capacity.
Any Transit Times quoted are for indicative purposes only, and are as per Shipping Lines advertised schedules. Agility cannot be held liable for any deviations from the Transit Times listed.
Unless otherwise agreed in writing, the Company shall be, after acceptance, at liberty to revise quotations or charges with or without notice in the event of changes outside the Company's control occurring in currency exchange rates, rates of freight, insurance premiums or any charges applicable to the goods.
Rates of Exchange are for indicative purposes only and do not represent actual rate of exchange which is variable.
Surcharges shown as zero are either included or not currently applicable, however, all Surcharges are Valid At Time Of Shipment (VATOS) and subject to change.
Rates quoted are current and carry validity as per quote, however are subject to change with / without notice.
Our pricing proposal does not include insurance, we are happy to offer this cover on receipt of further specific details of commodity and values.
Out of gauge, hazardous, perishable cargo may be subject to additional charges.
Heavyweight Cargo may be subject to a surcharge.
All shipments consigned to a bank shall be released against original bank endorsed bills of lading.
Charge for the use of Agility Deferment on Import Entries will be quoted upon application.
Estimates and quotations are given on the basis of immediate acceptance and are subject to withdrawl or revision.
All business is undertaken subject to the current editions of our standard trading conditions which are UKWA (warehousing) and BIFA (all other business).`,

  // CARRIERS
  carrierOptions: [
    { value: '', label: 'Agility Choice' },
    { value: 'MAEU', label: 'Maersk – MAEU' },
    { value: 'SUDU', label: 'Hamburg Sud – SUDU' },
  ],

  // DEFAULT CHARGES
  defaultCollectionCharges: [
    {
      name: 'Inland Transport',
      group: 'Origin',
      chargeCode: 'ITP',
      route: ['receipt', 'departure'],
    },
    {
      name: 'Fuel Surcharge',
      group: 'Origin',
      chargeCode: 'FSC',
      route: ['receipt', 'departure'],
    },
  ],

  defaultInternationalFreightCharges: [
    {
      name: 'Terminal Handling Charge',
      group: 'Origin',
      chargeCode: 'THC',
      route: ['departure'],
    },
    {
      name: 'International Freight',
      group: 'International',
      chargeCode: 'IFR',
      route: ['departure', 'arrival'],
    },
    {
      name: 'Terminal Handling Charge',
      group: 'Destination',
      chargeCode: 'THC',
      route: ['arrival'],
    },
  ],

  defaultDeliveryCharges: [
    {
      name: 'Inland Transport',
      group: 'Destination',
      chargeCode: 'ITP',
      route: ['arrival', 'delivery'],
    },
    {
      name: 'Fuel Surcharge',
      group: 'Destination',
      chargeCode: 'FSC',
      route: ['arrival', 'delivery'],
    },
  ],

  incotermOptions: [
    { value: 'CFR', label: 'CFR' },
    { value: 'CIF', label: 'CIF' },
    { value: 'CIP', label: 'CIP' },
    { value: 'CPT', label: 'CPT' },
    { value: 'DAF', label: 'DAF' },
    { value: 'DAP', label: 'DAP' },
    { value: 'DAT', label: 'DAT' },
    { value: 'DDP', label: 'DDP' },
    { value: 'DDU', label: 'DDU' },
    { value: 'EXW', label: 'EXW' },
    { value: 'FAS', label: 'FAS' },
    { value: 'FCA', label: 'FCA' },
    { value: 'FOB', label: 'FOB' },
  ],
  commercialPartyOptions: [
    { value: 'Seller', label: 'Seller' },
    { value: 'Buyer', label: 'Buyer' },
  ],
  mblTypeOptions: ['Waybill', 'Original', ''],
  mblTermsOptions: ['Prepaid', 'Collect', ''],
  seaquestTypeOptions: ['Original', 'Express', ''],
  originHaulageByOptions: ['Agility', 'Customer', ''],
  originCustomsByOptions: ['Agility', 'Customer', ''],
  destinationHaulageByOptions: ['Agility', 'Customer', ''],
  destinationCustomsByOptions: ['Agility', 'Customer', ''],
  volumetricRatioOptions: ['1:1', '1:2', '1:3', '1:4', '1:5', '1:6'],
  measurementSystemOptions: ['Metric', 'Imperial'],
  directionOptions: ['Export', 'Import'],
  modeOptions: ['Ocean', 'Air', 'Road'],
  airServiceOptions: ['Premier', 'Expedited', 'Express', ''],
  oceanServiceOptions: ['FCL', 'LCL', 'Breakbulk', ''],
  roadServiceOptions: ['FTL', 'LTL', ''],

  // Common
  currencyOptions: [
    { value: 'AED', label: 'AED' },
    { value: 'AFN', label: 'AFN' },
    { value: 'ALL', label: 'ALL' },
    { value: 'AMD', label: 'AMD' },
    { value: 'ANG', label: 'ANG' },
    { value: 'AOA', label: 'AOA' },
    { value: 'ARS', label: 'ARS' },
    { value: 'AUD', label: 'AUD' },
    { value: 'AZN', label: 'AZN' },
    { value: 'BAM', label: 'BAM' },
    { value: 'BBD', label: 'BBD' },
    { value: 'BDT', label: 'BDT' },
    { value: 'BGN', label: 'BGN' },
    { value: 'BHD', label: 'BHD' },
    { value: 'BIF', label: 'BIF' },
    { value: 'BMD', label: 'BMD' },
    { value: 'BND', label: 'BND' },
    { value: 'BOB', label: 'BOB' },
    { value: 'BRL', label: 'BRL' },
    { value: 'BSD', label: 'BSD' },
    { value: 'BTN', label: 'BTN' },
    { value: 'BWP', label: 'BWP' },
    { value: 'BYN', label: 'BYN' },
    { value: 'BZD', label: 'BZD' },
    { value: 'CAD', label: 'CAD' },
    { value: 'CDF', label: 'CDF' },
    { value: 'CHF', label: 'CHF' },
    { value: 'CLP', label: 'CLP' },
    { value: 'CNY', label: 'CNY' },
    { value: 'COP', label: 'COP' },
    { value: 'CRC', label: 'CRC' },
    { value: 'CUC', label: 'CUC' },
    { value: 'CUP', label: 'CUP' },
    { value: 'CVE', label: 'CVE' },
    { value: 'CZK', label: 'CZK' },
    { value: 'DJF', label: 'DJF' },
    { value: 'DKK', label: 'DKK' },
    { value: 'DOP', label: 'DOP' },
    { value: 'DZD', label: 'DZD' },
    { value: 'EGP', label: 'EGP' },
    { value: 'ERN', label: 'ERN' },
    { value: 'ETB', label: 'ETB' },
    { value: 'EUR', label: 'EUR' },
    { value: 'FJD', label: 'FJD' },
    { value: 'FKP', label: 'FKP' },
    { value: 'GBP', label: 'GBP' },
    { value: 'GEL', label: 'GEL' },
    { value: 'GGP', label: 'GGP' },
    { value: 'GHS', label: 'GHS' },
    { value: 'GIP', label: 'GIP' },
    { value: 'GMD', label: 'GMD' },
    { value: 'GNF', label: 'GNF' },
    { value: 'GTQ', label: 'GTQ' },
    { value: 'GYD', label: 'GYD' },
    { value: 'HKD', label: 'HKD' },
    { value: 'HNL', label: 'HNL' },
    { value: 'HRK', label: 'HRK' },
    { value: 'HTG', label: 'HTG' },
    { value: 'HUF', label: 'HUF' },
    { value: 'IDR', label: 'IDR' },
    { value: 'ILS', label: 'ILS' },
    { value: 'IMP', label: 'IMP' },
    { value: 'INR', label: 'INR' },
    { value: 'IQD', label: 'IQD' },
    { value: 'IRR', label: 'IRR' },
    { value: 'ISK', label: 'ISK' },
    { value: 'JEP', label: 'JEP' },
    { value: 'JMD', label: 'JMD' },
    { value: 'JOD', label: 'JOD' },
    { value: 'JPY', label: 'JPY' },
    { value: 'KES', label: 'KES' },
    { value: 'KGS', label: 'KGS' },
    { value: 'KHR', label: 'KHR' },
    { value: 'KMF', label: 'KMF' },
    { value: 'KPW', label: 'KPW' },
    { value: 'KRW', label: 'KRW' },
    { value: 'KWD', label: 'KWD' },
    { value: 'KYD', label: 'KYD' },
    { value: 'KZT', label: 'KZT' },
    { value: 'LAK', label: 'LAK' },
    { value: 'LBP', label: 'LBP' },
    { value: 'LKR', label: 'LKR' },
    { value: 'LRD', label: 'LRD' },
    { value: 'LSL', label: 'LSL' },
    { value: 'LYD', label: 'LYD' },
    { value: 'MAD', label: 'MAD' },
    { value: 'MDL', label: 'MDL' },
    { value: 'MGA', label: 'MGA' },
    { value: 'MKD', label: 'MKD' },
    { value: 'MMK', label: 'MMK' },
    { value: 'MNT', label: 'MNT' },
    { value: 'MOP', label: 'MOP' },
    { value: 'MRO', label: 'MRO' },
    { value: 'MUR', label: 'MUR' },
    { value: 'MVR', label: 'MVR' },
    { value: 'MWK', label: 'MWK' },
    { value: 'MXN', label: 'MXN' },
    { value: 'MYR', label: 'MYR' },
    { value: 'MZN', label: 'MZN' },
    { value: 'NAD', label: 'NAD' },
    { value: 'NGN', label: 'NGN' },
    { value: 'NIO', label: 'NIO' },
    { value: 'NOK', label: 'NOK' },
    { value: 'NPR', label: 'NPR' },
    { value: 'NZD', label: 'NZD' },
    { value: 'OMR', label: 'OMR' },
    { value: 'PAB', label: 'PAB' },
    { value: 'PEN', label: 'PEN' },
    { value: 'PGK', label: 'PGK' },
    { value: 'PHP', label: 'PHP' },
    { value: 'PKR', label: 'PKR' },
    { value: 'PLN', label: 'PLN' },
    { value: 'PYG', label: 'PYG' },
    { value: 'QAR', label: 'QAR' },
    { value: 'RON', label: 'RON' },
    { value: 'RSD', label: 'RSD' },
    { value: 'RUB', label: 'RUB' },
    { value: 'RWF', label: 'RWF' },
    { value: 'SAR', label: 'SAR' },
    { value: 'SBD', label: 'SBD' },
    { value: 'SCR', label: 'SCR' },
    { value: 'SDG', label: 'SDG' },
    { value: 'SEK', label: 'SEK' },
    { value: 'SGD', label: 'SGD' },
    { value: 'SHP', label: 'SHP' },
    { value: 'SLL', label: 'SLL' },
    { value: 'SOS', label: 'SOS' },
    { value: 'SPL', label: 'SPL' },
    { value: 'SRD', label: 'SRD' },
    { value: 'STD', label: 'STD' },
    { value: 'SVC', label: 'SVC' },
    { value: 'SYP', label: 'SYP' },
    { value: 'SZL', label: 'SZL' },
    { value: 'THB', label: 'THB' },
    { value: 'TJS', label: 'TJS' },
    { value: 'TMT', label: 'TMT' },
    { value: 'TND', label: 'TND' },
    { value: 'TOP', label: 'TOP' },
    { value: 'TRY', label: 'TRY' },
    { value: 'TTD', label: 'TTD' },
    { value: 'TVD', label: 'TVD' },
    { value: 'TWD', label: 'TWD' },
    { value: 'TZS', label: 'TZS' },
    { value: 'UAH', label: 'UAH' },
    { value: 'UGX', label: 'UGX' },
    { value: 'USD', label: 'USD' },
    { value: 'UYU', label: 'UYU' },
    { value: 'UZS', label: 'UZS' },
    { value: 'VEF', label: 'VEF' },
    { value: 'VND', label: 'VND' },
    { value: 'VUV', label: 'VUV' },
    { value: 'WST', label: 'WST' },
    { value: 'XAF', label: 'XAF' },
    { value: 'XCD', label: 'XCD' },
    { value: 'XDR', label: 'XDR' },
    { value: 'XOF', label: 'XOF' },
    { value: 'XPF', label: 'XPF' },
    { value: 'YER', label: 'YER' },
    { value: 'ZAR', label: 'ZAR' },
    { value: 'ZMW', label: 'ZMW' },
    { value: 'ZWD', label: 'ZWD' },
  ],
  chargeUOMOptions: ['kg', 'cbm', 'lb', 'cu ft', 'km', 'mile', 'container', ''],

  // Cargo
  packageTypeOptions: [
    { value: 'Packages', label: 'Packages' },
    { value: 'Boxes', label: 'Boxes' },
    { value: 'Pallets', label: 'Pallets' },
    { value: 'Cases', label: 'Cases' },
  ],

  rateBasisOptions: [
    { value: 'Shipment', label: 'Shipment' },
    { value: 'KG', label: 'KG' },
    { value: 'CBM', label: 'CBM' },
    { value: 'Container', label: 'Container' },
    { value: 'TEU', label: 'TEU' },
    { value: 'Package', label: 'Package' },
    { value: 'Declaration', label: 'Declaration' },
    { value: 'HAWB', label: 'HAWB' },
    { value: 'KM', label: 'KM' },
    { value: 'Mile', label: 'Mile' },
  ],

  // Quotes
  quoteStatusOptions: ['Issued', 'Expired', 'Draft', 'Canceled'],
  quoteTypeOptions: ['Single Route', 'Multi Route'],
  quoteRateTypeOptions: ['Rated', 'Itemized'],

  // Shipments
  shipmentStatusOptions: [
    'Received',
    'Booked',
    'Departed',
    'Arrived',
    'Released',
    'Delivered',
    'Closed',
    'Canceled',
  ],

  // Invoices
  invoiceStatusOptions: ['Issued', 'Draft', 'Canceled'],

  // UNLocations
  unLocationsMaxResults: 10,

  // TEMP!!!!
  cityOptions: ['Shanghai', 'Basel', 'Seoul', ''],
  airportOptions: [
    'Shanghai Hongquiao - SHA',
    'Shanghai Pudong - PVG',
    'Frankfurt - FRA',
    'Basel Mulhouse - BSL',
  ],
  portOptions: [
    'Rotterdam - NLROT',
    'Hamburg - DEHAM',
    'Singapore - SGSIN',
    '',
  ],
  indiaPortOptions: ['INNSA', 'INMAA', 'INBOM'],
  ukPortOptions: ['GBFXT', 'GBSOU', 'GBLGW'],

  // Functions
  noop: () => null,
};
