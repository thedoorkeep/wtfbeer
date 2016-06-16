
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
            "brown ale"
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
            "brett"
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
            "crystal",
            "fuggle",
            "galaxy",
            "golding",
            "hallertau",
            "herkules",
            "hersbrucker",
            "magnum",
            "Mandarina bavaria",
            "mosaic",
            "nelson sauvin",
            "northern brewer",
            "nugget",
            "olympic",
            "pacifica",
            "pioneer",
            "polaris",
            "simcoe",
            "Sorachi Ace",
            "southern cross",
            "summit",
            "tahoma",
            "tettnang",
            "tomahawk",
            "vanguard",
            "wai-iti",
            "waimea",
            "wakatu",
            "warrior",
            "willamette",
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
            "acidulated malt"
        ]
    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

}); 