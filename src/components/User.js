import axios from 'axios';

const User = async () => {
    const res = await axios.get('https://randomuser.me/api'); // an array with a single user
    const user = res.data.results[0]; // returns data with results array from which we will take the first element

    const template = `
        <div class="card">
            <img src="${user.picture.large}" />
            <div class="card-body">
                <h1>${user.name.first} ${user.name.last}</h1>
                <ul>
                    <li>${user.email}</li>
                    <li>${user.phone}</li>
                    <li>${user.location.city}</li>
                </ul>
            </div>
        </div>
  `;

    return template;
}

export default User;