const {
  Casos,
  Usuario,
  Provincias,
  Materias,
  Abogado,
  Persona,
  Consulta,
  Op,
} = require("../db");

async function getUsuarios(req, res) {
  try {
    const user = await Usuario.findAll();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
}
async function getProvincias(req, res) {
  try {
    let vec = [
      "Buenos Aires",
      "Capital Federal",
      "Catamarca",
      "Chaco",
      "Chubut",
      "Córdoba",
      "Corrientes",
      "Entre Ríos",
      "Formosa",
      "Jujuy",
      "La Pampa",
      "La Rioja",
      "Mendoza",
      "Misiones",
      "Neuquén",
      "Río Negro",
      "Salta",
      "San Juan",
      "San Luis",
      "Santa Cruz",
      "Santa Fe",
      "Santiago del Estero",
      "Tierra del Fuego",
      "Tucumán",
    ];
    let provs = await Provincias.findAll({});
    if (provs.length === 0) {
      for (let i = 0; i < vec.length; i++) {
        await Provincias.findOrCreate({
          where: { nombre: vec[i] },
        });
      }
    }
    res.json(provs);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
}
async function getMaterias(req, res) {
  try {
    let vec = [
      "Derecho Penal",
      "Derecho Civil",
      "Derecho Corporativo",
      "Derecho Comercial",
      "Derecho Familia",
      "Derecho Contencioso",
      "Derecho Administrativo",
      "Derecho Laboral",
      "Derecho Notarial",
    ];
    let materias = await Materias.findAll({});
    console.log(materias.length);
    if (materias.length === 0) {
      for (let i = 0; i < vec.length; i++) {
        await Materias.findOrCreate({
          where: { nombre: vec[i] },
        });
      }
    }
    res.json(materias);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
}
async function usuario(req, res) {
  const { eMail } = req.body;
  try {
    const user = await Usuario.findOne({ where: { eMail } });
    if (user) {
      const abogado = await Abogado.findByPk(user.abogadoId);
      const { firstName, lastName, dni, celular } = await Persona.findByPk(
        user.personaDni
      );
      if (abogado)
        res.send({
          ...{
            eMail: user.eMail,
            password: user.password,
            firstName,
            lastName,
            dni,
            celular,
          },
          abogado,
        });
      else
        res.send({
          ...{
            eMail: user.eMail,
            password: user.password,
            firstName,
            lastName,
            dni,
            celular,
          },
        });
    } else res.sendStatus(404);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
}

function getCasos(req, res) {}

async function getConsultas(req, res, next) {
  const { nombre, apellido } = req.body;

  if (nombre) {
    try {
      const nombresDB = await Consulta.findAll({
        where: {
          nombre: {
            [Op.iLike]: `%${nombre}%`,
          },
        },
      });
      if (nombresDB !== null) {
        res.json(nombresDB);
      } else {
        res.status(404).send({ msg: "no se encuentra persona con ese nombre" });
      }
    } catch (error) {
      next(error);
    }
  }
  if (apellido) {
    try {
      const apellidosDB = await Consulta.findAll({
        where: {
          apellido: {
            [Op.iLike]: `%${apellido}%`,
          },
        },
      });
      if (apellidosDB !== null) {
        res.json(apellidosDB);
      } else {
        res
          .status(404)
          .send({ msg: "no se encuentra persona con ese apellido" });
      }
    } catch (error) {
      console.log(error);
      next({ msg: "error al conseguir la persona por apellido" });
    }
  }

  try {
    const todasConsultas = await Consulta.findAll();
    res.json(todasConsultas);
  } catch (error) {
    next({ msg: "error en traer consultas de la DB" });
  }
}

module.exports = {
  getUsuarios,
  getCasos,
  getProvincias,
  getMaterias,
  usuario,
  getConsultas,
};
