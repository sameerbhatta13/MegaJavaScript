let myJokes=[
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "What is the best prefix for global variables?",
        "delivery": "//",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 32,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 28,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "How do you generate a random string?",
        "delivery": "Put a Windows user in front of Vim and tell them to exit.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 127,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"Knock, knock.\"\n\"Who's there?\"\n\n[very long pause]\n\n\"Java.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 36,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 180,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "How many programmers does it take to screw in a light bulb?",
        "delivery": "None. It's a hardware problem.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 1,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "Why did the functional programmer get thrown out of school?",
        "delivery": "Because he refused to take classes.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 48,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 43,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "What are bits?",
        "delivery": "Tiny things left when you drop your computer down the stairs.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 211,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 23,
        "safe": true,
        "lang": "en"
    }
]
let index=Math.floor(Math.random()*myJokes.length+1)+1
console.log(index)
joke.innerHTML=myJokes[index].joke
console.log(myJokes[5])