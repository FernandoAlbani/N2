class TarefaRepository {

    constructor() {
        this.db = firebase.firestore();
    }

    create = (tarefa) => {
        return new Promise((resolve, reject) => {
            this.db.collection('tarefas').add(tarefa).then(resultado => {
                resolve(`Tarefa ${resultado.id}, cadastrada com sucesso!`);
            }).catch(error => {
                reject('Não foi possível cadastrar a tarefa.');
            });
        });
    }

    list = () => {
        return new Promise((resolve, reject) => {
            this.db.collection('tarefas').get().then(querySnapshot => {
                const tarefas = querySnapshot.docs.map(doc => doc.data());
                resolve(tarefas);
            }).catch(error => {
                reject('Não foi possível buscar as tarefas.');
            })
        })
    }

    change = (tarefa) => {
        return new Promise((resolve, reject) => {
            this.db.colection('tarefas').update().then()
        }
    }

}