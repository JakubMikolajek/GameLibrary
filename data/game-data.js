
import Game from "../models/game";
import Category from "../models/category";

export const CATEGORIES = [
    new Category("cat1", "PC", "#FCE205"),
    new Category("cat4", "PlayStation 4", "#003791"),
    new Category("cat5", "PlayStation 5", "#003791"),
    new Category("cat2", "XBOX ONE", "#107C10"),
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
];
