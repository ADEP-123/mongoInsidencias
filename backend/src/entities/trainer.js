import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Trainers {
    constructor() { }

    async getAllTrainers() {
        let session;
        try {
            session = await startTransaction();
            const trainerCollection = await collectionGen("trainer");
            const result = trainerCollection.aggregate([
                {
                    $project: {
                        id: "$train_id",
                        nombre: "$train_nombre",
                        emailPers: "$email_personal",
                        emailCorp: "$email_corporativo",
                        telfMov: "$telefono_movil",
                        telfRes: "$telefono_residencia",
                        telfEmp: "$telefono_empresa",
                        telfMovEmp: "$telefono_movil_empresarial",
                        _id: 0
                    }
                }
            ]).toArray();
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async getTrainerById(id) {
        let session;
        try {
            session = await startTransaction();
            const trainerCollection = await collectionGen("trainer");
            const result = trainerCollection.aggregate([
                {
                    $project: {
                        id: "$train_id",
                        nombre: "$train_nombre",
                        emailPers: "$email_personal",
                        emailCorp: "$email_corporativo",
                        telfMov: "$telefono_movil",
                        telfRes: "$telefono_residencia",
                        telfEmp: "$telefono_empresa",
                        telfMovEmp: "$telefono_movil_empresarial",
                        _id: 0
                    }
                },
                {
                    $match: { id: id }
                }
            ]).toArray();
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async postTrainer(id, nombre, emailPers, emailCorp, telfMov, telfRes, telfEmp, telfMovEmp) {
        let session;
        try {
            session = await startTransaction();
            const trainerCollection = await collectionGen("trainer");
            const result = trainerCollection.insertOne(
                {
                    train_id: id,
                    train_nombre: nombre,
                    email_personal: emailPers,
                    email_corporativo: emailCorp,
                    telefono_movil: telfMov,
                    telefono_residencia: telfRes,
                    telefono_empresa: telfEmp,
                    telefono_movil_empresarial: telfMovEmp
                }
            );
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async putTrainer(id, nombre, emailPers, emailCorp, telfMov, telfRes, telfEmp, telfMovEmp) {
        let session;
        try {
            session = await startTransaction();
            const trainerCollection = await collectionGen("trainer");
            const result = trainerCollection.updateOne(
                {
                    train_id: id,
                },
                {
                    $set: {
                        train_nombre: nombre,
                        email_personal: emailPers,
                        email_corporativo: emailCorp,
                        telefono_movil: telfMov,
                        telefono_residencia: telfRes,
                        telefono_empresa: telfEmp,
                        telefono_movil_empresarial: telfMovEmp
                    }
                }
            );
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async deleteTrainer(id) {
        let session;
        try {
            session = await startTransaction();
            const trainerCollection = await collectionGen("trainer");
            const result = trainerCollection.deleteOne(
                {
                    train_id: id
                }
            );
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

}
export default Trainers;