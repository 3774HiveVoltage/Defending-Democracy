import React, { useState } from 'react';
import logo from './src/assets/R.png';
import globalMap from './src/assets/global-map.png';
import usMap from './src/assets/US-map.png';

const images = [
  '/images/hero-1.png',
  '/images/hero-2.png',
  '/images/hero-3.png',
  '/images/hero-4.png',
  '/images/hero-5.png',
];

const unCountries = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo','Costa Rica','Côte d\'Ivoire','Croatia','Cuba','Cyprus','Czechia','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Türkiye','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activity, setActivity] = useState('');
  const [purpose, setPurpose] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [mapView, setMapView] = useState('global');

  const showPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const events = [
    {
      title: 'Downtown cleanup drive',
      activity: 'Volunteer',
      purpose: 'Environmental',
      location: "5' miles",
      details: 'Volunteer • Environmental • 5 miles',
    },
    {
      title: 'Community voting rally',
      activity: 'Protest',
      purpose: 'Voting',
      location: "10' miles",
      details: 'Protest • Voting • 10 miles',
    },
    {
      title: 'Regional justice summit',
      activity: 'Volunteer',
      purpose: 'Gender Equality',
      location: "15' miles",
      details: 'Volunteer • Gender Equality • 15 miles',
    },
    {
      title: 'Neighborhood advocacy walk',
      activity: 'Protest',
      purpose: 'Racial Equality',
      location: "10' miles",
      details: 'Protest • Racial Equality • 10 miles',
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesActivity = activity ? event.activity === activity : true;
    const matchesPurpose = purpose ? event.purpose === purpose : true;
    const matchesLocation = location ? event.location === location : true;
    return matchesActivity && matchesPurpose && matchesLocation;
  });

  const handleLocationChange = (value) => {
    setLocation(value);
    if (value !== 'Select country') {
      setSelectedCountry('');
      setCountryMenuOpen(false);
      setMapView('global');
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    if (country === 'United States') {
      setMapView('us');
    } else {
      setMapView('global');
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-12">
        <div className="mt-10 w-full rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                The world needs you.
              </h1>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <p className="text-lg md:text-xl text-gray-200 max-w-xl font-medium leading-relaxed">
                  Youth across the globe are finding their voices. At Defending Democracy,
                  we amplify those voices for the whole world to hear.
                </p>

                <a
                  href="#about-dd"
                  className="inline-block bg-[#D10024] hover:bg-red-700 text-white font-bold px-10 py-3 text-center transition-colors duration-200 whitespace-nowrap"
                >
                  About DD
                </a>
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10">
              <img
                src={images[currentImage]}
                alt={`Hero background ${currentImage + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={showPrevious}
              className="rounded-full border border-white/40 bg-white/10 p-3 text-xl transition hover:bg-white/20"
              aria-label="Previous image"
            >
              &#8249;
            </button>

            <div className="grid grid-cols-5 gap-2 h-[3px] bg-white/20 flex-1 mx-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-full ${index === currentImage ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>

            <button
              onClick={showNext}
              className="rounded-full border border-white/40 bg-white/10 p-3 text-xl transition hover:bg-white/20"
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>

          <div className="flex items-center justify-between text-xs font-semibold tracking-widest text-gray-300">
            <span>{currentImage + 1} / {images.length}</span>
            <span>Swipe through the story</span>
          </div>
        </div>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xl font-semibold text-white">
              I am interested in
            </p>

            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
              <label className="flex flex-col text-sm font-medium text-gray-300">
                <span className="mb-1">Activity</span>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="rounded-lg border border-white/10 bg-black px-3 py-2 text-white outline-none"
                >
                  <option value="">Choose activity to update map</option>
                  <option>Protest</option>
                  <option>Volunteer</option>
                  <option>Cleanup</option>
                </select>
              </label>

              <label className="flex flex-col text-sm font-medium text-gray-300">
                <span className="mb-1">Purpose</span>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="rounded-lg border border-white/10 bg-black px-3 py-2 text-white outline-none"
                >
                  <option value="">Choose purpose to update map</option>
                  <option>Environmental</option>
                  <option>Voting</option>
                  <option>Womans Rights</option>
                  <option>Gender Equality</option>
                  <option>Racial Equality</option>
                </select>
              </label>

              <label className="flex flex-col text-sm font-medium text-gray-300">
                <span className="mb-1">Location</span>
                <select
                  value={location}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  className="rounded-lg border border-white/10 bg-black px-3 py-2 text-white outline-none"
                >
                  <option value="">Choose location to update map</option>
                  <option>5' miles</option>
                  <option>10' miles</option>
                  <option>15' miles</option>
                  <option>Select city</option>
                  <option>Select state</option>
                  <option value="Select country">Select country</option>
                </select>

                {location === 'Select country' && (
                  <select
                    value={selectedCountry}
                    onChange={(e) => handleCountrySelect(e.target.value)}
                    className="mt-3 rounded-lg border border-white/10 bg-black px-3 py-2 text-white outline-none"
                  >
                    <option value="">Choose a country</option>
                    {unCountries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                )}
              </label>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl md:p-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Find nearby opportunities</h2>
              <p className="text-sm text-gray-400">Hover over highlighted areas to explore local events.</p>
            </div>
            <div className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-300">
              Live map preview
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-transparent p-4">
              <div className="relative h-[320px] overflow-hidden rounded-[1.2rem] bg-transparent">
                <img
                  src={mapView === 'us' ? usMap : globalMap}
                  alt={mapView === 'us' ? 'United States map' : 'Global map'}
                  className={`h-full w-full object-contain transition-all duration-700 ease-in-out ${mapView === 'us' ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-100'}`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {filteredEvents.length === 0 ? (
                <div className="rounded-[1.25rem] border border-white/10 bg-black/50 p-4 text-sm text-gray-300">
                  No events match those selections yet. Try changing the dropdowns to update the list.
                </div>
              ) : (
                filteredEvents.map((event, index) => (
                  <div key={index} className="rounded-[1.25rem] border border-white/10 bg-black/50 p-4">
                    <p className="text-sm text-gray-400">{index === 0 ? 'Nearby event' : index === 1 ? 'Upcoming action' : 'Featured location'}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{event.title}</p>
                    <p className="mt-2 text-sm text-gray-300">{event.details}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl md:p-8">
          <div className="grid gap-6 text-center md:grid-cols-3 md:items-center">
            <div className="flex justify-center">
              <img
                src={goodImage}
                alt="Positive community action"
                className="h-48 w-full max-w-[220px] rounded-[1.25rem] object-cover shadow-lg"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 px-2">
              <h3 className="text-3xl font-bold uppercase tracking-wide text-white">WHY YOU?</h3>
              <p className="max-w-md text-base leading-relaxed text-gray-300">
                Extremism, in every form, is taking over the world we live in. Prevention is better than a cure-- so, every form of help these causes can get helps. See what causes matter to you.
              </p>
              <a
                href="/issues.html"
                className="inline-flex items-center justify-center rounded-full bg-[#D10024] px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Issues
              </a>
            </div>

            <div className="flex justify-center">
              <img
                src={badImage}
                alt="Negative impact of extremism"
                className="h-48 w-full max-w-[220px] rounded-[1.25rem] object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;