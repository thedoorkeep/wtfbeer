
$(function() {

    // Populate using an object literal

    WTF.init({

        heading: [
            "You should fucking brew",
            "You're fucking brewing",
            "Fuck it, why not brew"
        ],
        response: [
            "That sounds fucking terrible",
            "I don't wanna fucking brew that",
            "Fuck that idea"
        ],
        template: [
            "a @style made with @grain & @hop hops",
            "a @adjective @style"
        ],
        style: [
            "lager",
            "blonde ale",
            "stout",
            "pilsner",
            "bock",
            "belgian single",
            "dubbel",
            "triple",
            "wild ale",
            "pale ale",
            "IPA",
            "porter",
            "wheat ale",
            "hefeweizen",
            "saison",
            "brown ale",
            "cream ale",
            "munich helles",
            "munich dunkel",
            "kölsch",
            "altbier",
            "schwarzbier",
            "doppelbock",
            "eisbock",
            "weizenbock",
            "bitter",
            "mild",
            "wee heavy",
            "strong ale",
            "irish red ale",
            "barleywine",
            "lambic",
            "berliner weisse",
            "gueuze",
            "witbier",
            "flanders red ale",
            "gose",
            "california common",
            "kentucky common",
            "rauchbier",
            "oktoberfest",
            "maibock"
        ],
        adjective: [
            "hoppy",
            "bourbon barrel",
            "tart",
            "sour",
            "german",
            "old style",
            "high gravity",
            "session",
            "imperial",
            "black",
            "wild",
            "lacto",
            "brett",
            "sweet",
            "historic",
            "dry-hopped"
        ],
        hop: [
            "Amarillo",
            "cascade",
            "centennial",
            "challenger",
            "Chinook",
            "citra",
            "cluster",
            "columbus",
            "comet",
            "crystal",
            "first gold",
            "fuggle",
            "galaxy",
            "golding",
            "hallertau",
            "hallertauer blanc",
            "herkules",
            "hersbrucker",
            "huell melon",
            "lemon drop",
            "magnum",
            "Mandarina bavaria",
            "monroe",
            "mosaic",
            "nelson sauvin",
            "northdown",
            "northern brewer",
            "nugget",
            "olympic",
            "pacifica",
            "pioneer",
            "polaris",
            "saaz",
            "simcoe",
            "Sorachi Ace",
            "southern cross",
            "sovereign",
            "spalter select",
            "summit",
            "sovereign",
            "spalter select",
            "tahoma",
            "target",
            "tettnang",
            "tomahawk",
            "vanguard",
            "wai-iti",
            "waimea",
            "wakatu",
            "warrior",
            "willamette",
            "whitbread golding variety",
            "yakima gold",
            "zeus",
            "zythos"
        ],
        grain: [
            "2 row",
            "marris otter",
            "pilsner malt",
            "vienna malt",
            "carapils",
            "malted wheat",
            "caramel malt",
            "chocolate malt",
            "rye malt",
            "biscuit malt",
            "black malt",
            "crystal malt",
            "flaked oats",
            "acidulated malt",
            "munich malt",
            "flaked barley",
            "flaked corn",
            "golden promise",
            "smoked malt",
            "peated malt",
            "melanoidin malt",
            "roasted wheat malt",
            "special b",
            "brown malt",
            "amber malt",
            "mild ale malt",
            "roasted barley",
            "roasted rye",
            "spelt malt",
            "diastatic malt",
            "red x malt",
            "abbey malt",
            "chit malt",
            "torrefied wheat"
        ]
    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

}); 