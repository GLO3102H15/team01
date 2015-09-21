homeApp.controller("home-controller", function ($scope) {
    var featured = [
        {
            "wrapperType": "collection",
            "collectionType": "TV Season",
            "artistId": 252288074,
            "collectionId": 264406410,
            "artistName": "House",
            "collectionName": "House, Season 4",
            "collectionCensoredName": "House, Season 4",
            "artistViewUrl": "https://itunes.apple.com/us/tv-show/house/id252288074?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/tv-season/house-season-4/id264406410?uo=4",
            "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Features/1f/ae/27/dj.mixiblll.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Features/1f/ae/27/dj.mixiblll.jpg/500x500bb-85.jpg",
            "previewUrl": "https://www.youtube.com/watch?v=n8EfNllqS_A",
            "collectionPrice": 24.99,
            "collectionHdPrice": 29.99,
            "collectionExplicitness": "notExplicit",
            "contentAdvisoryRating": "TV-14",
            "trackCount": 16,
            "copyright": "� Universal Network Television, LLC. All Rights Reserved.",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2007-09-25T07:00:00Z",
            "primaryGenreName": "Drama",
            "longDescription": "<i>House</i> stars Hugh Laurie as Dr. Gregory House, a brilliant diagnostician who thrives on the challenge of solving medical puzzles to save lives. In the Season Three finale, the set-in-his-ways House was confronted with a series of major changes to his team &#8212; but any effects of this �house-cleaning,\" or the changes it may bring to House professionally or personally, remain to be seen in Season Four."
        },
        {
            "wrapperType": "collection",
            "collectionType": "TV Season",
            "artistId": 252288074,
            "collectionId": 459644267,
            "artistName": "House",
            "collectionName": "House, Season 8",
            "collectionCensoredName": "House, Season 8",
            "artistViewUrl": "https://itunes.apple.com/us/tv-show/house/id252288074?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/tv-season/house-season-8/id459644267?uo=4",
            "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Features/36/17/85/dj.vwqvqlji.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Features/36/17/85/dj.vwqvqlji.jpg/500x500bb-85.jpg",
            "previewUrl": "https://www.youtube.com/watch?v=egF9z9tsKuM",
            "collectionPrice": 29.99,
            "collectionHdPrice": 34.99,
            "collectionExplicitness": "notExplicit",
            "contentAdvisoryRating": "TV-14",
            "trackCount": 24,
            "copyright": "� 2011 Universal Network Television, LLC. All Rights Reserved",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2011-10-03T07:00:00Z",
            "primaryGenreName": "Drama",
            "longDescription": "Entering its eighth season, House has been honored with four Emmy Awards, two Golden Globe Awards. two Screen Actors Guild Awards, and three consecutive People's Choice Awards for Favorite TV Drama. Last season, House and Cuddy finally decided to take their relationship to the next level, but struggled to find a balance between their professional and personal lives, and ultimately, Cuddy made the very emotional decision to end their relationship. As each of them dealt with the aftermath of the break-up, House got married to an immigrant in need of a Green Card. In the series' milestone 150th episode, Thirteen was released from prison after euthanizing her brother who was suffering from the late stages of Huntington's Disease, the same disease with which she is afflicted. As the season comes to a close, when House's attempts to mend his relationship with Cuddy fall short, he's compelled to take drastic and possibly irrevocable measures that could forever change the course of their relationship."
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 684580963,
            "artistName": "Zack Snyder",
            "trackName": "Man of Steel (2013)",
            "trackCensoredName": "Man of Steel (2013)",
            "trackViewUrl": "https://itunes.apple.com/us/movie/man-of-steel-2013/id684580963?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=T6DJcgm3wNY",
            "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Video6/v4/00/5b/f9/005bf939-272d-aaf3-af57-605505d68487/mza_637886889651437942.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Video6/v4/00/5b/f9/005bf939-272d-aaf3-af57-605505d68487/mza_637886889651437942.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Video6/v4/00/5b/f9/005bf939-272d-aaf3-af57-605505d68487/mza_637886889651437942.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 3.99,
            "collectionHdPrice": 17.99,
            "trackHdPrice": 17.99,
            "trackHdRentalPrice": 4.99,
            "releaseDate": "2013-06-14T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 8579872,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Action & Adventure",
            "contentAdvisoryRating": "PG-13",
            "shortDescription": "From Warner Bros. Pictures and Legendary Pictures comes Man of Steel starring Henry Cavill in the",
            "longDescription": "From Warner Bros. Pictures and Legendary Pictures comes Man of Steel starring Henry Cavill in the role of Clark Kent / Superman, under the direction of Zack Snyder. A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
            "radioStationUrl": "https://itunes.apple.com/station/idra.684580963"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 708338403,
            "artistName": "Alfonso Cuar�n",
            "trackName": "Gravity",
            "trackCensoredName": "Gravity",
            "trackViewUrl": "https://itunes.apple.com/us/movie/gravity/id708338403?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=OiTiKOy59o4",
            "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Video3/v4/a6/2e/52/a62e521f-f4e2-21eb-5008-e4c62adb5566/pr_source.lsr/30x30bb-85.jpg",
            "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Video3/v4/a6/2e/52/a62e521f-f4e2-21eb-5008-e4c62adb5566/pr_source.lsr/60x60bb-85.jpg",
            "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Video3/v4/a6/2e/52/a62e521f-f4e2-21eb-5008-e4c62adb5566/pr_source.lsr/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "collectionHdPrice": 17.99,
            "trackHdPrice": 17.99,
            "releaseDate": "2013-10-04T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 5456595,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Drama",
            "contentAdvisoryRating": "PG-13",
            "shortDescription": "Sandra Bullock plays Dr. Ryan Stone, a brilliant engineer on her first shuttle mission, with veteran",
            "longDescription": "Winner of 7 Academy Awards�, including Best Director!  Sandra Bullock plays Dr. Ryan Stone, a medical engineer on her first shuttle mission, with veteran astronaut Matt Kowalski, played by George Clooney.  On a seemingly routine spacewalk, disaster strikes.  The shuttle is destroyed, leaving Stone and Kowalski completely alone - tethered to nothing but each other and spiraling out into the darkness.  The deafening silence tells them they have lost any link to Earth�and any chance for rescue.  As fear turns to panic, every gulp of air eats away at what little oxygen is left.  But the only way home may be to go further out into the terrifying expanse of space.",
            "radioStationUrl": "https://itunes.apple.com/station/idra.708338403"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "collectionId": 343647202,
            "trackId": 271469518,
            "artistName": "Larry Wachowski & Andy Wachowski",
            "collectionName": "4 Film Favorites: The Matrix / V for Vendetta / Constantine / Blade",
            "trackName": "The Matrix",
            "collectionCensoredName": "4 Film Favorites: The Matrix / V for Vendetta / Constantine / Blade",
            "trackCensoredName": "The Matrix",
            "collectionArtistId": 199257486,
            "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/warner-bros.-entertainment/id199257486?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/movie/the-matrix/id271469518?uo=4",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-matrix/id271469518?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=m8e-FF8MsqU",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Video/v4/8c/04/07/8c0407cb-c004-3d20-bf2d-c0fc9f8a44ca/mza_8289062276287852134.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Video/v4/8c/04/07/8c0407cb-c004-3d20-bf2d-c0fc9f8a44ca/mza_8289062276287852134.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Video/v4/8c/04/07/8c0407cb-c004-3d20-bf2d-c0fc9f8a44ca/mza_8289062276287852134.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 2.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "1999-03-31T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 4,
            "trackNumber": 1,
            "trackTimeMillis": 8178720,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Sci-Fi & Fantasy",
            "contentAdvisoryRating": "R",
            "longDescription": "Breaking box office records as the biggest Easter opening ever, this special effects-driven tale follows Keanu Reeves (\"Speed,\" \"Devil's Advocate\") and Oscar, Golden Globe and Emmy-nominee Laurence Fishburne (\"What's Love Got to Do with It?\") on an explosive futuristic sci-fi adventure about a man who comes to believe that his everyday world is the product of a complex computer-driven digital matrix that feeds on humans. In his dangerous quest to find out the truth, he must figure out who is real and who he can trust. From the producer of the top boxoffice franchise, \"Lethal Weapon.\"",
            "radioStationUrl": "https://itunes.apple.com/station/idra.271469518"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "collectionId": 426284587,
            "trackId": 283218560,
            "artistName": "Andy Wachowski",
            "collectionName": "Matrix Collection",
            "trackName": "The Matrix Reloaded",
            "collectionCensoredName": "Matrix Collection",
            "trackCensoredName": "The Matrix Reloaded",
            "collectionArtistId": 199257486,
            "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/warner-bros.-entertainment/id199257486?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/movie/the-matrix-reloaded/id283218560?uo=4",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-matrix-reloaded/id283218560?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=m8e-FF8MsqU",
            "artworkUrl30": "http://is2.mzstatic.com/image/thumb/Features/13/57/25/dj.whlmbvea.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Features/13/57/25/dj.whlmbvea.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Features/13/57/25/dj.whlmbvea.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 2.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "2003-05-22T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 3,
            "trackNumber": 2,
            "trackTimeMillis": 8294752,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Action & Adventure",
            "contentAdvisoryRating": "R",
            "longDescription": "Neo, Morpheus, Trinity and the evil Agent Smith are back, and the battle for the human race continues! Written and directed by the acclaimed Wachowski brothers and from action producer Joel Silver (\"Swordfish,\" the \"Lethal Weapon\" and \"Die Hard\" series), this is the highly anticipated sequel to the runaway box-office smash hit ($171+ million) and record-selling DVD \"The Matrix.\" Starring Keanu Reeves (\"Hard Ball,\" \"The Devil's Advocate\"), Oscar-nominated Laurence Fishburne (\"Biker Boyz,\" \"What's Love Got to Do With It\"), Carrie-Anne Moss (\"Chocolat,\" \"Memento\"), Hugo Weaving (\"The Lord of the Rings 1 & 2\"), Jada Pinkett Smith (\"Ali,\" \"Scream 2\"), Monica Bellucci (\"Tears of the Sun,\" \"Malena\") and Nona M. Gaye (\"Ali\").",
            "radioStationUrl": "https://itunes.apple.com/station/idra.283218560"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "collectionId": 426284587,
            "trackId": 271469065,
            "artistName": "Andy Wachowski",
            "collectionName": "Matrix Collection",
            "trackName": "The Matrix Revolutions",
            "collectionCensoredName": "Matrix Collection",
            "trackCensoredName": "The Matrix Revolutions",
            "collectionArtistId": 199257486,
            "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/warner-bros.-entertainment/id199257486?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/movie/the-matrix-revolutions/id271469065?uo=4",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-matrix-revolutions/id271469065?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=psNlHckYlVs",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music/91/8b/f5/mzi.hdgwndzg.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Music/91/8b/f5/mzi.hdgwndzg.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music/91/8b/f5/mzi.hdgwndzg.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 2.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "2003-11-05T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 3,
            "trackNumber": 3,
            "trackTimeMillis": 7758017,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Sci-Fi & Fantasy",
            "contentAdvisoryRating": "R",
            "shortDescription": "Provocative Futuristic Action Thriller. The Matrix Revolutions marks the final explosive chapter in",
            "longDescription": "Everything that has a beginning has an end.\r\n\r\nIn this explosive final chapter of the Matrix trilogy, Neo, Morpheus and Trinity battle to defend Zion, the last real-world city, against the onslaught of the machines that have enslaved the human race. And, now as Neo learns more about his heroic powers--including the ability to see the codes of things and the people, he faces the consequences of the choice made in The Matrix Reloaded.",
            "radioStationUrl": "https://itunes.apple.com/station/idra.271469065"
        }

    ];

    var watchlist = [
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 272967721,
            "artistName": "Roland Emmerich",
            "trackName": "Independence Day",
            "trackCensoredName": "Independence Day",
            "trackViewUrl": "https://itunes.apple.com/us/movie/independence-day/id272967721?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=d-S9nKByu5w",
            "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Video/a7/d5/47/mzl.peotbedu.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Video/a7/d5/47/mzl.peotbedu.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is2.mzstatic.com/image/thumb/Video/a7/d5/47/mzl.peotbedu.jpg/500x500bb-85.jpg",
            "collectionPrice": 14.99,
            "trackPrice": 14.99,
            "trackRentalPrice": 2.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "1996-08-09T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 8692025,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Sci-Fi & Fantasy",
            "contentAdvisoryRating": "PG-13",
            "longDescription": "Celebrate 75 Years of Independence with 20th Century Fox! On July 2nd, communications systems worldwide are sent into chaos by a strange atmospheric interference. First thought to be meteors, they are later revealed to be gigantic spacecraft, piloted by a mysterious alien species who have set out to launch an attack throughout the globe. On July 3rd, the aliens all but obliterate New York, Los Angeles, and Washington when a band of survivors devise a plan to fight back against the enslaving aliens. On July 4th, humanity fights for its freedom.",
            "radioStationUrl": "https://itunes.apple.com/station/idra.272967721"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 957056432,
            "artistName": "Matthew Vaughn",
            "trackName": "Kingsman: The Secret Service",
            "trackCensoredName": "Kingsman: The Secret Service",
            "trackViewUrl": "https://itunes.apple.com/us/movie/kingsman-the-secret-service/id957056432?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=I1CI3e4w9CI",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Video3/v4/f7/5b/b2/f75bb2dd-f38b-edf6-c726-6c5d31b6a29f/pr_source.lsr/30x30bb-85.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Video3/v4/f7/5b/b2/f75bb2dd-f38b-edf6-c726-6c5d31b6a29f/pr_source.lsr/60x60bb-85.jpg",
            "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Video3/v4/f7/5b/b2/f75bb2dd-f38b-edf6-c726-6c5d31b6a29f/pr_source.lsr/500x500bb-85.jpg",
            "collectionPrice": 14.99,
            "trackPrice": 14.99,
            "trackRentalPrice": 4.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 5.99,
            "releaseDate": "2015-02-13T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 7749040,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Action & Adventure",
            "contentAdvisoryRating": "R",
            "shortDescription": "A super-secret organization recruits an unrefined but promising street kid into the agency's ultra-",
            "longDescription": "A super-secret organization recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a dire global threat emerges from a twisted tech genius. A phenomenal cast, including Colin Firth, Samuel L. Jackson and Michael Caine, lead this action-packed spy-thriller directed by Matthew Vaughn (X-Men: First Class).",
            "radioStationUrl": "https://itunes.apple.com/station/idra.957056432"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 805178535,
            "artistName": "Phil Lord & Christopher Miller",
            "trackName": "The LEGO Movie",
            "trackCensoredName": "The LEGO Movie",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-lego-movie/id805178535?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=fZ_JOBCLF-I",
            "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Video/v4/ed/99/d2/ed99d2d2-b008-9a4c-d3e9-bb32542d79ea/mza_2121069215807290323.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Video/v4/ed/99/d2/ed99d2d2-b008-9a4c-d3e9-bb32542d79ea/mza_2121069215807290323.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Video/v4/ed/99/d2/ed99d2d2-b008-9a4c-d3e9-bb32542d79ea/mza_2121069215807290323.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "collectionHdPrice": 17.99,
            "trackHdPrice": 17.99,
            "releaseDate": "2014-02-07T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 6033285,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Kids & Family",
            "contentAdvisoryRating": "PG",
            "shortDescription": "The first-ever full-length theatrical LEGO movie follows Emmet, an ordinary, rules-following,",
            "longDescription": "The first-ever full-length theatrical LEGO movie follows Emmet, an ordinary, rules-following, perfectly average LEGO mini figure who is mistakenly identified as the most extraordinary person and the key to saving the world. He is drafted into a fellowship of strangers on an epic quest to stop an evil tyrant, a journey for which Emmet is hopelessly and hilariously underprepared.",
            "radioStationUrl": "https://itunes.apple.com/station/idra.805178535"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "trackId": 320384447,
            "artistName": "Victor Fleming",
            "trackName": "The Wizard of Oz",
            "trackCensoredName": "The Wizard of Oz",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-wizard-of-oz/id320384447?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=vkZcYMy85lY",
            "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Video6/v4/ff/db/f4/ffdbf41e-f221-edf5-22d0-0a2143b23601/mza_6155924764157454088.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Video6/v4/ff/db/f4/ffdbf41e-f221-edf5-22d0-0a2143b23601/mza_6155924764157454088.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Video6/v4/ff/db/f4/ffdbf41e-f221-edf5-22d0-0a2143b23601/mza_6155924764157454088.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 2.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "1939-04-23T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "trackTimeMillis": 6105375,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Musicals",
            "contentAdvisoryRating": "G",
            "longDescription": "\"There's no place like home...\" Entirely remastered, the colorful characters and unforgettable songs of Oz come alive as never before. This magical cinematic event finds Kansas farm girl Judy Garland (\"A Star is Born,\" \"Meet Me in St. Louis\") caught in a tornado and magically transported to the Land of Oz. Needing help to return home, she is told to follow the Yellow Brick Road and find the powerful Wizard (Frank Morgan). On her perilous journey, she is befriended by the Scarecrow (Ray Bolger), the Tin Man (Jack Haley), and the Cowardly Lion (Bert Lahr) who help her battle the Wicked Witch of the West (Margaret Hamilton) and her flying monkeys. Based on the classic book by Frank L. Baum, \"The Wizard of Oz\" is a dazzling motion picture achievement, featuring unforgettable songs (including Oscar-winner \"Over the Rainbow\"), scenery, and costumes. The film had 5 Academy Award nominations, and Garland was awarded a special Oscar for her outstanding performance.",
            "radioStationUrl": "https://itunes.apple.com/station/idra.320384447"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "collectionId": 343647202,
            "trackId": 271469518,
            "artistName": "Larry Wachowski & Andy Wachowski",
            "collectionName": "4 Film Favorites: The Matrix / V for Vendetta / Constantine / Blade",
            "trackName": "The Matrix",
            "collectionCensoredName": "4 Film Favorites: The Matrix / V for Vendetta / Constantine / Blade",
            "trackCensoredName": "The Matrix",
            "collectionArtistId": 199257486,
            "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/warner-bros.-entertainment/id199257486?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/movie/the-matrix/id271469518?uo=4",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-matrix/id271469518?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=m8e-FF8MsqU",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Video/v4/8c/04/07/8c0407cb-c004-3d20-bf2d-c0fc9f8a44ca/mza_8289062276287852134.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Video/v4/8c/04/07/8c0407cb-c004-3d20-bf2d-c0fc9f8a44ca/mza_8289062276287852134.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Video/v4/8c/04/07/8c0407cb-c004-3d20-bf2d-c0fc9f8a44ca/mza_8289062276287852134.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 2.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "1999-03-31T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 4,
            "trackNumber": 1,
            "trackTimeMillis": 8178720,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Sci-Fi & Fantasy",
            "contentAdvisoryRating": "R",
            "longDescription": "Breaking box office records as the biggest Easter opening ever, this special effects-driven tale follows Keanu Reeves (\"Speed,\" \"Devil's Advocate\") and Oscar, Golden Globe and Emmy-nominee Laurence Fishburne (\"What's Love Got to Do with It?\") on an explosive futuristic sci-fi adventure about a man who comes to believe that his everyday world is the product of a complex computer-driven digital matrix that feeds on humans. In his dangerous quest to find out the truth, he must figure out who is real and who he can trust. From the producer of the top boxoffice franchise, \"Lethal Weapon.\"",
            "radioStationUrl": "https://itunes.apple.com/station/idra.271469518"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "collectionId": 426284587,
            "trackId": 283218560,
            "artistName": "Andy Wachowski",
            "collectionName": "Matrix Collection",
            "trackName": "The Matrix Reloaded",
            "collectionCensoredName": "Matrix Collection",
            "trackCensoredName": "The Matrix Reloaded",
            "collectionArtistId": 199257486,
            "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/warner-bros.-entertainment/id199257486?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/movie/the-matrix-reloaded/id283218560?uo=4",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-matrix-reloaded/id283218560?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=m8e-FF8MsqU",
            "artworkUrl30": "http://is2.mzstatic.com/image/thumb/Features/13/57/25/dj.whlmbvea.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Features/13/57/25/dj.whlmbvea.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Features/13/57/25/dj.whlmbvea.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 2.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "2003-05-22T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 3,
            "trackNumber": 2,
            "trackTimeMillis": 8294752,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Action & Adventure",
            "contentAdvisoryRating": "R",
            "longDescription": "Neo, Morpheus, Trinity and the evil Agent Smith are back, and the battle for the human race continues! Written and directed by the acclaimed Wachowski brothers and from action producer Joel Silver (\"Swordfish,\" the \"Lethal Weapon\" and \"Die Hard\" series), this is the highly anticipated sequel to the runaway box-office smash hit ($171+ million) and record-selling DVD \"The Matrix.\" Starring Keanu Reeves (\"Hard Ball,\" \"The Devil's Advocate\"), Oscar-nominated Laurence Fishburne (\"Biker Boyz,\" \"What's Love Got to Do With It\"), Carrie-Anne Moss (\"Chocolat,\" \"Memento\"), Hugo Weaving (\"The Lord of the Rings 1 & 2\"), Jada Pinkett Smith (\"Ali,\" \"Scream 2\"), Monica Bellucci (\"Tears of the Sun,\" \"Malena\") and Nona M. Gaye (\"Ali\").",
            "radioStationUrl": "https://itunes.apple.com/station/idra.283218560"
        },
        {
            "wrapperType": "track",
            "kind": "feature-movie",
            "collectionId": 426284587,
            "trackId": 271469065,
            "artistName": "Andy Wachowski",
            "collectionName": "Matrix Collection",
            "trackName": "The Matrix Revolutions",
            "collectionCensoredName": "Matrix Collection",
            "trackCensoredName": "The Matrix Revolutions",
            "collectionArtistId": 199257486,
            "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/warner-bros.-entertainment/id199257486?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/movie/the-matrix-revolutions/id271469065?uo=4",
            "trackViewUrl": "https://itunes.apple.com/us/movie/the-matrix-revolutions/id271469065?uo=4",
            "previewUrl": "https://www.youtube.com/watch?v=psNlHckYlVs",
            "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music/91/8b/f5/mzi.hdgwndzg.jpg/30x30bb-85.jpg",
            "artworkUrl60": "http://is3.mzstatic.com/image/thumb/Music/91/8b/f5/mzi.hdgwndzg.jpg/60x60bb-85.jpg",
            "artworkUrl100": "http://is3.mzstatic.com/image/thumb/Music/91/8b/f5/mzi.hdgwndzg.jpg/500x500bb-85.jpg",
            "collectionPrice": 9.99,
            "trackPrice": 9.99,
            "trackRentalPrice": 2.99,
            "collectionHdPrice": 14.99,
            "trackHdPrice": 14.99,
            "trackHdRentalPrice": 3.99,
            "releaseDate": "2003-11-05T08:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 3,
            "trackNumber": 3,
            "trackTimeMillis": 7758017,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Sci-Fi & Fantasy",
            "contentAdvisoryRating": "R",
            "shortDescription": "Provocative Futuristic Action Thriller. The Matrix Revolutions marks the final explosive chapter in",
            "longDescription": "Everything that has a beginning has an end.\r\n\r\nIn this explosive final chapter of the Matrix trilogy, Neo, Morpheus and Trinity battle to defend Zion, the last real-world city, against the onslaught of the machines that have enslaved the human race. And, now as Neo learns more about his heroic powers--including the ability to see the codes of things and the people, he faces the consequences of the choice made in The Matrix Reloaded.",
            "radioStationUrl": "https://itunes.apple.com/station/idra.271469065"
        }    ];
    $scope.featured = featured;

    $scope.watchlist = watchlist;

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            }]
    };

    $scope.slickWatchlistConfig = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            }]
    }
})
