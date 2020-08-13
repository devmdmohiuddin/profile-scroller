const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
        name: 'Smith Chai',
        age: 38,
        gender: 'female',
        lookingfor: 'male',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/women/75.jpg',
    },
    {
        name: 'Prince',
        age: 30,
        gender: 'male',
        lookingfor: 'male',
        location: 'America',
        image: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
];

const profiles = profileIterator(data);

// first call next profile
nextProfile()

//next event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preferences: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>`;

        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preferences: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>`;

        document.getElementById(
            'imageDisplay'
        ).innerHTML = `<img src=${currentProfile.image}>`;
    } else {
        window.location.reload()
    }
}

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length
                ? { value: profiles[nextIndex++], done: false }
                : { done: true };
        },
    };
}

// function* profileIterator() {
//     yield {
//         name: 'John Doe',
//         age: 32,
//         gender: 'male',
//         lookingfor: 'female',
//         location: 'Boston MA',
//         image: 'https://randomuser.me/api/portraits/men/75.jpg',
//     }
//     yield {
//         name: 'Smith Chai',
//         age: 38,
//         gender: 'female',
//         lookingfor: 'male',
//         location: 'New York',
//         image: 'https://randomuser.me/api/portraits/women/75.jpg',
//     }
//     yield {
//         name: 'Prince',
//         age: 30,
//         gender: 'male',
//         lookingfor: 'male',
//         location: 'America',
//         image: 'https://randomuser.me/api/portraits/men/10.jpg',
//     }
// }

