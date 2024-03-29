import Areas from "../entities/areas.js"
import Categorias from "../entities/categorias.js";
import Equipos from "../entities/equipo.js";
import Insidencias from "../entities/insidencias.js";
import Lugares from "../entities/lugares.js";
import Tipo_equipo from "../entities/tipo_equipo.js";
import Tipos from "../entities/tipos.js";
import Trainers from "../entities/trainer.js";

//Crud Areas
const postAreaService = async (nombre) => {
    const area = new Areas();
    const result = await area.postArea(nombre);
    return result
};

//Crud categorias
const postCategoriaService = async (nombre) => {
    const categoria = new Categorias();
    const result = await categoria.postCategoria(nombre);
    return result
};

//Crud equipos
const postEquipoService = async (id, tipo, lugar) => {
    const euipo = new Equipos();
    const result = await euipo.postEquipo(id, tipo, lugar);
    return result
};

//Crud insidencias
const postInsidenciaService = async (categoriaId, tipoId, descripciom, fecha, trainerId, equipoId) => {
    const insidencia = new Insidencias();
    const result = await insidencia.postInsidencia(categoriaId, tipoId, descripciom, fecha, trainerId, equipoId);
    return result
};

//Crud lugares
const postLugarService = async (area, nombre) => {
    const lugar = new Lugares();
    const result = await lugar.postLugar(area,nombre);
    return result
}

//Crud tipo_equipo
const postTipo_equipoService = async (nombre) => {
    const tipoEquipo = new Tipo_equipo();
    const result = await tipoEquipo.postTipo_equipo(nombre);
    return result
};

//Crud tipos
const postTipoService = async (nombre) => {
    const tipo = new Tipos();
    const result = await tipo.postTipo(nombre);
    return result
};

//Crud trainer
const postTrainerService = async (id, nombre, emailPers, emailCorp, telfMov, telfRes, telfEmp, telfMovEmp) => {
    const trainer = new Trainers();
    const result = await trainer.postTrainer(id, nombre, emailPers, emailCorp, telfMov, telfRes, telfEmp, telfMovEmp);
    return result
};

export {
    postAreaService,
    postCategoriaService,
    postEquipoService,
    postInsidenciaService,
    postLugarService,
    postTipo_equipoService,
    postTipoService,
    postTrainerService
}