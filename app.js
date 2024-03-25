import data from "./data.js";

const template = document.querySelector(".job__template");

const divi = document.querySelector(".list");

data.forEach((job) => {
  const {
    company,
    location,
    position,
    postedAt,
    logo,
    contract,
    languages,
    level,
    role,
    tools,
  } = job;
  const div = template.content.cloneNode(true);

  const image = div.querySelector(".chel__img-1");
  image.src = logo;

  const com = div.querySelector(".chel__name-button-t");
  com.textContent = company;

  const loc = div.querySelector(".chel__location");
  loc.textContent = location;

  const pos = div.querySelector(".chel__position");
  pos.textContent = position;

  const post = div.querySelector(".chel__posted");
  post.textContent = postedAt;

  const con = div.querySelector(".chel__contract");
  con.textContent = contract;

  const lan = div.querySelector(".chel__languages");
  lan.textContent = languages;

  const lev = div.querySelector(".chel__level");
  lev.textContent = level;

  const rol = div.querySelector(".chel__role");
  rol.textContent = role;

  const tol = div.querySelector(".chel__tool");
  tol.textContent = tools;
  divi.appendChild(div);
});
