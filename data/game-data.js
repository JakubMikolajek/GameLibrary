import Game from "../models/game";
import Category from "../models/category";

export const CATEGORIES = [
    new Category("cat1", "PC", "#FCE205"),
    new Category("cat4", "PlayStation 4", "#005791"),
    new Category("cat5", "PlayStation 5", "#003791"),
    new Category("cat2", "XBOX ONE", "#367c10"),
    new Category("cat3", "XBOX SERIES S/X", "#107C10"),
];

export const GAMES = [
    new Game(
        "g1",
        ["cat1", "cat4", "cat5"],
        "God of war",
        "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
        "Santa Monica Studio",
        "Sony Interactive Entertainment",
        [
            "Głównym bohaterem gry jest Kratos, który po wydarzeniach z poprzednich części serii, udaje się z Grecji na północ Europy. Tam poznaje żonę i zakłada rodzinę. Po śmierci ukochanej zostaje samotnym ojcem i opiekuje się synem – Atreusem. Bohater stara się powstrzymać nordyckie bóstwa, które próbują go zgładzić.",
        ]
    ),
    new Game(
        "g2",
        ["cat1", "cat2", "cat3", "cat4", "cat5"],
        "Assassin's Creed Valhalla",
        "https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg",
        "Ubisoft Montreal",
        "Ubisoft",
        [
            "Rozgrywka toczy się w Norwegii (początkowo) i Anglii w IX wieku, które to w tamtejszym okresie zdominowane są przez wikingów. Postacią grywalną jest Eivor – jedna z wikingów.",
            "Eivor po opuszczeniu Norwegii udaje się do opanowanej przez walki o władzę Anglii i wdaje się w konflikt z Alfredem Wielkim. Poznaje także przedstawicieli ukrytych, od których otrzymuje ukryte ostrze. Cele Eivor i skrytobójców okazują się być zbliżone.",
        ]
    ),
    new Game(
        "g3",
        ["cat1", "cat2", "cat3", "cat4", "cat5"],
        "Far Cry 6",
        "https://upload.wikimedia.org/wikipedia/en/3/35/Far_cry_6_cover.jpg",
        "Ubisoft Toronto",
        "Ubisoft",
        [
            "Zgodnie z podanymi dotychczas informacjami, w trakcie rozgrywki gracz ma wcielić się w Daniego Rojasa, członka ruchu oporu chcącego obalić dyktaturę w fikcyjnym państwie Yara, gdzie rządzi dyktator Antón Castillo. Dyktator ten wzoruje się na swoim ojcu, chcąc przywrócić swojemu kraju świetność z lat jego panowania.",
            "Władcy państwa towarzyszy jego syn, liczący 13 lat Diego, który jest wychowywany na następnego zarządcę krajem.",
        ]
    ),
    new Game(
        "g4",
        ["cat1", "cat2", "cat3"],
        "Forza Horizon 5",
        "https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg",
        "Playground Games",
        "Xbox Game Studios",
        [
            "Forza Horizon 5 – komputerowa gra wyścigowa w otwartym świecie, stworzona przez brytyjskie studio Playground Games.Akcja rozgrywa się w świecie stylizowanym na Meksyk",
        ]
    ),
    new Game(
        "g5",
        ["cat4","cat5"],
        "God of War Ragnarok",
        "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnarök_cover.jpg",
        "Santa Monica Studio",
        "Sony Interactive Entertainment",
        ["God of War Ragnarök to nadchodząca przygodowa gra akcji opracowana przez Santa Monica Studio. Jego światowa premiera zaplanowana jest na 9 listopada 2022 roku. Będzie to dziewiąta odsłona serii God of War i kontynuacja God of War z 2018 roku. Będąc finałem nordyckiej ery serii, gra obejmie Ragnarök, serię wydarzeń, które przynoszą koniec dni i przedstawiają śmierć niektórych nordyckich bogów."]
    ),
    new Game(
        "g6",
        ["cat1", "cat2", "cat3", "cat4", "cat5"],
        "Dying Light 2 Stay Human",
        "https://upload.wikimedia.org/wikipedia/en/6/6d/Dying_Light_2_cover_art.jpg",
        "Techland",
        "Techland",
        ["Głównym bohaterem opowieści jest Aiden Caldwell – pielgrzym, który podróżuje po świecie, starając się odnaleźć swoją siostrę – jedyną bliską mu osobę, którą stracił, będąc jeszcze dzieckiem. Będąc na jej tropie mężczyzna trafia do Villedor, gdzie spotyka grupę ludzi zwanych nocnymi biegaczami."]
    ),
    new Game(
        "g7",
        ["cat4", "cat5"],
        "Horizon Forbidden West",
        "https://upload.wikimedia.org/wikipedia/en/6/69/Horizon_Forbidden_West_cover_art.jpg",
        "Guerrilla Games",
        "Sony Interactive Entertainment",
        ["Horizon Forbidden West kontynuuje historię Aloy pół roku po wydarzeniach z Zero Dawn, młoda łowczyni z plemienia Nora została wysłana na misję poza tajemniczą granicę rozciągającą się od Utah po wybrzeże Pacyfiku, aby znaleźć źródło tajemniczej plagi, która zabija wszystko co zainfekuje. W swojej podróży przez niezbadane krainy Zakazanego Zachodu napotyka wrogie regiony pełne naturalnych zagrożeń i spustoszone przez potężne burze, niebezpiecznych wrogów i śmiercionośne maszyny, zarówno nowe, jak i stare. "]
    )
];
