import "reflect-metadata";
import {
    createConnection,
    getCustomRepository,
    CharacterRepository,
    RaceRepository,
    SpellRepository,
} from "./index";

createConnection().then(async connection => {
    console.log("Inserting races into database...")
    const raceRepo = getCustomRepository(RaceRepository);
    const elf = raceRepo.create();
    elf.name = "Dark Elf";
    elf.description = "Inhabitants of the Far Lands of the East, worshippers the moon and sky.";
    elf.image = "https://img00.deviantart.net/6af8/i/2018/138/7/7/elven_march_by_eirwen980-dcbv9eb.png";
    await raceRepo.save(elf);

    const dragonRace = raceRepo.create();
    dragonRace.name = "Dragon";
    dragonRace.description = "Ellusive creatures of the Southern Regions, said to have rained fire on the Mer of Old";
    dragonRace.image = "https://img00.deviantart.net/27a6/i/2017/282/3/e/inktober_9___screech_by_eirwen980-dbq1f0l.png";
    await raceRepo.save(dragonRace);

    const felineRace = raceRepo.create();
    felineRace.name = "Felis Tenebris";
    felineRace.description = "Cats of the Far Lands, keepers of the Luna Spiritus.";
    felineRace.image = "https://c1.staticflickr.com/1/955/40409575040_6bfdabbd22_b.jpg";
    await raceRepo.save(felineRace);

    const hornElfRace = raceRepo.create();
    hornElfRace.name = "Corneus Elf";
    hornElfRace.description = "Woodland Elves of the Northen Forests, movers of Earth and Stone.";
    hornElfRace.image = "https://pre00.deviantart.net/ad54/th/pre/i/2018/089/2/1/vurin__tiefling_druid_by_glasvera-dc7efe4.png";
    await raceRepo.save(hornElfRace);

    const seaElfRace = raceRepo.create();
    seaElfRace.name = "Profundum Elf";
    seaElfRace.description = "Marine elves of the Western Seas, banished to the lonely depths long ago.";
    seaElfRace.image = "https://pre00.deviantart.net/fca0/th/pre/i/2018/139/8/d/mermay_2018____19_by_crimi_azna-dcbyoxc.png";
    await raceRepo.save(seaElfRace);

    console.log("Inserting spells into database...");
    const spellRepo = getCustomRepository(SpellRepository);
    const spell = spellRepo.create();
    spell.name = "Wind";
    spell.description = "Produces a burst of wind to blow an opponent";
    spell.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Symbol_wind_speed_08.svg/200px-Symbol_wind_speed_08.svg.png";
    spell.damage = 2;
    await spellRepo.save(spell);

    console.log("Inserting a new user into the database...");
    const characterRepo = getCustomRepository(CharacterRepository);
    const char = characterRepo.create();
    char.name = "Therel";
    char.health = 25;
    char.magicka = 25;
    char.race = elf;
    char.spells = [ spell ];
    char.image = "https://pre00.deviantart.net/8dc5/th/pre/f/2011/259/5/8/solaufein_portrait_by_sky_byte_haiku-d4a0i2d.jpg"
    await characterRepo.save(char);
    console.log("Saved a new user with id: " + char.id);

    console.log("Loading users from the database...");
    const chars = await characterRepo.findByName("Therel");
    console.log("Loaded users: ", chars);

    console.log("Here you can setup and run express/koa/any other framework.");


}).catch(error => console.log(error));
