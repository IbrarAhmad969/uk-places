// src/data/places.js
import lakeDistrictHero from "../assets/places/lake-district/hero.webp";
import lakeDistrictCard from "../assets/places/lake-district/card.webp";

import stonehengeHero from "../assets/places/stonehenge/hero.webp";
import stonehengeCard from "../assets/places/stonehenge/card.webp";

import towerOfLondonHero from "../assets/places/tower-of-london/hero.webp";
import towerOfLondonCard from "../assets/places/tower-of-london/card.webp";

import cotswoldsHero from "../assets/places/cotswolds/hero.webp";
import cotswoldsCard from "../assets/places/cotswolds/card.webp";

import bathHero from "../assets/places/bath/hero.webp";
import bathCard from "../assets/places/bath/card.webp";

import oxfordHero from "../assets/places/oxford/hero.webp";
import oxfordCard from "../assets/places/oxford/card.webp";

import yorkHero from "../assets/places/york/hero.webp";
import yorkCard from "../assets/places/york/card.webp";

import jurassicCoastHero from "../assets/places/jurassic-coast/hero.webp";
import jurassicCoastCard from "../assets/places/jurassic-coast/card.webp";

import peakDistrictHero from "../assets/places/peak-district/hero.webp";
import peakDistrictCard from "../assets/places/peak-district/card.webp";

import hadriansWallHero from "../assets/places/hadrians/hero.webp";
import hadriansWallCard from "../assets/places/hadrians/card.webp";

import stIvesHero from "../assets/places/st-ives/hero.webp";
import stIvesCard from "../assets/places/st-ives/card.webp";

import cambridgeHero from "../assets/places/cambridge/hero.webp";
import cambridgeCard from "../assets/places/cambridge/card.webp";

import albertDockHero from "../assets/places/albert-dock/hero.webp";
import albertDockCard from "../assets/places/albert-dock/card.webp";

import sevenSistersHero from "../assets/places/seven-sisters/hero.webp";
import sevenSistersCard from "../assets/places/seven-sisters/card.webp";

import edinburghCastleHero from "../assets/places/edinburgh-castle/hero.webp";
import edinburghCastleCard from "../assets/places/edinburgh-castle/card.webp";

import isleOfSkyeHero from "../assets/places/isle-of-skye/hero.webp";
import isleOfSkyeCard from "../assets/places/isle-of-skye/card.webp";

import lochNessHero from "../assets/places/loch-ness/hero.webp";
import lochNessCard from "../assets/places/loch-ness/card.webp";

import glencoeHero from "../assets/places/glencoe/hero.webp";
import glencoeCard from "../assets/places/glencoe/card.webp";

import cairngormsHero from "../assets/places/cairngorms/hero.webp";
import cairngormsCard from "../assets/places/cairngorms/card.webp";

import stAndrewsHero from "../assets/places/st-andrews/hero.webp";
import stAndrewsCard from "../assets/places/st-andrews/card.webp";

import orkneyHero from "../assets/places/orkney/hero.webp";
import orkneyCard from "../assets/places/orkney/card.webp";

import glasgowHero from "../assets/places/glasgow/hero.webp";
import glasgowCard from "../assets/places/glasgow/card.webp";

import snowdoniaHero from "../assets/places/snowdonia/hero.webp";
import snowdoniaCard from "../assets/places/snowdonia/card.webp";

import pembrokeshireCoastHero from "../assets/places/pembrokeshire-coast/hero.webp";
import pembrokeshireCoastCard from "../assets/places/pembrokeshire-coast/card.webp";

import breconBeaconsHero from "../assets/places/brecon-beacons/hero.webp";
import breconBeaconsCard from "../assets/places/brecon-beacons/card.webp";

import conwyCastleHero from "../assets/places/conwy-castle/hero.webp";
import conwyCastleCard from "../assets/places/conwy-castle/card.webp";

import gowerPeninsulaHero from "../assets/places/gower-peninsula/hero.webp";
import gowerPeninsulaCard from "../assets/places/gower-peninsula/card.webp";

import giantsCausewayHero from "../assets/places/giants-causeway/hero.webp";
import giantsCausewayCard from "../assets/places/giants-causeway/card.webp";

import titanicBelfastHero from "../assets/places/titanic-belfast/hero.webp";
import titanicBelfastCard from "../assets/places/titanic-belfast/card.webp";

import mourneMountainsHero from "../assets/places/mourne-mountains/hero.webp";
import mourneMountainsCard from "../assets/places/mourne-mountains/card.webp";

export const regions = [
  {
    slug: "england",
    name: "England",
    description:
      "From ancient monuments and medieval cities to quiet villages, wild moors and dramatic coastlines, England is a landscape layered with stories.",
  },
  {
    slug: "scotland",
    name: "Scotland",
    description:
      "Wild mountains, deep lochs, remote islands and centuries-old castles create a country where the landscape often feels larger than life.",
  },
  {
    slug: "wales",
    name: "Wales",
    description:
      "A land of rugged mountains, extraordinary coastlines, ancient castles and quiet valleys where adventure is never far away.",
  },
  {
    slug: "northern-ireland",
    name: "Northern Ireland",
    description:
      "Dramatic Atlantic shores, legendary landscapes, historic cities and mountain country make Northern Ireland wonderfully unforgettable.",
  },
];

const placeData = [
  {
    slug: "lake-district",
    name: "Lake District",
    region: "England",
    area: "Cumbria",
    type: "National park",
    bestTime: "Late spring to early autumn",
    featured: true,
    summary:
      "A landscape of glittering lakes, rugged fells and quiet valleys that has inspired generations of walkers, writers and dreamers.",
    description:
      "The Lake District is England at its most atmospheric: mountains rising above still water, stone villages tucked into green valleys and winding paths disappearing into the fells. From the shores of Windermere to the summit views around Catbells, the landscape invites you to slow down and explore it on foot.",
    highlights: [
      "Walk around Lake Windermere",
      "Explore Ambleside",
      "Hike Catbells",
    ],
  },

  {
    slug: "stonehenge",
    name: "Stonehenge",
    region: "England",
    area: "Wiltshire",
    type: "Historic landmark",
    bestTime: "Spring or summer",
    featured: true,
    summary:
      "A prehistoric circle of enormous stones standing alone across the sweeping grasslands of Salisbury Plain.",
    description:
      "Few places in Britain carry quite the same sense of mystery as Stonehenge. Raised thousands of years ago, its monumental stones remain an enduring reminder of a civilisation whose beliefs and rituals are still partly unknown. Set against the open Wiltshire landscape, the experience feels timeless and quietly extraordinary.",
    highlights: [
      "See the prehistoric stone circle",
      "Explore the visitor centre",
      "Walk across Salisbury Plain",
    ],
  },

  {
    slug: "tower-of-london",
    name: "Tower of London",
    region: "England",
    area: "London",
    type: "Historic castle",
    bestTime: "Spring or autumn",
    featured: true,
    summary:
      "A formidable fortress beside the Thames where nearly a thousand years of royal history, intrigue and legend unfold.",
    description:
      "Behind the ancient walls of the Tower of London lies one of Britain's richest historical stories. Royal palace, fortress and prison, the Tower has witnessed coronations, political struggles and dramatic chapters in the history of the English crown. Today, its towers, ravens and Crown Jewels offer an unforgettable encounter with London's past.",
    highlights: [
      "See the Crown Jewels",
      "Walk the medieval walls",
      "Meet the famous ravens",
    ],
  },

  {
    slug: "cotswolds",
    name: "Cotswolds",
    region: "England",
    area: "Gloucestershire & Oxfordshire",
    type: "Countryside",
    bestTime: "Late spring to early autumn",
    featured: true,
    summary:
      "Rolling green hills, honey-coloured villages and winding country lanes create one of England's most beloved landscapes.",
    description:
      "The Cotswolds feels almost deliberately composed: warm stone cottages, ancient churches, flower-filled gardens and villages nestled among gently rolling hills. But beyond its postcard beauty is a countryside made for wandering, where quiet lanes and long footpaths reveal a slower, softer side of England.",
    highlights: [
      "Visit Bibury",
      "Explore Bourton-on-the-Water",
      "Walk the Cotswold Way",
    ],
  },

  {
    slug: "bath",
    name: "Bath",
    region: "England",
    area: "Somerset",
    type: "Historic city",
    bestTime: "Spring or early autumn",
    summary:
      "A graceful city of honey-coloured Georgian architecture, Roman history and naturally warm thermal waters.",
    description:
      "Bath brings together centuries of history in an unusually beautiful setting. Roman baths, elegant crescents, grand terraces and riverside walks give the city a distinctive sense of place. Wander through its historic streets, discover the remains of Roman Britain and experience the same thermal waters that have drawn visitors here for generations.",
    highlights: [
      "Tour the Roman Baths",
      "See the Royal Crescent",
      "Soak in a rooftop thermal spa",
    ],
  },

  {
    slug: "oxford",
    name: "Oxford",
    region: "England",
    area: "Oxfordshire",
    type: "Historic city",
    bestTime: "Spring or early summer",
    featured: true,
    summary:
      "A city of ancient colleges, golden stone, quiet courtyards and centuries of scholarship beside the River Thames.",
    description:
      "Oxford is a city where history feels woven into everyday life. Medieval colleges, grand libraries, dreaming spires and peaceful riverside meadows create a distinctive atmosphere that has shaped generations of students, scholars and visitors. Explore its ancient streets, step inside its historic colleges and drift along the river by punt.",
    highlights: [
      "Explore historic colleges",
      "Go punting on the River Cherwell",
      "Visit the Bodleian Library",
    ],
  },

  {
    slug: "york",
    name: "York",
    region: "England",
    area: "North Yorkshire",
    type: "Historic city",
    bestTime: "Spring or autumn",
    summary:
      "A beautifully preserved city where Roman foundations, Viking heritage and medieval streets meet behind ancient walls.",
    description:
      "York feels like a journey through several chapters of British history at once. The immense York Minster rises above medieval streets, the ancient city walls trace the edge of the historic centre and The Shambles preserves the character of another age. Yet York is far from a museum—it is a lively city filled with cafés, independent shops and stories around every corner.",
    highlights: [
      "Walk the city walls",
      "Visit York Minster",
      "Explore The Shambles",
    ],
  },

  {
    slug: "jurassic-coast",
    name: "Jurassic Coast",
    region: "England",
    area: "Dorset & Devon",
    type: "Coastline",
    bestTime: "Late spring to early autumn",
    featured: true,
    summary:
      "A spectacular coastline where towering cliffs, hidden coves and ancient fossils reveal millions of years of Earth's history.",
    description:
      "The Jurassic Coast is a place where the landscape tells a story measured not in centuries, but in geological ages. From the monumental curve of Durdle Door to the fossil-rich shores around Lyme Regis, every cliff and beach reveals another chapter. Walk the coast path and the scale of deep time becomes surprisingly tangible.",
    highlights: [
      "Visit Durdle Door",
      "Walk the coastal path",
      "Search for fossils at Lyme Regis",
    ],
  },

  {
    slug: "peak-district",
    name: "Peak District",
    region: "England",
    area: "Derbyshire",
    type: "National park",
    bestTime: "Spring to autumn",
    summary:
      "A beautiful meeting of wild moorland, limestone valleys, stone villages and some of England's finest walking country.",
    description:
      "The Peak District offers an extraordinary sense of escape without being far from England's major cities. High moors open into dramatic valleys, limestone formations rise above historic villages and countless paths lead into the countryside. From the ridge of Mam Tor to the quiet lanes around Castleton, it is a landscape made for walking.",
    highlights: [
      "Hike Mam Tor",
      "Explore Castleton",
      "Walk through the Hope Valley",
    ],
  },

  {
    slug: "hadrians-wall",
    name: "Hadrian's Wall",
    region: "England",
    area: "Northumberland & Cumbria",
    type: "Roman landmark",
    bestTime: "Late spring to early autumn",
    summary:
      "An ancient frontier crossing open northern landscapes, where weathered stone still traces the edge of a vanished empire.",
    description:
      "Hadrian's Wall is more than a surviving Roman monument—it is a journey across the landscape. Built nearly two thousand years ago to mark the northern frontier of the Roman Empire, its forts, ruins and surviving stretches of wall appear among windswept hills and wide skies. Walking here connects the monumental history of Rome with the raw beauty of northern England.",
    highlights: [
      "Visit Housesteads Roman Fort",
      "Walk the wall",
      "Explore Vindolanda",
    ],
  },

  {
    slug: "st-ives",
    name: "St Ives",
    region: "England",
    area: "Cornwall",
    type: "Coastal town",
    bestTime: "Summer",
    summary:
      "A sunlit Cornish harbour of turquoise water, golden beaches, creative energy and narrow streets leading towards the sea.",
    description:
      "St Ives combines the relaxed rhythm of a seaside town with a remarkable artistic heritage. Fishing boats still gather around the harbour while galleries and studios reflect the light that has drawn artists here for generations. Spend the day between Porthmeor Beach, the harbour and Tate St Ives, then watch the evening light settle across the water.",
    highlights: [
      "Relax on Porthmeor Beach",
      "Visit Tate St Ives",
      "Explore the harbour",
    ],
  },

  {
    slug: "cambridge",
    name: "Cambridge",
    region: "England",
    area: "Cambridgeshire",
    type: "Historic city",
    bestTime: "Spring or summer",
    summary:
      "A timeless university city of riverside meadows, historic colleges, elegant courtyards and leisurely afternoons on the water.",
    description:
      "Cambridge is at its most enchanting when explored slowly. Wander beneath the towers of historic colleges, cross the bridges over the River Cam and discover The Backs, where lawns and gardens open onto the water. A traditional punt ride offers a wonderfully unhurried way to see the city from a different perspective.",
    highlights: [
      "Go punting",
      "Visit King's College",
      "Walk along The Backs",
    ],
  },

  {
    slug: "albert-dock",
    name: "Albert Dock",
    region: "England",
    area: "Liverpool",
    type: "Waterfront",
    bestTime: "Any time",
    summary:
      "Liverpool's historic waterfront, where red-brick warehouses meet museums, galleries, restaurants and the changing light of the Mersey.",
    description:
      "Albert Dock captures Liverpool's deep relationship with the water. Once a centre of global trade, its beautifully restored warehouses now form one of the city's most atmospheric neighbourhoods. Spend an afternoon moving between museums, galleries and waterfront cafés before watching the Mersey turn gold at sunset.",
    highlights: [
      "Visit Tate Liverpool",
      "Explore the Maritime Museum",
      "Walk around the historic dock",
    ],
  },

  {
    slug: "seven-sisters",
    name: "Seven Sisters",
    region: "England",
    area: "East Sussex",
    type: "Coastline",
    bestTime: "Late spring to early autumn",
    featured: true,
    summary:
      "A breathtaking procession of white chalk cliffs rising above the blue waters of the English Channel.",
    description:
      "The Seven Sisters is one of England's most memorable coastal walks. Bright white cliffs roll dramatically towards the sea, their curves changing with every turn of the path. The combination of open grassland, sea air and enormous views makes this stretch of Sussex feel wonderfully wild.",
    highlights: [
      "Walk the cliff-top trail",
      "See Beachy Head",
      "Visit Birling Gap",
    ],
  },

  {
    slug: "edinburgh-castle",
    name: "Edinburgh Castle",
    region: "Scotland",
    area: "Edinburgh",
    type: "Historic castle",
    bestTime: "Summer or early autumn",
    featured: true,
    summary:
      "Scotland's iconic fortress rising above Edinburgh, with panoramic city views and centuries of royal history.",
    description:
      "Perched dramatically on Castle Rock, Edinburgh Castle has watched over the Scottish capital for centuries. Inside its walls are royal chambers, ancient treasures and stories shaped by war, monarchy and national identity. Outside, the view stretches across the rooftops of Edinburgh and towards the distant hills.",
    highlights: [
      "See the Scottish Crown Jewels",
      "Visit the Royal Palace",
      "Watch the One O'Clock Gun",
    ],
  },

  {
    slug: "isle-of-skye",
    name: "Isle of Skye",
    region: "Scotland",
    area: "Inner Hebrides",
    type: "Island",
    bestTime: "Late spring to early autumn",
    featured: true,
    summary:
      "A legendary island of jagged mountains, sea cliffs, waterfalls and landscapes that seem almost otherworldly.",
    description:
      "Skye is a place of extraordinary contrasts: dark mountains against bright skies, quiet beaches beneath dramatic cliffs and winding roads disappearing into enormous landscapes. The Quiraing, Old Man of Storr and Fairy Pools are among its celebrated sights, but the island's greatest charm often comes from simply following the road and seeing what appears beyond the next bend.",
    highlights: [
      "Hike the Quiraing",
      "See the Old Man of Storr",
      "Visit the Fairy Pools",
    ],
  },

  {
    slug: "loch-ness",
    name: "Loch Ness",
    region: "Scotland",
    area: "Highlands",
    type: "Loch",
    bestTime: "Late spring to early autumn",
    summary:
      "A vast Highland loch wrapped in mist, mountains and folklore, overlooked by the ruins of ancient Urquhart Castle.",
    description:
      "Loch Ness has become inseparable from one of the world's most enduring legends, but the landscape itself is reason enough to visit. The deep, dark waters stretch between forested hills and historic ruins, creating a sense of mystery even on the clearest day. Take to the water, explore Urquhart Castle and let the Highland scenery do the rest.",
    highlights: [
      "Visit Urquhart Castle",
      "Take a boat cruise",
      "Explore Drumnadrochit",
    ],
  },

  {
    slug: "glencoe",
    name: "Glencoe",
    region: "Scotland",
    area: "Highlands",
    type: "Mountain valley",
    bestTime: "Spring to autumn",
    featured: true,
    summary:
      "A monumental Highland valley of towering peaks, deep valleys and scenery that changes with every passing cloud.",
    description:
      "Glencoe is one of those landscapes that makes you pause. Great mountains rise sharply from the valley floor while waterfalls, rivers and winding roads lead deeper into the Highlands. Its beauty is inseparable from its dramatic history, giving the valley an atmosphere that feels both majestic and haunting.",
    highlights: [
      "Drive through Glencoe",
      "Hike the surrounding mountains",
      "Visit Glencoe village",
    ],
  },

  {
    slug: "cairngorms",
    name: "Cairngorms",
    region: "Scotland",
    area: "Highlands",
    type: "National park",
    bestTime: "Summer or winter",
    summary:
      "A vast Highland wilderness of mountains, ancient forests, lochs and wildlife, offering adventure in every season.",
    description:
      "The Cairngorms are Scotland on a grand scale. Ancient Caledonian forests, high mountain plateaus and remote glens create an immense landscape where wildlife and weather shape the experience. In summer the park is made for hiking and exploring; in winter its mountains become a dramatic playground of snow and ice.",
    highlights: [
      "Explore Rothiemurchus Forest",
      "Visit Aviemore",
      "Hike in the Cairngorm mountains",
    ],
  },

  {
    slug: "st-andrews",
    name: "St Andrews",
    region: "Scotland",
    area: "Fife",
    type: "Coastal town",
    bestTime: "Spring to early autumn",
    summary:
      "A historic seaside town where ancient university traditions, medieval ruins and legendary golf meet the North Sea.",
    description:
      "St Andrews has a character all its own. Its ancient university, ruined cathedral and castle sit among streets that lead towards the sea, while the Old Course has made the town a pilgrimage for golfers from around the world. Walk the sands of West Sands, explore the old town and experience a place where history and coastal life naturally intertwine.",
    highlights: [
      "Play or visit the Old Course",
      "Explore St Andrews Cathedral",
      "Walk West Sands Beach",
    ],
  },

  {
    slug: "orkney",
    name: "Orkney",
    region: "Scotland",
    area: "Orkney Islands",
    type: "Island",
    bestTime: "Summer",
    summary:
      "A remote northern archipelago where prehistoric monuments, sea cliffs and island life meet beneath enormous skies.",
    description:
      "Orkney feels wonderfully distant from the everyday. Across its windswept islands are archaeological treasures older than many of Europe's most famous monuments, alongside dramatic coastlines, fertile farmland and thriving communities. From Skara Brae to the Ring of Brodgar, the islands reveal a human story stretching back thousands of years.",
    highlights: [
      "Visit Skara Brae",
      "See the Ring of Brodgar",
      "Explore Kirkwall",
    ],
  },

  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    area: "Strathclyde",
    type: "City",
    bestTime: "Spring to autumn",
    summary:
      "A bold and energetic city celebrated for architecture, music, art, museums and a famously welcoming spirit.",
    description:
      "Glasgow is a city with plenty of personality. Victorian architecture sits alongside bold modern design, while galleries, live music venues, cafés and neighbourhoods give the city a constantly changing rhythm. Explore the West End, discover Kelvingrove and spend time simply wandering—the best of Glasgow often appears between the major sights.",
    highlights: [
      "Visit Kelvingrove Art Gallery",
      "Explore the West End",
      "See Glasgow Cathedral",
    ],
  },

  {
    slug: "snowdonia",
    name: "Snowdonia",
    region: "Wales",
    area: "Gwynedd",
    type: "National park",
    bestTime: "Late spring to early autumn",
    featured: true,
    summary:
      "A dramatic mountain landscape of ridgelines, lakes and valleys centred around the towering summit of Yr Wyddfa.",
    description:
      "Snowdonia—Eryri—is where Wales reaches for the sky. Mountain paths climb through rugged valleys, lakes reflect the changing weather and ancient villages sit beneath some of Britain's most dramatic peaks. Whether you take on Yr Wyddfa or simply explore the roads and trails below, the scale of the landscape is unforgettable.",
    highlights: [
      "Climb Yr Wyddfa",
      "Ride the Snowdon Mountain Railway",
      "Explore Llanberis",
    ],
  },

  {
    slug: "pembrokeshire-coast",
    name: "Pembrokeshire Coast",
    region: "Wales",
    area: "Pembrokeshire",
    type: "Coastline",
    bestTime: "Summer",
    featured: true,
    summary:
      "A breathtaking Atlantic coastline of golden beaches, rugged cliffs, hidden coves and beautiful coastal villages.",
    description:
      "The Pembrokeshire Coast is one of Wales's great invitations to walk, breathe and explore. The coastal path follows cliffs above clear water, passes quiet beaches and winds through landscapes where seabirds and sea air replace the noise of everyday life. From colourful Tenby to the tiny cathedral city of St Davids, every stretch has its own character.",
    highlights: [
      "Walk the Pembrokeshire Coast Path",
      "Visit Tenby",
      "Explore St Davids",
    ],
  },

  {
    slug: "brecon-beacons",
    name: "Brecon Beacons",
    region: "Wales",
    area: "Powys",
    type: "National park",
    bestTime: "Spring to autumn",
    summary:
      "Open mountain ridges, hidden waterfalls, peaceful valleys and some of South Wales's most beautiful countryside.",
    description:
      "The Brecon Beacons—Bannau Brycheiniog—is a landscape of quiet grandeur. Mountains rise above broad valleys, rivers tumble into waterfalls and long paths cross open countryside beneath enormous skies. It is a place for walkers and explorers, but also for anyone looking to trade the pace of the city for the calm of the Welsh hills.",
    highlights: [
      "Hike Pen y Fan",
      "See Henrhyd Falls",
      "Explore Brecon",
    ],
  },

  {
    slug: "conwy-castle",
    name: "Conwy Castle",
    region: "Wales",
    area: "Conwy",
    type: "Historic castle",
    bestTime: "Spring to autumn",
    summary:
      "A magnificent medieval fortress overlooking the town of Conwy, built as part of one of Britain's most impressive castle landscapes.",
    description:
      "Conwy Castle rises above the town like a piece of medieval theatre. Its enormous towers and walls were built in the thirteenth century and remain remarkably imposing today. Climb the battlements for views across the rooftops and estuary, then wander through Conwy's historic streets and along its surviving town walls.",
    highlights: [
      "Walk the castle towers",
      "Explore Conwy town",
      "Walk the town walls",
    ],
  },

  {
    slug: "gower-peninsula",
    name: "Gower Peninsula",
    region: "Wales",
    area: "Swansea",
    type: "Coastline",
    bestTime: "Summer",
    summary:
      "A spectacular Welsh coastline of sweeping beaches, sea cliffs, dunes and hidden bays just beyond Swansea.",
    description:
      "The Gower Peninsula offers a beautiful sense of escape. Rhossili Bay opens beneath dramatic cliffs, Three Cliffs Bay brings together sand, rock and tidal water, and quiet paths lead through a coastline shaped by wind and sea. It is a place where a single day can move effortlessly between beach, cliff walk and village.",
    highlights: [
      "Visit Rhossili Bay",
      "Explore Three Cliffs Bay",
      "Walk the coastal path",
    ],
  },

  {
    slug: "giants-causeway",
    name: "Giant's Causeway",
    region: "Northern Ireland",
    area: "County Antrim",
    type: "Natural landmark",
    bestTime: "Late spring to early autumn",
    featured: true,
    summary:
      "A surreal Atlantic coastline of thousands of interlocking basalt columns, shaped by ancient volcanic forces and local legend.",
    description:
      "The Giant's Causeway is one of those places that hardly looks real. Thousands of dark basalt columns descend towards the Atlantic in a natural formation created millions of years ago. Geological wonder and Irish mythology meet here, creating a landscape that is as fascinating in its story as it is extraordinary in appearance.",
    highlights: [
      "Walk across the basalt columns",
      "Explore the Causeway Coast",
      "Visit Dunluce Castle",
    ],
  },

  {
    slug: "titanic-belfast",
    name: "Titanic Belfast",
    region: "Northern Ireland",
    area: "Belfast",
    type: "Museum",
    bestTime: "Any time",
    summary:
      "An extraordinary waterfront experience exploring Belfast's shipbuilding heritage and the story of the world's most famous liner.",
    description:
      "Titanic Belfast brings the story of the Titanic back to the city where the ship was designed and built. Through immersive galleries, engineering stories and the atmosphere of the historic shipyard, the experience explores both the ambition behind the vessel and the people whose lives became part of its history. It is one of Belfast's defining cultural landmarks.",
    highlights: [
      "Explore the Titanic galleries",
      "Visit the shipyard slipways",
      "Walk around Belfast's Titanic Quarter",
    ],
  },

  {
    slug: "mourne-mountains",
    name: "Mourne Mountains",
    region: "Northern Ireland",
    area: "County Down",
    type: "Mountain range",
    bestTime: "Late spring to early autumn",
    summary:
      "A beautiful granite mountain range descending towards the Irish Sea, filled with quiet valleys, trails and unforgettable views.",
    description:
      "The Mourne Mountains combine rugged mountain scenery with the peaceful character of County Down. Granite peaks rise above valleys and reservoirs, with Slieve Donard standing as the highest point in Northern Ireland. The landscape is close enough to the coast to offer sweeping views towards the sea, yet wild enough to feel wonderfully remote.",
    highlights: [
      "Hike Slieve Donard",
      "Walk around Silent Valley",
      "Explore Newcastle",
    ],
  },
];

const imageMap = {
  "lake-district": {
    hero: lakeDistrictHero,
    card: lakeDistrictCard,
  },

  stonehenge: {
    hero: stonehengeHero,
    card: stonehengeCard,
  },

  "tower-of-london": {
    hero: towerOfLondonHero,
    card: towerOfLondonCard,
  },

  cotswolds: {
    hero: cotswoldsHero,
    card: cotswoldsCard,
  },

  bath: {
    hero: bathHero,
    card: bathCard,
  },

  oxford: {
    hero: oxfordHero,
    card: oxfordCard,
  },

  york: {
    hero: yorkHero,
    card: yorkCard,
  },

  "jurassic-coast": {
    hero: jurassicCoastHero,
    card: jurassicCoastCard,
  },

  "peak-district": {
    hero: peakDistrictHero,
    card: peakDistrictCard,
  },

  "hadrians-wall": {
    hero: hadriansWallHero,
    card: hadriansWallCard,
  },

  "st-ives": {
    hero: stIvesHero,
    card: stIvesCard,
  },

  cambridge: {
    hero: cambridgeHero,
    card: cambridgeCard,
  },

  "albert-dock": {
    hero: albertDockHero,
    card: albertDockCard,
  },

  "seven-sisters": {
    hero: sevenSistersHero,
    card: sevenSistersCard,
  },

  "edinburgh-castle": {
    hero: edinburghCastleHero,
    card: edinburghCastleCard,
  },

  "isle-of-skye": {
    hero: isleOfSkyeHero,
    card: isleOfSkyeCard,
  },

  "loch-ness": {
    hero: lochNessHero,
    card: lochNessCard,
  },

  glencoe: {
    hero: glencoeHero,
    card: glencoeCard,
  },

  cairngorms: {
    hero: cairngormsHero,
    card: cairngormsCard,
  },

  "st-andrews": {
    hero: stAndrewsHero,
    card: stAndrewsCard,
  },

  orkney: {
    hero: orkneyHero,
    card: orkneyCard,
  },

  glasgow: {
    hero: glasgowHero,
    card: glasgowCard,
  },

  snowdonia: {
    hero: snowdoniaHero,
    card: snowdoniaCard,
  },

  "pembrokeshire-coast": {
    hero: pembrokeshireCoastHero,
    card: pembrokeshireCoastCard,
  },

  "brecon-beacons": {
    hero: breconBeaconsHero,
    card: breconBeaconsCard,
  },

  "conwy-castle": {
    hero: conwyCastleHero,
    card: conwyCastleCard,
  },

  "gower-peninsula": {
    hero: gowerPeninsulaHero,
    card: gowerPeninsulaCard,
  },

  "giants-causeway": {
    hero: giantsCausewayHero,
    card: giantsCausewayCard,
  },

  "titanic-belfast": {
    hero: titanicBelfastHero,
    card: titanicBelfastCard,
  },

  "mourne-mountains": {
    hero: mourneMountainsHero,
    card: mourneMountainsCard,
  },
};

export const places = placeData.map((place) => ({
  ...place,
  images: imageMap[place.slug],
}));

export const getPlace = (slug) =>
  places.find((place) => place.slug === slug);