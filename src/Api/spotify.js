export const authEndpoint = "https://accounts.spotify.com/authorize";

const client_id = "eb4f9219ef0a4137abcd8cc2cf2f07fe";
const client_secret ="90a249400fd3414689d906b8b808451e";
const redirect_uri  ="http://localhost:3000/";

const scopes ="user-top-read";


export const loginUrl=`${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) =>{
        var parts = item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    }, {});
}