
import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function getGitHub(name){
  axios.get(`https://api.github.com/users/${name}`)
.then(res=> {
  document.querySelector('.cards').appendChild(cardMaker(res.data))
})
.catch(err => console.log(err))
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'albertbrannan4',
  "RuiWang9898",
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  "FftyShadesofCode",
  "nyamekyeannor",
  
];
followersArray.forEach(each=>{
  getGitHub(each)
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function cardMaker({avatar_url,name,login,location,url,followers,following,bio}){

  const card = document.createElement('div');
  const imgOfUser = document.createElement('img');
  const cardInfo = document.createElement('div');
  const UsersH3 = document.createElement('h3');
  const usrname = document.createElement('p');
  const usrlocation = document.createElement('p');
  const profileLinkWrapper = document.createElement('p');
  const profileLink = document.createElement('a');
  const usrfollowers = document.createElement('p');
  const usrfollowing = document.createElement('p');
  const  userBio = document.createElement('p');


  card.appendChild(imgOfUser);
  card.appendChild(cardInfo);
  cardInfo.appendChild(UsersH3);
  cardInfo.appendChild(usrname);
  cardInfo.appendChild(usrlocation);
  cardInfo.appendChild(profileLinkWrapper);
  profileLinkWrapper.appendChild(profileLink);
  cardInfo.appendChild(usrfollowers);
  cardInfo.appendChild(usrfollowing);
  cardInfo.appendChild(userBio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  UsersH3.classList.add('name');
  usrname.classList.add('username');

  imgOfUser.src = avatar_url;
  UsersH3.textContent = name;
  usrname.textContent = login;
  usrlocation.textContent = location;
  profileLink.href = url;
  usrfollowers.textContent = followers;
  usrfollowing.textContent = following;
  userBio.textContent = bio;


  return card;
}

