document.getElementById('startQuestionnaire').addEventListener('click', function () {
    document.getElementById('home').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'block';
    showPage(1);
});

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.question-page');
    pages.forEach((page, index) => {
        page.style.display = (index + 1 === pageNumber) ? 'block' : 'none';
    });
}

let currentPage = 1;

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('next-page')) {
        if (!validateSelection()) {
            displayErrorMessage();
            return;
        } else {
            clearErrorMessage();
        }

        currentPage++;
        if (currentPage > 3) {
            generatePlaylist();
            return;
        }
        showPage(currentPage);
    }
});

function validateSelection() {
    const currentPageElement = document.querySelector(`.question-page:nth-of-type(${currentPage})`);
    const selectedOption = currentPageElement.querySelector('input[type="radio"]:checked');
    return selectedOption !== null; // Return true if an option is selected, false otherwise
}

function displayErrorMessage() {
    const errorContainer = document.getElementById('errorContainer');
    if (!errorContainer) {
        const errorDiv = document.createElement('div');
        errorDiv.id = 'errorContainer';
        errorDiv.style.color = 'red';
        errorDiv.style.marginTop = '1rem';
        errorDiv.textContent = 'Please select an option before proceeding.';
        document.querySelector(`.question-page:nth-of-type(${currentPage})`).appendChild(errorDiv);
    }
}

function clearErrorMessage() {
    const errorContainer = document.getElementById('errorContainer');
    if (errorContainer) {
        errorContainer.remove();
    }
}

function generatePlaylist() {
    const mood = document.querySelector('input[name="mood"]:checked').value;
    const purpose = document.querySelector('input[name="purpose"]:checked').value;
    const genre = document.querySelector('input[name="genre"]:checked').value;

    const playlists = {
        'happy': {
            'mood improvement': {
                'pop': '2ZafXTvOzwKLVgRgS1Tr4j?si=db0f0e58aa594b73&pt=abf873fd21da6e195e7a0c1d10a6bde9',
                'jazz/classic': '6dJePIpTHA8WzH8AeDuZ7z?si=f6b4ed5bec444f6f&pt=9986db6bdaa49218341f65abbcf4bb08',
                'rock/alternative': '3tPJbNAYBdkYenMjYKxWAC?si=5577577fac834063&pt=34b4ab05b48ccb6635f087bda9d7323f',
                'ambient': '5J2I1CzDcGsUjQEEe8dj38?si=d6f0a81e904f46c3&pt=991346bfbafcd8ffaa1da2bc6117188f',
            },
            'emotional management': {
                'pop': '6JGXytMxFWETCOGtk4Dmby?si=b22a34dbed0146d2&pt=19fa1b63929d86967bcec2a0b36412d8',
                'jazz/classic': '0z3Q8wPYJnsPAe3MOx13Ds?si=298b22605e71410c&pt=f476e498fc5d2eb7f8e9455d91e8c2b0',
                'rock/alternative': '7l6J7H5glfwaKEnZsCBFDt?si=2a74f5f148734e69&pt=11acb9b63a9ee82fdfba80148452ba71',
                'ambient': '3r10igXsNdyygLH1bDPCFC?si=9a1b01e6cfe64c68&pt=dd740b1e600e1060442440f0a45edc07',
            },
            'relaxation and reduce stress': {
                'pop': '7GwyrttEfb4mUEDSyzqjA0?si=58d4454af789466d&pt=f87b3eb6c78f3c3b09e1d084b0488078',
                'jazz/classic': '3G0wPUUa8Vv49QbWo2dh9A?si=9887f3365f354316&pt=25297d2d108a12e96ccf50d9c6a4283b',
                'rock/alternative': '71McjmXIx2zGcX8jXV8f9Y?si=91749758ca274e59&pt=b73bae41ebf4320f5ce68bcd63ce77ed',
                'ambient': '5ybnF1Q6eVkYri3QGV8gJF?si=ed75864fd1d84714&pt=e90d246c2ca560a5938b631bc2232f42',
            },
        },
        'sad': {
            'mood improvement': {
                'pop': '3gNF9nXEVJhTJ6evINZNaI?si=d177595ab31649e6&pt=78da0afca3ffb5d74d9fa3a88ec29fa8',
                'jazz/classic': '1m4SyNor1wlvC2AS1reItC?si=7d0d06ba62414633&pt=6f199ef27644a3d82dd04ed4cb9fd1f4',
                'rock/alternative': '5HO3d50RLbo0lxFDoz75wP?si=f04ca378fe1f4c01&pt=d1aaac750394f728d30127eb17fd1fc7',
                'ambient': '7uC5CtwcOg4pa9cCM0bkuQ?si=88f6ee09454c4752&pt=27180b45b978ccb248be5a4fbd8eae9d',
            },
            'emotional management': {
                'pop': '1GS236NivNRb2xlLCaZPqy?si=4f57c404acbc4b1f&pt=79e9af4e1b695c5f267370e52015391d',
                'jazz/classic': '7BPd0ZUzJod5brbdAxUTQB?si=d79d3363cc384ebe&pt=1eecf5966a686a6205166affcaddf8fb',
                'rock/alternative': '3hLJO5bOLrp1zqo09NxeQX?si=f11ad0eb823f40fd&pt=9f7fce54278793d170f3532c56c52610',
                'ambient': '3X16ktGoHhnua3ugLvxXdv?si=d4fe0b76b6f34e66&pt=52d31dde8970accf96fca2b06ef4c6e2',
            },
            'relaxation and reduce stress': {
                'pop': '0l090tcKmqBKtUdoMMMVOw?si=20a28a93043b4ad4&pt=f3ff1617586a280c2941b854949e4303',
                'jazz/classic': '2ET896Iz0nbgeDNG079MRC?si=6903adecd07a4588&pt=dc683bcea4ca9b17bebca5dcf6f37267',
                'rock/alternative': '4hIkuMveOZI6DYLANfBW5R?si=69f205c51a50479f&pt=a1611ed0a52d4b56546c3653addf3896',
                'ambient': '57kVNss5Qtf4QHD5LYcE5F?si=fe407145d96045bc&pt=aa2e78b46d27cd0cf02c38434a7b2de0',
            },
        },
        'angry': {
            'mood improvement': {
                'pop': '6L8om6lVXfx7c3jQaNzSnZ?si=b85f6d04be4942ce&pt=e50ddda06f9890e7b92b2d8941d4a0d0',
                'jazz/classic': '20nU4ZME9XZ3A7vmR2GfWN?si=13476834afcf4840&pt=54c58fdb6bb02151ec524a172abdbfd0',
                'rock/alternative': '2mnIxFvwfhCrADxcD4kMiF?si=e422bdd2d9f94f2f',
                'ambient': '34NThBVoPjuakjm9ptRJO9?si=00cc93954ccd4410&pt=501fa7f5ac4d21f62e98cfbae9a55051',
            },
            'emotional management': {
                'pop': '4TpvqGMGkp4XlwTKTAif3P?si=fa07b49cc9d74aa0',
                'jazz/classic': '1eAgwPRflFix2dbdLn4qLt?si=8387450078f64784&pt=faf0ff85463baa26ee75d455a4dbe02d',
                'rock/alternative': '6rZ5k3745WySynUnCMY3SN?si=ce571141e8904c24&pt=da84d788fa6b2bded99f5a8babfd74db',
                'ambient': '7zK5atylVf8Ob4VPsEV5GV?si=9c08f12da2eb41e8&pt=f26912974999844272e68541fa90e3d5',
            },
            'relaxation and reduce stress': {
                'pop': '0ntl2TylxjP7Gu4bm1QYLU?si=c29a8237768442b8&pt=f19cae2794c060b6c8503e78a0829188',
                'jazz/classic': '1PzjrzZq4m9hyAAOKd274W?si=c6d0aaddc3264454&pt=2b4565c70355cc7ebe814e2fb1aad78f',
                'rock/alternative': '6OGK2geaXoNiiuEK5lSH5X?si=602c9a809d5b44f4&pt=01f21a8e5bca38384624eb91eb22cf21relaxation_rock_alternative_playlist_id',
                'ambient': '6JNDm1XbrxnlJlUm1zgW8a?si=3dc8b3dd48294fc1&pt=75ae1b0eff4ac1d0d4222d93f12a3602',
            },
        },
    };

    const playlistId = playlists[mood][purpose][genre];
    const playlistEmbed = `<iframe src="https://open.spotify.com/embed/playlist/${playlistId}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;

    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('playlist').style.display = 'block';
    document.getElementById('playlistContainer').innerHTML = playlistEmbed;
}
