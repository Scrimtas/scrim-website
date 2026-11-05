// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (и’њ) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var cdringSites = [
  
  {
    url: "https://cdring.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Wywh.jpg"
  },
   {
    url: "https://willascool.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/thebends.jpg"
  },
  {
    url: "https://xsolimini.fr",
    image: "https://cdring.neocities.org/ringcdimages/Forawhile.jpg"
  },
  {
    url: "https://vampystardust.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Bauhaus.jpg"
  },
  {
    url: "https://jlehr.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Dustynotes.jpg"
  },
  {
    url: "https://isobelsweb.com",
    image: "https://cdring.neocities.org/ringcdimages/Vespertine.jpg"
  },
  {
    url: "https://zimawtf.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Nensi.jpg"
  },   
  {
    url: "https://maddyka.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/worlds.jpeg"
  },  
  {
    url: "https://hellololla.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/tqid.jpeg"
  },
  {
    url: "https://your-living-illusion.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/yourlivingillusion.jpg"
  },
  {
    url: "https://crack-cloud.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Geese.jpg"
  },
  {
    url: "https://pirahxcx.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Esbulho.jpg"
  },
  {
    url: "https://conallia.cc",
    image: "https://cdring.neocities.org/ringcdimages/agcook.jpg"
  },
  {
    url: "https://plumeslegumes.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Bambi.jpg"
  },
  {
    url: "https://n-has-a-site.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/fishmonger.jpg"
  },
  {
    url: "https://aliensriracha.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/thebeths.jpg"
  },
  {
    url: "https://tuffgong.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/dirtaic.jpg"
  },
  {
    url: "https://foxlore.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/cranewives.jpg"
  },
  {
    url: "https://void19-c.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/avatar.jpg"
  },
  {
    url: "https://rontimoni.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/theworldisyours.jpg"
  },
  {
    url: "https://alliedalmond.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/plasticdeath.jpg"
  },
  {
    url: "https://oshikatsuangel.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/thenownow.jpg"
  },
  {
    url: "https://dixn.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Bis.jpg"
  },
   {
    url: "https://dtptr.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/holdyourcolor.jpg"
  },
  {
    url: "https://voidway.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/RatWars.jpg"
  },
  {
    url: "https://devhank.neocities.org/vocaloid",
    image: "https://cdring.neocities.org/ringcdimages/terminal.jpg"
  },
  {
    url: "https://janahlmann.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ohsees.jpg"
  },
  {
    url: "https://bishoujopalace.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/labouche.jpg"
  },
  {
    url: "https://polswiss.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/penelopescott.jpg"
  },
  {
    url: "https://electricnight.nexus",
    image: "https://cdring.neocities.org/ringcdimages/lightningbolt.jpg"
  },
  {
    url: "https://vespertinespiral.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/bucktick.jpg"
  },
  {
    url: "https://peppers-wasteland.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/HiLo.jpg"
  },
  {
    url: "https://sakuraducky.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/observatorymansions.jpg"
  },
  {
    url: "https://nanacore.net",
    image: "https://cdring.neocities.org/ringcdimages/declanmakenna.jpg"
  },
  {
    url: "https://cvcarloscv.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/milkeyedmender.jpg"
  },
   {
    url: "https://www.virtuagirl.net",
    image: "https://cdring.neocities.org/ringcdimages/modestmouse.jpg"
  },
   {
    url: "https://bruisedgh0st.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/gorillaz.jpg"
  },
   {
    url: "https://haunt-culture.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/melloncollie.jpg"
  },
  {
    url: "https://bloodgulch.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/lessthanjake.jpg"
  },
  {
    url: "https://kimberlygb.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Peremotka.jpg"
  },
  {
    url: "https://ogaratsu.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/SusumuHiraswa.jpg"
  },
  {
    url: "https://dudalog.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/CSS.jpg"
  },
    {
    url: "https://casualmythoids.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/LUKA.jpg"
  },
    {
    url: "https://sunnishinez.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Lavozdelos80.jpg"
  },
    {
    url: "https://applescruffs.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/petsounds.jpg"
  },
    {
    url: "https://jugproductions.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/aroundthefur.jpg"
  },
    {
    url: "https://lydels.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/bankrupt.jpg"
  },
    {
    url: "https://www.ledaheavyindustry.com",
    image: "https://cdring.neocities.org/ringcdimages/blackcascade.jpg"
  },
    {
    url: "https://glitchpirate.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/CarpenterBrut.jpg"
  },
    {
    url: "https://7vtia.wedjat.city",
    image: "https://cdring.neocities.org/ringcdimages/seapower.jpg"
  },
    {
    url: "https://stargore-77.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/VelvetGoldmineSoundtrack.jpg"
  },
    {
    url: "https://michael-murder.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/alesana.jpg"
  },
    {
    url: "https://cerealandchoccymilk.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr.jpg"
  },
    {
    url: "https://th3xv10t3txlun4t1c.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/candyass.jpg"
  },
    {
    url: "https://bog-body.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/isthisit.jpg"
  },
    {
    url: "https://deimostes.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/JamiePaige.jpg"
  },
    {
    url: "https://pakhrom.ru",
    image: "https://cdring.neocities.org/ringcdimages/Nurture.jpg"
  },
    {
    url: "https://xavierhm.com",
    image: "https://cdring.neocities.org/ringcdimages/Spiderland.jpg"
  },
    {
    url: "https://rippledstone.com",
    image: "https://cdring.neocities.org/ringcdimages/fionaapple.jpg"
  },
    {
    url: "https://crowguinisonline.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/thestranger.jpg"
  },
    {
    url: "https://pinkbasement.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Happoradio.jpg"
  },
    {
    url: "https://infamousyaoimurders.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/DEVO.jpg"
  },
    {
    url: "https://hameed.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/MFDOOM.jpg"
  },
    {
    url: "https://rayyan.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/linkinpark.jpg"
  },
    {
    url: "https://bakartridges-site.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/boardsofcanada.jpg"
  },
    {
    url: "https://ver-en-jenas.blogspot.com",
    image: "https://cdring.neocities.org/ringcdimages/linkinpark3.jpg"
  },
    {
    url: "https://coldfries.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/failure.jpg"
  },
    {
    url: "https://twentyphanday.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/UNO.jpg"
  },
    {
    url: "https://snacksgg.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/everythingeverything.jpg"
  },
    {
    url: "https://moonlit.panko.zip",
    image: "https://cdring.neocities.org/ringcdimages/HaruomiHosono.jpg"
  },
    {
    url: "https://sisterpsychosis.online",
    image: "https://cdring.neocities.org/ringcdimages/oasis2.jpg"
  },
    {
    url: "https://coolthings.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/okcomputer.jpg"
  },
    {
    url: "https://elijahposttrash.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/lifeispeachy.jpg"
  },
    {
    url: "https://barkode.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/willwood.jpg"
  },
    {
    url: "https://shoeagletts.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/midnitevultures.jpg"
  },
    {
    url: "https://maxsden.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/goinggoinggone.jpg"
  },
    {
    url: "https://ucami.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/tomcbumpz.jpg"
  },
    {
    url: "https://jingledbells.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/trustceremony.jpg"
  },
    {
    url: "https://krisdreemurr.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/JordaanMasonandtheHorseMuseum.jpg"
  },
    {
    url: "https://kimt1nez.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/sonic.jpg"
  },
    {
    url: "https://maliceinwonderland.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/theopendoor.jpg"
  },
    {
    url: "https://lakituscorner.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/letitbe.jpg"
  },
    {
    url: "https://pastel-skies.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/fallen.jpg"
  },
    {
    url: "https://imbirowe.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/SusumuHirasawa.jpg"
  },
    {
    url: "https://samunderadhikari.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/play.jpg"
  },
    {
    url: "https://nogginzmart.discount",
    image: "https://cdring.neocities.org/ringcdimages/AJJ.jpg"
  },
    {
    url: "https://fgssfdss.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/achtung80.jpg"
  },
    {
    url: "https://lizbatslounge2.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/goreshit.jpg"
  },
    {
    url: "https://calijori.com",
    image: "https://cdring.neocities.org/ringcdimages/twice.jpg"
  },
    {
    url: "https://lucybug.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/twinfantasy.jpg"
  },
    {
    url: "https://her-letters.neocities.org",
    image: "https://stagnant.neocities.org"
  },
    {
    url: "https://necogutz.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/LSC.jpg"
  },
    {
    url: "https://ayanamiloopzzz.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/rammstein.jpg"
  },
    {
    url: "https://candybling.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/velvetundergroundnico.jpg"
  },
    {
    url: "https://common-pest.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/massiveattack.jpg"
  },
    {
    url: "https://pure-radiation.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/gorestreet.jpg"
  },
    {
    url: "https://malphilia.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Ween.jpg"
  },
    {
    url: "https://pencapchew.blog",
    image: "https://cdring.neocities.org/ringcdimages/nirvanaunplugged.png"
  },
    {
    url: "https://kirb.pet",
    image: "https://cdring.neocities.org/ringcdimages/SigurRos.jpg"
  },
    {
    url: "https://overthesea.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nuetralmilkhotel.jpg"
  },
    {
    url: "https://dequake.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/johncultrane.jpg"
  },
    {
    url: "https://decahedron.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/tylerthecreator.jpg"
  },
    {
    url: "https://gabysworld.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/smile.jpg"
  },
    {
    url: "https://uravgjo.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/plans.jpg"
  },  
    {
    url: "https://theadr.net/",
    image: "https://cdring.neocities.org/ringcdimages/Carpool.jpg"
  },
    {
    url: "https://torquuato.github.io/torquato/",
    image: "https://cdring.neocities.org/ringcdimages/homestuck.jpg"
  },
    {
    url: "https://117.zone",
    image: "https://cdring.neocities.org/ringcdimages/currents.jpg"
  },
    {
    url: "https://cervidaze.me",
    image: "https://cdring.neocities.org/ringcdimages/adventures.jpg"
  },
    {
    url: "https://strawberrynose.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/magicalmysterytour.jpg"
  },
    {
    url: "https://dazaisfunpalace.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/JamiePaige.jpg"
  },
    {
    url: "https://jevi.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/fx.jpg"
  },
    {
    url: "https://albedo.ink",
    image: "https://cdring.neocities.org/ringcdimages/oasis.jpg"
  },
    {
    url: "https://prismaticbolt.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/themonkees.jpg"
  },
    {
    url: "https://scrapsite.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/kingcrimson.jpg"
  },
    {
    url: "https://energy-drink-ratings.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/liberationtermination.jpg"
  },
    {
    url: "https://hymnforascarecrow.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/connyjash.jpg"
  },
    {
    url: "https://lattewiiu.net",
    image: "https://cdring.neocities.org/ringcdimages/cars2.jpg"
  },
    {
    url: "https://judelynn.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/revolver.jpg"
  },
    {
    url: "https://d3adb3atdad.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/2hollis.jpg"
  },
    {
    url: "https://deceptifunk.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/talkingheads.jpg"
  },
    {
    url: "https://stupidestboy.neocities.org/",
    image: "https://cdring.neocities.org/ringcdimages/69lovesongs.jpg"
  },
    {
    url: "https://r3ckoning.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/InRainbows.jpg"
  },
    {
    url: "https://desecrate.me",
    image: "https://cdring.neocities.org/ringcdimages/portishead.jpg"
  },
    {
    url: "https://hegad.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/jazzistanders.jpg"
  },
    {
    url: "https://micha-collins-best-boi.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr2.jpg"
  },
    {
    url: "https://cybereuphoria.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/whenthepawn.jpg"
  },
    {
    url: "https://luahtml.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/WLFGRL.jpg"
  },
    {
    url: "https://cheesycheese.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/dazeyandthescouts.jpg"
  },
    {
    url: "https://aureatecorvidarchives.com",
    image: "https://cdring.neocities.org/ringcdimages/muse.jpg"
  },
    {
    url: "https://mossyscorner.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/flowerboy.jpg"
  },
    {
    url: "https://stonervampire.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ptv.jpg"
  },
    {
    url: "https://tuesdaysplace.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/girl.jpg"
  },
    {
    url: "https://possumlark.org",
    image: "https://cdring.neocities.org/ringcdimages/willwood2.jpg"
  },
    {
    url: "https://atrickofthelight.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/spiritphone.jpg"
  },
    {
    url: "https://simplyjason.neocities.org/About/webrings",
    image: "https://cdring.neocities.org/ringcdimages/inertia.jpeg"
  },
    {
    url: "https://prophetesque.gay/",
    image: "https://cdring.neocities.org/ringcdimages/paperchase.jpeg"
  },
    {
    url: "https://thenamelessarchiv3.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/posthuman.jpg"
  },
    {
    url: "https://orbital-lizard.com",
    image: "https://cdring.neocities.org/ringcdimages/milesdavis.jpg"
  },
    {
    url: "https://yuriplanet.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/astrophysics.jpg"
  },
    {
    url: "https://nyaoi.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/thecircus.jpg"
  },
    {
    url: "https://wriorango.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/preachersdaughter.jpg"
  },
    {
    url: "https://vergissmichnicht.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/wahkonda.jpg"
  },
    {
    url: "https://hollow-world-creek.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/themanmachine.jpg"
  },
    {
    url: "https://mishcoded.lol",
    image: "https://cdring.neocities.org/ringcdimages/glassanimals.jpg"
  },
    {
    url: "https://lucyfun.neocities.org/music",
    image: "https://cdring.neocities.org/ringcdimages/tropicalsun.jpg"
  },
    {
    url: "https://smorb.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/holdonnowyoungster.jpg"
  },
    {
    url: "https://raymondtheterrible.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/panchiko.jpg"
  },
    {
    url: "https://internethole.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/goreshit3.jpg"
  },
    {
    url: "https://the-ship-of-theseus.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/connyjash2.jpg"
  },
    {
    url: "https://ippinkorca.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/miami.jpg"
  },
    {
    url: "https://upsidedownhourglass.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/carseatheadrest3.jpg"
  },
    {
    url: "https://v0idspace.nekoweb.org/music/music.html",
    image: "https://cdring.neocities.org/ringcdimages/alcest.jpg"
  },
    {
    url: "https://computersoda.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/haveanicelife.jpg"
  },
    {
    url: "https://cefa.moe",
    image: "https://cdring.neocities.org/ringcdimages/greatestidol.jpg"
  },
    {
    url: "https://kirayueyx.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/bloodhoundgang.jpg"
  },
    {
    url: "https://wren-nest.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/dirtkendall.jpg"
  },
    {
    url: "https://mitadpunketo.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr4.jpg"
  },
    {
    url: "https://sweetcherries.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/cranewives2.jpg"
  },
    {
    url: "https://dolbesound.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/donda.jpg"
  },
    {
    url: "https://freefreakyvideos.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/tranquilhost.jpg"
  },
    {
    url: "https://ondine.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/chopin.jpg"
  },
    {
    url: "https://alankane.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/disintegration.jpg"
  },
    {
    url: "https://odriscoll.moe",
    image: "https://cdring.neocities.org/ringcdimages/10000days.jpg"
  },
    {
    url: "https://pipi.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/sisterhood.jpg"
  },
    {
    url: "https://sarcasticpodrostok.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/thegarden.jpg"
  },
    {
    url: "https://ufovictim.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/wolfinstrumentals.jpg"
  },
    {
    url: "https://pink-dot-artz.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Kikuohana.jpg"
  },
    {
    url: "https://astrokai.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Alvvays.jpg"
  },
    {
    url: "https://thecakehasnolies.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/aflockofseagulls.jpg"
  },
    {
    url: "https://hnrikaster.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/incubus.jpg"
  },
    {
    url: "https://esoterical.org/main",
    image: "https://cdring.neocities.org/ringcdimages/aphextwin.jpg"
  },
    {
    url: "https://cherrysplat.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/entertainment.jpg"
  },
    {
    url: "https://chaos-control.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/TWRP.jpg"
  },
    {
    url: "https://starboystation.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr3.jpg"
  },
    {
    url: "https://foolishmortal.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/lastdinosaurs.jpg"
  },
    {
    url: "https://cozyghostly.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/rowlf.jpg"
  },
    {
    url: "https://phagi.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/oingoboingo.jpg"
  },
    {
    url: "https://spookoku.net",
    image: "https://cdring.neocities.org/ringcdimages/gorillaz4.jpg"
  },
    {
    url: "https://rosevoid.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/xrayspex.jpg"
  },
    {
    url: "https://nuclearblues.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/propaghandi.jpg"
  },
    {
    url: "https://route800.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/TheCallofZombina.jpg"
  },
    {
    url: "https://viatrix.moe",
    image: "https://cdring.neocities.org/ringcdimages/harumakigohan.jpg"
  },
    {
    url: "https://vampyrejuice.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Transatlanticism.jpg"
  },
    {
    url: "https://wolfkitty42.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Carousel.jpg"
  },
    {
    url: "https://burningfrogpantz.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/kidrock2.gif"
  },
    {
    url: "https://fishshrine.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr4.jpg"
  },
    {
    url: "https://soundmindandvision.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/significantother.jpg"
  },
    {
    url: "https://creatureofplay.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/conangrey.jpg"
  },
    {
    url: "https://sandpit.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/AURORA.jpg"
  },
    {
    url: "https://germfly.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/B52s.jpg"
  },
    {
    url: "https://7ideotape.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/themicrophones.jpg"
  },
    {
    url: "https://kdkemp.com/main/music-collection",
    image: "https://cdring.neocities.org/ringcdimages/PeeweesBigAdventure.jpg"
  },
    {
    url: "https://wormpxn.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/GUFI.jpg"
  },
    {
    url: "https://somestranger8.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/midori.jpg"
  },
    {
    url: "https://melody-nomas.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Amandititita.jpg"
  },
    {
    url: "https://anchovy8.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/MachineGirl.jpg"
  },
    {
    url: "https://www.raveen.ca",
    image: "https://cdring.neocities.org/ringcdimages/modernbaseball.jpg"
  },
    {
    url: "https://cupidsoup.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/falloutboy.jpg"
  },
    {
    url: "https://harbourgirl.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Morskaya.jpg"
  },
    {
    url: "https://waterlily.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/charlixcx.jpg"
  },
    {
    url: "https://zeppers.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/JUL.jpg"
  },
    {
    url: "https://silversneasel.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/babygirraffes.jpg"
  },
    {
    url: "https://bcarefulwhoutrust.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/isetmyfriendsonfire.jpg"
  },
    {
    url: "https://eatsteas.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/jellyfish.jpg"
  },
    {
    url: "https://selkie0776.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ASkylitDrive.jpg"
  },
    {
    url: "https://jamesedward.xyz",
    image: "https://cdring.neocities.org/ringcdimages/denisleary.jpg"
  },
    {
    url: "https://nathanntan.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ViolentThings.jpg"
  },
    {
    url: "https://squidee.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/sally.jpg"
  },
    {
    url: "https://karasushima.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/childishgambino.gif"
  },
    {
    url: "https://batcavern.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/seleP.jpg"
  },
    {
    url: "https://thematildenet.nekoweb.org/webringz.html",
    image: "https://cdring.neocities.org/ringcdimages/brat.jpg"
  },
    {
    url: "https://ironfeasant.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Dwzyrek.jpg"
  },
    {
    url: "https://n3bula.lol",
    image: "https://cdring.neocities.org/ringcdimages/conangray2.jpg"
  },
    {
    url: "https://friendtoroaches.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ThePalestGrey.jpg"
  },
    {
    url: "https://altalenae.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/incolor.jpg"
  },
    {
    url: "https://bunnyhouse.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/jamiepaige2.jpg"
  },
    {
    url: "https://shovelwithasprout.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/magdalenabay.jpg"
  },
    {
    url: "https://kilometres.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Spyglass.jpg"
  },
    {
    url: "https://klilo.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/e.jpg"
  },
    {
    url: "https://eriswavereal.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/2ndalbum.jpg"
  },
    {
    url: "https://khanofmir.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Kraftwerk.jpg"
  },
    {
    url: "https://sketchmybrain.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/trench.jpg"
  },
    {
    url: "https://yutuzi.club",
    image: "https://cdring.neocities.org/ringcdimages/dontoliver.jpg"
  },
    {
    url: "https://batlike.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/pjharvey.jpg"
  },
    {
    url: "https://june-bug.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/moremorejump.jpg"
  },
    {
    url: "https://mote.moe",
    image: "https://cdring.neocities.org/ringcdimages/theblackdog.jpg"
  },
    {
    url: "https://buggeyedmusic.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/AnimalCollective.jpg"
  },
    {
    url: "https://buggeyed.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/AnimalCollective.jpg"
  },
    {
    url: "https://butcher.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/nin.jpg"
  },
    {
    url: "https://draggianuniverse.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/EscapetheFate.jpg"
  },
    {
    url: "https://peachyvoid.com",
    image: "https://cdring.neocities.org/ringcdimages/FlowerFace.jpg"
  },
    {
    url: "https://eviltmasccatboypili.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/TWRP2.jpg"
  },
    {
    url: "https://cave-story.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/maneskin.jpg"
  },
    {
    url: "https://deathgrind.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/fishbone.jpg"
  },
    {
    url: "https://aerith.me",
    image: "https://cdring.neocities.org/ringcdimages/Tennis.jpg"
  },
    {
    url: "https://kuradoberi.nyc",
    image: "https://cdring.neocities.org/ringcdimages/yeezus.jpg"
  },
    {
    url: "https://skateboard.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/SWAGGOT.jpg"
  },
    {
    url: "https://dove.town",
    image: "https://cdring.neocities.org/ringcdimages/blurryface.jpg"
  },
    {
    url: "https://faintlymacabre.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/falloutboy2.jpg"
  },
    {
    url: "https://lunarcorvus.com",
    image: "https://cdring.neocities.org/ringcdimages/Loona.jpg"
  },
    {
    url: "https://lataccola.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/animals.jpg"
  },
    {
    url: "https://evfan.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/evanescence3.jpg"
  },
    {
    url: "https://renegadeangel.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/HIM.jpg"
  },
    {
    url: "https://ts-was-here.nekoweb.org/index.html",
    image: "https://cdring.neocities.org/ringcdimages/JoannaNewsom.jpg"
  },
    {
    url: "https://puteri.ng",
    image: "https://cdring.neocities.org/ringcdimages/Cranewives3.jpg"
  },
    {
    url: "https://snailgoesboing.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/gorillaz5.jpg"
  },
    {
    url: "https://splaatandfriends.neocities.org/HomePage",
    image: "https://cdring.neocities.org/ringcdimages/JoaoLopes.jpg"
  },
    {
    url: "https://cantankyote.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/imit.jpg"
  },
    {
    url: "https://androgena.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/solidstatesurvivor.jpg"
  },
    {
    url: "https://valkyrias-hideout-art.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mythos.jpg"
  },
    {
    url: "https://lyer-online.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/patd.jpg"
  },
    {
    url: "https://soph.gay",
    image: "https://cdring.neocities.org/ringcdimages/tylerthecreator4.jpg"
  },
    {
    url: "https://epicmax.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/georgeharrison.jpg"
  },
    {
    url: "https://nitosmaster.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mybloodyvalentine.jpg"
  },
    {
    url: "https://aikoto.love",
    image: "https://cdring.neocities.org/ringcdimages/pinktape.jpg"
  },
    {
    url: "https://claranguyen.me",
    image: "https://cdring.neocities.org/ringcdimages/LiuZengtong.jpg"
  },
    {
    url: "https://brainwermzzz.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/partyinthegraveyard.jpg"
  },
    {
    url: "https://mp3mixtapez.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/juicewrld.jpg"
  },
    {
    url: "https://inqu.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/thelastwerewolf.jpg"
  },
    {
    url: "https://lucrenaut.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/newbreed.jpg"
  },
    {
    url: "https://astarrydeath.com",
    image: "https://cdring.neocities.org/ringcdimages/qotsa.jpg"
  },
    {
    url: "https://riotghoul.rocks",
    image: "https://cdring.neocities.org/ringcdimages/comforttome.jpg"
  },
    {
    url: "https://grothqconsulting.com",
    image: "https://cdring.neocities.org/ringcdimages/hkmori.jpg"
  },
    {
    url: "https://www.zymurgy.rip",
    image: "https://cdring.neocities.org/ringcdimages/ween2.jpg"
  },
    {
    url: "https://imperiohermanas.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/LasHermanas.jpg"
  },
    {
    url: "https://hello-slitty.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/penelopescott2.jpg"
  },
    {
    url: "https://sixtoesss.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/maniacmeat.jpg"
  },
    {
    url: "https://smiheart.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/korn.jpg"
  },
    {
    url: "https://sixdegreesofsound.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/WeLikeItHere.jpg"
  },
    {
    url: "https://dreadfulsorryclementineiscool.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/underscores.jpg"
  },
    {
    url: "https://astrolabe-area.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr3.jpg"
  },
    {
    url: "https://kissing.computer",
    image: "https://cdring.neocities.org/ringcdimages/Intimacy.jpg"
  },
    {
    url: "https://saphi.nekoweb.org/home.html",
    image: "https://cdring.neocities.org/ringcdimages/jungle.jpg"
  },
    {
    url: "https://michikira.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/FAKEVOX.jpg"
  },
    {
    url: "https://max8abug.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/closetotheedge.jpg"
  },
    {
    url: "https://cherealbox.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/pheonix.jpg"
  },
    {
    url: "https://wilco.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/welcome.jpg"
  },
    {
    url: "https://okdvd.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/waves.jpg"
  },
    {
    url: "https://v4mpyrsharky444.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/pornagraphy.jpg"
  },
    {
    url: "https://leefymoons-room.net",
    image: "https://cdring.neocities.org/ringcdimages/vessel.jpg"
  },
    {
    url: "https://limeo.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mothermayi.jpg"
  },
    {
    url: "https://smally2401.xyz",
    image: "https://cdring.neocities.org/ringcdimages/dynamo.jpg"
  },
    {
    url: "https://natsverycoolstuff.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/flyleaf.jpg"
  },
    {
    url: "https://jembles.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/fizz.jpg"
  },
    {
    url: "https://thatonebluelynx.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/deftones.jpg"
  },
    {
    url: "https://hal.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/daftpunk.jpg"
  },
    {
    url: "https://luckyuke.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/steviewonder.jpg"
  },
    {
    url: "https://glitchwolf47.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/riot.jpg"
  },
    {
    url: "https://ihavefreewill.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/pinkerton.jpg"
  },
    {
    url: "https://fateful-grove.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/MacintoshPlus.jpg"
  },
    {
    url: "https://keyjay.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/fieldmob.jpg"
  },
    {
    url: "https://crispins-cafe.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr.jpg"
  },
    {
    url: "https://cerealistic.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/laufey.jpg"
  },
    {
    url: "https://dwarvenmeadhall.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/eden.jpg"
  },
    {
    url: "https://waterskyline.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/gorrillaz2.jpg"
  },
    {
    url: "https://finn-r.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/THECHOPPINGBLOCK.jpg"
  },
    {
    url: "https://vinum-sabbathi.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/dio.jpg"
  },
    {
    url: "https://addisonannihilation.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/lmfao.jpg"
  },
    {
    url: "https://mews.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/girlEDM.jpg"
  },
    {
    url: "https://oligoweee.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/LinkinPark2.jpg"
  },
    {
    url: "https://paraparaprincess.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/KendrickLamar.jpg"
  },
    {
    url: "https://cocoadave.blogspot.com",
    image: "https://cdring.neocities.org/ringcdimages/tropicaldancer.jpg"
  },
    {
    url: "https://funnyorangecat.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr4.jpg"
  },
    {
    url: "https://1cecube3ater.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/slipknot.jpg"
  },
    {
    url: "https://missypxnk.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/prolaps.jpg"
  },
    {
    url: "https://nickychaotix.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/sonic2.jpg"
  },
    {
    url: "https://beachglass.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/carseatheadrest.jpg"
  },
    {
    url: "https://citrinecraft.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/tliiasaw.jpg"
  },
    {
    url: "https://onasnowynight.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/paramore.jpg"
  },
    {
    url: "https://calamityopossum.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/McCafferty.jpg"
  },
    {
    url: "https://alexkammin.com",
    image: "https://cdring.neocities.org/ringcdimages/gofurtherindarkness.jpg"
  },
    {
    url: "https://yel1low.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/lemondemon.jpg"
  },
    {
    url: "https://erinweekspoetry.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/tidal.jpg"
  },
    {
    url: "https://chilblands.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/pinkseason.jpg"
  },
    {
    url: "https://pingapong64.com",
    image: "https://cdring.neocities.org/ringcdimages/zrock.jpg"
  },
    {
    url: "https://hyacinths-corner.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/twinfantasy.jpg"
  },
    {
    url: "https://datoxicwaltz.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/wednesday13transylvania90210.jpg"
  },
    {
    url: "https://sewerwolfx.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nin2.jpg"
  },
    {
    url: "https://mxnic-mayhem.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/houdini.jpg"
  },
    {
    url: "https://stringless-spacevampire.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/thefallen.jpg"
  },
    {
    url: "https://myfingershurts.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/whitealbum.jpg"
  },
    {
    url: "https://total3.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/JoyceManor.jpg"
  },
    {
    url: "https://wheresurmalloytonight.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mika.jpg"
  },
    {
    url: "https://hudson.bearblog.dev",
    image: "https://cdring.neocities.org/ringcdimages/foundintheocean.jpg"
  },
   {
    url: "https://blog.hudsonsnedcof.space",
    image: "https://cdring.neocities.org/ringcdimages/foundintheocean.jpg"
  },
    {
    url: "https://yepyep.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/kerokerobonito.jpg"
  },
    {
    url: "https://virtualpenumbra.nekoweb.org/index.html",
    image: "https://cdring.neocities.org/ringcdimages/floodlandsistersofmercy.jpg"
  },
    {
    url: "https://digitalcadaver.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nin3.jpg"
  },
    {
    url: "https://ichomancer.com",
    image: "https://cdring.neocities.org/ringcdimages/nonlocality.jpg"
  },
    {
    url: "https://pupmental.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nin2.jpg"
  },
    {
    url: "https://graveyardpaws.web.fc2.com",
    image: "https://cdring.neocities.org/ringcdimages/bikinikill.jpg"
  },
    {
    url: "https://bugbash.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/DearWormwood.jpg"
  },
    {
    url: "https://sepdiem.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/boniver.jpg"
  },
    {
    url: "https://watakoii-chiquitoblog.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nirvanainutero.jpg"
  },
    {
    url: "https://stargaz3r.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/cocteautwins.jpg"
  },
    {
    url: "https://maccadot.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/billyidol.jpg"
  },
    {
    url: "https://gourdlake.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/beastofblood.jpg"
  },
    {
    url: "https://caesthoffe.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/riseagainst.jpg"
  },
    {
    url: "https://faineantdoll.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/dazeyandthescouts.jpg"
  },
    {
    url: "https://venusxite.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/myironlung.jpg"
  },
    {
    url: "https://berry.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/EnglandMadeMe.jpg"
  },
    {
    url: "https://joseywails.com",
    image: "https://cdring.neocities.org/ringcdimages/sweetheart.jpg"
  },
    {
    url: "https://atomicadam.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/skinnypuppy.jpg"
  },
    {
    url: "https://peril.zip",
    image: "https://cdring.neocities.org/ringcdimages/jamiepaige3.jpg"
  },
    {
    url: "https://creamblast.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/FromRottingFantasylands.jpg"
  },
    {
    url: "https://disccrud.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/len.jpg"
  },
    {
    url: "https://zeroweb.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/seventeengoingunder.jpg"
  },
    {
    url: "https://torrentempress.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Sawayama.jpg"
  },
    {
    url: "https://milkyway.moe",
    image: "https://cdring.neocities.org/ringcdimages/milkyp.jpg"
  },
    {
    url: "https://starseven.neocities.org/home",
    image: "https://cdring.neocities.org/ringcdimages/blackcountrynewroad.jpg"
  },
    {
    url: "https://www.ledaheavyindustry.com",
    image: "https://cdring.neocities.org/ringcdimages/blackcascade.jpg"
  },
    {
    url: "https://spaira.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/seether.jpg"
  },
    {
    url: "https://gamersagainstthemachine.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/theend.jpg"
  },
    {
    url: "https://minxie.likesyou.org",
    image: "https://cdring.neocities.org/ringcdimages/ilovemycomputer.jpg"
  },
    {
    url: "https://confetticann0n.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/livethroughthis.jpg"
  },
    {
    url: "https://eclipse-the-feathered-dragon.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/blight.jpg"
  },
    {
    url: "https://pacrobat.com",
    image: "https://cdring.neocities.org/ringcdimages/ondarkhorses.jpg"
  },
    {
    url: "https://terrible.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/chanchoenpiedra.jpg"
  },
    {
    url: "https://meanwhilearchive.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/twinpeaks.jpg"
  },
    {
    url: "https://katerpillar.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/californiacation.jpg"
  },
    {
    url: "https://samswaggedout.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Lucki.jpg"
  },
    {
    url: "https://lukitime.nekoweb.org/homepage",
    image: "https://cdring.neocities.org/ringcdimages/gorrillaz2.jpg"
  },
    {
    url: "https://sallycanwait.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Sparks.jpg"
  },
    {
    url: "https://stirfryonline.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Fugazi.jpg"
  },
    {
    url: "https://bessiebea.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/VerucaSalt.jpg"
  },
    {
    url: "https://killdozer.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/FrogMallet.jpg"
  },
    {
    url: "https://markofiume.com",
    image: "https://cdring.neocities.org/ringcdimages/Caparezza.jpg"
  },
    {
    url: "https://kitsunekashi.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/STOMACHBOOK.jpg"
  },
    {
    url: "https://pottisplace.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/thecure.jpg"
  },
    {
    url: "https://dorkshop.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/imsosorry.jpg"
  },
    {
    url: "https://soder.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ColorBars.jpg"
  },
    {
    url: "https://eonsadrift.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/SleepToken.jpg"
  },
    {
    url: "https://fantasmagoria.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/bleach.jpg"
  },
    {
    url: "https://jello01000101.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/kittycraft.jpg"
  },
    {
    url: "https://webbersite.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/19-83.jpg"
  },
    {
    url: "https://stratosphere.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/PASSENGERPRINCESS.jpg"
  },
    {
    url: "https://termotanquedeleche.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Shoebill.jpg"
  },
    {
    url: "https://love2love.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Tabber.jpg"
  },
    {
    url: "https://pinkatron.nekoweb.org/page2.html",
    image: "https://cdring.neocities.org/ringcdimages/cavalcade.jpg"
  },
    {
    url: "https://piplune.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nickelback.jpg"
  },
    {
    url: "https://s8tanicpanic.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/korn2.jpg"
  },
    {
    url: "https://horseychobunso.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/CallousDaoboys.jpg"
  },
    {
    url: "https://canismind.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/cherrybomb.jpg"
  },
    {
    url: "https://ooo-o.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/cindylee.jpg"
  },
    {
    url: "https://rubyslippers.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/wizardofoz.jpg"
  },
    {
    url: "https://luther7.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/pulsedemon.jpg"
  },
    {
    url: "https://pluto-sparv.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/femtanyl2.jpg"
  },
    {
    url: "https://chillybeans.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/crest.jpg"
  },
    {
    url: "https://lunchtimedoublyso.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/emmersonlakeandpalmer.jpg"
  },
    {
    url: "https://millennium-whoop.github.io/aetherway",
    image: "https://cdring.neocities.org/ringcdimages/dontlaughitoff.jpg"
  },
    {
    url: "https://poisonedeffigy.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/throbbinggristle.jpg"
  },
    {
    url: "https://fishcar22.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ween3.jpg"
  },
    {
    url: "https://wrongpocket.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/wake.jpg"
  },
    {
    url: "https://j4yc33.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nevermore.jpg"
  },
    {
    url: "https://mallovett229.neocities.org/AutoTrope/home",
    image: "https://cdring.neocities.org/ringcdimages/alexg.jpg"
  },
    {
    url: "https://scruffbaggisrecording.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/broadcast.jpg"
  },
    {
    url: "https://enterthejesslair.com",
    image: "https://cdring.neocities.org/ringcdimages/MinorThreat.jpg"
  },
    {
    url: "https://hanksubversion.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/MinorThreat2.jpg"
  },
    {
    url: "https://biscuitlovesween.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ween4.jpg"
  },
    {
    url: "https://flcl.moe",
    image: "https://cdring.neocities.org/ringcdimages/HappyBivouac.jpg"
  },
    {
    url: "https://zombie-page.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/STOMACHBOOK2.jpg"
  },
    {
    url: "https://dxrofflicxox.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/herwordskill.jpg"
  },
    {
    url: "https://lauratsuki.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Capsule.jpg"
  },
    {
    url: "https://kurilka.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/daftpunk2.jpg"
  },
    {
    url: "https://acidrains-site.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nirvana.jpg"
  },
    {
    url: "https://eldiabloenpatines.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/tor.jpg"
  },
    {
    url: "https://ihateboys.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/GlennBranca.jpg"
  },
    {
    url: "https://dotsun.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/wowaka.jpg"
  },
    {
    url: "https://fishblob.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/glassanimals2.jpg"
  },
    {
    url: "https://greyjackettt.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Sianvar.jpg"
  },
    {
    url: "https://bedroom-dreaming.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Yuragi.jpg"
  },
    {
    url: "https://nyani58.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Shearling.jpg"
  },
    {
    url: "https://rottenenigma.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/nttb.jpg"
  },
    {
    url: "https://morrigan.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/UTAGE.jpg"
  },
    {
    url: "https://mimikyutieiscool.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/sophomoreslump.jpg"
  },
    {
    url: "https://8y7.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/kendricklamar2.jpg"
  },
    {
    url: "https://downhill2k01.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/cartiergod.jpg"
  },
    {
    url: "https://crydamoure.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/daftpunk2.jpg"
  },
    {
    url: "https://miaomiao.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/frenesi.jpg"
  },
    {
    url: "https://sidneyscape.space",
    image: "https://cdring.neocities.org/ringcdimages/glassbeach.jpg"
  },
    {
    url: "https://dudutrys.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/deadmau5.jpg"
  },
    {
    url: "https://mrbaba467.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/OceanDrive.jpg"
  },
    {
    url: "https://your-hands.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/yourhands.jpg"
  },
    {
    url: "https://cyb3rdrift.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/talkingheads2.jpg"
  },
    {
    url: "https://grumpfox.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/msp.jpg"
  },
    {
    url: "https://crunk.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/hottgg.jpg"
  },
    {
    url: "https://muenster.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Mimikajiru.jpg"
  },
    {
    url: "https://guest1013.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Tranquilizer.jpg"
  },
    {
    url: "https://theonlylivinggirlinpa.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/wednesday.jpg"
  },
    {
    url: "https://fruitbasketsys.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/rush.jpg"
  },
    {
    url: "https://cyberangelonline.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Ninajirachi.jpg"
  },
    {
    url: "https://alsouterspace.com",
    image: "https://cdring.neocities.org/ringcdimages/ptv2.jpg"
  },
    {
    url: "https://monsterousseas.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/simonandgarfunkle.jpg"
  },
    {
    url: "https://thedreambox.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/slide.jpg"
  },
    {
    url: "https://spitrash.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/foodhouse.jpg"
  },
    {
    url: "https://minicafe.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/happybirthday.jpg"
  },
    {
    url: "https://zampyre.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/PaleSwordsman.jpg"
  },
    {
    url: "https://lucis-head.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/gorillaz6.jpg"
  },
    {
    url: "https://kanandraw.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/msgbox.jpg"
  },
    {
    url: "https://greenteabitches.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/badtaste.jpg"
  },
    {
    url: "https://mkb14.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/SpringIsland.jpg"
  },
    {
    url: "https://halcantdothat.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/talkingheads3.jpg"
  },
    {
    url: "https://schmookey.xyz/webrings",
    image: "https://cdring.neocities.org/ringcdimages/kino.jpg"
  },
    {
    url: "https://malkism.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Self.jpg"
  },
    {
    url: "https://maybeitsk3nzie.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/backstreetboys.jpg"
  },
    {
    url: "https://tvviissh.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/KillingJoke.jpg"
  },
    {
    url: "https://olivesgarden.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Outkast.jpg"
  },
    {
    url: "https://hansels-haven.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/DanceGavinDance.jpg"
  },
    {
    url: "https://ei-person.com",
    image: "https://cdring.neocities.org/ringcdimages/cocteautwins2.jpg"
  },
    {
    url: "https://andisarchive.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Details.jpg"
  },
    {
    url: "https://goggle-guy.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/splinter.jpg"
  },
    {
    url: "https://prunusavium.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/malcolmtodd.jpg"
  },
    {
    url: "https://my-awesome-website.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/michaeljackson.jpg"
  },
    {
    url: "https://n1ghtm4ri0nn3.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/crybaby.jpg"
  },
    {
    url: "http://asteroth.net",
    image: "https://cdring.neocities.org/ringcdimages/GYBE.jpg"
  },
    {
    url: "https://davidwheeler.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/letitbe2.jpg"
  },
    {
    url: "https://atliseffects-dungeon.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/peelingflesh.jpg"
  },
    {
    url: "https://greycloak.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Nurture.jpg"
  },
    {
    url: "https://pipereverie.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Home.jpg"
  },
    {
    url: "https://abnormalsweater.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ComaCinema.jpg"
  },
    {
    url: "https://moldcake.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/negativehappy.jpg"
  },
    {
    url: "https://capsule.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/ilovemycomputer.jpg"
  },
    {
    url: "https://herbus-serwus.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/smile.jpg"
  },
    {
    url: "https://co2bilanz.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Allesistgut.jpg"
  },
    {
    url: "https://rumirum.eu",
    image: "https://cdring.neocities.org/ringcdimages/visionsoflight.jpg"
  },
    {
    url: "https://harakiri.moe",
    image: "https://cdring.neocities.org/ringcdimages/ado.jpg"
  },
    {
    url: "https://bea456.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/nin2.jpg"
  },
    {
    url: "https://monamies.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr4.jpg"
  },
    {
    url: "https://ichirou-tanabe.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/disintegration.jpg"
  },
    {
    url: "https://chainsawcannon.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/UNDEADCORPORATION.jpg"
  },
    {
    url: "https://lunari.anbimichi.moe",
    image: "https://cdring.neocities.org/ringcdimages/Ngot.jpg"
  },
    {
    url: "https://pompom.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/gosailor.jpg"
  },
    {
    url: "https://alele.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/prince.jpg"
  },
    {
    url: "https://vanillamilkshake.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Alexisonfire.jpg"
  },
    {
    url: "https://lycentropy.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/ladispute.jpg"
  },
    {
    url: "https://lycentropy.com",
    image: "https://cdring.neocities.org/ringcdimages/ladispute.jpg"
  },
    {
    url: "https://iou.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/underscores2.jpg"
  },
    {
    url: "https://archivemind.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/themoneystore.jpg"
  },
    {
    url: "https://donayazmine.com",
    image: "https://cdring.neocities.org/ringcdimages/portals.jpg"
  },
    {
    url: "https://undefinedrock.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/miranda.jpg"
  },
    {
    url: "https://cultica.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/joanofarc.jpg"
  },
    {
    url: "https://voxelcity.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/jackstauber.jpg"
  },
    {
    url: "https://adrianvic.github.io",
    image: "https://cdring.neocities.org/ringcdimages/hellofascination.jpg"
  },
    {
    url: "https://yungalgorithm.com",
    image: "https://cdring.neocities.org/ringcdimages/brandnew.jpg"
  },
    {
    url: "https://killing-machine.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/somwhereinnevada.jpg"
  },
    {
    url: "https://king-of-rlyeh.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/FirstFragment.jpg"
  },
    {
    url: "https://softkittendreamforever.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/evanescence4.jpg"
  },
    {
    url: "https://g33z3r.com/shrine",
    image: "https://cdring.neocities.org/ringcdimages/disintegration.jpg"
  },
    {
    url: "https://wythos.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/fnaf.jpg"
  },
    {
    url: "https://atomicbolts.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/tylerthecreator5.jpg"
  },
    {
    url: "https://thegreatpretender02.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/queen.jpg"
  },
    {
    url: "https://wordsoup.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ram.jpg"
  },
    {
    url: "https://meeeks.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/murderbydeath.jpg"
  },
    {
    url: "https://asteroids-cove.neocities.org/home",
    image: "https://cdring.neocities.org/ringcdimages/CiboMatto.jpg"
  },
    {
    url: "https://wfle2.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Acumennation.jpg"
  },
    {
    url: "https://7d9.pages.dev",
    image: "https://cdring.neocities.org/ringcdimages/coco.jpg"
  },
    {
    url: "https://somniloquence.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/timeline.jpg"
  },
    {
    url: "https://dio-letoile.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/icwtuti.jpg"
  },
    {
    url: "https://spook.zone",
    image: "https://cdring.neocities.org/ringcdimages/violentwaves.jpg"
  },
    {
    url: "https://ourfeaturepresentation.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/folx.jpg"
  },
    {
    url: "https://velvetnothing.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/honey.jpg"
  },
    {
    url: "https://aidexp.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/boa.jpg"
  },
    {
    url: "https://wondertigress.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/fallen.jpg"
  },
    {
    url: "https://to-the-backyardcafe.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/hayleywilliams.jpg"
  },
    {
    url: "https://shareddreams.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/yokoono.jpg"
  },
    {
    url: "https://dewdrop.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/beyondbeyond.jpg"
  },
    {
    url: "https://nothalfasleep.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/billieeilish.jpg"
  },
    {
    url: "https://nekromant.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/XiuXiu.jpg"
  },
    {
    url: "https://sabrinaa.page",
    image: "https://cdring.neocities.org/ringcdimages/beachbunny.jpg"
  },
    {
    url: "https://control-room.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/lotto.jpg"
  },
    {
    url: "https://mooonysver.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/grabthatgun.jpg"
  },
    {
    url: "https://thesillypalace.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/femtanyl2.jpg"
  },
    {
    url: "https://3dgoose.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/queen2.jpg"
  },
    {
    url: "https://cyb3rmimii.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/gwenstefani.jpg"
  },
    {
    url: "https://drns.dev",
    image: "https://cdring.neocities.org/ringcdimages/kgatlw.jpg"
  },
    {
    url: "https://hydromaniac.neocities.org/mainsite",
    image: "https://cdring.neocities.org/ringcdimages/nirvanainutero.jpg"
  },
    {
    url: "https://white-ceiling.bearblog.dev",
    image: "https://cdring.neocities.org/ringcdimages/parannoul.jpg"
  },
    {
    url: "https://roachhaven.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/tanzomat.jpg"
  },
    {
    url: "https://thepinklair.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/JavieraMena.jpg"
  },
    {
    url: "https://dogystuff.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/norightsreserved.jpg"
  },
    {
    url: "https://lizsite.xyz",
    image: "https://cdring.neocities.org/ringcdimages/VyletPony.jpg"
  },
    {
    url: "https://raverhm.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ethan.jpg"
  },
    {
    url: "https://goichisuda.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/vanhalen.jpg"
  },
    {
    url: "https://unapersonanorm.al",
    image: "https://cdring.neocities.org/ringcdimages/NeneMalo.jpg"
  },
    {
    url: "https://hydrangea-pop.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/BecomingX.jpg"
  },
    {
    url: "https://katrinaevans.art",
    image: "https://cdring.neocities.org/ringcdimages/lordhuron.jpg"
  },
    {
    url: "https://macaroniandcheese.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/nodoubt.jpg"
  },
    {
    url: "https://mothofspacetime.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/cranewives.jpg"
  },
    {
    url: "https://ecocentric.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/macdemarco.jpg"
  },
    {
    url: "https://wencesbyte.net",
    image: "https://cdring.neocities.org/ringcdimages/SLACKCiRCUS.jpg"
  },
    {
    url: "https://goobz-cd-shelf.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ohhello.jpg"
  },
    {
    url: "https://ihatetehbsod.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/interruptrequest.jpg"
  },
    {
    url: "https://lunk09.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/clancy.jpg"
  },
    {
    url: "https://cor-mechanica.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/silenthill.jpg"
  },
    {
    url: "https://keltime.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/plagiarism.jpg"
  },
    {
    url: "https://insula.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/maretu.jpg"
  },
    {
    url: "https://satanized.online",
    image: "https://cdring.neocities.org/ringcdimages/ghost.jpg"
  },
    {
    url: "https://undercovervampire.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/lungs.jpg"
  },
    {
    url: "https://mosesshtar.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/qotsa2.jpg"
  },
    {
    url: "https://naviimiu.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/clairo.jpg"
  },
    {
    url: "https://baggebo-the-goober.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/geese2.jpg"
  },
    {
    url: "https://weirdo.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/chinchilla.jpg"
  },
    {
    url: "https://yappybeans.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/ptv3.jpg"
  },
    {
    url: "https://stuffedlove.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/CobraStarship.jpg"
  },
    {
    url: "https://straylove.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/leafandsnow.jpg"
  },
    {
    url: "https://mayhemtown.tv",
    image: "https://cdring.neocities.org/ringcdimages/Igetwet.jpg"
  },
    {
    url: "https://l3l3.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/fakeid.jpg"
  },
    {
    url: "https://alxbrain.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/kylie.jpg"
  },
    {
    url: "https://jirachi.ink",
    image: "https://cdring.neocities.org/ringcdimages/voyeur.jpg"
  },
    {
    url: "https://cleatus.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/california.jpg"
  },
    {
    url: "https://sisisserenity.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/hiinfidelity.jpg"
  },
    {
    url: "https://ooory.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/unkle.jpg"
  },
    {
    url: "https://d1vinescrash0ut.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/DJAwesome.jpg"
  },
    {
    url: "https://l1na.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ladygaga.jpg"
  },
    {
    url: "https://chibinezu.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/arianagrande.jpg"
  },
    {
    url: "https://cwtch.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/diiv.jpg"
  },
    {
    url: "https://adjective-object.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/maisiepeters.jpg"
  },
    {
    url: "https://birdfoxgirl.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/buildttospill.jpg"
  },
    {
    url: "https://zenchakrastemple.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/chickhabit.jpg"
  },
    {
    url: "https://sunvale.nekoweb.org/index.html",
    image: "https://cdring.neocities.org/ringcdimages/KnutmoFive.jpg"
  },
    {
    url: "https://cicadasuede.neocities.org/Cicadasuede",
    image: "https://cdring.neocities.org/ringcdimages/Qypthone.jpg"
  },
    {
    url: "https://twotriplezero.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/noma.jpg"
  },
    {
    url: "https://abridayy.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/swans.jpg"
  },
    {
    url: "https://teslasp2.com",
    image: "https://cdring.neocities.org/ringcdimages/AnotherLight.jpg"
  },
    {
    url: "https://mmmdvds.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Threads.jpg"
  },
    {
    url: "https://meyghn.online",
    image: "https://cdring.neocities.org/ringcdimages/SilverJews.jpg"
  },
    {
    url: "https://alka20line.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/VoxPopuli.jpg"
  },
    {
    url: "https://lyric.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/livethroughthis.jpg"
  },
    {
    url: "https://und3adpr0ductions.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/manifesto.jpg"
  },
    {
    url: "https://10n8ru.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/bts2.jpg"
  },
    {
    url: "https://vd1r.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/super8.jpg"
  },
    {
    url: "https://phaidros.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/slowdive.jpg"
  },
    {
    url: "https://kantasira.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/HIM.jpg"
  },
    {
    url: "https://taiji.sproutling.site",
    image: "https://cdring.neocities.org/ringcdimages/weezer.jpg"
  },
    {
    url: "https://notquite-real.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/mcr4.jpg"
  },
    {
    url: "https://fourtwo2k.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/squarepusher.jpg"
  },
    {
    url: "https://hotwheelsandhighheels.com",
    image: "https://cdring.neocities.org/ringcdimages/macmiller.jpg"
  },
    {
    url: "https://candyhue.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/florenceandthemachine.jpg"
  },
    {
    url: "https://danonedemirtilo.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/carseatheadrest2.jpg"
  },
    {
    url: "https://lcp.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/okgo.jpg"
  },
    {
    url: "https://computastic.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/weezer2.jpg"
  },
    {
    url: "https://oceangrey.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/judaspriest.jpg"
  },
    {
    url: "https://catgutstew.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/clinteastwood.jpg"
  },
    {
    url: "https://soramimicake.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/seranipoji.jpg"
  },
    {
    url: "https://saturnpatty.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/href.jpg"
  },
    {
    url: "https://snowcape.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/HEALTH.jpg"
  },
    {
    url: "https://lauralicious.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/boniver2.jpg"
  },
    {
    url: "https://toasti.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/elemental.jpg"
  },
    {
    url: "https://nynasunner.space",
    image: "https://cdring.neocities.org/ringcdimages/kingcrimson2.jpg"
  },
    {
    url: "https://adoniska.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/album.jpg"
  },
    {
    url: "https://keiism.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/whoasked.jpg"
  },
    {
    url: "https://headfullofworms.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/foxing.jpg"
  },
    {
    url: "https://bachelor.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/SweetTrip.jpg"
  },
    {
    url: "https://loveless.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/mybloodyvalentine.jpg"
  },
    {
    url: "https://bonyou.place",
    image: "https://cdring.neocities.org/ringcdimages/thecabs.jpg"
  },
    {
    url: "https://pc98.club",
    image: "https://cdring.neocities.org/ringcdimages/dlismh.jpg"
  },
    {
    url: "https://therottenbrains.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/melloncollie.jpg"
  },
    {
    url: "https://serlei.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/goodbyedespair.jpg"
  },
    {
    url: "https://quaidan.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/cloudnothings.jpg"
  },
    {
    url: "https://levinchelna.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/rebornsuperstar.jpg"
  },
    {
    url: "https://deskr.at",
    image: "https://cdring.neocities.org/ringcdimages/nightripper.jpg"
  },
    {
    url: "https://floyp.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/suntub.jpg"
  },
    {
    url: "https://endruv.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/transformers.jpg"
  },
    {
    url: "https://elgulley.online",
    image: "https://cdring.neocities.org/ringcdimages/johnmayer.jpg"
  },
    {
    url: "https://cyanweb.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/boardsofcanada.jpg"
  },
    {
    url: "https://e-walk.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/kgatlw2.jpg"
  },
    {
    url: "https://rawrpawz1.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/livethroughthis.jpg"
  },
    {
    url: "https://daiwong28.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/BEYOND.jpg"
  },
    {
    url: "https://are-yu-home.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/NoPartyForCaoDong.jpg"
  },
    {
    url: "https://enniu.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/q36.jpg"
  },
    {
    url: "https://hiddentrack.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/hers.jpg"
  },
    {
    url: "https://swirlscape.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Alucinacao.jpg"
  },
    {
    url: "https://moefrancis.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/THEPSYCHOBLAST.jpg"
  },
    {
    url: "https://dombrist.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/aphextwin2.jpg"
  },
    {
    url: "https://strangetowngirl.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/humanistic.jpg"
  },
    {
    url: "https://firetruckdaddy76.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/ram.jpg"
  },
    {
    url: "https://mixtapesanddialtones.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/placebo.jpg"
  },
    {
    url: "https://azuresden.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/dreamos.jpg"
  },
    {
    url: "https://msknmdnss.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/bobmarley.jpg"
  },
    {
    url: "https://deandro.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/georgeharrison2.jpg"
  },
    {
    url: "https://anypup.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/tallyhall.jpg"
  },
    {
    url: "https://cmar.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/siames.jpg"
  },
    {
    url: "https://faemaleficence.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Invisible.jpg"
  },
    {
    url: "https://mnesia.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/amnesiac.jpg"
  },
    {
    url: "https://88haki.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/ohhellos.jpg"
  },
    {
    url: "https://www.trollsbridge.net",
    image: "https://cdring.neocities.org/ringcdimages/femtanyl2.jpg"
  },
    {
    url: "https://uncutgem.net",
    image: "https://cdring.neocities.org/ringcdimages/seventeen.jpg"
  },
    {
    url: "https://warak.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/SweetTrip.jpg"
  },
    {
    url: "https://veinpyr.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/HauRuck.jpg"
  },
    {
    url: "https://yequari.com",
    image: "https://cdring.neocities.org/ringcdimages/kyuss.jpg"
  },
    {
    url: "https://drprinterphd.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/faithisarock.jpg"
  },
    {
    url: "https://alphacarinae.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/giveup.jpg"
  },
    {
    url: "https://isaacsland.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/kid606.jpg"
  },
    {
    url: "https://cheesecurdfan.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Synkronized.jpg"
  },
    {
    url: "https://auti.moe",
    image: "https://cdring.neocities.org/ringcdimages/bluevalentine.jpg"
  },
    {
    url: "https://kairiskey.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/momjeans.jpg"
  },
    {
    url: "https://butterkiss.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/mitski.jpg"
  },
    {
    url: "https://byronbeck.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/bryonbeck.jpg"
  },
    {
    url: "https://robotickyuu.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/morveotesi.jpg"
  },
    {
    url: "https://nagisako.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/femcels.jpg"
  },
    {
    url: "https://cozyzone.net",
    image: "https://cdring.neocities.org/ringcdimages/CONTROLResonant.jpg"
  },
    {
    url: "https://kkirboouu.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/flyinglotus.jpg"
  },
    {
    url: "https://sampleface.co.uk",
    image: "https://cdring.neocities.org/ringcdimages/madvillian.jpg"
  },
    {
    url: "https://bannanaspitgirl.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Smarmymob.jpg"
  },
    {
    url: "https://jockstar.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/Hound.jpg"
  },
    {
    url: "https://snuffwave.net",
    image: "https://cdring.neocities.org/ringcdimages/slippymudman.jpg"
  },
    {
    url: "https://xxnightfairyxx.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/meganddia.jpg"
  },
    {
    url: "https://wtpi.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/squarepusher2.jpg"
  },
    {
    url: "https://sellmethiscabbage.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/beachhouse.jpg"
  },
    {
    url: "https://crystalsweb.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/virtualWorld.jpg"
  },
    {
    url: "https://anrkey.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/MasayoshiTakanaka.jpg"
  },
    {
    url: "https://imprimatura.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/adrainnelenker.jpg"
  },
    {
    url: "https://vincentwhittman.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ethelcain.jpg"
  },
    {
    url: "https://sor.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/rammstein2.jpg"
  },
    {
    url: "https://raduissatansnumone.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/boburnham.jpg"
  },
    {
    url: "https://tabrisdiscdrive.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/WhyKiiiKiii.jpg"
  },
    {
    url: "https://zero3st-localdisk-d.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/27club.jpg"
  },
    {
    url: "https://burntblackcat.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/twinfantasy.jpg"
  },
    {
    url: "https://dogrise.net",
    image: "https://cdring.neocities.org/ringcdimages/thisisit.jpg"
  },
    {
    url: "https://homozygotte.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/chemlab.jpg"
  },
    {
    url: "https://irytset.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/operationwanderingsoul.jpg"
  },
    {
    url: "https://ribbonated.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/nin2.jpg"
  },
    {
    url: "https://anero.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/trollhiem.jpg"
  },
    {
    url: "https://4gainst-the-kitchen-floor.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/connyjash3.jpg"
  },
    {
    url: "https://krbnmnxd.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/ayeshaerotica.jpg"
  },
    {
    url: "https://chickenprince.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/linkinpark.jpg"
  },
    {
    url: "https://re-input.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/cake.jpg"
  },
    {
    url: "https://yunkinemarchive.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/kozi.jpg"
  },
    {
    url: "https://imollet.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/girlfriend.jpg"
  },
    {
    url: "https://darkandobscure.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/woodsiv.jpg"
  },
    {
    url: "https://caar1960-page.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/eltonjohn.jpg"
  },
    {
    url: "https://wiggle-all-day.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/hihowareyou.jpg"
  },
    {
    url: "https://deusmachinalis.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/speakanddestroy.jpg"
  },
    {
    url: "https://sunfishdreamworld.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/somenights.jpg"
  },
    {
    url: "https://iizpoopfart.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Primer55.jpg"
  },
    {
    url: "https://jaidankristofermusic.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/imogenheap.jpg"
  },
    {
    url: "https://qyenmeo.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/revolver.jpg"
  },
    {
    url: "https://nimrrev.nekoweb.org",
    image: "https://cdring.neocities.org/ringcdimages/greenday.jpg"
  },
    {
    url: "https://rustamlsk.neocities.org/metro/en/metro",
    image: "https://cdring.neocities.org/ringcdimages/wutang.jpg"
  },
    {
    url: "https://horizontallyspinningrats.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/Enjambre.jpg"
  },
    {
    url: "https://roshenperium.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/badreligion.jpg"
  },
    {
    url: "https://scrimtas.neocities.org",
    image: "https://cdring.neocities.org/ringcdimages/splinter.jpg"
  }
   
  
];

//the name of the ring


/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var cdringID = 'cdr';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://cdring.neocities.org';

//should the widget include a random button?
var useRandom = true;