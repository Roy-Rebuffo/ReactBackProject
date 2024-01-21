const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Simpson = require('./api/models/simpsons.model');

const arraySimpsons = [
  {
    _id: '643d02d95312d923d81dc9e5',
    nombre: 'Homer',
    apellido: 'Simpson',
    edad: 35,
    foto: 'https://s3.ppllstatics.com/elcorreo/www/pre2017/multimedia/vizcaya/prensa/noticias/201211/06/fotos/13033623.jpg',
  },
  {
    _id: '643d03115312d923d81dc9e7',
    nombre: 'Marge',
    apellido: 'Simpson',
    edad: 35,
    foto: 'https://i.discogs.com/WI38UGun7TKKNg04MTHK0yV-I1Yb75sdJ_t0GEermmo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MzAtMTMzNTcyMDM5/MC5wbmc.jpeg',
  },
  {
    _id: '643d033b5312d923d81dc9e9',
    nombre: 'Bart',
    apellido: 'Simpson',
    edad: 10,
    foto: 'https://i.discogs.com/cQr7aDIN9DWT15KiDOXURBNo65Xrajt3HaOrLhcaOw0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwMTA4/MjMtMTMzNTcyODAx/Ni5wbmc.jpeg',
  },
  {
    _id: '643d03665312d923d81dc9eb',
    nombre: 'Lisa',
    apellido: 'Simpson',
    edad: 8,
    foto: 'https://i.pinimg.com/736x/73/48/9c/73489c480d5636ce352ea00c12369fd3.jpg',
  },
  {
    _id: '643d03865312d923d81dc9ed',
    nombre: 'Maggie',
    apellido: 'Simpson',
    edad: 2,
    foto: 'https://i.discogs.com/WvzPdBWsHiLniuVPTKbNlcAy9F2j4YF0_jyl_19u6nM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MjktMTQyMzQxNDg4/NC02Nzc5LmpwZWc.jpeg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allSimpsons = await Simpson.find();
    if (allSimpsons.length > 0) {
      await Simpson.collection.drop();
      console.log('Simpsons borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los simpsons', err);
  })
  .then(async () => {
    const simpsonsMap = arraySimpsons.map((simpson) => new Simpson(simpson));
    await Simpson.insertMany(simpsonsMap);
    console.log('simpsons insertados');
  })
  .catch((err) => {
    console.log('error insertando los simpsons', err);
  })
  .finally(() => mongoose.disconnect());
